import React, {useState} from 'react';
import {connect} from 'react-redux';
import Toaster from './Atoms/Toaster';
import SearchBarList from './Molecules/SearchBarList';
import HamburgerMenu from './Organisms/HamburgerMenu';
import CromaLogo from './Atoms/CromaLogo';
import OrderHeader from './Atoms/OrderHeader';
import Cart from './Atoms/Cart';

const MemoedHamburgerMenu =  React.memo(HamburgerMenu);
const MemoedCromaLogo =  React.memo(CromaLogo);
const MemoedOrder =  React.memo(OrderHeader);
const MemoedCart =  React.memo(Cart);

const Header = ({ page , hamburgerMenuData, cartData}) => {
  const [navBarClassName, setNavBarClassName] = useState('');
  const [userWrapClassName, setUserWrapClassName] = useState('');
  let myAccount = [];
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
        <div className={`header-overlay ${navBarClassName}${userWrapClassName}`} onClick={()=>{
          setNavBarClassName('');
          setUserWrapClassName('');
          document.getElementsByTagName('body')[0].classList.remove('disable-scroll');
        }}>
        </div>
        <Toaster/>
        <div className='sparkle'>
          <img style={{wdith:'8.8rem', height: '9.9rem'}}/>
        </div>
      </div>
    </>
  );
};
export const mapStateToProps = (state) => {
  return {
    headerData: state.headerReducer.headerData,
    storeDetails: state.storeLocatorReducer.storeDetails,
    profileData: state.profileReducer.profileData,
    homePage: state.headerReducer.homePage,
  }
}
export const mapDispatchToProps = (dispatch) => {
  return {
    loadHeaderData: ()=> dispatch(loadHeaderData()),
    loadStoreLocationData: (query)=> dispatch(loadStoreLocationData(query)),
    clearPageType: ()=>dispatch(loadPageType())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
