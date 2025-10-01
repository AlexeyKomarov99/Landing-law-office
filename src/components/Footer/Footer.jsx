import React from 'react';
import { Link } from 'react-router-dom';
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
                  121351, г. Москва, ул. Партизанская, <br />
                  д. 25, каб. 202 (2 этаж)
                </h3>
                <span className="Footer__metro-descr">Ближайшее к нашему офису метро:</span>
                <span className="Footer__metro">
                  <span className="Footer__circle"></span>
                  <span className="Footer__metro-name">Молодежная</span>
                </span>
              </div>

              <div className="content-right">
                <div className="Footer__phone-group">
                  <div className="Footer__phone-primary">
                    <h3 className="Footer__phone">+ 7 (967) 061-23-35</h3>
                    <h3 className="Footer__phone">+ 7 (495) 730-63-06</h3>
                  </div>
                  <div className="Footer__phone-backup">
                    <h3 className="Footer__phone">+ 7 (995) 920-14-35</h3>
                    <span className="Footer__phone Footer__phone-descr">дежурный адвокат</span>
                  </div>
                </div>
                
                <h3 className="Footer__email">bvmuzychenko@mail.ru</h3>
              </div>

            </div>

            <div className="Footer__content-footer">
              <span className="law-office">ЮК Музыченко и партнеры ©, 2025 - Все права защищены</span>
              <Link
                to={'/privacy-policy'}
                className="policy"
                style={{textDecoration: "underline"}}
                >
                  Политика обработки персональных данных
              </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer