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
      <Title>账户积分</Title>
      <Typography component="p" variant="h4">
        $114514
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
         ME Frp 不强制用户收费 积分仅用于抵扣超额流量
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          充值
        </Link>
      </div>
    </React.Fragment>
  );
}
