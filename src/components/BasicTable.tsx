import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { IVoucher } from '../types/IVoucher.tsx';

interface BasicTableProps {
  data: IVoucher[];
}

const BasicTable: React.FC<BasicTableProps> = ({ data }: BasicTableProps) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {['Identifier', 'Organization', 'Count'].map(header => <TableCell>{header}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => {
            const { id, organization, count } = item;
            return (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell>{organization}</TableCell>
                <TableCell>{count}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;