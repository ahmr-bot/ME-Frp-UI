import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function tunnelinfo() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        穿透信息
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="proxyname"
            label="隧道名称"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">隧道类型</InputLabel>
        <Select required defaultValue="" id="grouped-select" label="node">
    <MenuItem value={1}>TCP</MenuItem>
      <MenuItem value={2}>UDP</MenuItem>
        <MenuItem value={3}>HTTP</MenuItem>
          <MenuItem value={4}>HTTPS</MenuItem>
            <MenuItem value={5}>STCP</MenuItem>
              <MenuItem value={6}>XTCP</MenuItem>
    

  </Select>
</FormControl>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="remoteport"
            label="远程端口"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="localport"
            label="本地端口"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="localip"
            label="本地IP"
            helperText="一般填写127.0.0.1即可"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
                <Grid item xs={12} md={6}>
          <TextField
            id="domain"
            label="绑定域名"
            helperText="仅HTTP/S隧道填写"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
