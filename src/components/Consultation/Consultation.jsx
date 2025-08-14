import React, { useState } from 'react';
import InputMask from 'react-input-mask';
//===== assets =====//
import './Consultation.scss';

const Consultation = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    appeal: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendToTelegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Ошибка сети');
      const result = await response.json();

      if (result.success) {
        alert('Заявка отправлена!');
        setFormData({ name: '', phone: '', appeal: '' });
      } else {
        alert('Ошибка: ' + (result.error || 'Попробуйте позже'));
      }
    } catch (error) {
      console.error(error);
      alert('Произошла ошибка при отправке!');
    }
  };

  return (
    <section className='Consultation' id={id}>
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
                onChange={handleFormChange}
                className="Consultation__name input-form"
                placeholder='Как вас зовут'
              />
              <InputMask
                mask="+7 (999) 999-99-99"
                maskChar="_"
                type="text"
                name='phone'
                value={formData.phone}
                onChange={handleFormChange}
                className="Consultation__phone input-form"
                placeholder='+7 (___) ___-__-__'
              />
              <input 
                type="text"
                name='appeal'
                value={formData.appeal}
                onChange={handleFormChange}
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
  );
};

export default Consultation;