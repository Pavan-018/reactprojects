import React from 'react'
const Header = () => {
  return (
    <div>
        <nav className='navbar navbar-light bg-light' >
            <a href="#" className='navbar_brand'><h4>Gismat Restuarant</h4></a>
            <button className='btn btn-primary'>Orders
                <span className='badge bg-secondary'>0</span>
            </button>
        </nav>
    </div>
  )
}

export default Header
