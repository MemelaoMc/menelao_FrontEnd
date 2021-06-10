import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Login from './pages/Login';
import Content from './containers/Content';

import { IsLoggedIn } from './utils/auth';

function App() {
  const [IsLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(IsLoggedIn());
  }, []);

  return (
    <React.Fragment>
      {IsLogged == true ?
        <Content />
        :
        <Login />
      }
    </React.Fragment>
  );
}

export default App;
