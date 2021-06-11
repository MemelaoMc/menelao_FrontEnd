import React, { useState, useEffect } from 'react';
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
      {IsLogged === true ?
        <Content />
        :
        <Login />
      }
    </React.Fragment>
  );
}

export default App;
