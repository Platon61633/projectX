import React from "react";
import { Parallax } from "react-parallax";
import { PiStudent } from "react-icons/pi";
import { FaPencilRuler, FaBook } from "react-icons/fa";
import styles from "../styles/main.module.css";
import consult from "../accept/Platon_and_bro.jpg";
import { useMediaQuery } from "react-responsive";

const Main = () => {

    const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

    return (
        <div className={styles.main}>
            <div className={styles.we_is}>
                <div className={styles.stars}></div>
                <div className={styles.stars2}></div>
                <div className={styles.stars3}></div>
                <div className={styles.title}>
                    <span>
                        Мы таскаем пушки, а не Rick Owens (Ага, р-ра) <br />
                        Мы не возим газ кому-то, только если там кореш <br />
                        Нас с США разделяет не пояс <br />А глубина мысли, беру
                        её с собой в поезд
                    </span>
                </div>
            </div>
            <Parallax
                className={styles.parallax}
                blur={10}
                bgImage={require("../accept/gradient.jpg")}
                bgImageAlt="background"
                strength={200}
            >
                <div className={styles.infa}>
                    М.Ю.Лермонтов Пророк С тех пор, как Вечный Судия Мне дал
                    всеведенье пророка, В очах людей читаю я Страницы злобы и
                    порока. Провозглашать я стал любви И правды чистые ученья, —
                    В меня все ближние мои Бросали бешено каменья. Посыпал
                    пеплом я главу, Из городов бежал я нищий, И вот в пустыне я
                    живу, Как птицы, даром Божьей пищи.
                </div>
                <div className={styles.plus}>
                    <h1 style={{color: 'white'}}>Достоинства</h1>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <h2>1</h2>
                            <PiStudent size={50} />
                            <p>
                                мы вообще классные молодые ребята, ещё
                                перспективные
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h2>2</h2>
                            <FaPencilRuler size={50} />
                            <p>
                                мы вообще классные молодые ребята, ещё
                                перспективные
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h2>3</h2>
                            <FaBook size={50} />
                            <p>
                                мы вообще классные молодые ребята, ещё
                                перспективные
                            </p>
                        </div>
                    </div>
                </div>
            </Parallax>

            <div className={styles.consult}>
                <div>
                    <h2>Нужна консультация?</h2>
                    <p>Задайте нам вопрос в чате.</p>
                </div>

                <img src={consult} alt="" />
                <div className="btn-primary">
                    <a href="https://t.me/not_LP">Задать вопрос</a>
                </div>
            </div>
            <div className={styles.courses}>
                {isMobile
                ?
                <div className={styles.about}>
                    <h2>Наши курсы</h2>
                    <ul>
                        <li>Оригами в физике</li>
                        <li>Интенсив по информатике</li>
                        <li>Python для начинающих</li>
                        <li>Фундаментальная теория</li>
                    </ul>
                    <div className="btn-secondary">Подробнее</div>
                </div>
                :
                null}
            </div>
        </div>
    );
};

export default Main;
