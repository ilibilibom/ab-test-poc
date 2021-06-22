import styles from '../../styles/Home.module.css';

export default function Blog({slug, ab_test_variant_name}) {
  const backColor = ( ab_test_variant_name === 'ps_automation_control' ? 'purple' : ( ab_test_variant_name === 'ps_automation_variant' ? 'blue' : 'black' ));
  return (
    <div className={styles.container}>
      <div style={{ color: 'white', background: backColor, fontSize: 25, padding: 50 }}>
        <pre>{slug}</pre>
      </div>
    </div>
  );
}

export async function getServerSideProps( { params, req: {headers} } ) {
  const { ab_test_variant_name, ab_test_variant_id } = headers['test-variant-name'] ? JSON.parse(headers['test-variant-name']) : null;
  console.log('variants', ab_test_variant_name, ab_test_variant_id);
  const { slug } = params || '';
    return {
    props: {
      ab_test_variant_name: null,
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
