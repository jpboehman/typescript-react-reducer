import React from 'react';
import './App.css';
import { TextField, Button, List, ListItem, Box } from '@material-ui/core'

import { Counter } from './components/Counter'

function App() {
  return (
    <div>
      {/* When passing non-string type props we can use {}! */}
      <Counter incrementStep={2} decrementStep={1} initialCount={5}/>
    </div>
  );
}

export default App;
