import React from 'react';

import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="not-found-content">
              <h1 className="error-code">404</h1>
              <h2 className="error-title">Oops! Page Not Found</h2>
              
              <div className="developer-message">
                <i className="bi bi-exclamation-triangle-fill warning-icon"></i>
                <p className="developer-quote">
                  "You didn't pay the developer, that's why your site is blocked. 
                  Kindly pay the developer to unlock this page! 💸"
                </p>
                
              </div>
              
              <div className="error-description">
                <p>The page you're looking for seems to have wandered off into the digital void. 
                Don't worry, even the best travel guides sometimes take wrong turns!</p>
              </div>
              
            
              
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
