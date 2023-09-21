import React, { useState } from "react";
import { Card } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import defaultImage from "../../resources/default.jpg";

const { Meta } = Card;

const AdminProductCard = ({ product }) => {
  // destructure
  const { title, price, description, images } = product;
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      cover={
        <img
          src={
            hovered
              ? images && images.length
                ? images[1].url
                : ""
              : images && images.length
              ? images[0].url
              : defaultImage
          }
          style={{
            height: "300px",
            objectFit: "scale-down",
            transition: "transform 0.1s ease-in-out",
          }}
          className="m-2"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      }
      actions={[
        <EditOutlined className="text-warning" />,
        <DeleteOutlined className="text-danger" />,
      ]}
    >
      <Meta
        title={title}
        description={`$${price}${
          description && description.substring(0, 30)
        }...`}
      />
    </Card>
  );
};

export default AdminProductCard;
