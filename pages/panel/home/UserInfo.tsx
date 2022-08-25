import * as React from 'react';
import Typography from '@mui/material/Typography';


function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function (UserInfo) {
  return (
    <React.Fragment>
             <Typography>
            {'用户名'}
            {'username'}
          </Typography>
             <Typography>
            {'用户ID'}
            {'userid'}
          </Typography>
             <Typography>
            {'带宽限制'}
            {'无限制'}
          </Typography>
             <Typography>
            {'剩余流量'}
            {'traffic'}
          </Typography>
          <Typography>
            {'用户组'}
            {'groups'}
          </Typography>
    </React.Fragment>
  );
}
