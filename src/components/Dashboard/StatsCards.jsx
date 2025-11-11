// src/components/Dashboard/StatsCards.jsx
import { Grid, Card, CardContent, Typography } from '@mui/material';

const stats = [
  {
    label: "Today's Sale",
    value: "$12,426",
    change: "+36%",
    color: 'green',
  },
  {
    label: 'Total Sales',
    value: '$2,38,485',
    change: '-14%',
    color: 'red',
  },
  {
    label: 'Total Customers',
    value: '33,493',
    change: '+36%',
    color: 'green',
  },
];

const StatsCards = () => (
  <Grid container spacing={2}>
    {stats.map((stat, idx) => (
      <Grid item xs={12} sm={4} key={idx}>
        <Card sx={{ boxShadow: 1 }}>
          <CardContent>
            <Typography variant="subtitle2" color="textSecondary">{stat.label}</Typography>
            <Typography variant="h6" mt={1}>{stat.value}</Typography>
            <Typography variant="body2" sx={{ color: stat.color === 'red' ? 'error.main' : 'green' }}>
              {stat.change}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default StatsCards;
