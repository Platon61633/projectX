import React from 'react';
import { Link } from 'react-router-dom';
import { FaTelegram, FaVk } from 'react-icons/fa';
import styles from '../styles/footer.module.css';

const Footer = () => {
  // const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Услуги': [      
      { name: 'Интенсивы', path: '/intensive' },
      { name: 'Курсы', path: '/courses' },
      { name: 'Дополнительная программа', path: '/services#oge' },
    ]
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_content}>
          <div className={styles.footer_section}>
            <p className={styles.footer_description}>
              Школа, которая переворачивает привычное представление о математике
            </p>
            <div className={styles.footer_social}>
                        <a className={styles.social_link} target="_blank" rel="noreferrer" href="https://t.me/ka_best_manager">
                            <FaTelegram />
                        </a>
                        <a className={styles.social_link} target="_blank" rel="noreferrer" href="https://vk.ru/club236178059">
                            <FaVk />
                        </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className={styles.footer_section}>
              <h3>{category}</h3>
              <ul>
                {links.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className={styles.footer_section}>
            <h3>Контакты</h3>
            <ul className={styles.footer_contacts}>
              <li>
                <strong>Телеграм:</strong>
                <a href="https://t.me/ka_best_manager">@ka_best_manager</a>
              </li>
              <li>
                <strong>Часы работы:</strong>
                <span>Пн-Вс: 8:00-21:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className={styles.footer_bottom}> */}
          
          
          {/* <div className={styles.copyright}>
            <p>© {currentYear} Профессиональный репетитор. Все права защищены.</p>
            <p>ИП Петров А.И. ОГРНИП 123456789012345</p>
          </div> */}
        {/* </div> */}
      </div>
    </footer>
  );
};

export default Footer;