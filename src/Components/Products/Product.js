import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import { getProducts } from '../../fetchData/Repository';
import styles from './Products.module.css';
import Popup from 'reactjs-popup';
import Footer from '../Footer/Footer';
const Product = () => {
  const [cart, addCart] = useState([]);
  const [prices, addPrices] = useState(0);
  const [products, setProducts] = useState([]);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(await getProducts());
    };
    fetchProducts();
  }, [setProducts]);
  function addItem(product) {
    addCart(prevItem => {
      return [...prevItem, product];
    });

    addPrices(prevPrice => {
      return prevPrice + product.Price * qty;
    });
  }
  const handleQty = count => {
    setQty(count);
  };
  return (
    <div className=' container'>
      {products.map((product, index) => (
        <ProductItem
          product={product}
          key={index}
          id={index}
          add={addItem}
          qty={handleQty}
        />
      ))}
      <div className={styles.border}>
        <Popup
          modal
          trigger={
            <button type='button' className={styles.check}>
              CHECKOUT
            </button>
          }
        >
          <p className={styles.price}>Total Price of the items: {prices} </p>
          <p className={styles.trans}>Transaction Sucessful</p>
        </Popup>

        <h3>Qty {cart.length}</h3>
        <h3>Total {prices} </h3>
      </div>
      <Footer />
    </div>
  );
};
export default Product;
