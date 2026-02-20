import React from "react";
import styles from "../styles/about_us.module.css";
import about_us from "../accept/about_us.png";
import achievement from "../accept/about_us.png";
import bruh from "../accept/bruh.png";
import arrow from "../accept/arrow.svg";
import { Link } from "react-router-dom";

const AboutUsInMain = () => {
    return (
        <div className={styles.AboutUsInMain}>
            <div className={styles.block_1}>
                <div className={styles.text}>
                    <h1>О нас</h1>
                    <p>
                        ka.best — это онлайн-школа, где математика становится
                        инструментом для развития интеллекта. Мы создаём среду,
                        в которой дети учатся думать нестандартно, анализировать
                        и получать удовольствие от поиска решений. Мы верим, что
                        навык решения сложных задач пригодится в любой сфере
                        жизни, будь то IT, бизнес или наука. В уютных группах до
                        10 человек мы помогаем каждому ученику раскрыть свой
                        потенциал и полюбить математику как увлекательную
                        головоломку.
                    </p>
                    <div className={styles.button}>
                        <div className="btn-primary">
                            <Link to={"about_us"}>Подробнее</Link>
                        </div>
                    </div>
                </div>
                <img src={arrow} className={styles.arrow1} alt="" />
                <img className={styles.picture} src={bruh} alt="" />
            </div>
            <div className={styles.block_2}>
                <img className={styles.picture} src={achievement} alt="" />
                <img src={arrow} className={styles.arrow2} alt="" />

                <div className={styles.text}>
                    <h1>Достижения</h1>
                    <p>
                        Наши преподаватели — действующие победители и призеры
                        Всероссийской олимпиады школьников, находящиеся в
                        составе жюри нескольких олимпиад, студенты лучших вузов
                        России и выпускники сильнейших математических школ
                        Москвы. Это не просто учителя, а увлеченные своим делом
                        наставники, которые «горят» математикой и заражают этим
                        интересом детей. Основатели школы имеют уникальный опыт
                        преподавания математики на экономическом факультете МГУ.
                        Мы делаем упор на развитие логики и креативности,
                        используя олимпиадные и не только задачи как лучший
                        тренажер для ума.
                    </p>
                    <div className={styles.button}>
                        <div className="btn-primary"><Link to={'/about_us'}>Подробнее</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsInMain;
