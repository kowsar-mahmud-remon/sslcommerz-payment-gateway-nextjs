export default function Success() {
  return (
    <div style={styles.container}>
      <h1>Payment Successful!</h1>
      <p>Thank you for your payment.</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
};
