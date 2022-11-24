/*
 * @Author: ahmr-bot ahmrcxy@gmail.com
 * @Date: 2022-11-15 19:57:32
 * @LastEditors: ahmr-bot ahmrcxy@gmail.com
 * @LastEditTime: 2022-11-24 21:30:00
 * @FilePath: \ME-Frp-UI\src\Copyright.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://aehxy.com/">
      Aehxy
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    <br />
    <MuiLink color="inherit" href="https://cfu.mefrp.com/">
    Frp内网穿透联盟统一识别编码:AZWB66WB
      </MuiLink>
    </Typography>
  );
}
