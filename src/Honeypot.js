import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
} from '@mui/material';
import './Honeypot.css';

const rows = [
  { no: 37, title: 'XX 같이 볼사람 1', date: '2024-06-03', report: 3, status: '활성화' },
  { no: 36, title: 'XX 같이 볼사람 1', date: '2024-06-03', report: 0, status: '활성화' },
  { no: 35, title: 'XX 같이 볼사람 1', date: '2024-06-03', report: 0, status: '활성화' },
  { no: 34, title: 'XX 같이 볼사람 1', date: '2024-06-03', report: 0, status: '활성화' },
  { no: 33, title: 'XX 같이 볼사람 1', date: '2024-06-03', report: 0, status: '활성화' },
  { no: 32, title: 'XX 같이 볼사람 1', date: '2024-06-03', report: 0, status: '활성화' },
  { no: 31, title: 'XX 같이 볼사람 1', date: '2024-06-03', report: 0, status: '활성화' },
  { no: 30, title: 'XX 같이 볼사람 1', date: '2024-06-03', report: 0, status: '활성화' },
  { no: 29, title: 'XX 같이 볼사람 1', date: '2024-06-03', report: 0, status: '활성화' },
  { no: 28, title: 'XX 같이 볼사람 1', date: '2024-06-03', report: 0, status: '활성화' },
  { no: 27, title: 'XX 같이 볼사람 1', date: '2024-06-03', report: 0, status: '활성화' },
  { no: 26, title: 'XX 같이 볼사람 1', date: '2024-06-03', report: 0, status: '활성화' },
  { no: 25, title: 'XX 같이 볼사람 1', date: '2024-06-03', report: 0, status: '활성화' },
  { no: 24, title: 'XX 같이 볼사람 1', date: '2024-06-03', report: 0, status: '활성화' },
  { no: 23, title: 'XX 같이 볼사람 1', date: '2024-06-03', report: 0, status: '활성화' },
  { no: 22, title: 'XX 같이 볼사람 1', date: '2024-06-03', report: 0, status: '활성화' },
  { no: 21, title: 'XX 같이 볼사람 1', date: '2024-06-03', report: 0, status: '활성화' },
  { no: 20, title: 'XX 같이 볼사람 1', date: '2024-06-03', report: 0, status: '활성화' },
  { no: 19, title: 'XX 같이 볼사람 1', date: '2024-06-03', report: 0, status: '활성화' },
  { no: 18, title: 'XX 같이 볼사람 1', date: '2024-06-03', report: 0, status: '활성화' },
];

function Honeypot() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const displayedRows = rows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const handleRowClick = (no) => {
    navigate(`/honeypot/${no}`);
  };

  return (
    <Box component="main" className="honeypot-main">
      <Box className="honeypot-header">
        <Typography variant="h5" component="div">
          허니팟 관리 전체 조회
        </Typography>
        <Box className="honeypot-search">
          <TextField
            variant="outlined"
            placeholder="제목 검색"
            className="search-field"
            InputProps={{
              endAdornment: (
                <img src="images/images/searchIcon.png" alt="search" />
              ),
              style: { borderRadius: 20, border: '1px solid #FFB755' }
            }}
          />
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">no</TableCell>
              <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">제목</TableCell>
              <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">등록일자</TableCell>
              <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">신고건수</TableCell>
              <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">관리</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.map((row) => (
              <TableRow key={row.no}>
                <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">{row.no}</TableCell>
                <TableCell
                  onClick={row.report > 0 ? () => handleRowClick(row.no) : undefined}
                  style={{ cursor: row.report > 0 ? 'pointer' : 'default' }}
                  sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}
                  align="center"
                >
                  {row.title}
                </TableCell>
                <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">{row.date}</TableCell>
                <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">{row.report}</TableCell>
                <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
                  <Box className="status-cell">
                    {row.status}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className="honeypot-pagination">
        <Pagination
          count={Math.ceil(rows.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          sx={{
            '.MuiPaginationItem-root': {
              color: 'primary',
              '&.Mui-selected': {
                backgroundColor: '#FFB755',
                color: '#fff',
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default Honeypot;
