import React, { useState } from 'react';
import './DashboardPage.css';
import pencilIcon from '../assets/pencil.svg';

const DashboardPage = () => {
  const [inputValue, setInputValue] = useState('');


  return (
    <div className='dashboard-container'>
      <h1 className='workspace'>Workspaces</h1>


      <div className="workspacecontainer">
        <div className="formcontainer">
          <button className="addworkspace">form</button>
        </div>
      </div>

       <div className="workspacecontainer">
        <div className="formcontainer">
          <button className="addworkspace">form</button>
        </div>
      </div>
       <div className="workspacecontainer">
        <div className="formcontainer">
          <button className="addworkspace">form</button>
        </div>
      </div>
       <div className="workspacecontainer">
        <div className="formcontainer">
          <button className="addworkspace">form</button>
        </div>
      </div>



    </div>
  );
};

export default DashboardPage;
