import React from 'react';
//===== assets =====//
import './Team.scss';
import BogdanPhoto from '../../assets/photos/Bogdan.png';
import { ReactComponent as ShieldIcon } from '../../assets/icons/security.svg';

const teamList = [
  {id: 1, name: 'Музыченко Святослав Вячеславович', profession: 'адвокат', photo: <ShieldIcon style={{width:'126px', height: '126px'}} className='Team__icon' />},
  {id: 2, name: 'Музыченко Богдан Вячеславович', profession: 'профессиональный юрист, член ассоциации юристов России', photo: <img className='Team__photo' src={BogdanPhoto} alt='Юрист' />},
]

const Team = () => {
  return (
    <section className='Team'>
      <div className="Team__wrapper">
        <div className="Team__container">
          <div className="Team__content">
            <h2 className="Team__title">Наша команда</h2>
            <div className="Team__group">
              {teamList.map((person) => (
                <article key={person.id} className="Team__item">
                  <div className="Team__photo-wrapper">
                    {person.photo}
                  </div>
                  <div className="Team__descr">
                    <h3 className="Team__name">
                      {person.name.split(' ')[0]}<br />
                      {person.name.split(' ').slice(1).join(' ')}
                    </h3>
                    <span className="Team__profession">{person.profession}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team