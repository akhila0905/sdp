import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Qualities!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/our_of_stock.jfif'
              text='Want to hang this board front of your shop'
              label='Extreme Dare'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='We are available through out the world'
              label='International'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/OIP.jfif'
              text='Buy/Sell Sitting at your place.Choose your brand'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src='images/qc.jfif'
              text='We Check Before We Sell'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/stp.jpg'
              text='Be with your passion we here to help you'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;