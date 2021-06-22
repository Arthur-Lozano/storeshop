import './App.css';
import Header from './components/theme/header';
import React from 'react';
// import { Container } from '@material-ui/core';
import Card from './components/Cards/Cards';
import BottomNavigation from './components/theme/footer';
import Grid from '@material-ui/core/Grid';
import Footer from '../src/components/theme/foot'
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './store';
import './App.css';


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
              <Card />
              <h1>To show the body</h1>
              <Provider store={store}>
                <Counter />
              </Provider>
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
