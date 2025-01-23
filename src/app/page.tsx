import Image from "next/image";
import * as React from 'react';
import Button from "@mui/material/Button";
import { Container, Grid, Paper, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper>
            <Typography variant="h6" gutterBottom>
              Chart
            </Typography>
            <Image src="/chart-placeholder.png" alt="Chart" width={600} height={400} />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper>
            <Typography variant="h6" gutterBottom>
              Recent Deposits
            </Typography>
            <Typography variant="h4">$3,024.00</Typography>
            <Typography color="textSecondary">on 15 March, 2023</Typography>
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h6" gutterBottom>
              Recent Orders
            </Typography>
            <ul>
              <li>Order #1</li>
              <li>Order #2</li>
              <li>Order #3</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Hello World
      </Button>
      <Typography variant="body1" align="center" style={{ marginTop: '20px' }}>
        Testing
      </Typography>
    </Container>
  );
}
