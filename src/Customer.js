import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TextField, Box, Pagination } from '@mui/material';
import './Customer.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Customer() {
  const members = [
    { id: 'user001', nickname: 'userone', gender: '남', email: 'userone@gmail.com', date: '2024-06-23' },
    { id: 'user002', nickname: 'usertwo', gender: '여', email: 'usertwo@gmail.com', date: '2024-06-23' },
    { id: 'user003', nickname: 'userthree', gender: '남', email: 'userthree@gmail.com', date: '2024-06-23' },
    { id: 'user004', nickname: 'userfour', gender: '여', email: 'userfour@gmail.com', date: '2024-06-23' },
    { id: 'user001', nickname: 'userone', gender: '남', email: 'userone@gmail.com', date: '2024-06-23' },
    { id: 'user002', nickname: 'usertwo', gender: '여', email: 'usertwo@gmail.com', date: '2024-06-23' },
    { id: 'user003', nickname: 'userthree', gender: '남', email: 'userthree@gmail.com', date: '2024-06-23' },
    { id: 'user004', nickname: 'userfour', gender: '여', email: 'userfour@gmail.com', date: '2024-06-23' },
    { id: 'user001', nickname: 'userone', gender: '남', email: 'userone@gmail.com', date: '2024-06-23' },
    { id: 'user002', nickname: 'usertwo', gender: '여', email: 'usertwo@gmail.com', date: '2024-06-23' },
    { id: 'user003', nickname: 'userthree', gender: '남', email: 'userthree@gmail.com', date: '2024-06-23' },
    { id: 'user004', nickname: 'userfour', gender: '여', email: 'userfour@gmail.com', date: '2024-06-23' },
    { id: 'user001', nickname: 'userone', gender: '남', email: 'userone@gmail.com', date: '2024-06-23' },
    { id: 'user002', nickname: 'usertwo', gender: '여', email: 'usertwo@gmail.com', date: '2024-06-23' },
    { id: 'user003', nickname: 'userthree', gender: '남', email: 'userthree@gmail.com', date: '2024-06-23' },
    { id: 'user004', nickname: 'userfour', gender: '여', email: 'userfour@gmail.com', date: '2024-06-23' },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  // Get the current page number from the URL query parameters
  const query = new URLSearchParams(location.search);
  const currentPage = parseInt(query.get('page') || '1', 10);

  const [page, setPage] = useState(currentPage);
  const rowsPerPage = 5;

  const handlePageChange = (event, value) => {
    setPage(value);
    if (value === 1) {
      navigate('/customer');
    } else {
      navigate(`/customer?page=${value}`);
    }
  };

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const paginatedMembers = members.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <Box className="member-table-container">
      <Box className="header-container">
        <Typography variant="h6" className="table-title">회원 전체 조회</Typography>
        <TextField
          variant="outlined"
          placeholder="회원 코드 검색"
          className="search-field"
          InputProps={{
            endAdornment: (
              <img src="images/images/searchIcon.png" alt="search" />
            ),
            style: { borderRadius: 20, border: '1px solid #FFB755' }
          }}
        />
      </Box>
      <TableContainer component={Paper}>
        <Table className='table'>
          <TableHead className='table-content'>
            <TableRow>
              <TableCell align="center" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>회원코드</TableCell>
              <TableCell align="center" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>닉네임</TableCell>
              <TableCell align="center" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>성별</TableCell>
              <TableCell align="center" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>이메일</TableCell>
              <TableCell align="center">가입일자</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedMembers.map((member, index) => (
              <TableRow key={index}>
                <TableCell align="center" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                  <Link to={`/customer/${member.id}`} state={{ from: location.pathname + location.search }} className="link">
                    {member.id}
                  </Link>
                </TableCell>
                <TableCell align="center" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{member.nickname}</TableCell>
                <TableCell align="center" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{member.gender}</TableCell>
                <TableCell align="center" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{member.email}</TableCell>
                <TableCell align="center">{member.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(members.length / rowsPerPage)}
        page={page}
        onChange={handlePageChange}
        className="pagination"
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
  );
}

export default Customer;
