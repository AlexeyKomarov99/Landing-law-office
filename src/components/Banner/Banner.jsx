import React from 'react';
//===== assets =====//
import './Banner.scss';
import MainPhoto from '../../assets/photos/main-photo.png';


const Banner = ({id}) => {
  
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section className='Banner' id={id}>
      {/* <Navbar /> */}
      <div className="Banner__wrapper">
        <div className="Banner__container">
          <div className="Banner__Content">

            <div className="content-left">
              <div className="description">ЮК "Музыченко и партнеры"</div>
              <h1 className="title">Профессиональная судебная защита ваших прав и интересов</h1>
              <div 
                className="cta"
                onClick={scrollToConsultation}
              >
                Получить консультацию
              </div>
            </div>

            <div className="content-right">
              <div className="main-img-wrapper">
                <img 
                  src={MainPhoto} 
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