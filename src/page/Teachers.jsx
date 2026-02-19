import React, { useEffect } from "react";
import styles from "../styles/teachers.module.css";
import { VscAccount } from "react-icons/vsc";

const Teachers = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])

    return (
        <div className={styles.Teachers} id="top">
            <div className={styles.block}>
                <h2>Преподовательский состав</h2>
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
            </div>
            <div className={styles.title}>
                <h2>Наши преподователи</h2>
            </div>
            <div className={styles.cards}>
                {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((e, id) => (
                    <div className={styles.card} key={id}>
                        <VscAccount size={120} />
                        <h3>Имя Фамилия</h3>
                        <div>
                            <p>Студент МГУ им. Н. Манделы</p>
                            <p>Возраст: 18 лет</p>
                            <p>Стаж: 2 года</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Teachers;
