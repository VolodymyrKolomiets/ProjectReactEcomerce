import React, { useContext, useEffect } from 'react'
import { Button, Form, Input, notification } from 'antd';
import { UserContext } from '../../context/UserContex/UserState';
import { useNavigate } from "react-router-dom";



const Login = () => {
    const { login, message, token } = useContext(UserContext)
    const navigate = useNavigate();

    const onFinish = (values) => {
        login(values)
    };

    useEffect(() => {
        if (token) {
            setTimeout(() => {
                navigate("/products");
            }, 2000);
        }
        if (message) {
          notification.success({
            message: message,
          });
        }
      }, [token]);

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    return (
        <div>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
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
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login