import leaf from './images/index/1.jpg'
import woman from './images/index/2.jpg'
import rubyLay from './images/index/3.jpg'
import rubySmoke from './images/index/4.jpg'
import rubyLai from './images/index/5.jpg'
import rubySkin from './images/index/6.jpg'

import './App.css';
import './styles/index.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* https://devdesigner.xyz/dynamic-image-import-with-create-react-app/read */
const rubyLais = [
  { name: 'leaf', image: leaf },
  { name: 'woman', image: woman },
  { name: 'rubyLay', image: rubyLay },
  { name: 'rubySmoke', image: rubySmoke },
  { name: 'rubyLai', image: rubyLai },
  { name: 'rubySkin', image: rubySkin },
]

const indexBar = [
  { name: 'FINE ART', link: 'http://www.yuyenlai.com/fineart' },
  { name: 'COMMSSIONED', link: 'http://www.yuyenlai.com/work-1' },
  { name: 'PREWEDDING', link: 'http://www.yuyenlai.com/wedding' },
]

const socialMedia = [
  { icon: 'fab fa-instagram', link: 'http://instagram.com/rubyfiber_noir' },
  { icon: 'far fa-envelope', link: 'mailto:rubyfiber@gmail.com' },
]

function App() {
  const settings = {
    dots: false,
    fade: true,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {rubyLais.map(rubylai =>
          <div className="slick-img">
            <img src={rubylai.image} alt="" />
          </div>)
        }
      </Slider>
      <div className='index-content'>
        <h1>ＹＵ-ＹＥＮ ＬＡＩ</h1>
        <ul className='index-nav'>
          {indexBar.map(item =>
            <li className='index-navitem'>
              <a href={item.link}>{item.name}</a>
            </li>)
          }
        </ul>
        <ul className='social-content'>
          {socialMedia.map(item =>
            <li className='social-media'>
              <a href={item.link} class={`icon ${item.icon}`} />
            </li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
