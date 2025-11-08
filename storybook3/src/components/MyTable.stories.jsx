// src/components/MyTable.stories.jsx

import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// This is the metadata for your component and controls how it appears in Storybook's sidebar.
export default {
  title: 'MUI/Table',
  component: Table,
};

// A reusable template for your stories
const Template = () => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Dessert (100g serving)</TableCell>
          <TableCell align="right">Calories</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell component="th" scope="row">Frozen yoghurt</TableCell>
          <TableCell align="right">159</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

// This is the actual story.
export const BasicTable = Template.bind({});
BasicTable.args = {};