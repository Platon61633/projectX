import React from "react";
import styles from "../styles/courses_in_main.module.css";
import { Link } from "react-router-dom";

const CoursesInMain = () => {
    return (
        <div className={styles.CoursesInMain} id="div">
            <section className={styles.s1}>
                <h1>Курсы</h1>
                <p>
                    Наши основные курсы — это полноценная траектория роста для
                    учеников, которые хотят научиться думать, а не просто решать
                    по шаблону. Программа построена так, чтобы постепенно
                    погружать ребенка в логику различных задач, начиная с самых
                    азов и заканчивая сложными темами олимпиадного уровня.
                </p>
                <section>
                    <h3>классы подготовки:</h3>
                    <div className={styles.classes}>
                        <div className={styles.item}>
                            <Link to={"/courses"}>1-6</Link>
                        </div>
                        <div className={styles.item}>
                            <Link to={"/courses"}>7</Link>
                        </div>
                        <div className={styles.item}>
                            <Link to={"/courses"}>8</Link>
                        </div>
                        <div className={styles.item}>
                            <Link to={"/courses"}>9</Link>
                        </div>
                        <div className={styles.item}>
                            <Link to={"/courses"}>10</Link>
                        </div>
                        <div className={styles.item}>
                            <Link to={"/courses"}>11</Link>
                        </div>
                    </div>
                </section>
            </section>
            <section className={styles.s2}>
                <h1>Интенсивы и доп программы</h1>
                <p>
                    Если до важной олимпиады остались считаные недели —
                    приходите на наши интенсивы. Максимум практики, разбор
                    реальных задач прошлых лет и никакой воды. А для тех, кто
                    хочет углубиться в конкретную тему или попробовать
                    нестандартные форматы, у нас есть дополнительные программы!
                </p>
                <div className={styles.button}>
                    <div className="btn-primary">
                        <Link to={"/intensive"}>Перейти</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CoursesInMain;
