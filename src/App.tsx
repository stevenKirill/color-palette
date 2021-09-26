import React, { useState, useEffect } from 'react';
import './App.css';
import { IColor } from './interfaces/colors';
import { Wrapper, ColorsWrapper } from './App.styled';
import { ThemeProvider } from 'styled-components';
import Color from './components/Color';
import { colors } from './consts/colors';

function App() {
  const [background,setBackgound] = useState<IColor>('#264653');
  const [currentColor,setCurrentColor] = useState<IColor | null>('#264653');
  const theme = {
    fontSize: '20px',
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentColor(null);
    },3000)
    return () => clearTimeout(timer);
  },[currentColor])

  const pickColor = (color: IColor): void => {
      setBackgound(color);
      setCurrentColor(color);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Wrapper bg={background} fontSize="20px">
          {currentColor !== null && <h1>Copied {currentColor}</h1>}
          <ColorsWrapper>
            {colors.map((color: IColor,idx) => {
              return <Color key={idx} color={color} pickColor={pickColor}/>
            })}
          </ColorsWrapper>
        </Wrapper>
      </div>
    </ThemeProvider>
  );
}

export default App;
