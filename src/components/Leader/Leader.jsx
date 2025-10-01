import React from 'react';
//===== assets =====//
import './Leader.scss';
import LeaderPhoto from '../../assets/photos/Leader.jpg';
import { ReactComponent as QuotesIcon } from '../../assets/icons/Quotes.svg';

const Leader = () => {
  return (
    <section className='Leader'>
      <div className="Leader__wrapper">
        <div className="Leader__container">
          <div className="Leader__content">

            <div className="Leader__header-content">
              <div className="Leader__photo-wrapper">
                <img 
                  src={LeaderPhoto} 
                  alt="Начальник бюро" 
                  className="Leader__photo" 
                />
              </div>

              <div className="Leader__descr">
                <h2 className="Leader__title">
                  Музыченко Вячеслав Евгеньевич
                </h2>
                <span className="Leader__text">
                  Член Московской коллегии адвокатов “Защита” <br />
                  Адвокатской палаты г. Москвы <br />
                  Стаж работы более 25 лет
                </span>
              </div>
            </div>

            <div className="Leader__body-content">
              <span className="Leader__body-main">
                Юридическая компания "Музыченко и партнеры" — это команда профессиональных юристов и адвокатов с огромным опытом работы.

                Мы специализируемся на судебном представительстве. Защищаем интересы граждан и компаний в судах всех инстанций.
                Работаем с любыми спорами: от семейных и наследственных до сложных корпоративных и арбитражных дел.

                Наша сила — в глубоком знании законов и судебной практики.
                Мы берёмся за самые сложные дела и добиваемся положительного результата для наших клиентов.

              </span>
              <span className="Leader__body-descr-wrapper">
                <span className="Leader__body-descr">
                  Ваше право — наша защита.
                </span>
                <QuotesIcon className='Leader__body-icon' />
              </span>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Leader