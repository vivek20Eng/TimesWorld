import React from 'react';
import { Github } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              {/* Left section */}
              <div className=" mb-md-0">
                <h5 className="text-light">Times World</h5>
              </div>

              {/* Middle section */}
              <div className=" mb-md-0">
                <div className="d-flex align-items-center justify-content-center">
                  <a 
                    href="https://github.com/vivek20Eng/TimesWorld.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                  >
                    <Github className="me-2" size={24} />
                    <span>GitHub Repository</span>
                  </a>
                </div>
              </div>

              {/* Right section */}
              <div className="text-center text-md-end">
                <a href="mailto:vivek20sv@gmail.com" className="text-white text-decoration-none">
                  vivek20sv@gmail.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;