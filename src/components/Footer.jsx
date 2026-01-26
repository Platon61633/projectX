import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import styles from '../styles/footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Услуги': [
      { name: 'Подготовка к ЕГЭ', path: '/services#ege' },
      { name: 'Подготовка к ОГЭ', path: '/services#oge' },
      { name: 'Школьная программа', path: '/services#school' },
      { name: 'Интенсив-курсы', path: '/services#intensive' }
    ],
    'Ресурсы': [
      { name: 'Блог', path: '/blog' },
      { name: 'Материалы', path: '/materials' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Отзывы', path: '/#testimonials' }
    ],
    'О компании': [
      { name: 'Обо мне', path: '/about' },
      { name: 'Контакты', path: '/contact' },
      { name: 'Политика конфиденциальности', path: '/privacy' },
      { name: 'Договор-оферта', path: '/offer' }
    ]
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_content}>
          <div className={styles.footer_section}>
            <p className={styles.footer_description}>
              Индивидуальные занятия по математике, физике и информатике.
              Подготовка к экзаменам, повышение успеваемости.
            </p>
            <div className={styles.footer_social}>
              <a href="https://en.wikipedia.org/wiki/Facebook" className={styles.social_link} aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://en.wikipedia.org/wiki/Telegraphy#Telegram_services" className={styles.social_link} aria-label="Telegram">
                <FaTelegram />
              </a>
              <a href="https://en.wikipedia.org/wiki/WhatsApp" className={styles.social_link} aria-label="WhatsApp">
                <FaWhatsapp />
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
                <strong>Телефон:</strong>
                <a href="tel:+79991234567">+7 (999) 123-45-67</a>
              </li>
              <li>
                <strong>Email:</strong>
                <a href="mailto:tutor@example.com">tutor@example.com</a>
              </li>
              <li>
                <strong>Адрес:</strong>
                <span>г. Москва, ул. Образцова, 25</span>
              </li>
              <li>
                <strong>Часы работы:</strong>
                <span>Пн-Вс: 9:00-20:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footer_bottom}>
          
          
          <div className={styles.copyright}>
            <p>© {currentYear} Профессиональный репетитор. Все права защищены.</p>
            <p>ИП Петров А.И. ОГРНИП 123456789012345</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;