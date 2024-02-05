import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HomePage } from './pages/home-page/home-page';
import { Header } from './components/header/header';
import { store } from './redux';
import { OrderPage } from './pages/order-page/order-page';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;