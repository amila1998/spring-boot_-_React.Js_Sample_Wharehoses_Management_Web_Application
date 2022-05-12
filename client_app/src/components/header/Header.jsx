import React from 'react';


const Header = () => {
    const handleOnClick=()=>{
        window.location.href = "/";
    }
  return (
    <div className='header' onClick={handleOnClick}>ABC Company Wharehouse Management</div>
  )
}

export default Header