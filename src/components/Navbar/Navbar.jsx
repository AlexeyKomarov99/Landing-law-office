import React from 'react';
//===== assets =====//
import LawOfficeIcon from '../../assets/icons/Emblem.svg';

import './Navbar.scss';

const navbarList = [
  {id: 1, title: 'Главная'},
  {id: 2, title: 'Услуги'},
  {id: 3, title: 'О нас'},
  {id: 4, title: 'Консультация'},
]

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <div className="Navbar__wrapper">
        <div className="Navbar__container">
          <div className="Navbar__content">
            
            <div className="Navbar__content-desktop desktop">
              <div className="content-left">
                <img 
                  src={LawOfficeIcon} 
                  alt="Иконка" 
                  className="Navbar__icon" 
                />
              </div>
              
              <div className="content-right">

                <div className="Navbar__group mobile">
                  {navbarList.map((section) => (
                    <span key={section.id} className="Navbar__item">
                      {section.title}
                    </span>
                  ))}
                </div>

                <div className="Navbar__phone-group">
                  <span className="Navbar__phone">+7 (495) 730 63 06</span>
                  <span className="Navbar__work-schedule">по будням с 9:00-19:00</span>
                </div>
              </div>
            </div>

            <div className="Navbar__content-mobile mobile">
              <img 
                src={LawOfficeIcon} 
                alt="Иконка" 
                className="Navbar__icon" 
              />

              <div className="Navbar__phone-group">
                <span className="Navbar__phone">+7 (495) 730 63 06</span>
                <span className="Navbar__work-schedule">по будням с 9:00-19:00</span>
              </div>

              <div className="Navbar__burger">
                <span className="Navbar__burger-text">Меню</span>
              </div>

            </div>

          </div>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar