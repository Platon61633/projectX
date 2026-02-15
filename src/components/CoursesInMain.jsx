import React from "react";
import styles from "../styles/CoursesInMain.module.css";

const CoursesInMain = () => {
    return (
        <div className={styles.CoursesInMain}>
            <section>
                <h1>Курсы</h1>
                <p>
                    У нас есть Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Omnis similique voluptatibus consequuntur
                    pariatur voluptas perferendis porro eos rerum doloribus eum.
                    Sequi, suscipit molestiae quidem doloremque quo mollitia
                    placeat? Modi, consequatur.
                </p>
                <h3>классы: <span className={styles.classes}>6</span> <span className={styles.classes}>7</span> <span className={styles.classes}>8</span> <span className={styles.classes}>9</span> <span className={styles.classes}>10-11</span></h3>
            </section>
            <section>
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
