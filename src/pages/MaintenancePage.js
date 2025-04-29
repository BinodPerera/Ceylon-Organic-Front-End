import React from 'react';

const MaintenancePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🚧 Page Under Maintenance 🚧</h1>
      <p style={styles.message}>
        We're working on something awesome! Please check back soon.
      </p>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    color: '#333',
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.2rem',
    maxWidth: '500px',
  },
};

export default MaintenancePage;
