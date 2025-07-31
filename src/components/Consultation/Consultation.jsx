import React, {useState} from 'react';
//===== assets =====//
import './Consultation.scss';

const Consultation = () => {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    appeal: '',
  });

  const handleFormChange = (e) => {
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
    setFormData({
      name: '',
      phone: '',
      appeal: '',
    })
  };

  return (
    <section className='Consultation'>
      <div className="Consultation__wrapper">
        <div className="Consultation__container">
          <div className="Consultation__content">
            <h1 className="Consultation__title">Записаться на консультацию</h1>
            <form 
              onSubmit={handleSubmit}
              action="" 
              className="Consultation__form"
            >
              <input 
                type="text"
                name='name'
                value={formData.name}
                onChange={(e) => handleFormChange(e)}
                className="Consultation__name input-form"
                placeholder='Как вас зовут'
              />
              <input 
                type="text"
                name='phone'
                value={formData.phone}
                onChange={(e) => handleFormChange(e)}
                className="Consultation__phone input-form"
                placeholder='Контактный номер'
              />
              <input 
                type="text"
                name='appeal'
                value={formData.appeal}
                onChange={(e) => handleFormChange(e)}
                className="Consultation__appeal input-form"
                placeholder='Тема обращения'
              />
              <button 
                type='submit'
                className="Consultation__btn-consultation"
              >Получить консультацию</button>
            </form>
            <span className="Consultation__privacy-policy">
              Отправляя данные из этой формы, Вы соглашаюсь на обработку
              персональных данных и с условиями <span style={{textDecoration: "underline"}}>политики конфиденциальности</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Consultation;