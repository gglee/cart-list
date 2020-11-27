import React from 'react';
import HomeTemplate from '../components/home/HomeTemplate';
import Header from '../components/base/Header';
import HomeLayout from '../components/home/HomeLayout';
import { Route } from 'react-router-dom';
import ProductsPage from './ProductsPage';

export type HomePageProps = {};

function HomePage(props: HomePageProps) {
  return (
    <HomeTemplate>
      <Header />
      <HomeLayout
        main={
          <Route path={['/', '/products']} component={ProductsPage} exact />
        }
      />
    </HomeTemplate>
  );
}

export default HomePage;
