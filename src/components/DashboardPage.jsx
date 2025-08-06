import React from 'react';
import './DashboardPage.css';
import pencilIcon from '../assets/pencil.svg';
const DashboardPage = () => {
  const [inputValue, setInputValue] = useState('');
  const handleShowValue = () => {
    alert(`You typed: ${inputValue}`);
  };

  const handleClear = () => {
    setInputValue('');
  };
  return (
    <h1>dashboard</h1>
  );
};

export default DashboardPage;
