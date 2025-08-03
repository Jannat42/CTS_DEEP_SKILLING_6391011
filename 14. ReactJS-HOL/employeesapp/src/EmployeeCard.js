import Styles from './EmployeeCard.module.css';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function EmployeeCard(props) {
  const theme = useContext(ThemeContext); // 'dark' or 'light'

  return (
    <div className={`${Styles.Card} ${Styles[theme]}`}>
      <h3>{props.employee.name}</h3>
      <p>{props.employee.email}</p>
      <p>{props.employee.phone}</p>
      <p>
        <a href="#" className={`${Styles.btn} ${Styles[theme]}`}>Edit</a>
        <a href="#" className={`${Styles.btn} ${Styles[theme]}`}>Delete</a>
      </p>
    </div>
  );
}

export default EmployeeCard;
