import { Modal, Form, Input, Button } from 'antd';

interface IProps {
  isShow: boolean;
  onClose: () => void;
}

const Login = ({ isShow = false, onClose }: IProps) => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return isShow ? (
    <Modal title='登陆窗口' visible={isShow} onCancel={onClose} footer={null}>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete='off'>
        <Form.Item
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 21, span: 20 }}>
          <Button type='primary' htmlType='submit'>
            登陆
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  ) : null;
};

export default Login;
