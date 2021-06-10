import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { AccountCircle, Lock } from '@material-ui/icons';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';

import { setUserSession } from '../../utils/auth';

import { login } from '../../api/module/login';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: 200,
    },
    display: 'flex',
    margin: '3rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(1),
  },
  margin: {
    marginTop: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '23ch',
  },
}));

export default function Login() {
  const [userName, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const classes = useStyles();

  const validateLogin = async (e) => {
    try {
      e.preventDefault();
      let data = {
        user_name: userName,
        password: password
      }
      const response = await login(data);
      console.log(response)
      if (response.status === 200) {
        setUserSession(response.data.data);
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName)
    console.log(password)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Typography className={classes.title} variant="h1" component="h2">
        Menelao Mc
      </Typography>

      <form className={classes.root} onSubmit={validateLogin} autoComplete="off">
        <FormControl>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                onChange={(e) => setUsername(e.target.value)}
                value={userName}
                label="Nombre de usuario" />
            </Grid>
          </Grid>
        </FormControl>
        <FormControl>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <Lock />
            </Grid>
            <Grid item>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
        </FormControl>

        <input className={classes.margin} type="submit" color="primary" value="Ingresar" />
      </form>
    </>
  );
}