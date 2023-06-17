import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Mappage from './Mappage';
import Algeria from './Algeria';
import Travelplan from './Travelplan';
import reportWebVitals from './reportWebVitals';
import Page from './page/page.jsx';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Page />,
  },
  {
    path: '/Mappage',
    element: <Mappage />,
  },
  {
    path: '/algeria',
    element: <Algeria />,
  },
  {
    path: '/travelplan',
    element: <Travelplan />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
