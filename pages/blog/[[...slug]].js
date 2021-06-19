import styles from '../../styles/Home.module.css';

export default function Blog({slug, testVariant}) {
  const backColor = ( testVariant === 'ps_automation_control' ? 'purple' : ( testVariant === 'ps_automation_variant' ? 'blue' : 'black' ));
  return (
    <div className={styles.container}>
      <div style={{ color: 'white', background: backColor, fontSize: 25, padding: 50 }}>
        <pre>{slug}</pre>
      </div>
    </div>
  );
}

export async function getServerSideProps( { params, req: {headers} } ) {
  console.log('headers',headers);
  const testVariant = headers['test-variant-name']
  const { slug } = params || '';
    return {
    props: {
      testVariant,
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
