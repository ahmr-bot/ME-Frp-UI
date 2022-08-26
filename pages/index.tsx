import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Copyright from '../src/Copyright';
const tiers = [
  {
    title: '流量 ',
    price: '定价中/GB',
    link: 'https://mefrp.com',
    description: [
      '当默认流量 签到流量用尽之后 如果有积分则自动使用积分抵扣',
      '1积分=x元',
      '',
      '',
    ],
    buttonText: '现在开始',
    buttonVariant: 'outlined',
  },
  {
    title: 'Free',
    subheader: '',
    price: '0',
    description: [
      '无限隧道数',
      '无限带宽',
      '20+节点',
      '每日5GB默认流量（每天自动清空，签到获得的流量不受影响）',
    ],
    buttonText: '现在开始使用吧',
    buttonVariant: 'contained',
  },
  {
    title: '无限流量',
    price: '定价中…',
    description: [
      'Free用户的所有内容',
      '无限的流量',
      '',
      '',
    ],
    buttonText: '购买',
    buttonVariant: 'outlined',
  },
];


const Home: NextPage = () => {
  return (
     <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}> 
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            ME Frp 内网穿透（一起映射）
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              加入 QQ 群
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/panel/home"
              sx={{ my: 1, mx: 1.5 }}
            >
              控制面板
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/auth/SignIn"
              sx={{ my: 1, mx: 1.5 }}
            >
              登陆
            </Link>
          </nav>
          <Button href="/auth/SignUp" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            注册
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h2"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          ME Frp 内网穿透（一起映射）
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          为什么选择我们？
          这是一个不限带宽 不限隧道数量 快速 稳定的端口映射服务
          使用开源项目 Frp  ， 简单易用
        </Typography>
              <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
            <Box maxWidth="sm">
          <Button variant="contained" component={Link} noLinkStyle href="/auth/SignIn">
            开始使用
          </Button>
        </Box>
                      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      <Typography variant="users" gutterBottom>总注册用户数:
      
      </Typography>
      <Typography variant="rowusers" gutterBottom>
         </Typography>
               <Typography variant="nodes" gutterBottom>总节点数
      
      </Typography>
      <Typography variant="rownode" gutterBottom>
         </Typography>
               <Typography variant="gbs" gutterBottom>今日总流量
      
      </Typography>
      <Typography variant="rowgbs" gutterBottom>
         </Typography>
        </Box>
        </Box>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant as 'outlined' | 'contained'} href={tier.link}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
          </React.Fragment>
  );
}

export default Home
