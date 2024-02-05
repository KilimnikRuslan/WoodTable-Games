import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import './cart-block.css'
import { FaShoppingCart } from "react-icons/fa";
import { CartMenu } from '../cart-menu/cart-menu';
import { calcTotalPrice } from '../../utils';
import { ItemsInCart } from '../items-in-cart/items-in-cart';
import { useNavigate } from 'react-router-dom';

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
  const items = useSelector(state => state.cart.itemsInCart);
  const navigate = useNavigate();
  const totalPrice = calcTotalPrice(items)
  const handleGoToOrderClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate('/order');
  }, [navigate]);


  return (
    <div className='cart-block'>
        <ItemsInCart quantity={items.length}/>
        <FaShoppingCart className='cart-black__icon' onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
        { totalPrice > 0 ? <span className='cart-block__total-price'>{totalPrice}$</span> : null }
       {isCartMenuVisible && <CartMenu onClick={ handleGoToOrderClick }/>}
    </div>
  );
};