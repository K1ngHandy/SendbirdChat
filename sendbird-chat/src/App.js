import React from 'react';
import { App as SendbirdApp } from 'sendbird-uikit';
import 'sendbird-uikit/dist/index.css';

import './App.css';

const APP_ID = 'FB74FE74-5EFC-4650-A15E-A72CD124DE29';
const USER_ID = 'Demo User';

function App() {
  return (
    <div className="App">
      <h1>Hello App User</h1>
      <SendbirdApp appId={APP_ID} userId={USER_ID} />
    </div>
  );
}

export default App;
