
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/store"

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);


// 在redux state更新的时候页面不刷新数据，只能强制render一下，重新渲染数据
store.subscribe(() => {
    root.render(<App />);
})