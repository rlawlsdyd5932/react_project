import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Box, Typography, Button, Grid, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import './Honeypotdetail.css';

function HoneypotDetail() {
  const { no } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleBackClick = () => {
    const from = location.state?.from || '/honeypot'; // 기본값을 '/honeypot'로 설정
    navigate(from);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggleStatus = () => {
    setOpen(false);
    const from = location.state?.from || '/honeypot'; // 기본값을 '/honeypot'로 설정
    const currentStatus = location.state?.status;
    const newStatus = currentStatus === '활성화' ? '비활성화' : '활성화';
    navigate(from, { state: { toggleStatus: { no: parseInt(no, 10), newStatus } } });
  };

  const rows = [
    { no, title: 'XX 같이 볼 20대 친구 구합니다😁 남녀 상관없음~!', 모집상태: '모집중', 모집인원: '1/2', 신고횟수: '3', 생성일자: '2024-06-03', 장르: '뮤지컬', status: location.state?.status }
  ];

  return (
    <Box className="honeypot-detail-container">
      <Typography variant="h4" component="div" gutterBottom>
        허니팟 상세 정보
      </Typography>
      <Grid container spacing={3} className="honeypot-detail-info">
        <Grid item xs={6} sm={4}>
          <Box className="detail-item">
            <Typography variant="body1">모집 상태</Typography>
            <Typography variant="body2">{rows[0].모집상태}</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Box className="detail-item">
            <Typography variant="body1">모집인원</Typography>
            <Typography variant="body2">{rows[0].모집인원}</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Box className="detail-item">
            <Typography variant="body1">신고횟수</Typography>
            <Typography variant="body2">{rows[0].신고횟수}</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Box className="detail-item">
            <Typography variant="body1">생성일자</Typography>
            <Typography variant="body2">{rows[0].생성일자}</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Box className="detail-item">
            <Typography variant="body1">장르</Typography>
            <Typography variant="body2">{rows[0].장르}</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box className="honeypot-detail-divider">
        <Typography variant="h6" component="div" gutterBottom>
          게시물 상세 제목
        </Typography>
      </Box>
      <Typography variant="body1" className="honeypot-detail-description">
        {rows[0].title}
      </Typography>
      <Box className="honeypot-detail-buttons">
        <Button variant="outlined" className="honeypot-action-button-outline" onClick={handleBackClick}>
          목록
        </Button>
        <Box className="honeypot-right-buttons">
          <Button variant="outlined" className="honeypot-action-button-outline">
            취소
          </Button>
          <Button variant="contained" className="honeypot-action-button-contained" onClick={handleClickOpen}>
            {rows[0].status === '활성화' ? '비활성화' : '활성화'}
          </Button>
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent className="custom-dialog-content">
          <DialogContentText className="dialog-text">
            해당 게시물을 {rows[0].status === '활성화' ? '비활성화' : '재활성화'} 하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions className="custom-dialog-actions">
          <Button onClick={handleClose} className="custom-cancel-button">
            취소
          </Button>
          <Button onClick={handleToggleStatus} className="custom-confirm-button" autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default HoneypotDetail;
