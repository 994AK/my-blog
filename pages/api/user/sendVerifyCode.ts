import { NextApiRequest, NextApiResponse } from 'next';
import { format } from 'date-fns';
import md5 from 'md5';
import { encode } from 'js-base64';
import request from 'service/fetch';

/* 模拟请求数据 */
export default async function sendVerifyCode(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { to = '', templateId = 1 } = req.body;

  console.log(to, templateId);
  const appId = '8aaf070881368efb01814452b4c30581';
  const AccountId = '8aaf070881368efb01814452b3d7057a';
  const AuthToken = 'e99cbae06fee477fb35d428a7fd5c237';
  const NowDate = format(new Date(), 'yyyyMMddHHmmss');
  const SigParameter = md5(`${AccountId}${AuthToken}${NowDate}`);
  const Authorization = encode(`${AccountId}:${NowDate}`);
  const verifyCode = Math.floor(Math.random() * (9999 - 1000)) + 1000;
  const expireMinute = '5';
  const url = `https://app.cloopen.com:8883/2013-12-26/Accounts/${AccountId}/SMS/TemplateSMS?sig=${SigParameter}`;

  const response = await request.post(
    url,
    {
      to,
      templateId,
      appId,
      datas: [verifyCode, expireMinute],
    },
    {
      headers: {
        Authorization,
      },
    },
  );
  console.log(response);
  res.status(200).json({
    code: 1,
    data: 456,
  });
}
