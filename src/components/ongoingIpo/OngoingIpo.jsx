import React , {useState, useEffect} from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import './OngoingIpo.css'; // for custom styling
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIpoData } from '../../redux/ipoSlice';

const OngoingIpo = () => {

  const dispatch = useDispatch();

  const ipoData = useSelector((state) => state.ipo.ipoData);
  const ipoStatus = useSelector ((state) => state.ipo.status);

  useEffect(() => {
    if(ipoStatus === 'idle'){
      dispatch(fetchIpoData());
    }
    
    
  }, [ipoStatus, dispatch]
);

const ongoingIpo = ipoData.filter(ipo => (ipo.DaysLeft>=0 && ipo.DaysPast>=0));

  return (
    <div className="OngoingIpo-page">
      <Typography variant="h4" align="center" gutterBottom style={{ backgroundColor: '#2ec4b6', padding: '10px', color: '#FFFFFF' }}>
        Ongoing IPO's
      </Typography>
      <TableContainer component={Paper} style={{ backgroundColor: '#2ec4b6', color: '#FFFFFF', padding: '10px', borderColor: '#6A0DAD', borderWidth: '2px', borderStyle: 'solid' }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow style={{ backgroundColor: '#ff9f1c'}}>
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
            {ongoingIpo.map((ipo, index) => (
              <TableRow key={index} style={{ borderColor: '#6A0DAD' }}>
                <TableCell style={{ color: '#FFFFFF', borderColor: '#6A0DAD' }}>{ipo.name}</TableCell>
                <TableCell style={{ color: '#FFFFFF', borderColor: '#6A0DAD' }}>{ipo.Subscription} X</TableCell>
                <TableCell style={{ color: '#FFFFFF', borderColor: '#6A0DAD' }}>{ipo.GMP}%</TableCell>
                <TableCell style={{ color: '#FFFFFF', borderColor: '#6A0DAD' }}>{ipo.BhamasNumber}/10</TableCell>
                <TableCell style={{ color: '#FFFFFF', borderColor: '#6A0DAD' }}>{ipo.IpoSize}</TableCell>
                <TableCell style={{ color: '#FFFFFF', borderColor: '#6A0DAD' }}>{ipo.ClosingDate}</TableCell>
                <TableCell style={{ color: '#FFFFFF', borderColor: '#6A0DAD' }}>Yes</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OngoingIpo;
