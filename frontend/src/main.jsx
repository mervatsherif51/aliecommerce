import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import './i18n';
import App from "./App.jsx";
 
import { Provider } from "react-redux";
import { store } from "./redux/store.js";



// axios.defaults.baseURL = 'http://localhost:6000/'
//  axios.defaults.headers.common['Accept-Language'] = localStorage.getItem('lang') || 'en';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
