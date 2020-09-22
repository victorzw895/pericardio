import React from "react";
import { Card } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const BlogPost = (props) => {
  let loading = true;

  const onChange = (checked) => {
    loading = !loading;
  };

  return (
    <div>
      <Card style={{ width: "100%" }} bordered={false}>
        <Card
          title="card content"
          hoverable={true}
          loading={loading}
          headStyle={{}}
          bodyStyle={{}}
        >
          2 days ago
          <Meta description="2 days ago" style={{ textAlign: "center" }}></Meta>
        </Card>
      </Card>
      <Card style={{ width: "100%" }} bordered={false}>
        <Card
          title="card content"
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          2 days ago
          <Meta description="2 days ago" style={{ textAlign: "center" }}></Meta>
        </Card>
      </Card>
    </div>
  );
};

export default BlogPost;
