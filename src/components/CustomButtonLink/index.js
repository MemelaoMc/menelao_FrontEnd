import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


export default function CustomButtonLink({ text, route, danger }) {
  const useStyles = makeStyles((theme) => ({
    btnLink: {
      background: danger ? '#ff3f3f' : '#3f51b5',
      padding: '5px 10px',
      color: 'white',
      borderRadius: '0.4rem',
      textDecoration: 'none',
      fontWeight: 500,
      '&:hover': {
        background: danger ? '#ff7373' : '#3f51b5ab'
      }
    },
  }));

  const classes = useStyles();

  return (
    <Link className={classes.btnLink} to={route}>{text}</Link>
  )
}