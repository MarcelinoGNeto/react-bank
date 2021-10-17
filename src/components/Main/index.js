import React, { useRef } from 'react';
import './styles.css'
import Button from '@material-ui/core/Button';


const Main = () => {

const minhaRef = useRef();
const focusInput = () => {
  minhaRef.current.focus();
}

  return (
    <div className="Main">
      <ul>
        <Button variant="contained" color="primary" onClick={focusInput}>
          Botão no input
        </Button>
      </ul>
      <ul>
        <label>
          Valor: 
        <input type="number" ref={minhaRef} />
        </label>
      </ul>
    </div>
  );
};

export default Main;