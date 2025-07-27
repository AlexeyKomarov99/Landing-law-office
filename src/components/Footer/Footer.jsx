import React from 'react';
//===== assets =====//
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className="Footer__wrapper">
        <div className="Footer__container">
          <div className="Footer__content">
            
            <div className="Footer__content-header">
              <div className="content-left">
                <h3 className="Footer__address">
                  г. Москва, ул. Партизанская, <br />
                  д. 25, каб. 202 (2 этаж)
                </h3>
                <span className="Footer__metro-descr">Ближайшее к нашему офису метро:</span>
                <span className="Footer_metro">
                  <span className="Footer__circle"></span>
                  <span className="Footer__metro-name">Молодежная, Кунцевская</span>
                </span>
              </div>

              <div className="content-right">
                <h3 className="Footer__phone">+ 7 (495) 730 63 06</h3>
                <h3 className="Footer__email">bvmuzychenko@mail.ru</h3>
              </div>

            </div>

            <div className="Footer__content-footer">
              <span className="law-office">Адвокатское бюро Музыченко ©, 2025 - Все права защищены</span>
              <span className="policy">Политика обработки персональных данных</span>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer