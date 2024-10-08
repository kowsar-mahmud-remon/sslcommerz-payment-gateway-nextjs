export default function Fail() {
  return (
    <div style={styles.container}>
      <h1>Payment Failed!</h1>
      <p>Something went wrong with your payment. Please try again.</p>
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
