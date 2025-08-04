import logo from './logo.svg';
import './App.css';
import { EmployeesData } from './Employee';
import EmployeesList from './EmployeesList';
import { useState } from 'react';
import ThemeContext from './ThemeContext';

function App() {

  const Employees = EmployeesData;
  const [theme, setTheme] = useState('light');
  return (
    <div className={theme}>
    <ThemeContext.Provider value={theme}>
      <div>
        <h3>SELECT A THEME </h3>
        <select onChange={(e) => setTheme(e.target.value)} value={theme}>
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
        </select>

      </div>
      <EmployeesList employees={Employees} />
    </ThemeContext.Provider>
    </div>
  );
  
}

export default App;


