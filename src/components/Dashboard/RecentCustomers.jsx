// src/components/Dashboard/RecentCustomers.jsx
import { Box, Avatar, Typography, Stack } from '@mui/material';

const customers = [
  {
    name: 'Jenny Wilson',
    email: 'jennywill@gmail.com',
    amount: '₹20,000',
    location: 'Austin',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Jenny Wilson',
    email: 'jennywill@gmail.com',
    amount: '₹20,000',
    location: 'Austin',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Jenny Wilson',
    email: 'jennywill@gmail.com',
    amount: '₹20,000',
    location: 'Austin',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Jenny Wilson',
    email: 'jennywill@gmail.com',
    amount: '₹20,000',
    location: 'Austin',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
];

const RecentCustomers = () => (
  <Box mt={4}>
    <Typography variant="subtitle1" fontWeight="bold">Recent Customers</Typography>
    <Typography variant="caption" color="gray">recent customer transactions</Typography>
    <Stack spacing={2} mt={2}>
      {customers.map((cust, idx) => (
        <Box key={idx} display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={1}>
            <Avatar src={cust.avatar} />
            <Box>
              <Typography variant="body2">{cust.name}</Typography>
              <Typography variant="caption" color="gray">{cust.email}</Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="body2">{cust.amount}</Typography>
            <Typography variant="caption" color="gray">{cust.location}</Typography>
          </Box>
        </Box>
      ))}
    </Stack>
    <Typography mt={2} sx={{ color: '#6c63ff', cursor: 'pointer', fontSize: 14 }}>
      See all customers →
    </Typography>
  </Box>
);

export default RecentCustomers;
