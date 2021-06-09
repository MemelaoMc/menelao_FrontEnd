import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 1000,
  },
}));

const CustomTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Correo Electronico</TableCell>
            <TableCell align="right">Contraseña 1</TableCell>
            <TableCell align="right">Contraseña 2</TableCell>
            <TableCell align="right">Responsable</TableCell>
            <TableCell align="right">Correo Responsable</TableCell>
            <TableCell align="right">Progreso</TableCell>
            <TableCell align="right">Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              angel@gmail.com
            </TableCell>
            <TableCell align="right">123434</TableCell>
            <TableCell align="right">12323</TableCell>
            <TableCell align="right">El</TableCell>
            <TableCell align="right">Elmismo@gmail.com</TableCell>
            <TableCell align="right">2 Dias</TableCell>
            <TableCell align="right">2021-02-30</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CustomTable;