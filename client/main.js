import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './components/app.component';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(AppComponent),
    document.getElementById('mainstreet')
  );
});
