import React from 'react';
import HomeTemplate from '../components/home/HomeTemplate';
import Header from '../components/base/Header';
import HomeLayout from '../components/home/HomeLayout';
import HomeReponsive from '../components/home/HomeReponsive';
import { Route } from 'react-router-dom';
import ProductsPage from './ProductsPage';

export type HomePageProps = {};

function HomePage(props: HomePageProps) {
  return (
    <HomeTemplate>
      <Header />
      <HomeReponsive>
        <HomeLayout
          main={
            <Route path={['/', '/products']} component={ProductsPage} exact />
          }
        />
      </HomeReponsive>
    </HomeTemplate>
  );
}

export default HomePage;
