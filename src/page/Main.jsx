import React from "react";
// import { Parallax } from "react-parallax";
// import { PiStudent } from "react-icons/pi";
// import { FaPencilRuler, FaBook } from "react-icons/fa";
import styles from "../styles/main.module.css";
// import consult from "../accept/Platon_and_bro.jpg";
// import { useMediaQuery } from "react-responsive";
// import teacher4 from "../accept/teachers/4.jpg";
// import { useIsVisible } from "react-is-visible";
// import AnimatedSVG from "../components/Animated";
// import { Link } from "react-router-dom";
import AboutUsInMain from "../components/AboutUsInMain";
import CoursesInMain from "../components/CoursesInMain";
import TeacherInMain from "../components/TeacherInMain";
import ConsultInMain from "../components/ConsultInMain";
import msu from '../accept/msu_main.jpg'

const Main = () => {


    return (
        <div className={styles.main}>
            {/* <div className={styles.we_is}>
                <div className={styles.stars}></div>
                <div className={styles.stars2}></div>
                <div className={styles.stars3}></div>
                <div className={styles.title}>
                    <span>
                        Мы таскаем пушки, а не Rick Owens (Ага, р-ра) <br />
                        Мы не возим газ кому-то, только если там кореш <br />
                        Нас с США разделяет не пояс <br />А глубина мысли, беру
                        её с собой в поезд
                    </span>
                </div>
            </div> */}

            <div className={styles.title}>
                KA.BEST
            </div>

            <AboutUsInMain/>

            <TeacherInMain />
            <hr />
            <CoursesInMain />
            <hr />
            <ConsultInMain />
        </div>
    );
};

export default Main;