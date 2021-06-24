import React from 'react';
import Header from './components/header/header';
// import BottomNavigation from './components/footer/footer';
import Grid from '@material-ui/core/Grid';
// import Footer from '../src/components/footer/footer'
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import CurrentCategory from './components/storefront/current-category';
import Products from '../src/components/storefront/products'



function App() {
  return (
    <Provider store={store}>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Header />

        </Grid>
        <Grid item md={12}>
          <CurrentCategory />
          <main>
            <h1>Shop around</h1>
            <Products />
          </main>
        </Grid>
        <Grid item md={3}>
          {/* <BottomNavigation> */}
          {/* <Footer /> */}
          {/* </BottomNavigation> */}
        </Grid>
      </Grid>
    </Provider>
  );
}

export default App;
