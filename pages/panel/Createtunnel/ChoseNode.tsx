import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
export default function ChoseNode() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        选择节点
      </Typography>
<FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">地区</InputLabel>
        <Select required defaultValue="" id="grouped-select" label="area">
    <MenuItem value={10}>中国大陆</MenuItem>
    <MenuItem value={20}>中国港澳台地区</MenuItem>
    <MenuItem value={30}>国外</MenuItem>
  </Select>
</FormControl>
<FormControl sx={{ m: 1, minWidth: 400 }}>
        <InputLabel required htmlFor="grouped-select">节点</InputLabel>
        <Select defaultValue="" id="grouped-select" label="node">
    <MenuItem value={10}>节点1</MenuItem>

  </Select>
</FormControl>
    </React.Fragment>
  );
}
