import { Modal, Form, Input, Button, Col, Row, message } from 'antd';
import { useState } from 'react';
import CountDown from 'components/CountDown';
import request from 'service/fetch';

interface IProps {
  isShow: boolean;
  onClose: () => void;
}

const Login = ({ isShow = false, onClose }: IProps) => {
  const [form] = Form.useForm();

  const [isShowCode, setIsShowCode] = useState(false);

  // 获取验证码结束后调用;
  const handleCountDownEnd = () => {
    setIsShowCode(false);
  };

  const onGetCode = () => {
    form
      .validateFields(['phone'])
      .then(({ phone }) => {
        request
          .post('/api/user/sendVerifyCode', {
            to: phone,
            templateId: 1,
          })
          .then((r) => {
            console.log(r);
            setIsShowCode(true);
          });
      })
      .catch(() => message.error('请输入手机号码'));
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return isShow ? (
    <Modal title='登陆窗口' visible={isShow} onCancel={onClose} footer={null}>
      <Form
        form={form}
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete='off'>
        <Form.Item
          label='手机号'
          name='phone'
          validateTrigger='onBlur'
          rules={[
            {
              required: true,
              pattern: new RegExp(
                /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
              ),
              message: '请输入手机号码',
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label='验证码'
          name='codeName'
          rules={[{ required: true, message: '请输入验证吗' }]}>
          <Row gutter={16}>
            <Col flex={1}>
              <Input />
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
