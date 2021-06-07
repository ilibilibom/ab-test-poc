import styles from '../../styles/Home.module.css';

export default function Blog({randomUser}) {
  const {id} = randomUser || [];
  return (
    <div className={styles.container}>
      <div style={{ color: `${id === 1 ? '#ec7211' : '#16b'}`, fontSize: 25 }}> */}
        <pre>{JSON.stringify(randomUser)}</pre>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  let url = 'https://ab-tests-bucket.s3.amazonaws.com/ab-tests/ab-tests.json';
  const AbTestData = await fetch(url).then((res) => res.json());
  const testPages = AbTestData.filter(({ testUrl }) => testUrl === '/blog');
  const paths = testPages
    .reduce((acc, item) => item.userGroups, {})
    .map(({ variantId }) => ({ params: { slug: `${variantId}` } }));
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const randomUser = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${slug}`
  )
    .then((response) => response.json())
    .then((json) => json);
    return {
    props: {
      randomUser,
    },
  };
}

// export async function getServerSideProps({ req }) {
//   const {'test-variant-id': testVariantId} = req.headers;
//   console.log('req.headers',req.headers);
//   return {
//     props: {
//       testVariantId: testVariantId ? testVariantId : null,
//     },
//   };
// }
