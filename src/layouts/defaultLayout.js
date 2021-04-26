import { Route } from 'react-router-dom';
import 'styles/navbar.scss';

const navItem = [
  { name: 'home', link: '/' },
  { name: 'about', link: '/about' },
  { name: 'fine art', link: '/art' },
  { name: 'love song', link: '/song' },
  { name: 'permit me voyage', link: '/voyage' },
  { name: 'commissioned', link: '/commissioned' },
]

const DefaultLayout = ({ children, ...rest }) => {
  return (
    <>
      <section>
        <nav className='custom-nav'>
          <div className="nav-logo">
            YUYEN LAI
          </div>
          <div className="nav-items">
            {navItem.map(item =>
              <div className='item'>
                <a href={item.link}>{item.name}</a>
              </div>)}
          </div>
        </nav>
        <article>{children}</article>
      </section>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default function ({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
};