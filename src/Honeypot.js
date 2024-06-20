import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  Button
} from '@mui/material';
import './Honeypot.css';

const initialRows = [
  { no: 37, title: 'XX 같이 볼사람 1', date: '2024-06-03', report: 3, status: '활성화' },
  { no: 36, title: 'XX 같이 볼사람 1', date: '2024-06-03', report: 0, status: '활성화' },
  // ... 기타 데이터 생략 ...
];

function Honeypot() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const navigate = useNavigate();
  const location = useLocation();
  const [rows, setRows] = useState(initialRows);

  // Get the current page number from the URL query parameters
  const query = new URLSearchParams(location.search);
  const currentPage = parseInt(query.get('page') || '1', 10);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (location.state?.toggleStatus) {
      setRows(prevRows => 
        prevRows.map(row => 
          row.no === location.state.toggleStatus.no ? { ...row, status: location.state.toggleStatus.newStatus } : row
        )
      );
      navigate(location.pathname + location.search, { replace: true, state: {} });
    }
  }, [location.state, navigate, location.pathname, location.search]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    if (newPage === 1) {
      navigate('/honeypot');
    } else {
      navigate(`/honeypot?page=${newPage}`);
    }
  };

  const handleRowClick = (no) => {
    navigate(`/honeypot/${no}`, { state: { from: location.pathname + location.search } });
  };

  const handleToggleStatus = (no) => {
    setRows(prevRows => 
      prevRows.map(row => 
        row.no === no ? { ...row, status: row.status === '활성화' ? '비활성화' : '활성화' } : row
      )
    );
  };

  const displayedRows = rows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

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
                  onClick={() => handleRowClick(row.no)}
                  style={{ cursor: 'pointer' }}
                  sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}
                  align="center"
                >
                  {row.title}
                </TableCell>
                <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">{row.date}</TableCell>
                <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">{row.report}</TableCell>
                <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
                  <Button 
                    variant="outlined" 
                  >
                    {row.status === '활성화' ? '비활성화' : '활성화'}
                  </Button>
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
