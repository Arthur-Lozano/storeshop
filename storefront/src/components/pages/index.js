import './App.css';
import Header from './components/theme/header.js';
import React from 'react';
// import { Container } from '@material-ui/core';
import Card from './components/Cards/Cards.js';
import BottomNavigation from './components/theme/footer.js';
import Grid from '@material-ui/core/Grid.js';
import Footer from '../src/components/theme/foot.js'
import Electronics from './electronics.js';
import Food from './food.js';



function App() {
  return (
    <>
      <div>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Header />
          </Grid>
          <Grid item md={12}>
            <main>
              <Electronics />
              <Food />

              <Card />
              <h1>To show the body</h1>
            </main>
          </Grid>
          <Grid item md={3}>
            <BottomNavigation>
              <Footer />
            </BottomNavigation>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;