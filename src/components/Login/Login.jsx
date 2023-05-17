import React, { useContext, useEffect } from 'react'
import { Button, Card, Form, Input, notification } from 'antd';
import { UserContext } from '../../context/UserContext/UserState';
import { Link, useNavigate } from "react-router-dom";
import './Login.scss'


const Login = () => {
    const { login, message, token } = useContext(UserContext)
    const navigate = useNavigate();

    const onFinish = (values) => {
        login(values)
    };

    useEffect(() => {
        if (token) {
            setTimeout(() => {
                navigate("/profile");
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
        <div className="login-container">
            <h1>Login</h1>
            <div className="card-wrapper">
                <Card>
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
                </Card>
                <div>
                    <h3>Si no estas registrado</h3>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Login