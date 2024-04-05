import Header from "./Header";
import React from "react";
import axios from 'axios';

import { useState, useEffect } from "react";


export default function HomePage() {

  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    getBookData();
  }, []);

  const getBookData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/books');
      setBookData(response.data);
      console.log(response)
      console.log(bookData.values)
    } catch (error) {
      console.error('Error fetching book data:', error);
    }
  };

  const addToCart = async (book_id, price) => {
    try {
      const cartUserData = {
        quantity: 1,
        price: price,
        book_id: book_id,
        user_id: 1
      };

      const response = await axios.post('http://localhost:8080/cart/add', cartUserData);
      console.log(response.data);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  }


  return (
    <div className="container">
        <Header/>
        <div style={{
            display: 'flex',
            justifyContent: "space-between",
            alignItems: 'center'
        }}>

          <div style={{marginLeft: '10.5%', marginTop: '1%'}}>
            <h2>
              Books
            </h2>
          </div>

          <div style={{marginRight: '10.5%', padding: '2%'}}>
            <select name="Sort" id="Sort" className="sort" style={{padding: '10%'}}>
              <option value="Sort By Relevence">Sort By Relevence</option>
              <option value="price">Price: Low to High</option>
              <option value="priced">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        <div style={{ paddingLeft: '11rem', paddingRight: '1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
          {bookData.map(item => (
            <div key={item.book_id} style={{ boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)', borderRadius: '3px', background: '#ffffff' }}>
              <div style={{ backgroundColor: '#f5f5f5', height: '55%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={`./images/${item.logo}`}
                  alt="Book Cover"
                  id="book"
                  style={{ marginLeft: '25%', marginRight: '25%', height: '100%', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.5s' }}
                  onMouseOver={e => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={e => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontWeight: '400', fontSize: 'large' }}>{item.name}</h3>
                  <h5 style={{ fontSize: '1.125rem', fontWeight: '500', color: '#333333' }}>{item.author}</h5>
                </div>
                <p style={{ color: '#666666' }}>{item.description}</p>
                <p style={{ color: '#666666' }}>
                  <span style={{ fontWeight: 'bold' }}>Rs. {item.price}</span>
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button onClick={() => addToCart(item.book_id, item.price)} style={{ backgroundColor: '#a03037', color: 'white', borderRadius: '2px', width: '45%', cursor: 'pointer' }}>
                    Add TO BAG
                  </button>
                  <button className="wishlistButton" style={{ backgroundColor: 'white', border: '1px solid black', borderRadius: '2px', width: '45%', cursor: 'pointer' }}>
                    WISHLIST
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )

}
