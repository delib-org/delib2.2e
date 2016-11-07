import React from 'react';

const FooterNavBar = (props) => {
  return(
        <nav className="footer red">
          <div className="nav-wrapper">
            <ul>
              <li className="footer-nav-item"><a href="#">Feed</a></li>
              <li className="footer-nav-item"><a href="#">Manager</a></li>
              <li className="footer-nav-item"><a href="#">Member</a></li>
              <li className="footer-nav-item active"><a href="#">Public</a></li>
            </ul>
          </div>
        </nav>
  )
}

export default FooterNavBar;
