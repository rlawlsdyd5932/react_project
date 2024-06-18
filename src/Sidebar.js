import React from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <Box className="sidebar">
      <Box className="sidebar-header">
        <img src="images/images/Logo.png" alt="로고" className="sidebar-logo" />
        <Box className="sidebar-role-user">
          <Typography variant="body2" className="sidebar-role">관리자</Typography>
          <Typography variant="body1" className="sidebar-user">김진용님</Typography>
        </Box>
        <Box className="sidebar-logout-container">
          <Button variant="body2">
            Logout
            <img src="/images/images/Logout.png" alt="로그아웃" className='sidebar-logout'/>
          </Button>
        </Box>
      </Box>
      <List className="sidebar-menu">
        <ListItem button component={Link} to="/" className="home">
          <img src="images/images/Home.png" alt="홈" />
          <ListItemText primary="홈" />
        </ListItem>
        <ListItem button component={Link} to="/customer" className="customer">
          <img src="images/images/Customer1.png" alt="회원 관리" />
          <ListItemText primary="회원 관리" />
        </ListItem>
        <ListItem button component={Link} to="/honeypot" className="honeypot">
          <img src="images/images/Edit Property1.png" alt="허니팟 관리" />
          <ListItemText primary="허니팟 관리" />
        </ListItem>
        <ListItem button component={Link} to="/events" className="events">
          <img src="images/images/Acrobatics1.png" alt="공연/전시 정보" />
          <ListItemText primary="공연/전시 정보" />
        </ListItem>
        <ListItem button component={Link} to="/announcements" className="announcements">
          <img src="images/images/Alarm1.png" alt="공지사항 관리" />
          <ListItemText primary="공지사항 관리" />
        </ListItem>
        <ListItem button component={Link} to="/support" className="support">
          <img src="images/images/Online Support1.png" alt="1:1문의" />
          <ListItemText primary="1:1문의" />
        </ListItem>
      </List>
      <div className="vertical-line"></div>
    </Box>
  );
}

export default Sidebar;
