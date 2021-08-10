import React from 'react';

const Header = ({ page , hamburgerMenuData}) => {
  return (
    <>
      <div>
        <div className='sparkle'>
          <img
            style={{ width: '8.8rem', height: '9.9rem' }}
            src='/assets/images/LinkedSprite.svg#src-1'
          />
        </div>
        <div className='top-band top-band-s-custom'>
          <div className='container'>
            {page === 'HomePage' ? (
              ''
            ) : (
              <button className='back-btn show-on-mobile'>
                <span className='icon icon-back'></span>
              </button>
            )}
            <span className='menu-btn show-on-mobile'>
              <span
                className='icon icon-menu'
                onClick={() => {
                  setNavBarClassName('active');
                  document
                    .getElementsByTagName('body')[0]
                    .classList.add('disable-scroll');
                }}
              ></span>
            </span>
            <MemoedCromaLogo/>
            <div className='search-wrap'>
                <SearchBarList/>
                <div className='bottom-band custom-s-bottomband'>
                    {hamburgerMenuData && <MemoedHamburgerMenu/>}
                </div>
            </div>
            <MemoedOrder/>
            {myAccount && <MemoedMyAccount/>}
            <MemoedDeliveringTo/>
            {cartData && <MemoedCart/>}
          </div>
        </div>
        <div className={}>

        </div>
      </div>
    </>
  );
};

export default Header;
