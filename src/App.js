import React from 'react';
import './index.css'; 

function App() {
  return (
    <div className="App">
      <div id="home-page">
        <div id="header">
          <h3>Employee Directory</h3>
        </div>
        <div id="search-bar">
          <input type="text" />
        </div>
        <div id="employee-list">
          
        
          <div className="employee-list-item">
            <img
              className="profile-img"
              src="https://www.shutterstock.com/image-vector/male-figure-man-boy-profile-600w-1647374107.jpg"
              alt=""
            />
            <div id="profile-info">
              <div className="profile-name">James King</div>
              <div className="profile-title">President and CEO</div>
            </div>
          </div>
        
          <div className="employee-list-item">
            <img
              className="profile-img"
              src="https://www.shutterstock.com/image-vector/male-figure-man-boy-profile-600w-1647374107.jpg"
              alt=""
            />
            <div id="profile-info">
              <div className="profile-name">Julie Taylor</div>
              <div className="profile-title">VP of Marketing</div>
            </div>
          </div>

          <div className="employee-list-item">
            <img
              className="profile-img"
              src="https://www.shutterstock.com/image-vector/male-figure-man-boy-profile-600w-1647374107.jpg"
              alt=""
            />
            <div id="profile-info">
              <div className="profile-name">Eugene Lee</div>
              <div className="profile-title">CFO</div>
            </div>
          </div>

          <div className="employee-list-item">
            <img
              className="profile-img"
              src="https://www.shutterstock.com/image-vector/male-figure-man-boy-profile-600w-1647374107.jpg"
              alt=""
            />
            <div id="profile-info">
              <div className="profile-name">John Williams</div>
              <div className="profile-title">VP of Engineering</div>
            </div>
          </div>

          <div className="employee-list-item">
            <img
              className="profile-img"
              src="https://www.shutterstock.com/image-vector/male-figure-man-boy-profile-600w-1647374107.jpg"
              alt=""
            />
            <div id="profile-info">
              <div className="profile-name">Ray Moore</div>
              <div className="profile-title">VP of Sales</div>
            </div>
          </div>
          <div className="employee-list-item">
            <img
              className="profile-img"
              src="https://www.shutterstock.com/image-vector/male-figure-man-boy-profile-600w-1647374107.jpg"
              alt=""
            />
            <div id="profile-info">
              <div className="profile-name">Paul Jones</div>
              <div className="profile-title">QA Manager</div>
            </div>
          </div>
        </div>
      </div>
      <div id="employee-page">
        <div id="header">
          <h3>Employee</h3>
        </div>
        <div id="employee-profile">
          <div id="profile-contact-info">
            <img
              className="profile-img"
              src="https://www.shutterstock.com/image-vector/male-figure-man-boy-profile-600w-1647374107.jpg"
              alt=""
            />
            <div id="profile">
              <div className="profile-name">Julie Taylor</div>
              <div className="profile-title">VP of Marketing</div>
            </div>
          </div>
      
          <div id="contact-info">
            <div id="profile-contact">
              <div className="profile-name">Call Office</div>
              <div className="profile-title">617-000-002</div>
            </div>
            <img
              id="right-arrow"
              src="https://www.pngkit.com/png/detail/103-1039006_right-arrow-png-transparent-right-arrow-gray-right.png"
              alt=""
            />
          </div>
        
          <div id="contact-info">
            <div id="profile-contact">
              <div className="profile-name">Call Office</div>
              <div className="profile-title">617-000-002</div>
            </div>
            <img
              id="right-arrow"
              src="https://www.pngkit.com/png/detail/103-1039006_right-arrow-png-transparent-right-arrow-gray-right.png"
              alt=""
            />
          </div>
          <div id="contact-info">
            <div id="profile-contact">
              <div className="profile-name">Call Office</div>
              <div className="profile-title">617-000-002</div>
            </div>
            <img
              id="right-arrow"
              src="https://www.pngkit.com/png/detail/103-1039006_right-arrow-png-transparent-right-arrow-gray-right.png"
              alt=""
            />
          </div>
          <div id="contact-info">
            <div id="profile-contact">
              <div className="profile-name">Call Office</div>
              <div className="profile-title">617-000-002</div>
            </div>
            <img
              id="right-arrow"
              src="https://www.pngkit.com/png/detail/103-1039006_right-arrow-png-transparent-right-arrow-gray-right.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
