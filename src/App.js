import React from 'react'
import useAuthCheck from './hooks/useAuthCheck';
import Main from './Main';

function App() {
  useAuthCheck();
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
