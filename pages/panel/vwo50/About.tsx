import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../../../src/Title';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>赞助说明</Title>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      如果您的手里拥有带有公网IP的机器亦或是您想为我们提供资金支持 请联系QQ 2596048743 我们会将您的赞助信息挂在官网鸣谢列表中 并可以获得交换友链/投放广告的权利
      爱发电里面有的东西懒得改了 10元以上就可以登上赞助列表力
      </Typography>
      <Link color="primary" href="https://afdian.net/@aehxy" onClick={preventDefault}>
          爱发电主页
        </Link>
    </React.Fragment>
  );
}
