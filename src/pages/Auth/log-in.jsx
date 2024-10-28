import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Typography, Divider } from 'antd';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const { Title } = Typography;

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [captcha, setCaptcha] = useState('');

    useEffect(() => {
        // Load captcha when the component mounts
        loadCaptchaEnginge(6); // 6 is the number of characters for the captcha
    }, []);

    const handleLogin = (values) => {
        // Check captcha
        if (validateCaptcha(captcha)) {
            console.log('Đăng nhập thành công', values);
            // Add login logic here
        } else {
            alert('Captcha không chính xác');
            loadCaptchaEnginge(6); // Reload captcha if needed
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div style={{ width: '400px', padding: '20px', borderRadius: '8px', backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <Title level={3} className="text-center">SIGN-IN Rent Nest</Title>
                <Divider />
                <Form onFinish={handleLogin} layout="vertical">
                    <Form.Item
                        label="@count"
                        name="username"
                        rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }]}
                    >
                        <Input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Nhập tài khoản"
                        />
                    </Form.Item>
                    <Form.Item
                        label="P@ssW0rd"
                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                    >
                        <Input.Password
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Nhập mật khẩu"
                        />
                    </Form.Item>
                    <Form.Item label="Robot?">
                        <div className="d-flex align-items-center">
                            <LoadCanvasTemplate />
                            <Input
                                type="text"
                                className="me-2"
                                value={captcha}
                                onChange={(e) => setCaptcha(e.target.value)}
                                placeholder="Nhập mã captcha"
                                required
                            />
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-100">
                            Sign-in
                        </Button>
                    </Form.Item>
                </Form>
                <div className="d-flex justify-content-between mt-3">
                    <a href="/reset-password" className="text-decoration-none">Forgot p@ssW0rd?</a>
                    <a href="/sign-up" className="text-decoration-none">Create a new account</a>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
