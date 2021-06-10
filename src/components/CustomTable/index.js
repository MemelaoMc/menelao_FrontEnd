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

const CustomTable = ({ dataSource }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Correo Electronico</TableCell>
            <TableCell align="right">Contraseña 1</TableCell>
            <TableCell align="right">Contraseña 2</TableCell>
            <TableCell align="right">Persona responsable</TableCell>
            <TableCell align="right">Correo Responsable</TableCell>
            <TableCell align="right">Progreso</TableCell>
            <TableCell align="right">Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataSource.map((item) => (
            <TableRow key={item._id}>
              <TableCell component="th" scope="row">
                {item.email}
              </TableCell>
              <TableCell align="right">{item.password_1}</TableCell>
              <TableCell align="right">{item.password_2}</TableCell>
              <TableCell align="right">{item.responsable}</TableCell>
              <TableCell align="right">{item.responsable_email}</TableCell>
              <TableCell align="right">{item.progress}</TableCell>
              <TableCell align="right">{item.date}</TableCell>
            </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CustomTable;