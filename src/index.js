import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

