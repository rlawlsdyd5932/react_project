import React from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const location = useLocation();

  const baseImagePath = 'images/images/';

  const routes = [
    { paths: ['/home'], name: '홈', activeImg: `${baseImagePath}Home.png`, inactiveImg: `${baseImagePath}Home1.png` },
    { paths: ['/customer', '/customer/:id'], name: '회원 관리', activeImg: `${baseImagePath}Customer.png`, inactiveImg: `${baseImagePath}Customer1.png` },
    { paths: ['/honeypot'], name: '허니팟 관리', activeImg: `${baseImagePath}Edit Property.png`, inactiveImg: `${baseImagePath}Edit Property1.png` },
    { paths: ['/events'], name: '공연/전시 정보', activeImg: `${baseImagePath}Acrobatics.png`, inactiveImg: `${baseImagePath}Acrobatics1.png` },
    { paths: ['/notice'], name: '공지사항 관리', activeImg: `${baseImagePath}Alarm.png`, inactiveImg: `${baseImagePath}Alarm1.png` },
    { paths: ['/inquiry'], name: '1:1문의', activeImg: `${baseImagePath}Online Support (1).png`, inactiveImg: `${baseImagePath}Online Support1.png` }
  ];

  const isActive = (paths) => {
    return paths.some(path => location.pathname.startsWith(path));
  };

  return (
    <Box className="sidebar">
      <Box className="sidebar-header">
        <img src={`${baseImagePath}Logo.png`} alt="로고" className="sidebar-logo" />
        <Box className="sidebar-role-user">
          <Typography variant="body2" className="sidebar-role">관리자</Typography>
          <Typography variant="body1" className="sidebar-user">김진용님</Typography>
        </Box>
        <Box className="sidebar-logout-container">
          <Button variant="body2">
            Logout
            <img src={`${baseImagePath}Logout.png`} alt="로그아웃" className='sidebar-logout' />
          </Button>
        </Box>
      </Box>
      <List className="sidebar-menu">
        {routes.map((route, index) => (
          <ListItem
            button
            key={index}
            component={NavLink}
            to={route.paths[0]}
            className={route.name}
            style={({ isActive: navLinkIsActive }) => ({
              backgroundColor: navLinkIsActive ? '#FFB755' : '',
              color: navLinkIsActive ? 'white' : ''
            })}
          >
            
            <img src={isActive(route.paths) ? route.activeImg : route.inactiveImg} alt={route.name} />
            <ListItemText primary={route.name} />
          </ListItem>
        ))}
      </List>
      <div className="vertical-line"></div>
    </Box>
  );
}

export default Sidebar;
