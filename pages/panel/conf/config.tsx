import * as React from 'react';
import Title from '../../../src/Title';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Markdown from './Markdown';


const VWO50: NextPage = () => {
  return (
    <React.Fragment>
      <Title>配置文件</Title>
      <FormControl sx={{ m: 1, minWidth: 400 }}>
        <InputLabel required htmlFor="grouped-select">节点</InputLabel>
        <Select defaultValue="" id="grouped-select" label="node">
    <MenuItem value={10}>节点1</MenuItem>
  </Select>
</FormControl>
<pre class="prettyprint linenums prettyprinted">
    [common]
    server=0</pre>
    </React.Fragment>
  );
}

export default VWO50
