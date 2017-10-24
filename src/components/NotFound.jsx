import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = (props) => {
  return (
    <div className=" container">
      <div className="jumbotron">
        <h1 className="display-3 text-center text-warning">404</h1>
        <p className="lead text-center">Page not found!</p>
        <Link to='/'>
            Go to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
