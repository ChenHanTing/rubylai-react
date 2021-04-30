import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dropdown({ childrenItems }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const eachItem = (item, index) =>
    <li key={index}>
      {/* 選單選完即關掉選單 */}
      <Link className='dropdown-link' to={item.link}
            onClick={() => setClick(false)}>
        {item.name}
      </Link>
    </li>

  return (
    <ul onClick={handleClick}
        className={click ? 'custom-dropdown-menu d-none' : 'custom-dropdown-menu'}
    >
      {childrenItems.map((item, index) => {
        return eachItem(item, index);
      })}
    </ul>
  );
}

export default Dropdown;