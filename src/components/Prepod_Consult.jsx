import React from "react";
import styles from "../styles/consult.module.css";
import arrow from "../accept/arrow.svg";
import teacher from "../accept/teacher.png";

const Consult = () => {
    return (
        <div className={styles.consult}>
            <div className={styles.block_2}>
                <img className={styles.picture} src={teacher} alt="" />
                <img src={arrow} className={styles.arrow2} alt="" />

                <div className={styles.text}>
                    <h1>Преподы</h1>
                    <p>
                        Наши преподаватели — действующие победители и призеры
                        Всероссийской олимпиады школьников, студенты лучших
                        вузов России и выпускники сильнейших математических школ
                        Москвы. Это не просто учителя, а увлеченные своим делом
                        наставники, которые «горят» математикой и заражают этим
                        интересом детей. Основатели школы имеют уникальный опыт
                        преподавания олимпиадной математики на экономическом
                        факультете МГУ, что гарантирует академическую глубину и
                        качество программ. Мы делаем упор на развитие логики и
                        креативности, используя олимпиадные задачи как лучший
                        тренажер для ума.
                    </p>
                    <div className={styles.button}>
                        <div className="btn-secondary">Подробнее</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consult;
