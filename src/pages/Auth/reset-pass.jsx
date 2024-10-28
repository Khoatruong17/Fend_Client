import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Typography, Divider } from 'antd';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const { Title } = Typography;

const ChangePassword = () => {
    const [email, setEmail] = useState('');
    const [captcha, setCaptcha] = useState('');

    useEffect(() => {
        // Load captcha when the component mounts
        loadCaptchaEnginge(6); // 6 is the number of characters for the captcha
    }, []);

    const handleSubmit = (values) => {
        if (!validateCaptcha(captcha)) {
            alert("Mã captcha không đúng!");
            return;
        }
        alert("Yêu cầu đổi mật khẩu đã được gửi!");
        // Send data to server or handle logic here
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div style={{ width: '400px', padding: '20px', borderRadius: '8px', backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <Title level={3} className="text-center">Đổi Mật Khẩu</Title>
                <Divider />
                <Form layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, type: 'email', message: 'Vui lòng nhập email hợp lệ!' }]}
                    >
                        <Input
                            type="email"
                            placeholder="Nhập email của bạn"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item label="Captcha" required>
                        <LoadCanvasTemplate />
                        <Input
                            type="text"
                            placeholder="Nhập mã captcha"
                            value={captcha}
                            onChange={(e) => setCaptcha(e.target.value)}
                            required
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-100">
                            Xác Nhận
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ChangePassword;
