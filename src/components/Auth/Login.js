import { Col, Row } from "antd";
import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import svg from "../../undraw_Login_re_4vu2.svg";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        paddingTop: "10%",
        margin: "auto",
      }}
    >
      <Row style={{ height: "94vh" }}>
        <Col span={2} />
        <Col span={10}>
          <h2>Pulzion21 OJ Login</h2>
          <img src={svg} width="100%" alt="login" />
        </Col>
        <Col span={10}>
          <Form
            style={{ marginTop: "20%" }}
            {...layout}
            name="basic"
            // value={user.username}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              // value={user.password}
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={2} />
      </Row>
    </div>
  );
}

export default Login;
