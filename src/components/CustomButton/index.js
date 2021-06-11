import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#3f51b5',
    padding: '0 10px',
    color: 'white',
    borderRadius: '0.4rem',
    '&:hover': {
      background: '#3f51b5ab'
    }
  },
}));


export default function CustomButton({ valueText }) {
  const classes = useStyles();

  return (
    <Input
      disableUnderline
      inputComponent="input"
      className={classes.root}
      type="submit"
      value={valueText}
    />
  )
}