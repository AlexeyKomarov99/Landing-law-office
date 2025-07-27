import React from 'react';
//===== assets =====//
import './Leader.scss';
import LeaderPhoto from '../../assets/photos/Leader2.png';
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
                  Кандидат юридических наук
                </span>
              </div>
            </div>

            <div className="Leader__body-content">
              <span className="Leader__body-main">
                Я опытный юрист с <span className='formatted'>более чем 25-летней</span> практикой в области 
                гражданского, корпоративного и арбитражного права. Специализируется на 
                защите интересов бизнеса и частных клиентов в сложных спорах, ведении 
                дел в судах различных инстанций, а также юридическом сопровождении 
                сделок. Отличается <span className="formatted">индивидуальным подходом к каждому клиенту</span>, глубокой 
                аналитикой и безупречной репутацией. Регулярно консультирую по вопросам 
                договорного права, правовой экспертизы и защиты прав собственности.
              </span>
              <span className="Leader__body-descr-wrapper">
                <span className="Leader__body-descr">
                  Коротко и мощно подчеркиваем профессионализм и надежность фирмы
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