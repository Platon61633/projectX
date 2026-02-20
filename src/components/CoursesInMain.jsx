import React from "react";
import styles from "../styles/courses_in_main.module.css";
import { Link } from "react-router-dom";

const CoursesInMain = () => {
    return (
        <div className={styles.CoursesInMain} id="div">
            <section className={styles.s1}>
                <h1>Курсы</h1>
                <p>
                    У нас есть Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Omnis similique voluptatibus consequuntur
                    pariatur voluptas perferendis porro eos rerum doloribus eum.
                    Sequi, suscipit molestiae quidem doloremque quo mollitia
                    placeat? Modi, consequatur.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio officiis in dolore maiores eum eos ducimus sed officia
                    esse at, eligendi iste perferendis soluta quod pariatur
                    cumque unde tenetur magnam?
                </p>
                <div className={styles.button}>
                    <div className="btn-primary">Перейти</div>
                </div>
            </section>
        </div>
    );
};

export default CoursesInMain;
