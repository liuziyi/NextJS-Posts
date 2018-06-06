import Head from 'next/head';
import Header from './Header';

const Layout = (props) => (
  <div className="ui container">
    <Head>
      <title>PostsIndexJS</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"/>
    </Head>
    <Header/>
    <div>
      {props.children}
    </div>
  </div>
);

export default Layout;
