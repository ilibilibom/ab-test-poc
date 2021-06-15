import styles from '../../styles/Home.module.css';

export default function Blog({slug}) {
  return (
    <div className={styles.container}>
      <div style={{ color: 'white', background: getRandomColor(), fontSize: 25, padding: 50 }}>
        <pre>{JSON.stringify(slug, undefined, 2)}</pre>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const slugs = ['post-1', 'post-2', 'post-3', 'post-4', 'post-5', 'blog'];
  let paths = slugs.map((url) => ({ params: { slug: [url] } }));

  const json = 'https://ab-tests-bucket.s3.amazonaws.com/ab-tests/ab-tests.json';
  const AbTestData = await fetch(json).then((res) => res.json());
  const testPages = AbTestData.filter(({ testUrl }) => slugs.includes(testUrl));

  testPages.forEach(({testUrl, userGroups}) => {
    userGroups.forEach(({variantId}) => {
      paths.push({ params: { slug: [`${testUrl}/${variantId}`] } })
    })
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params || '';
    return {
    props: {
      slug
    },
  };
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
