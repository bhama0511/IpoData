// src/LandingPage.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { fetchIpoData } from '../redux/ipoSlice';

const LandingPage = () => {
  const dispatch = useDispatch();
  const { ipoData, loading, error } = useSelector((state) => state.ipo);

  useEffect(() => {
    // Fetch IPO data once
    dispatch(fetchIpoData());
  }, [dispatch]);

  // Filter IPO data for DaysLeft = 0
  const filteredData = ipoData.filter((ipo) => ipo.DaysLeft === 0);

  return (
    <div className="landing-page">
      <Typography variant="h4" gutterBottom>
        IPO Closing Today
      </Typography>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>GMP</strong></TableCell>
                <TableCell><strong>Subscription</strong></TableCell>
                <TableCell><strong>Bhama's Rating</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((ipo, index) => (
                  <TableRow key={index}>
                    <TableCell>{ipo.name}</TableCell>
                    <TableCell>₹{ipo.GMP}</TableCell>
                    <TableCell>{ipo.Subscription}x</TableCell>
                    <TableCell>{ipo.BhamasNumber}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    No data available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default LandingPage;
