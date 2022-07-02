import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import Admin from '../../resources/images/admin.jpg'
import { width } from '@mui/system';


  const onFinish = (values) => 
    console.log('Received values of form: ', values);
  

function AdminSignIn() {
  
  return (
  <>
    <div className='adminDiv'> 
       <React.Fragment>
      <CssBaseline />
      <Container className='adminDiv' maxWidth="sm">
      <Box sx={{ bgcolor: ' rgb(24, 24, 24', height: '95vh' }}>
        <img src={Admin} width={350} height={350} />
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
    </Box>
       
      </Container>
    </React.Fragment>
    </div>
    </>
  )
}

export default AdminSignIn
