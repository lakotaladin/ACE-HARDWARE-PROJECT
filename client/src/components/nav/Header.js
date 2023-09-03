import React, { useState } from "react";
import "../nav/Header.css";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const Header = () => {
  const [currnet, setCurrent] = useState("");
  const handleClick = () => {
    // bla bla
  };

  return (
    <>
      <div className="global-header p-0 m-0 bg-success">
        <div className="info-div p-0 m-0 w-100 d-flex">
          <div className="info-one">
            <p className="info-text">
              <b>We Deliver. Get what you need, when you need it.</b>
              <u>
                <a href="#">Learn more</a>
              </u>
            </p>
          </div>
          <div className="info-two">
            <a href="#">Business Accounts</a>
            <a href="#">Customer Service</a>
            <a href="#">Store Locator</a>
          </div>
        </div>
        <Menu onClick={handleClick} selectedKeys={[currnet]} mode="horizontal">
          <Menu.Item key="mail" icon={<MailOutlined />}>
            Home
          </Menu.Item>
          <SubMenu icon={<SettingOutlined />} title="Submenu">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </>
  );
};

export default Header;
