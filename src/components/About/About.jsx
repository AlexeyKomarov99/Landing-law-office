import React from 'react';
//===== assets =====//
import './About.scss';
import AphroditePhoto from '../../assets/photos/Aphrodite.png';

const About = ({id}) => {
  return (
    <section className='About' id={id}>
      <div className="About__wrapper">
        <div className="About__container">
          <div className="About__Content">

            <div className="content-left">
              <div className="content-left-cirle">
                <img 
                  src={AphroditePhoto} 
                  alt="Статуя Афродиты" 
                  className="content-left-statue" 
                />
              </div>
            </div>

            <div className="content-right">
              <h2 className="title">О нас</h2>
              <div className="description">
                Мы оказываем профессиональные юридические  услуги
                в сфере корпоративного, налогового, договорного и судебного права с 2015 года. Мы обеспечиваем комплексное правовое сопровождение бизнеса,  защиту интересов клиентов и минимизацию юридических рисков.
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About