// src/components/Dashboard/Header.jsx
import { Box, InputBase, IconButton, Avatar } from '@mui/material';
import { Search, Notifications, Mail } from '@mui/icons-material';

const Header = () => (
  <Box sx={{
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3,
  }}>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <InputBase placeholder="Type to search" sx={{
        border: '1px solid #ccc', px: 2, py: 1, borderRadius: 2, width: 300,
      }} />
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <IconButton><Mail /></IconButton>
      <IconButton><Notifications /></IconButton>
      <Avatar src="https://i.pravatar.cc/150?img=3" />
    </Box>
  </Box>
);

export default Header;
