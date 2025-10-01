import React, { useState, useEffect } from 'react';
//===== assets =====//
import './PrivacyPolicy.scss';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Введение' },
    { id: 'definitions', title: 'Толкование и определения' },
    { id: 'data-collection', title: 'Сбор и использование данных' },
    { id: 'cookies', title: 'Файлы Cookie' },
    { id: 'data-usage', title: 'Использование данных' },
    { id: 'rights', title: 'Ваши права' },
    { id: 'security', title: 'Безопасность' },
    { id: 'children', title: 'Конфиденциальность детей' },
    { id: 'contacts', title: 'Контакты' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Эффект для скролла к верху при загрузке страницы
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="PrivacyPolicy">
      <div className="PrivacyPolicy__wrapper">
        <div className="PrivacyPolicy__container">
          <div className="PrivacyPolicy__content">

            <div className="PrivacyPolicy__header">
              <h1 className='PrivacyPolicy__header-title'>Политика конфиденциальности</h1>
              <span className='PrivacyPolicy__text'>Последнее обновление: 1 октября 2025 г.</span>
            </div>

            <div className="PrivacyPolicy__body">

              {/* Навигация - слева */}
              <div className="PrivacyPolicy__navigation">
                <h2 className="PrivacyPolicy__navigation-title title-h2">Содержание</h2>
                <div className="PrivacyPolicy__navigation-group">
                  {sections.map(section => (
                    <button
                      key={section.id}
                      className={`PrivacyPolicy__navigation-item ${activeSection === section.id ? 'active' : ''}`}
                      onClick={() => scrollToSection(section.id)}
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Основной контент - справа */}
              <div className="PrivacyPolicy__main-content">
                
                {/* Введение */}
                <article id='introduction' className="PrivacyPolicy__section">
                  <h2 className="title-h2">Введение</h2>
                  <p className="PrivacyPolicy__text">
                    Настоящая Политика конфиденциальности описывает Наши принципы и процедуры в отношении сбора, 
                    использования и раскрытия Вашей информации при использовании Вами Сервиса и рассказывает 
                    о Ваших правах на конфиденциальность и о том, как закон защищает Вас.
                  </p>
                  <p className="PrivacyPolicy__text">
                    Мы используем Ваши Персональные данные для предоставления и улучшения Сервиса. Используя Сервис, 
                    Вы соглашаетесь на сбор и использование информации в соответствии с настоящей Политикой конфиденциальности.
                  </p>
                </article>

                {/* Толкование и определения */}
                <article id='definitions' className="PrivacyPolicy__section">
                  <h2 className='title-h2'>Толкование и определения</h2>
                  
                  <h3 className="title-h3">Толкование</h3>
                  <p className="PrivacyPolicy__text">
                    Слова, первые буквы которых написаны заглавными, имеют значения, определенные в следующих условиях. 
                    Следующие определения имеют одинаковое значение независимо от того, появляются ли они в единственном 
                    или во множественном числе.
                  </p>

                  <h3 className="title-h3">Определения</h3>
                  <div className="PrivacyPolicy__definitions">
                    <div className="PrivacyPolicy__definition">
                      <strong className="PrivacyPolicy__term">Учетная запись</strong>
                      <p className="PrivacyPolicy__text">уникальную учетную запись, созданную для Вас для доступа к нашему Сервису или его частям.</p>
                    </div>
                    
                    <div className="PrivacyPolicy__definition">
                      <strong className="PrivacyPolicy__term">Компания</strong>
                      <p className="PrivacyPolicy__text">(именуемая как «Компания», «Мы», «Нас» или «Наш» в настоящем Соглашении) относится к Музыченко и партнеры. Юридическое бюро.</p>
                    </div>
                    
                    <div className="PrivacyPolicy__definition">
                      <strong className="PrivacyPolicy__term">Куки (Cookies)</strong>
                      <p className="PrivacyPolicy__text">
                        небольшие файлы, которые размещаются на Вашем компьютере, мобильном устройстве или любом другом устройстве 
                        веб-сайтом, содержащие подробности Вашей истории просмотров на этом веб-сайте среди многих его использований.
                      </p>
                    </div>
                    
                    <div className="PrivacyPolicy__definition">
                      <strong className="PrivacyPolicy__term">Персональные данные</strong>
                      <p className="PrivacyPolicy__text">любая информация, относящаяся к идентифицированному или идентифицируемому физическому лицу.</p>
                    </div>
                    
                    <div className="PrivacyPolicy__definition">
                      <strong className="PrivacyPolicy__term">Сервис</strong>
                      <p className="PrivacyPolicy__text">относится к Веб-сайту.</p>
                    </div>
                    
                    <div className="PrivacyPolicy__definition">
                      <strong className="PrivacyPolicy__term">Веб-сайт</strong>
                      <p className="PrivacyPolicy__text">
                        относится к Музыченко и партнеры. Юридическое бюро, доступный по адресу{' '}
                        <a href="https://www.muzychenko-law-office.ru" target="_blank" rel="noopener noreferrer" className="PrivacyPolicy__link">
                          https://www.muzychenko-law-office.ru
                        </a>
                      </p>
                    </div>
                    
                    <div className="PrivacyPolicy__definition">
                      <strong className="PrivacyPolicy__term">Вы</strong>
                      <p className="PrivacyPolicy__text">
                        означает физическое лицо, получающее доступ или использующее Сервис, либо компанию, или другое юридическое лицо, 
                        от имени которого такое физическое лицо получает доступ или использует Сервис, в зависимости от обстоятельств.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Сбор и использование данных */}
                <article id='data-collection' className="PrivacyPolicy__section">
                  <h2 className="title-h2">Сбор и использование Ваших персональных данных</h2>
                  
                  <h3 className="title-h3">Типы собираемых данных</h3>
                  
                  <h4 className="PrivacyPolicy__subtitle">Персональные данные</h4>
                  <p className="PrivacyPolicy__text">
                    При использовании нашего Сервиса Мы можем попросить Вас предоставить Нам определенную личную информацию, 
                    которая может быть использована для связи или идентификации Вас. Личная информация может включать, но не ограничивается:
                  </p>
                  <ul className="PrivacyPolicy__list">
                    <li className="PrivacyPolicy__list-item">Имя и фамилия</li>
                    <li className="PrivacyPolicy__list-item">Номер телефона</li>
                    <li className="PrivacyPolicy__list-item">Данные об использовании</li>
                  </ul>

                  <h4 className="PrivacyPolicy__subtitle">Данные об использовании</h4>
                  <p className="PrivacyPolicy__text">Данные об использовании собираются автоматически при использовании Сервиса.</p>
                  <p className="PrivacyPolicy__text">
                    Данные об использовании могут включать такую информацию, как адрес интернет-протокола Вашего Устройства (например, IP-адрес), 
                    тип браузера, версия браузера, страницы нашего Сервиса, которые Вы посещаете, время и дата Вашего визита, время, 
                    проведенное на этих страницах, уникальные идентификаторы устройств и другие диагностические данные.
                  </p>
                </article>

                {/* Файлы Cookie */}
                <article id='cookies' className="PrivacyPolicy__section">
                  <h2 className="title-h2">Технологии отслеживания и файлы Cookie</h2>
                  
                  <p className="PrivacyPolicy__text">
                    Мы используем файлы Cookie и аналогичные технологии отслеживания для отслеживания активности в нашем Сервисе 
                    и хранения определенной информации.
                  </p>

                  <div className="PrivacyPolicy__cookies">
                    <div className="PrivacyPolicy__cookie-type">
                      <strong className="PrivacyPolicy__term">Необходимые / Основные файлы Cookie</strong>
                      <p className="PrivacyPolicy__text"><em>Тип: Сеансовые файлы Cookie</em></p>
                      <p className="PrivacyPolicy__text">
                        Эти файлы Cookie необходимы для предоставления Вам услуг, доступных через Веб-сайт, и для enabling 
                        Вам использовать некоторые его функции. Они помогают аутентифицировать пользователей и предотвращают 
                        мошенническое использование учетных записей пользователей.
                      </p>
                    </div>
                    
                    <div className="PrivacyPolicy__cookie-type">
                      <strong className="PrivacyPolicy__term">Файлы Cookie принятия Политики использования файлов Cookie</strong>
                      <p className="PrivacyPolicy__text"><em>Тип: Постоянные файлы Cookie</em></p>
                      <p className="PrivacyPolicy__text">Эти файлы Cookie идентифицируют, приняли ли пользователи использование файлов cookie на Веб-сайте.</p>
                    </div>
                    
                    <div className="PrivacyPolicy__cookie-type">
                      <strong className="PrivacyPolicy__term">Функциональные файлы Cookie</strong>
                      <p className="PrivacyPolicy__text"><em>Тип: Постоянные файлы Cookie</em></p>
                      <p className="PrivacyPolicy__text">
                        Эти файлы Cookie позволяют Нам запоминать выбор, который Вы делаете при использовании Веб-сайта, 
                        например, запоминать Ваши данные для входа или предпочтения языка.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Использование данных */}
                <article id='data-usage' className="PrivacyPolicy__section">
                  <h2 className="title-h2">Использование Ваших персональных данных</h2>
                  
                  <p className="PrivacyPolicy__text">Компания может использовать Персональные данные для следующих целей:</p>
                  
                  <ul className="PrivacyPolicy__list">
                    <li className="PrivacyPolicy__list-item">
                      <strong>Для предоставления и поддержания нашего Сервиса</strong>, включая мониторинг использования нашего Сервиса.
                    </li>
                    <li className="PrivacyPolicy__list-item">
                      <strong>Для управления Вашей Учетной записью:</strong> для управления Вашей регистрацией как пользователя Сервиса.
                    </li>
                    <li className="PrivacyPolicy__list-item">
                      <strong>Для выполнения контракта:</strong> разработка, соблюдение и заключение договора купли-продажи продуктов, 
                      товаров или услуг, которые Вы приобрели.
                    </li>
                    <li className="PrivacyPolicy__list-item">
                      <strong>Для связи с Вами:</strong> по электронной почте, телефонным звонкам, SMS или другими эквивалентными 
                      формами электронной связи.
                    </li>
                    <li className="PrivacyPolicy__list-item">
                      <strong>Для предоставления Вам</strong> новостей, специальных предложений и общей информации о других товарах, 
                      услугах и мероприятиях.
                    </li>
                  </ul>
                </article>

                {/* Ваши права */}
                <article id='rights' className="PrivacyPolicy__section">
                  <h2 className="title-h2">Ваши права</h2>
                  
                  <h3 className="title-h3">Удаление Ваших персональных данных</h3>
                  <p className="PrivacyPolicy__text">
                    Вы имеете право удалить или запросить, чтобы Мы помогли в удалении Персональных данных, 
                    которые Мы собрали о Вас.
                  </p>
                  <p className="PrivacyPolicy__text">
                    Вы можете обновлять, изменять или удалять Вашу информацию в любое время, войдя в свою Учетную запись, 
                    если она у Вас есть, и посетив раздел настроек учетной записи.
                  </p>

                  <h3 className="title-h3">Раскрытие Ваших персональных данных</h3>
                  <p className="PrivacyPolicy__text">
                    При определенных обстоятельствах Компания может быть обязана раскрыть Ваши Персональные данные, 
                    если это требуется по закону или в ответ на действительные запросы государственных органов.
                  </p>
                </article>

                {/* Безопасность */}
                <article id='security' className="PrivacyPolicy__section">
                  <h2 className="title-h2">Безопасность Ваших персональных данных</h2>
                  <p className="PrivacyPolicy__text">
                    Безопасность Ваших Персональных данных важна для Нас, но помните, что ни один метод передачи 
                    через Интернет или метод электронного хранения не является на 100% безопасным. Хотя Мы стремимся 
                    использовать коммерчески приемлемые средства для защиты Ваших Персональных данных, 
                    Мы не можем гарантировать их абсолютную безопасность.
                  </p>
                </article>

                {/* Конфиденциальность детей */}
                <article id='children' className="PrivacyPolicy__section">
                  <h2 className="title-h2">Конфиденциальность детей</h2>
                  <p className="PrivacyPolicy__text">
                    Наш Сервис не предназначен для лиц младше 13 лет. Мы не собираем заведомо личную информацию 
                    от лиц младше 13 лет. Если Вы являетесь родителем или опекуном и Вы знаете, что Ваш ребенок 
                    предоставил Нам Персональные данные, пожалуйста, свяжитесь с Нами.
                  </p>
                </article>

                {/* Контакты */}
                <article id='contacts' className="PrivacyPolicy__section">
                  <h2 className="title-h2">Свяжитесь с нами</h2>
                  <p className="PrivacyPolicy__text">Если у Вас есть какие-либо вопросы по поводу этой Политики конфиденциальности, Вы можете связаться с нами:</p>
                  
                  <div className="PrivacyPolicy__contact-info">
                    <p className="PrivacyPolicy__text">
                      <strong>По электронной почте:</strong>{' '}
                      <a href="mailto:bvmuzychenko@mail.ru" className="PrivacyPolicy__link">bvmuzychenko@mail.ru</a>
                    </p>
                    <p className="PrivacyPolicy__text">
                      <strong>По телефону:</strong>{' '}
                      <a href="tel:+74957306306" className="PrivacyPolicy__link">+7 (495) 730-63-06</a>
                    </p>
                  </div>
                  
                  <div className="PrivacyPolicy__company-info">
                    <p className="PrivacyPolicy__text"><strong>Музыченко и партнеры. Юридическое бюро</strong></p>
                    <p className="PrivacyPolicy__text">
                      <a href="https://www.muzychenko-law-office.ru" target="_blank" rel="noopener noreferrer" className="PrivacyPolicy__link">
                        https://www.muzychenko-law-office.ru
                      </a>
                    </p>
                  </div>
                </article>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;