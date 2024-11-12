import React, { useState } from 'react';

const dummyGiftCardData = [
  { cardName: 'Amazon Gift Card', amount: 50, expiryDate: '2023-12-31' },
  { cardName: 'Apple Gift Card', amount: 100, expiryDate: '2024-01-31' },
  { cardName: 'Google Play Gift Card', amount: 25, expiryDate: '2023-11-30' },
  { cardName: 'Netflix Gift Card', amount: 75, expiryDate: '2024-02-28' },
  { cardName: 'Spotify Gift Card', amount: 60, expiryDate: '2023-10-31' },
  { cardName: 'Walmart Gift Card', amount: 80, expiryDate: '2024-03-31' },
  { cardName: 'Starbucks Gift Card', amount: 40, expiryDate: '2023-09-30' },
  { cardName: 'Uber Gift Card', amount: 90, expiryDate: '2024-04-30' },
  { cardName: 'Target Gift Card', amount: 30, expiryDate: '2023-08-31' },
  { cardName: 'Best Buy Gift Card', amount: 120, expiryDate: '2024-05-31' },
];

function GiftCards() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = dummyGiftCardData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='text-black flex flex-col items-center w-full h-screen p-4 bg-white'>
      <h1 className='text-4xl mb-4'>Gift Cards</h1>
      <div className='w-full max-w-4xl'>
        {currentCards.map((card, index) => (
          <div key={index} className='bg-gray-200 p-4 mb-2 rounded'>
            <p>Card Name: {card.cardName}</p>
            <p>Amount: ${card.amount}</p>
            <p>Expiry Date: {card.expiryDate}</p>
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-4'>
        {[...Array(Math.ceil(dummyGiftCardData.length / cardsPerPage)).keys()].map(number => (
          <button
            key={number}
            onClick={() => paginate(number + 1)}
            className={px-4 py-2 mx-1 ${currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} rounded}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GiftCards;
