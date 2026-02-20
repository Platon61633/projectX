import React, { useEffect } from "react";
import styles from "../styles/intensive.module.css";
import { Link } from "react-router-dom";

const Intensive = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={styles.Intensive}>
            <div className={styles.title}>Интенсивы</div>
            <section>
                <div className={styles.block1}>
                    <h2>Подготовка к ММО</h2>
                    <p>
                        Интенсивная подготовка к Московской матемаческой
                        олимпиаде(ММО) — важнейшей перечневой олимпиаде, которая
                        дает шанс попробовать свои силы в 7-8 классе и поступить
                        по БВИ в лучшие вузы в 11-м.
                    </p>
                    <div className={styles.info}>
                            <div className={styles.date}>Дата проведения: 20.02.2020-20.02.2026</div>
                            <div className={styles.status}>Статус: Активно</div>
                            <div className={styles.button}>
                                <div className="btn-primary">
                                    <Link to={'/mmo'}>Подробнее</Link>
                                </div>
                            </div>
                            
                    </div>
                </div>
                <div className={styles.block2}></div>
            </section>
        </div>
    );
};

export default Intensive;
