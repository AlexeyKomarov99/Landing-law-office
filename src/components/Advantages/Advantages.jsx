import React from 'react';
//===== assets =====//
import './Advantages.scss';
import {ReactComponent as CupIcon} from '../../assets/icons/Cup.svg';
import {ReactComponent as UserIcon} from '../../assets/icons/Profile.svg';
import {ReactComponent as ListIcon} from '../../assets/icons/Firstline.svg';

const Advantages = () => {
  return (
    <section className='Advantages'>
      <div className="Advantages__wrapper">
        <div className="Advantages__container">
          <div className="Advantages__Content">

            <div className="content-item">
              <div className="advantage-icon-wrapper">
                <span className="advantage-icon"><CupIcon /></span>
              </div>
              <span className="advantage-descr">более 1000 <br /> выигранных дел</span>
            </div>

            <div className="content-item">
              <div className="advantage-icon-wrapper">
                <span className="advantage-icon"><UserIcon /></span>
              </div>
              <span className="advantage-descr">индивидуальный подход <br /> к каждому клиенту</span>
            </div>

            <div className="content-item">
              <div className="advantage-icon-wrapper">
                <span className="advantage-icon"><ListIcon /></span>
              </div>
              <span className="advantage-descr">прозрачные условия <br /> сотрудничества</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantages;