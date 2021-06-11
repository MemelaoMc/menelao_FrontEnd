import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSnackbar } from 'notistack';
import { LinearProgress } from '@material-ui/core';

import CustomButton from '../../components/CustomButton';
import INTERNAL_LINKS from '../../enums/InternalLinks';

import { post } from '../../api/module/accounts';

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
  },
  backBtn: {
    width: '80%',
    marginTop: '1rem'
  },
  centerBtn: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem'
  },
  progress: {
    marginTop: '1rem',
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState(null);
  const [password_1, setPassword_1] = useState(null);
  const [password_2, setPassword_2] = useState(null);
  const [responsable, setResponsable] = useState(null);
  const [responsable_email, setResponsable_Email] = useState(null);
  const [progress, setProgress] = useState(null);

  const onFinish = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      let data = {
        email,
        password_1,
        password_2,
        responsable,
        responsable_email,
        progress
      }
      const response = await post(data);
      if (response.status === 200) {
        enqueueSnackbar('Se ha almacenado correctamente!', { variant: 'success' });
        setIsLoading(false);
      }
    }
    catch (err) {
      console.log(err);
      enqueueSnackbar('No se ha podido guardar los datos!', { variant: 'error' });
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className={classes.container}>
        <Typography variant="h2" gutterBottom>
          Agregar Cuenta
        </Typography>
        <form className={classes.root} onSubmit={onFinish} noValidate autoComplete="off">
          <div>
            <TextField
              style={{ width: '100%' }}
              required
              id="standard-required"
              label="Correo electronico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="standard-password-input"
              label="Contraseña 1"
              autoComplete="off"
              value={password_1}
              onChange={(e) => setPassword_1(e.target.value)}
            />
            <TextField
              id="standard-password-input"
              label="Contraseña 2"
              autoComplete="off"
              value={password_2}
              onChange={(e) => setPassword_2(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="standard-password-input"
              label="Persona responsable"
              autoComplete="off"
              value={responsable}
              onChange={(e) => setResponsable(e.target.value)}
            />
            <TextField
              id="standard-password-input"
              label="Correo responsable"
              autoComplete="off"
              value={responsable_email}
              onChange={(e) => setResponsable_Email(e.target.value)}
            />
          </div>
          <TextField
            style={{ width: '100%' }}
            id="standard-password-input"
            label="Progreso"
            autoComplete="off"
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
          />
          <div className={classes.progress}>
            {isLoading ?
              <LinearProgress />
              : null
            }
          </div>
          <div className={classes.centerBtn}>
            <CustomButton valueText="Guardar" />
          </div>
        </form>
        <div className={classes.backBtn}>
          <Button href={INTERNAL_LINKS.ACCOUNTS} variant="contained" color="secondary">
            Volver
        </Button>
        </div>
      </div>
    </>
  );
}