import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector, userSelector } from "react-redux";
import { Modal, Input, Button, Form } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const ForgotPasswordModal = ({ history, visible, onClose }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user?.token) history.push("/");
  }, [user]);

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
      handleCodeInApp: true,
    };
    await auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        setEmail("");
        setLoading(false);
        toast.success("Check your email for password reset link");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
        console.log("ERROR MESSAGE IN FORGOT PASSWORD!", error.message);
      });
    onClose();
  };

  return (
    <>
      {loading ? (
        <h1 className="text-danger text-align-center p-5">Loading...</h1>
      ) : (
        <Modal
          open={visible}
          centered
          onCancel={onClose}
          title={<b>Reset Password</b>}
          footer={[
            <Button
              key="send"
              type="primary"
              disabled={!email}
              onClick={handleSendEmail}
            >
              Send Email
            </Button>,
          ]}
          closeIcon={<CloseOutlined />}
        >
          <Form onFinish={handleSendEmail} autoComplete="off">
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input
                type="email"
                placeholder="Type your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
            </Form.Item>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default ForgotPasswordModal;
