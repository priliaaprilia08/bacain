import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="main-footer">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h1 className="list-unstyled">
              <li>BACAIN</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Consumer</h4>
            <ui className="list-unstyled">
              <li>SD/MI</li>
              <li>SMP/MTS</li>
              <li>SMA/SMK</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Web APP</h4>
            <ui className="list-unstyled">
              <li>Service Workers</li>
              <li>React Js</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Kampus Merdeka | All rights reserved |
            Terms Of Service | Privacy | Education
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;