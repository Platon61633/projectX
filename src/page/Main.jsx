import React from "react";
import { Parallax } from "react-parallax";
import { PiStudent } from "react-icons/pi";
import { FaPencilRuler, FaBook } from "react-icons/fa";
import styles from "../styles/main.module.css";
import { useMediaQuery } from "react-responsive";
import consult from "../accept/Platon_and_bro.jpg";

const Main = () => {
    return (
        <div className={styles.main}>
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
            </Parallax>
            <div className={styles.plus}>
                <h1>Достоинства</h1>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h2>1</h2>
                        <PiStudent size={50} />
                        <p>
                            мы вообще классные молодые ребята, ещё перспективные
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h2>2</h2>
                        <FaPencilRuler size={50} />
                        <p>
                            мы вообще классные молодые ребята, ещё перспективные
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h2>3</h2>
                        <FaBook size={50} />
                        <p>
                            мы вообще классные молодые ребята, ещё перспективные
                        </p>
                    </div>
                </div>
                <hr />
            </div>
            <div className={styles.consult}>
                <div>
                    <h2>Нужна консультация?</h2>
                    <p>Задайте нам вопрос в чате.</p>
                </div>

                <img src={consult} alt="" />
                <div className="btn-primary">
                    <a href="https://t.me/not_LP" style={{ color: "white" }}>
                        Задать вопрос
                    </a>
                </div>
            </div>
            <hr />
            <div className={styles.courses}>
                <h2>Наши курсы</h2>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h2>Курс 1</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
