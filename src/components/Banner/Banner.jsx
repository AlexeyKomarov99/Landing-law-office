import React from 'react';
//===== components =====//
import Navbar from '../Navbar/Navbar';
//===== assets =====//
import './Banner.scss';
import Leader from '../../assets/photos/Leader.png';
import LeaderTest from '../../assets/photos/upscalemedia-transformed.png';

const Banner = () => {
  return (
    <section className='Banner'>
      {/* <Navbar /> */}
      <div className="Banner__wrapper">
        <div className="Banner__container">
          <div className="Banner__Content">

            <div className="content-left">
              <div className="description">ЮК "Музыченко и партнеры"</div>
              <h1 className="title">Профессиональная судебная защита ваших прав и интересов</h1>
              <div className="cta">Получить консультацию</div>
            </div>

            <div className="content-right">
              <div className="main-img-wrapper">
                <img 
                  src={LeaderTest} 
                  alt="Главное фото"
                  className='main-img' 
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner