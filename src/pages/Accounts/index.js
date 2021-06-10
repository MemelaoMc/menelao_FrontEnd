import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import INTERNAL_LINKS from "../../enums/InternalLinks";
import CustomTable from '../../components/CustomTable';

import { getAll } from '../../api/module/accounts';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '3rem',
  },
  btn: {
    marginBottom: '1rem'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  table: {
    minWidth: 1000,
  },
}));

export default function Accounts() {
  const [dataSource, setDataSource] = useState(null);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const getDataSource = async () => {
    try {
      const response = await getAll();
      setDataSource(response.data);
      console.log(response.data)
    }
    catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getDataSource();
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Button href={INTERNAL_LINKS.ACCOUNTS_FORM} className={classes.btn} variant="contained" color="primary">
        Agregar Nueva Cuenta
      </Button>
      {dataSource &&
        <CustomTable dataSource={dataSource} />
      }
    </div>
  )
}