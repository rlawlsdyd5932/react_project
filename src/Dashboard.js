import React from 'react';
import { Box, Grid, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './Dashboard.css';

Chart.register(...registerables);

function Dashboard() {
  const monthlyChartData = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    datasets: [
      {
        label: '생성 건수',
        data: [30, 45, 40, 50, 60, 55, 50, 45, 35, 30, 25, 20],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const dailyChartData = {
    labels: ['뮤지컬', '전시회', '공연', '행사축제', '팝업'],
    datasets: [
      {
        label: '생성 건수',
        data: [35, 40, 55, 60, 50],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const reportData = [
    { id: 1, title: 'XX 접수', date: '2023-06-01', queries: 0 },
    { id: 2, title: 'XX 접수', date: '2023-06-02', queries: 0 },
    { id: 3, title: 'XX 접수', date: '2023-06-03', queries: 0 },
    { id: 4, title: 'XX 접수', date: '2023-06-04', queries: 0 },
    { id: 5, title: 'XX 접수', date: '2023-06-05', queries: 0 },
  ];

  const inquiryData = [
    { id: 34, title: '문의 제목', status: '진행중', date: '2024-06-03', type: '문의', control: '버튼' },
    { id: 33, title: '문의 제목', status: '완료', date: '2024-06-02', type: '문의', control: '버튼' },
    { id: 32, title: '문의 제목', status: '완료', date: '2024-06-01', type: '문의', control: '버튼' },
  ];

  const notices = [
    { id: 32, title: '공지사항 제목 1', date: '2024-06-03' },
    { id: 31, title: '공지사항 제목 2', date: '2024-06-02' },
    { id: 30, title: '공지사항 제목 3', date: '2024-06-01' },
    { id: 29, title: '공지사항 제목 4', date: '2024-06-01' },
    { id: 28, title: '공지사항 제목 5', date: '2024-06-01' },
  ];

  return (
    <Box className="dashboard-container">
      <Box className="dashboard-header">
        <Typography className="dashboard-title">오늘의 허니팟</Typography>
        <Paper className="dashboard-summary">
          <Typography variant="h6">20개</Typography>
        </Paper>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper className="dashboard-chart">
            <Typography className="chart-title">월별 허니팟</Typography>
            <Bar data={monthlyChartData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className="dashboard-chart">
            <Typography className="chart-title">장르별 허니팟</Typography>
            <Bar data={dailyChartData} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={4}>
          <Paper className="dashboard-info">
            <Typography className="info-title">매칭 횟수</Typography>
            <Typography>전체: 45,912</Typography>
            <div className="horizontal-line"></div>
            <Typography>오늘: 546</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="dashboard-info">
            <Typography className="info-title">1:1문의</Typography>
            <Typography>전체: 45,912</Typography>
            <Typography>오늘: 2</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="dashboard-info">
            <Typography className="info-title">신고 접수</Typography>
            <Typography>전체: 45,912</Typography>
            <Typography>오늘: 2</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper className="dashboard-table">
            <Typography className="table-title">신고 접수 내역</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>no</TableCell>
                    <TableCell>제목</TableCell>
                    <TableCell>등록일자</TableCell>
                    <TableCell>신고조회</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reportData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.title}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.queries}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className="dashboard-table">
            <Typography className="table-title">1:1문의 내역</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>no</TableCell>
                    <TableCell>제목</TableCell>
                    <TableCell>구분</TableCell>
                    <TableCell>관리</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {inquiryData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.title}</TableCell>
                      <TableCell>{row.type}</TableCell>
                      <TableCell>{row.control}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Paper className="dashboard-table">
            <Typography className="table-title">최신 공지 사항</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>no</TableCell>
                    <TableCell>제목</TableCell>
                    <TableCell>등록일자</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {notices.map((notice) => (
                    <TableRow key={notice.id}>
                      <TableCell>{notice.id}</TableCell>
                      <TableCell>{notice.title}</TableCell>
                      <TableCell>{notice.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
