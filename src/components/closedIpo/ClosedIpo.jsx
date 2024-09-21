import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import './ClosedIpo.css'; // for custom styling
import { useSelector, useDispatch } from 'react-redux';
import { fetchIpoData } from '../../redux/ipoSlice'; // Import the action to fetch IPO data

const ClosedIpo = () => {
  const dispatch = useDispatch();
  
  // Get the IPO data and status from the Redux store
  const ipoData = useSelector((state) => state.ipo.ipoData);
  const ipoStatus = useSelector((state) => state.ipo.status);

  useEffect(() => {
    // Fetch IPO data only if it's in 'idle' status
    if (ipoStatus === 'idle') {
      dispatch(fetchIpoData());
    }
  }, [ipoStatus, dispatch]);

  // Filter closed IPOs
  const closedIpo = ipoData.filter(ipo => (ipo.DaysLeft < 0 && ipo.DaysLeft > -7));

  return (
    <div className="OngoingIpo-page">
      <Typography variant="h4" align="center" gutterBottom style={{ backgroundColor: '#D3D3D3', padding: '10px', color: '#FFFFFF' }}>
        Closed IPO's
      </Typography>
      <TableContainer component={Paper} style={{ backgroundColor: '#000000', color: '#FFFFFF', padding: '10px', borderColor: '#6A0DAD', borderWidth: '2px', borderStyle: 'solid' }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold', borderColor: '#6A0DAD' }}>Name</TableCell>
              <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold', borderColor: '#6A0DAD' }}>Subscription</TableCell>
              <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold', borderColor: '#6A0DAD' }}>GMP</TableCell>
              <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold', borderColor: '#6A0DAD' }}>Bhams Rating</TableCell>
              <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold', borderColor: '#6A0DAD' }}>Issue Size</TableCell>
              <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold', borderColor: '#6A0DAD' }}>Closing Date</TableCell>
              <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold', borderColor: '#6A0DAD' }}>SME</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {closedIpo.map((ipo, index) => (
              <TableRow key={index} style={{ borderColor: '#6A0DAD' }}>
                <TableCell style={{ color: '#FFFFFF', borderColor: '#6A0DAD' }}>{ipo.name}</TableCell>
                <TableCell style={{ color: '#FFFFFF', borderColor: '#6A0DAD' }}>{ipo.Subscription}</TableCell>
                <TableCell style={{ color: '#FFFFFF', borderColor: '#6A0DAD' }}>{ipo.GMP}</TableCell>
                <TableCell style={{ color: '#FFFFFF', borderColor: '#6A0DAD' }}>{ipo.rating}</TableCell>
                <TableCell style={{ color: '#FFFFFF', borderColor: '#6A0DAD' }}>{ipo.issueSize}</TableCell>
                <TableCell style={{ color: '#FFFFFF', borderColor: '#6A0DAD' }}>{ipo.closingDate}</TableCell>
                <TableCell style={{ color: '#FFFFFF', borderColor: '#6A0DAD' }}>{ipo.sme}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ClosedIpo;
