import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button, Grid } from '@mui/material';
import './Honeypotdetail.css';

function HoneypotDetail() {
  const { id } = useParams();

  return (
    <Box className="honeypot-detail-container">
      <Typography variant="h4" component="div" gutterBottom>
        허니팟 상세 정보
      </Typography>
      <Grid container spacing={3} className="honeypot-detail-info">
        <Grid item xs={6} sm={4}>
          <Box className="detail-item">
            <Typography variant="body1">모집 상태</Typography>
            <Typography variant="body2">모집중</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Box className="detail-item">
            <Typography variant="body1">모집인원</Typography>
            <Typography variant="body2">1/2</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Box className="detail-item">
            <Typography variant="body1">신고횟수</Typography>
            <Typography variant="body2">3</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Box className="detail-item">
            <Typography variant="body1">생성일자</Typography>
            <Typography variant="body2">2024-0603</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Box className="detail-item">
            <Typography variant="body1">장르</Typography>
            <Typography variant="body2">뮤지컬</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box className="honeypot-detail-divider">
      <Typography variant="h6" component="div" gutterBottom>게시물 상세 제목</Typography>
      </Box>
      <Typography variant="body1" className="honeypot-detail-description">
        XX 같이 볼 20대 친구 구합니다😁<br />
        남녀 상관없음~!
      </Typography>
      <Box className="honeypot-detail-buttons">
        <Button variant="outlined" className="honeypot-action-button-outline">
          목록
        </Button>
        <Box className="honeypot-right-buttons">
          <Button variant="outlined" className="honeypot-action-button-outline">
            취소
          </Button>
          <Button variant="outlined" className="honeypot-action-button-contained">
            비활성화
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default HoneypotDetail;