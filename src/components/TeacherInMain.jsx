import React from "react";
import styles from "../styles/teacher_in_main.module.css";
// import arrow from "../accept/arrow.svg";
import teacher from "../accept/achievement.png";
import { Link } from "react-router-dom";

const TeacherInMain = () => {
    return (
        <div className={styles.teacher_in_main}>
            <div className={styles.block_2}>
                <img className={styles.picture} src={teacher} alt="" />

                <div className={styles.text}>
                    <h1>Преподователи</h1>
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
                        <div className="btn-secondary"><Link to='/teachers#top'>Подробнее</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherInMain;
