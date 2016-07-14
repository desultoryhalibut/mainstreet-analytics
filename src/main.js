import React from 'react';
import ReactDOM from 'react-dom';
import SampleComponent from './SampleComponent';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(SampleComponent),
    document.getElementById('mount')
  );
});