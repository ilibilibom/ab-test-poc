import styles from '../../styles/Home.module.css';

export default function Blog({ testVariantId }) {
  return (
    <div className={styles.container}>
      {testVariantId === 'experiment' ? (
        <h1 style={{ color: '#ffdf59', fontSize: 82 }}>Test</h1>
      ) : (
        <h1 style={{ color: '#0070f3', fontSize: 82 }}>Control</h1>
      )}
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const {'test-variant-id': testVariantId} = req.headers;
  console.log('req.headers',req.headersz);
  return {
    props: {
      testVariantId: testVariantId ? testVariantId : null,
    },
  };
}
