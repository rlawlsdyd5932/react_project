import React from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

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
        <ListItem button component={NavLink} to="/" className="home"
          style={{ backgroundColor: isActive('/') ? '#FFB755' : '', color: isActive('/') ? 'white' : '' }}>
          <img src={isActive('/') ? "images/images/Home.png" : "images/images/Home1.png"} alt="홈" />
          <ListItemText primary="홈" />
        </ListItem>
        <ListItem button component={NavLink} to="/customer" className="customer"
          style={{ backgroundColor: isActive('/customer') ? '#FFB755' : '', color: isActive('/customer') ? 'white' : '' }}>
          <img src={isActive('/customer') ? "images/images/Customer.png" : "images/images/Customer1.png"} alt="회원 관리" />
          <ListItemText primary="회원 관리" />
        </ListItem>
        <ListItem button component={NavLink} to="/honeypot" className="honeypot"
          style={{ backgroundColor: isActive('/honeypot') ? '#FFB755' : '', color: isActive('/honeypot') ? 'white' : '' }}>
          <img src={isActive('/honeypot') ? "images/images/Edit Property.png" : "images/images/Edit Property1.png"} alt="허니팟 관리" />
          <ListItemText primary="허니팟 관리" />
        </ListItem>
        <ListItem button component={NavLink} to="/events" className="events"
          style={{ backgroundColor: isActive('/events') ? '#FFB755' : '', color: isActive('/events') ? 'white' : '' }}>
          <img src={isActive('/events') ? "images/images/Acrobatics.png" : "images/images/Acrobatics1.png"} alt="공연/전시 정보" />
          <ListItemText primary="공연/전시 정보"/>
        </ListItem>
        <ListItem button component={NavLink} to="/notice" className="notice"
          style={{ backgroundColor: isActive('/notice') ? '#FFB755' : '', color: isActive('/notice') ? 'white' : '' }}>
          <img src={isActive('/notice') ? "images/images/Alarm.png" : "images/images/Alarm1.png"} alt="공지사항 관리" />
          <ListItemText primary="공지사항 관리" />
        </ListItem>
        <ListItem button component={NavLink} to="/inquiry" className="inquiry"
          style={{ backgroundColor: isActive('/inquiry') ? '#FFB755' : '', color: isActive('/inquiry') ? 'white' : '' }}>
          <img src={isActive('/inquiry') ? "images/images/Online Support (1).png" : "images/images/Online Support1.png"} alt="1:1문의" />
          <ListItemText primary="1:1문의" />
        </ListItem>
      </List>
      <div className="vertical-line"></div>
    </Box>
  );
}

export default Sidebar;
