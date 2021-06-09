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
import IconButton from '@material-ui/core/IconButton';

import INTERNAL_LINKS from "../../enums/InternalLinks";

// components
import Accounts from '../../pages/Accounts';

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
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
          </Route>
          <Route path={INTERNAL_LINKS.ACCOUNTS}>
            <Accounts />
          </Route>
          <Route path={INTERNAL_LINKS.HOME}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}