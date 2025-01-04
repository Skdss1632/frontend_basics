import React from 'react';
import { useSelector } from 'react-redux';
import { selectFields } from './features/dataSlice';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

function App() {
  const fields = useSelector(selectFields);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {fields.map((field, index) => (
            <TableRow key={index}>
              <TableCell style={{ fontWeight: 'bold', width: '40%' }}>{field.header}</TableCell>
              <TableCell>{field.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;


