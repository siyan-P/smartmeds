import React from 'react';
import './Footer.css';
import Card from '../Card/Card'
function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>Services</p>
          </div>
          <div className="list">
            <ul>
              <li>HealthCare</li>
              <li>Automation</li>
              <li>E-commerce</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About SmartMeds</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className="footer">
        <p>Other Informations</p>
        <p>All Rights Recived- © 2023 SmartMeds</p>
      </div>
    </div>
  );
}

export default Footer;