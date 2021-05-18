import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home({ isTestVariant }) {
  return (
    <div className={styles.container}>
      {isTestVariant ? (
        <h1 style={{ color: '#ffdf59', fontSize: 82 }}>Test</h1>
      ) : (
        <h1 style={{ color: '#0070f3', fontSize: 82 }}>Control</h1>
      )}
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const {'is-test-variant': isTestVariant} = req.headers;
  return {
    props: {
      isTestVariant: isTestVariant ? isTestVariant : null,
    },
  };
}
