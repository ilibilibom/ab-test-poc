import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
  // const [appProps, mainMenuItems, mainFooterData] =
  //   await Promise.all([
  //       App.getInitialProps(appContext),
  //       getTopMenuData(),
  //       getFooterData()
  //     ]);
  console.log('appContext',appContext);
  return {};
};

export default MyApp
