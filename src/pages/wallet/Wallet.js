import React, { useState } from 'react';

const initialFailedTransactions = [
  { company: 'Microsoft', amount: 100, date: '2023-01-01', reason: 'Insufficient funds' },
  { company: 'Apple', amount: 200, date: '2023-01-02', reason: 'Card expired' },
  { company: 'Amazon', amount: 300, date: '2023-01-03', reason: 'Network error' },
  { company: 'Google', amount: 400, date: '2023-01-04', reason: 'Insufficient funds' },
  { company: 'Facebook', amount: 500, date: '2023-01-05', reason: 'Card expired' },
];

function Wallet() {
  const [failedTransactions, setFailedTransactions] = useState(initialFailedTransactions);
  const [newCompany, setNewCompany] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newReason, setNewReason] = useState('');

  const addFailedTransaction = () => {
    const newTransaction = {
      company: newCompany,
      amount: parseFloat(newAmount),
      date: newDate,
      reason: newReason,
    };
    setFailedTransactions([...failedTransactions, newTransaction]);
    setNewCompany('');
    setNewAmount('');
    setNewDate('');
    setNewReason('');
  };

  return (
    <div className='text-black flex flex-col items-center w-full h-screen p-4 bg-white'>
      <h1 className='text-4xl mb-4'>Failed Transactions Overview</h1>
      <div className='w-full max-w-4xl'>
        <div className='bg-gray-200 p-4 mb-4 rounded'>
          <h2 className='text-2xl mb-2'>Failed Transactions</h2>
          {failedTransactions.map((transaction, index) => (
            <div key={index} className='bg-gray-100 p-4 mb-2 rounded'>
              <p>Company: {transaction.company}</p>
              <p>Amount: ${transaction.amount}</p>
              <p>Date: {transaction.date}</p>
              <p>Reason: {transaction.reason}</p>
            </div>
          ))}
        </div>
        <div className='bg-gray-200 p-4 mb-4 rounded'>
          <h2 className='text-2xl mb-2'>Add New Failed Transaction</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addFailedTransaction();
            }}
          >
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='company'>
                Company
              </label>
              <input
                type='text'
                id='company'
                value={newCompany}
                onChange={(e) => setNewCompany(e.target.value)}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='amount'>
                Amount
              </label>
              <input
                type='number'
                id='amount'
                value={newAmount}
                onChange={(e) => setNewAmount(e.target.value)}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='date'>
                Date
              </label>
              <input
                type='date'
                id='date'
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='reason'>
                Reason
              </label>
              <input
                type='text'
                id='reason'
                value={newReason}
                onChange={(e) => setNewReason(e.target.value)}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                required
              />
            </div>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Add Failed Transaction
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
