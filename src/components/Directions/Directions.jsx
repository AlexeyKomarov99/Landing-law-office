import React, {useState} from 'react';
//===== assets =====/
import './Directions.scss';
import { directionList } from './directionList';
import { IoIosArrowDown as ArrowDownIcon } from "react-icons/io";

const Directions = () => {

  const [activeSection, setActiveSection] = useState([]);
  const toggleActiveSection = (currentSection) => {
    setActiveSection(prevState => 
      prevState.includes(currentSection)
        ? prevState.filter(section => section !== currentSection)
        : [...prevState, currentSection]
    );
  }

  return (
    <section className='Directions'>
      <div className="Directions__wrapper">
        <div className="Directions__container">
          <div className="Directions__Content">
            <h2 className="Directions__title">Направления нашей деятельности</h2>
            <div className="Directions__group">
              {directionList.map((direction) => (
                <div 
                  key={direction.id} 
                  className="Directions__item"
                  onClick={() => toggleActiveSection(direction.titleSection)}
                >
                  <div className="Directions__external-content">
                    <span className={`item-title ${activeSection.includes(direction.titleSection) ? 'active-title' : ''}`}>{direction.titleSection}</span>
                    <span className="item-icon-wrapper">
                      <ArrowDownIcon className={`item-icon ${activeSection.includes(direction.titleSection) ? 'active-icon' : ''}`} />
                    </span>
                  </div>

                  <div className={`Directions__internal-container ${activeSection.includes(direction.titleSection) ? 'active' : ''}`}>
                    <ul className="Directions__internal-content">
                      {direction.listCases.map((item) => (
                        <li key={item.id} className="Directions__internal-item">{item.case}</li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}
            </div>
            <div className="Directions__contact-us">
              <div className="Directions__contact-descr">
                Если не нашли нужного <br />
                направления, свяжитесь <br />
                с нами и мы подскажем
              </div>
              <button className="Directions__btn-call">Позвонить</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Directions