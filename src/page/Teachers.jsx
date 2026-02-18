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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Excepturi, officia sapiente! Dolores, vel officia doloremque
                    ducimus repudiandae recusandae quod nisi rerum impedit
                    deleniti animi suscipit nesciunt veniam vitae harum
                    corrupti?
                </p>
            </div>
            <div className={styles.title}>
                <h2>Наши преподователи</h2>
            </div>
            <div className={styles.cards}>
                {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((e, id) => (
                    <div className={styles.card} key={id}>
                        <VscAccount size={70} />
                        <h3>Имя Фамилия</h3>
                        <div>
                            <p>Студент МГУ им. Н. Манделы</p>
                            <p>Возраст: 18 лет</p>
                            <p>Стаж: 2 года</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Teachers;
