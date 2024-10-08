import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-white h-screen text-black' style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to SSLCommerz Payment Gateway Integration</h1>
      <p>
        This is a demo integration with SSLCommerz. Click the button below to proceed to the payment page.
      </p>
      <Link href="/payment">
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Go to Payment
        </button>
      </Link>
    </div>
  );
}
