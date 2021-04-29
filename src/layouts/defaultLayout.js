import { useRef, useLayoutEffect, useEffect } from 'react';
import { Route } from 'react-router-dom';

import 'styles/navbar.scss';
import 'styles/footer.scss';

const navItem = [
  { name: 'home', link: '/' },
  { name: 'about', link: '/about' },
  { name: 'fine art', link: '/art' },
  { name: 'love song', link: '/song' },
  { name: 'permit me voyage', link: '/voyage' },
  { name: 'commissioned', link: '/commissioned' },
]

const socialIcon = [
  { icon: 'fab fa-facebook', link: '#' },
  { icon: 'fab fa-twitter', link: '#' },
  { icon: 'fab fa-google-plus', link: '#' },
  { icon: 'fab fa-youtube', link: '#' },
  { icon: 'fab fa-linkedin', link: '#' },
  { icon: 'fab fa-instagram', link: 'http://instagram.com/rubyfiber_noir' },
  { icon: 'far fa-envelope', link: 'mailto:rubyfiber@gmail.com' },
]

const DefaultLayout = ({ children, ...rest }) => {
  const navRef = useRef(null);

  useLayoutEffect(() => {
    const handleScroll = () => {
      // 導覽列的距離
      const navPosition = navRef.current.getBoundingClientRect().top
      // 滾輪距離 (目前用不到)
      const scrollPosition = window.scrollY + window.innerHeight

      console.log('scrollPosition:', window.scrollY);

      if(window.scrollY > 20) {
        navRef.current.classList.add('sticky');
      } else {
        navRef.current.classList.remove('sticky');
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <section>
        <nav className='custom-nav shadow rounded' ref={navRef}>
          <div className="nav-logo">
            YUYEN LAI
          </div>
          <div className="d-none d-lg-flex nav-items">
            {navItem.map(item =>
              <div className='item'>
                <a href={item.link}>{item.name}</a>
              </div>)}
          </div>
          <div className="d-lg-none nav-items-mobile">
            <i className="fas fa-bars"></i>
          </div>
        </nav>
        <article>{children}</article>
      </section>
      <footer>
        <div className="footer-content">
          <h3>Ruby Lai</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <ul className="socials">
            {socialIcon.map(social =>
              <li>
                <a href={social.link}>
                  <i className={social.icon}></i>
                </a>
              </li>)}
          </ul>
        </div>
        <div className="footer-bottom">
          <p>copyright © 2021 sweatNonstop.</p>
        </div>
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