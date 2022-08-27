import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../../../src/Title';

// Generate Order Data
function createData(
  id: number,
  name: string,
  type: string,
  sayings: string,
) {
  return { id, name, type, sayings };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS'
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK'
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA'),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN'
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ'
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

const VWO50: NextPage = () => {
  return (
    <React.Fragment>
      <Title>赞助列表</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>昵称</TableCell>
            <TableCell>赞助项目</TableCell>
            <TableCell>留言</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.sayings}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default VWO50
