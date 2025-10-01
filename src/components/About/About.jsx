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
                С 2010 года мы обеспечиваем надежную защиту интересов наших клиентов в судах. Ключевое направление нашей работы — профессиональное представительство для физических и юридических лиц. Мы берем на себя все заботы по ведению вашего дела: от составления иска до исполнения решения суда, чтобы вы могли сосредоточиться на главном.
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About