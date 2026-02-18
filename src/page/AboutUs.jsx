import React, { useEffect } from "react";
import styles from "../styles/about_us.module.css";
import Logo from "../components/Logo";

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.AboutUs}>
            <div className={styles.desc}>
                <p>
                    ka.best — это онлайн-школа, где математика становится
                    инструментом для развития интеллекта. Мы создаём среду, в
                    которой дети учатся думать нестандартно, анализировать и
                    получать удовольствие от поиска решений. Мы верим, что навык
                    решения сложных задач пригодится в любой сфере жизни, будь
                    то IT, бизнес или наука. В уютных группах до 10 человек мы
                    помогаем каждому ученику раскрыть свой потенциал и полюбить
                    математику как увлекательную головоломку.
                </p>
                <Logo />
            </div>
            <div className={styles.desc}>
                <div>
                    Наши цели -
                    <ul>
                        <li>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Iure atque doloribus est, amet, ea
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quos nobis debitis vero numqu
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Laboriosam enim reprehenderit
                            voluptatibus{" "}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
