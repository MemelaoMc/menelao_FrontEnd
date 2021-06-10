import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  container: {
    display: 'flex',
    margin: '3rem',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            style={{ width: '100%' }}
            required
            id="standard-required"
            label="Correo electronico"
          />
        </div>
        <div>
          <TextField
            id="standard-password-input"
            label="Contraseña 1"
            autoComplete="off"
          />
          <TextField
            id="standard-password-input"
            label="Contraseña 2"
            autoComplete="off"
          />
        </div>
        <div>
          <TextField
            id="standard-password-input"
            label="Persona responsable"
            autoComplete="off"
          />
          <TextField
            id="standard-password-input"
            label="Correo responsable"
            autoComplete="off"
          />
        </div>
        <TextField
          style={{ width: '100%' }}
          id="standard-password-input"
          label="Progreso"
          autoComplete="off"
        />
      </form>
    </div>
  );
}