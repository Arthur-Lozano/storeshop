import React from 'react';
import Header from './components/header/header';
import BottomNavigation from './components/theme/footer';
import Grid from '@material-ui/core/Grid';
import Footer from '../src/components/theme/foot'
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import CurrentCategory from './components/storefront/current-category';



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
          </main>
        </Grid>
        <Grid item md={3}>
          <BottomNavigation>
            <Footer />
          </BottomNavigation>
        </Grid>
      </Grid>
    </Provider>
  );
}

export default App;
