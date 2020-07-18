import React, { useState } from 'react';
import styles from './Products.module.css';
import CountUp from 'react-countup';

const ProductItem = ({ product, add }) => {
  const [item, setItem] = useState([]);
  const [count, setCount] = useState(0);
  const [priceQuantity, setPriceQuantity] = useState(0);
  function increase() {
    setCount(count + 1);
    setItem(prevProduct => {
      return [...prevProduct, product];
    });
    setPriceQuantity(prev => {
      return prev + product.Price;
    });
  }

  function decrease(id) {
    if (count >= 1) setCount(count - 1);
    setItem(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });

    setPriceQuantity(prev => {
      return prev - product.Price;
    });
  }
  function handleChange(event) {
    const no = event.target.value;
    setCount(no);
  }
  //console.log(priceQuantity);
  //console.log(item);
  return (
    <div>
      <div>
        <div className={styles.left}>
          <img className={styles.image} src={product.ImgURL} alt='images' />
          <p> {product.OfferText}</p>
        </div>

        <h4 className='card-title'>{product.BrandName}</h4>
        <p className='card-text'>{product.ProductName}</p>
        <p>{product.Quantity}</p>

        <p>
          MRP&nbsp;
          <CountUp start={product.MRP} end={product.MRP} separator=',' />
        </p>

        <strong>
          <p>
            Rs&nbsp;
            <CountUp start={product.Price} end={product.Price} separator=',' />
          </p>
        </strong>

        <button
          className={styles.add}
          onClick={() => {
            add(product);
          }}
        >
          ADD CART
        </button>

        <button onClick={increase} className={styles.increase}>
          +
        </button>
        <input
          onChange={handleChange}
          className={styles.input}
          type='text'
          size='1'
          value={count}
        />
        <button onClick={decrease} className={styles.decrease}>
          -
        </button>
      </div>

      <hr />
    </div>
  );
};
export default ProductItem;
