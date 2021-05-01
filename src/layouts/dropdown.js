import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Dropdown({ childrenItems, handleClick }) {
  const [dropdownHeight, setDropdownHeight] = useState(122)
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      /* TODO: debounce */
      setDropdownHeight((window.scrollY > 20) ? 84 : 122)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const eachItem = (item, index) =>
    <li key={index}>
      {/* 選單選完即關掉選單 */}
      <Link className='dropdown-link' to={item.link} onClick={handleClick}>
        {item.name}
      </Link>
    </li>

  return (
    <ul className='custom-dropdown-menu' ref={dropdownRef} style={{top: dropdownHeight}}>
      {childrenItems.map((item, index) => {
        return eachItem(item, index);
      })}
    </ul>
  );
}

export default Dropdown;