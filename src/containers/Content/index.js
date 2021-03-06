import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { LogOut } from '../../utils/auth';

import INTERNAL_LINKS from "../../enums/InternalLinks";

// components
import Accounts from '../../pages/Accounts';
import Home from '../../pages/Home';
import AccountsForm from '../../containers/AccountsForm';

import './style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  color: {
    color: 'white !important'
  }
}));

export default function Content() {
  const classes = useStyles();
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className="btn-link" to={INTERNAL_LINKS.HOME}>Home</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link className="btn-link" to={INTERNAL_LINKS.ACCOUNTS}>Accounts</Link>
          </Typography>
          <Button className={classes.color} onClick={() => LogOut()}>Cerrar Session</Button>
        </Toolbar>
      </AppBar>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path={INTERNAL_LINKS.HOME}>
            <Home />
          </Route>
          <Route exact path={INTERNAL_LINKS.ACCOUNTS}>
            <Accounts />
          </Route>
          <Route exact path={INTERNAL_LINKS.ACCOUNTS_FORM}>
            <AccountsForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}