import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Typography, Divider } from 'antd';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const { Title } = Typography;

function RegisterForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        dob: "", // Date of birth
        address: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [captcha, setCaptcha] = useState('');

    useEffect(() => {
        // Load captcha when the component mounts
        loadCaptchaEnginge(6); // 6 is the number of characters for the captcha
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (values) => {
        if (!validateCaptcha(captcha)) {
            alert('Captcha không chính xác');
            loadCaptchaEnginge(6); // Reload captcha
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert('Mật khẩu không khớp');
            return;
        }

        console.log("Thông tin tài khoản mới:", formData);
        // Perform account creation here
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div style={{ width: '400px', padding: '20px', borderRadius: '8px', backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <Title level={3} className="text-center">Join Us Today</Title>
                <Divider />
                <Form layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                        label="Full Name"
                        name="fullName"
                        rules={[{ required: true, message: 'Vui lòng nhập họ tên!' }]}
                    >
                        <Input
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Nhập họ tên"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Date of Birth"
                        name="dob"
                        rules={[{ required: true, message: 'Vui lòng chọn ngày sinh!' }]}
                    >
                        <Input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            placeholder="Chọn ngày sinh"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
                    >
                        <Input
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Nhập địa chỉ"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, type: 'email', message: 'Vui lòng nhập email hợp lệ!' }]}
                    >
                        <Input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Nhập email"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Phone Number"
                        name="phoneNumber"
                        rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                    >
                        <Input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Nhập số điện thoại"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                    >
                        <Input.Password
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Nhập mật khẩu"
                            visibilityToggle={{ visible: showPassword, onToggle: togglePasswordVisibility }}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Confirm Password"
                        name="confirmPassword"
                        rules={[{ required: true, message: 'Vui lòng xác nhận mật khẩu!' }]}
                    >
                        <Input.Password
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Xác nhận mật khẩu"
                        />
                    </Form.Item>

                    <Form.Item label="Robot?">
                        <LoadCanvasTemplate />
                        <Input
                            type="text"
                            value={captcha}
                            onChange={(e) => setCaptcha(e.target.value)}
                            placeholder="Nhập mã captcha"
                            required
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-100">
                            I'm Ready
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default RegisterForm;
