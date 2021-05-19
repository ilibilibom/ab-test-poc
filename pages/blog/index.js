import styles from '../../styles/Home.module.css';

export default function Blog({ isExperiment }) {
  return (
    <div className={styles.container}>
      {isExperiment ? (
        <h1 style={{ color: '#ffdf59', fontSize: 82 }}>Test</h1>
      ) : (
        <h1 style={{ color: '#0070f3', fontSize: 82 }}>Control</h1>
      )}
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const {'is-experiment': isExperiment} = req.headers;
  return {
    props: {
      isExperiment: isExperiment ? isExperiment : null,
    },
  };
}
