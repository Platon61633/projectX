import React, { useRef } from "react";
// import { Parallax } from "react-parallax";
// import { PiStudent } from "react-icons/pi";
// import { FaPencilRuler, FaBook } from "react-icons/fa";
import styles from "../styles/main.module.css";
// import consult from "../accept/Platon_and_bro.jpg";
// import { useMediaQuery } from "react-responsive";
import teacher3 from "../accept/teachers/3.jpg";
// import teacher4 from "../accept/teachers/4.jpg";
// import { useIsVisible } from "react-is-visible";
// import AnimatedSVG from "../components/Animated";
// import { Link } from "react-router-dom";
import AboutWe from "../components/About_Us";
import Consult from "../components/Prepod_Consult";

const Main = () => {


    return (
        <div className={styles.main}>
            <div className={styles.we_is}>
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
            </div>

            <AboutWe/>

            <Consult />


            <div className={styles.teachers}>
                <h2>Наш предовательский состав</h2>
                <div className={styles.photos}>
                    <img src={teacher3} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Main;