import React, { useState } from "react";
import { Modal, Input, Button, Form } from "antd";
import { CloseOutlined } from "@ant-design/icons"; // Uvozimo ikonu "X"

const ForgotPasswordModal = ({ visible, onClose }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendEmail = () => {
    // Ovdje možete dodati logiku za slanje e-pošte za resetiranje lozinke.
    // Nakon što se e-pošta pošalje, možete zatvoriti modal.
    onClose();
  };

  return (
    <Modal
      open={visible}
      centered
      onCancel={onClose}
      title={<b>Reset Password</b>}
      footer={[
        <Button key="send" type="primary" onClick={handleSendEmail}>
          Send Email
        </Button>,
      ]}
      closeIcon={<CloseOutlined />}
    >
      <div>
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
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Item>
      </div>
    </Modal>
  );
};

export default ForgotPasswordModal;
