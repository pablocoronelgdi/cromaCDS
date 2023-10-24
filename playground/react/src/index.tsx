import React from 'react';
import ReactDOM from 'react-dom/client';
import {Text} from '@cromaui/react'

//const url = 'https://images.unsplash.com/photo-1682688759457-52bcb4dc1578?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <div>
    <Text component='h1'> Hola </Text>
  </div>
);



