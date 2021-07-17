import React, {useEffect} from "react";
import {map} from 'ramda';
import './mansonry.scss'

/* 產生min到max之間的亂數 */
function getRandom(min,max) {
  return Math.floor(Math.random()*(max-min+1)) + min;
};

const serialArray = [...Array(20).keys()]
const images = map(i=> `https://picsum.photos/${getRandom(300, 500)}/${getRandom(300, 500)}?random=${i+1}`, serialArray)

export default (props) => {
  useEffect(() => {
    // Accessing scss variable "--background-color"
    // and "--text-color" using plain JavaScript
    // and changing the same according to the state of "darkTheme"
    const root = document.documentElement;
    root?.style.setProperty("--column-count", props.number);
  }, []);

  return (
    <>
      <div className="container pt-4 mb-5">
        <div className="masonry-column-counter">
          {images.map(img => <div className='item'><img src={img} alt="代替文字" /></div>)}
        </div>
      </div>
    </>
  );
};