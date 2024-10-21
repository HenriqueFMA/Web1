// App.js
import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0); // Estado do contador
  const [isRunning, setIsRunning] = useState(true); // Estado do contador (se está rodando ou não)

  useEffect(() => {
    let interval; // Variável para armazenar o intervalo

    if (isRunning) {
      // Se o contador estiver rodando
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1); // Incrementa o contador a cada 1000ms (1 segundo)
      }, 1000);
    }

    // Limpa o intervalo ao desmontar o componente ou quando o contador é pausado
    return () => clearInterval(interval);
  }, [isRunning]);

  const stopCounter = () => {
    setIsRunning(false); // Para o contador
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contador: {count}</h1>
      <button style={styles.button} onClick={stopCounter}>Parar Contador</button>
    </div>
  );
};

// Estilos em objeto
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: 'white',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

// Efeito hover para o botão
styles.buttonHover = {
  backgroundColor: '#0056b3',
};

export default App;
