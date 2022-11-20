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
import Head from 'next/head'
const tiers = [
  {
    title: 'Pro',
    titles: '免费计划',
    subheader: '',
    price: '0 Drops',
    description: [
      '无限隧道数',
      '无限带宽',
      '大量免费节点',
      '注：为防止滥用，我们会收取 1 Drops/GB (￥1=1000 Drops)的费用,因此需要您为账户预存款 1 元',
    ],
    buttonText: '现在开始使用吧',
    buttonVariant: 'contained',
    link: 'https://dash.laecloud.com',
  },
  {
    title: '流量',
    titles: '流量计划',
    subheader: '',
    price: '200 Drops',
    description: [
      '无限隧道数',
      '无限带宽',
      '按量计费,即用即付',
      '全部节点',
      '￥1=1000 Drops',
    ],
    buttonText: '现在开始使用吧',
    buttonVariant: 'contained',
    link: 'https://dash.laecloud.com',
  },
  {
    title: '免费计划',
    titles: '扶持计划',
    subheader: '',
    price: '0 Drops',
    description: [
      '无限隧道数',
      '无限带宽',
      '每月按需向指定隧道发放免费流量',
      '全部节点',
      '超量后付费节点按流量计划计费',
    ],
    buttonText: '去申请',
    buttonVariant: 'contained',
    link: 'https://forum.laecloud.com/d/15-gong-yi-ge-ren-xiang-mu-mian-fei-liu-liang-shen-qing',
  }
]; 


export default function Home() {
  return (
     <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Head>

<title>MirrorEdge Frp [ME Frp] 镜缘映射</title>
<meta name="viewport" content="initial-scale=1.0, width=device-width" />
<meta name="keywords" content="控制面板,Frp,我的世界开服,内网穿透,端口映射,免费frp,镜缘映射,MEFrp"></meta>
</Head>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}> 
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            MirrorEdge Frp [ME Frp] 镜缘映射
          </Typography>
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
              href="https://dash.laecloud.com"
              sx={{ my: 1, mx: 1.5 }}
            >
              控制面板
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="https://forum.laecloud.com"
              sx={{ my: 1, mx: 1.5 }}
            >
              论坛
            </Link>
          <Button href="https://www.lae.email" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
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
          MirrorEdge Frp [ME Frp] 镜缘映射
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          为什么选择我们？
          这是一个免费 不限带宽 不限隧道数量 快速 稳定的端口映射服务
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
          <Button variant="contained" href="https://dash.laecloud.com">
            开始使用
          </Button>
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
                  title={tier.titles}
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
                      {tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">/GB
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
        <Copyright />
      </Container>
      {/* End footer */}
          </React.Fragment>
  );
}
