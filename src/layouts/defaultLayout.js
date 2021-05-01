import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { useWindowWidthAndHeight } from 'mixins/window-resize';
import { Route } from 'react-router-dom';
import Dropdown from './dropdown';

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

export const NavContext = React.createContext({
  mobileNav: false, showMobileNav: () => {},
})

const DefaultLayout = ({ children, ...rest }) => {
  /* useContext, useState 用法很像 */
  const [mobileNav, showMobileNav] = useState(false)
  const handleNavClick = () => {
    showMobileNav(prevStatus => !prevStatus)
    console.log('手機版導覽列狀態:', mobileNav);
  }
  // 導覽列scroll dom
  const navRef = useRef(null);
  // 電腦版: mobileNav 必須為 false
  const [width, height] = useWindowWidthAndHeight();
  // 並利用useEffect 偵測寬度
  useEffect(() => {
    if(width < 992) return

    showMobileNav(() => false)
  }, [width])

  /**
   * 與宣告 useEffect 本身相同，但它會在所有 DOM 改變後，同步調用。
   * 使用它來讀取 DOM layout 並同步重新 render。在瀏覽器執行繪製之前，useLayoutEffect 內部的更新將被同步刷新。
   */
  useLayoutEffect(() => {
    const handleScroll = () => {
      // 導覽列的距離
      const navPosition = navRef.current.getBoundingClientRect()
      // 滾輪距離 (目前用不到)
      const scrollPosition = window.scrollY + window.innerHeight

      if(window.scrollY > 20) {
        navRef.current.classList.add('sticky');
      } else {
        navRef.current.classList.remove('sticky');
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* 漢堡選單狀態 */
  const hamburgerStatus = mobileNav ? 'fas fa-times' : 'fas fa-bars'

  return (
    <>
      <section>
        <nav className='custom-nav shadow rounded' ref={navRef}>
          <div className="nav-logo">
            YUYEN LAI
          </div>
          {/* 電腦版 */}
          <div className="d-none d-lg-flex nav-items">
            {navItem.map(item =>
              <div className='item'>
                <a href={item.link}>{item.name}</a>
              </div>)}
          </div>
          {/* 手機版 */}
          <div className="d-lg-none nav-items-mobile">
            <NavContext.Provider value={mobileNav}>
              <i className={hamburgerStatus} onClick={handleNavClick}></i>
              {mobileNav && <Dropdown childrenItems={navItem} handleClick={handleNavClick} />}
            </NavContext.Provider>
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