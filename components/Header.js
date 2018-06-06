import { Link } from '../routes';

const Header = (props) => (
  <div className="ui menu" style={{ marginTop: '20px' }}>
    <Link route="/">
      <a className="item">PostsIndexJS</a>
    </Link>
    <div className="right menu">
      <Link route="/posts/new">
        <a className="item">+</a>
      </Link>
    </div>
  </div>
);

export default Header;
