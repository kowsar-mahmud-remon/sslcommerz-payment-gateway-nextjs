import { useState } from 'react';
import axios from 'axios';

export default function Payment() {
  const [paymentDetails, setPaymentDetails] = useState({
    amount: '',
    customer_name: '',
    customer_email: '',
    customer_address: '',
    customer_phone: '',
    customer_city: '',
  });

  const [paymentUrl, setPaymentUrl] = useState(null);

  const handleChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value,
    });
  };


  // =========================================
  // ========== First Way ===================
  // =========================================

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const paymentData = {
  //     amount: '100',
  //     customer_name: 'Kowsar Mahmud Remon',
  //     customer_email: 'kowsar.remon@gmail.com',
  //     customer_address: 'Comilla Sadar',
  //     customer_phone: '01521525803',
  //     customer_city: 'Comilla Sadar',
  //     customer_postcode: '3500', // Add your actual postcode here
  //   };

  //   try {
  //     const response = await axios.post('http://localhost:5000/init', paymentData);
  //     window.location.href = response.data.url; // Redirect to payment URL
  //   } catch (error) {
  //     console.error('Error initiating payment:', error.response.data);
  //     // Handle error in UI
  //   }
  // };



  // =========================================
  // ========== Second Way ===================
  // =========================================
  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/init", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paymentDetails)
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.url) {
          window.location.replace(result.url);

        } else {
          console.error("Payment URL not received");
        }
      })
      .catch((error) => {
        console.error("Error initiating payment:", error);
      });
  };


  return (
    <div className='bg-white h-screen text-black'>
      <h1 className='text-4xl p-4'>SSLCommerz Payment</h1>
      <form className='p-4' onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Amount:</label>
          <input
            type="text"
            className=' bg-slate-200 ml-4'
            name="amount"
            value={paymentDetails.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label>Customer Name:</label>
          <input
            type="text"
            className=' bg-slate-200 ml-4'
            name="customer_name"
            value={paymentDetails.customer_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label>Customer Email:</label>
          <input
            type="email"
            name="customer_email"
            value={paymentDetails.customer_email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label>Customer Address:</label>
          <input
            type="text"
            className=' bg-slate-200 ml-4'
            name="customer_address"
            value={paymentDetails.customer_address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label>Customer Phone:</label>
          <input
            type="text"
            className=' bg-slate-200 ml-4'
            name="customer_phone"
            value={paymentDetails.customer_phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label>Customer City:</label>
          <input
            type="text"
            className=' bg-slate-200 ml-4'
            name="customer_city"
            value={paymentDetails.customer_city}
            onChange={handleChange}
            required
          />
        </div>
        <button className='mt-4 bg-green-400 p-2 rounded hover:bg-green-600' type="submit">Proceed to Payment</button>
      </form>

      {paymentUrl && (
        <div>
          <h2>Redirecting to Payment Gateway</h2>
          <a href={paymentUrl} target="_blank" rel="noopener noreferrer">Click here to pay</a>
        </div>
      )}
    </div>
  );
}
