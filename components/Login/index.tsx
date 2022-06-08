import { Modal, Form, Input, Button, Col, Row } from 'antd';
import { useState } from 'react';
import CountDown from 'components/CountDown';

interface IProps {
  isShow: boolean;
  onClose: () => void;
}

const Login = ({ isShow = false, onClose }: IProps) => {
  const [form, setForm] = useState({
    phone: '',
    codeName: '',
  });

  console.log(setForm, 111);

  const [isShowCode, setIsShowCode] = useState(false);

  // 获取验证码结束后调用;
  const handleCountDownEnd = () => {
    setIsShowCode(false);
  };

  const onGetCode = () => {
    setIsShowCode(true);
  };

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
          label='手机号'
          name='phone'
          rules={[{ required: true, message: '请输入手机号码' }]}>
          <Input value={form.phone} />
        </Form.Item>

        <Form.Item
          label='验证码'
          name='codeName'
          rules={[{ required: true, message: '请输入验证吗' }]}>
          <Row gutter={16}>
            <Col flex={1}>
              <Input value={form.codeName} />
            </Col>
            <Col>
              <Button type='primary' onClick={onGetCode}>
                {isShowCode ? (
                  <CountDown time={10} onEnd={handleCountDownEnd} />
                ) : (
                  '获取验证码'
                )}
              </Button>
            </Col>
          </Row>
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
