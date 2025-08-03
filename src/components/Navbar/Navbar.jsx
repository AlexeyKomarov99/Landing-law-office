import React, {useState, useEffect} from 'react';
//===== assets =====//
import LawOfficeIcon from '../../assets/icons/Emblem.svg';
import { RxCross2 as CrossIcon } from "react-icons/rx";
import './Navbar.scss';

const navbarList = [
  {id: 1, title: 'Главная'},
  {id: 2, title: 'Услуги'},
  {id: 3, title: 'О нас'},
  {id: 4, title: 'Консультация'},
]

const Navbar = () => {

  const [isActiveNav, setIsActiveNav] = useState(false);
  const toggleActiveNav = () => {
    setIsActiveNav(prevState => !prevState);
    console.log('Тест')
  }

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (isActiveNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Очистка при размонтировании компонента
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isActiveNav]);

  return (
    <nav className='Navbar'>
      <div className="Navbar__wrapper">
        <div className="Navbar__container">
          <div className="Navbar__content">
              
              <div className="Navbar__content-desktop desktop">
                <div className="content-left">
                  <div className="Navbar__img-wrapper">
                    <img 
                      src={LawOfficeIcon} 
                      alt="Иконка" 
                      className="Navbar__img" 
                    />
                  </div>
                </div>

                <div className="content-right">

                  <div className="Navbar__group">
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
                  
                <div className="Navbar__img-wrapper">
                  <img 
                    src={LawOfficeIcon} 
                    alt="Иконка" 
                    className="Navbar__img" 
                  />
                </div>

                <div className="Navbar__phone-group">
                  <span className="Navbar__phone">+7 (495) 730 63 06</span>
                  <span className="Navbar__work-schedule">по будням с 9:00-19:00</span>
                </div>

                <div 
                  className="Navbar__burger"
                  onClick={toggleActiveNav}
                >
                  <span className="Navbar__burger-text">Меню</span>
                </div>
                
                <div className={`Navbar__burger-content ${isActiveNav ? 'active' : ''}`}>
                  <div className="Navbar__group">
                    {navbarList.map((section) => (
                      <span key={section.id} className="Navbar__item">
                        {section.title}
                      </span>
                    ))}
                  </div>
                  
                  <div 
                    className="Navbar__cross-icon-wrapper"
                    onClick={toggleActiveNav}
                  >
                    <CrossIcon className='Navbar__cross-icon' />
                  </div>

                </div>

                {isActiveNav && (
                  <div 
                    className="Navbar__overlay"
                    onClick={toggleActiveNav}
                  />
                )}

              </div>

          </div>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar