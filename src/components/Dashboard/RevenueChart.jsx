// src/components/Dashboard/RevenueChart.jsx
import { Box, Typography, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Feb', revenue: 30000 },
  { month: 'Mar', revenue: 35000 },
  { month: 'Apr', revenue: 38000 },
  { month: 'May', revenue: 42000 },
  { month: 'Jun', revenue: 45591 },
  { month: 'Jul', revenue: 43000 },
  { month: 'Aug', revenue: 44000 },
  { month: 'Sep', revenue: 47000 },
  { month: 'Oct', revenue: 49000 },
  { month: 'Nov', revenue: 51000 },
  { month: 'Dec', revenue: 53000 },
  { month: 'Jan', revenue: 55000 },
];

const RevenueChart = () => (
  <Box mt={5}>
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="h6">Revenue Report</Typography>
      <ToggleButtonGroup size="small" exclusive>
        <ToggleButton value="12">12 Months</ToggleButton>
        <ToggleButton value="6">6 Months</ToggleButton>
        <ToggleButton value="30">30 Days</ToggleButton>
        <ToggleButton value="7">7 Days</ToggleButton>
      </ToggleButtonGroup>
      <Button variant="outlined">Export PDF</Button>
    </Box>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <Tooltip formatter={(val) => `₹${val.toLocaleString()}`} />
        <Line type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </Box>
);

export default RevenueChart;
