import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TextField, Box, Pagination } from '@mui/material';
import './Customer.css';

function Customer() {
  const members = [
    { id: 'user001', nickname: 'userone', gender: '남', email: 'userone@gmail.com', date: '2024-06-23' },
    { id: 'user002', nickname: 'usertwo', gender: '여', email: 'usertwo@gmail.com', date: '2024-06-23' },
    { id: 'user003', nickname: 'userthree', gender: '남', email: 'userthree@gmail.com', date: '2024-06-23' },
    { id: 'user004', nickname: 'userfour', gender: '여', email: 'userfour@gmail.com', date: '2024-06-23' },
    { id: 'user005', nickname: 'userfive', gender: '남', email: 'userfive@gmail.com', date: '2024-06-23' },
    { id: 'user006', nickname: 'usersix', gender: '여', email: 'usersix@gmail.com', date: '2024-06-23' },
    { id: 'user007', nickname: 'userseven', gender: '남', email: 'userseven@gmail.com', date: '2024-06-23' },
    { id: 'user008', nickname: 'usereight', gender: '여', email: 'usereight@gmail.com', date: '2024-06-23' },
    { id: 'user009', nickname: 'usernine', gender: '남', email: 'usernine@gmail.com', date: '2024-06-23' },
    { id: 'user010', nickname: 'userten', gender: '여', email: 'userten@gmail.com', date: '2024-06-23' }
  ];

  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const paginatedMembers = members.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <Box className="member-table-container">
      <Typography variant="h6" className="table-title">회원 전체 조회</Typography>
      <TextField
        variant="outlined"
        placeholder="회원 검색"
        className="search-field"
        InputProps={{
          endAdornment: (
            <img src="images/search-icon.png" alt="search" className="search-icon" />
          ),
        }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>회원코드</TableCell>
              <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>닉네임</TableCell>
              <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>성별</TableCell>
              <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>이메일</TableCell>
              <TableCell>가입일자</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedMembers.map((member, index) => (
              <TableRow key={index}>
                <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{member.id}</TableCell>
                <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{member.nickname}</TableCell>
                <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{member.gender}</TableCell>
                <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{member.email}</TableCell>
                <TableCell>{member.date}</TableCell>
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
      />
    </Box>
  );
}

export default Customer;
