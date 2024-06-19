import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TextField, Box, Pagination } from '@mui/material';
import './Customer.css';
import { Link } from 'react-router-dom';

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

const [page, setPage] = useState(1);
const rowsPerPage = 5;
const handlePageChange = (event, value) => {
  setPage(value);
};
const paginatedMembers = members.slice((page - 1) * rowsPerPage, page * rowsPerPage);

return (
  <Box className="member-table-container">
    <Box className="header-container">
      <Typography variant="h6" className="table-title">회원 전체 조회</Typography>
      <TextField 
        variant="outlined"
        placeholder="회원 검색"
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
                <Link to={`/customer/${member.id}`} className="link">
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
    />
  </Box>
);
}

export default Customer;
