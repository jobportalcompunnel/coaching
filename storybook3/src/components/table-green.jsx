// src/components/EnhancedTable.jsx

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  TablePagination,
  IconButton,
  Collapse,
  Box
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// Sub-table component
function Row2(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{row.name}</TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer ID</TableCell>
                    <TableCell align="right">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">{historyRow.date}</TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Main table component
export function EnhancedTable2({ rows }) {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Stable sort function
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  const sortedRows = rows.slice().sort(getComparator(order, orderBy));
  const visibleRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="collapsible table">
        <TableHead>
          <TableRow sx={{ backgroundColor: 'lightgreen' }}>
            <TableCell sx={{ border: '1px solid blue' }} />
            <TableCell sx={{ border: '1px solid blue' }}>
              <TableSortLabel
                active={orderBy === 'name'}
                direction={orderBy === 'name' ? order : 'asc'}
                onClick={() => handleRequestSort('name')}
              >
                Dessert (100g serving)
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ border: '1px solid blue' }} align="right">
              <TableSortLabel
                active={orderBy === 'calories'}
                direction={orderBy === 'calories' ? order : 'asc'}
                onClick={() => handleRequestSort('calories')}
              >
                Calories
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ border: '1px solid blue' }} align="right">
              <TableSortLabel
                active={orderBy === 'fat'}
                direction={orderBy === 'fat' ? order : 'asc'}
                onClick={() => handleRequestSort('fat')}
              >
                Fat (g)
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ border: '1px solid blue' }} align="right">
              <TableSortLabel
                active={orderBy === 'carbs'}
                direction={orderBy === 'carbs' ? order : 'asc'}
                onClick={() => handleRequestSort('carbs')}
              >
                Carbs (g)
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleRows.map((row) => (
            <React.Fragment key={row.name}>
              <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell sx={{ border: '1px solid blue' }}>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                  >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                </TableCell>
                <TableCell sx={{ border: '1px solid blue' }} component="th" scope="row">{row.name}</TableCell>
                <TableCell sx={{ border: '1px solid blue' }} align="right">{row.calories}</TableCell>
                <TableCell sx={{ border: '1px solid blue' }} align="right">{row.fat}</TableCell>
                <TableCell sx={{ border: '1px solid blue' }} align="right">{row.carbs}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: '1px solid blue', paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                      <Table size="small" aria-label="purchases">
                        <TableHead>
                          <TableRow sx={{ backgroundColor: 'lightgreen' }}>
                            <TableCell sx={{ border: '1px solid blue' }}>Date</TableCell>
                            <TableCell sx={{ border: '1px solid blue' }}>Customer ID</TableCell>
                            <TableCell sx={{ border: '1px solid blue' }} align="right">Amount</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {row.history.map((historyRow) => (
                            <TableRow key={historyRow.date}>
                              <TableCell sx={{ border: '1px solid blue' }} component="th" scope="row">{historyRow.date}</TableCell>
                              <TableCell sx={{ border: '1px solid blue' }}>{historyRow.customerId}</TableCell>
                              <TableCell sx={{ border: '1px solid blue' }} align="right">{historyRow.amount}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}