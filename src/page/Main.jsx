import React from "react";
import styles from "../styles/main.module.css";
// import { useMediaQuery } from "react-responsive";
import AboutUsInMain from "../components/AboutUsInMain";
import CoursesInMain from "../components/CoursesInMain";
import TeacherInMain from "../components/TeacherInMain";
import ConsultInMain from "../components/ConsultInMain";

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.title}>
                {/* <div className={styles.desc}>
                    Школа, которая переворачивает привычное представление о
                    математике
                </div> */}
                <p>KA.BEST</p>
                <div className={styles.button}>Получить консультацию</div>
            </div>

            <AboutUsInMain />

            <TeacherInMain />

            <CoursesInMain />

            <ConsultInMain />
        </div>
    );
};

export default Main;
