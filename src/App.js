import React from 'react';
import { Container } from './componnents/styles/container.styled';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './componnents/styles/Global';

import Header from './componnents/Header';
import Content from './componnents/Content';
import { Card } from './componnents/Card';
import Footer from './componnents/Footer';

const theme = {
  colors: {
    header: '#ebfbff',
    body:'#fff',
    footer: '#003333'
  },
  mobile:'768px'
}
const App = ()  => {
  return (
    <ThemeProvider theme={theme}>
     <>
    <GlobalStyles />
    <Header />
    <Container>
     {Content.map((item, index) => (
    <Card key = {index} item = {item} />
     ))}
    </Container>
    <Footer/>
   </>
   </ThemeProvider>
  );
};


export default App;
