import React from "react";
import { Parallax } from "react-parallax";
import { PiStudent } from "react-icons/pi";
import { FaPencilRuler, FaBook } from "react-icons/fa";
import styles from "../styles/main.module.css";
import consult from "../accept/Platon_and_bro.jpg";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import teacher1 from "../accept/teachers/1.jpg";
import teacher2 from "../accept/teachers/2.jpg";
import teacher3 from "../accept/teachers/3.jpg";
import teacher4 from "../accept/teachers/4.jpg";

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
                    <h1 style={{ color: "white" }}>Достоинства</h1>
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
                {isMobile ? (
                    <div className={styles.about}>
                        <h2>Наши курсы</h2>
                        <ul>
                            <li>Оригами в физике</li>
                            <li>Интенсив по информатике</li>
                            <li>Python для начинающих</li>
                            <li>Фундаментальная теория</li>
                        </ul>
                        <div className="btn-secondary">
                            <Link to={"/courses"}>Подробнее</Link>
                        </div>
                    </div>
                ) : (
                    <div className={styles.about}>
                        <div className={styles.decor}>
                            {[...Array(15).keys()].map((item, key) => (
                                <div key={key}></div>
                            ))}
                        </div>
                        <div style={{paddingBottom: '30px'}}>
                            <h2>Наши курсы</h2>

                            <p>разовые занятия</p>
                            <p>8 занеятий на месяц</p>
                            <p>12 занятий на месяц</p>
                            <p>Lorem ipsum dolor sit amet</p>
                            <p>consectetur adipisicing elit. Dolorem</p>
                            <p>laudantium temporibus molestias labore</p>
                            <p>cum ipsum et enim omnis</p>
                            <p>
                                nemo similique amet, culpa accusantium impedit
                            </p>
                            <p>perferendis eius commodi sed officia quae?</p>
                        </div>
                        <div className={styles.decor}>
                            {[...Array(15).keys()].map((item, key) => (
                                <div key={key}></div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* <div className={styles.teachers}>
                <h2>Наш предовательский состав</h2>
                <div className={styles.photos}>
                    <img src={teacher1} alt="" />
                    <img src={teacher2} alt="" />
                    <img src={teacher3} alt="" />
                    <img src={teacher4} alt="" />
                </div>
            </div> */}
        </div>
    );
};

export default Main;
