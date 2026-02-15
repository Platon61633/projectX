import React, { useMemo, useRef, useState } from "react";
import { Parallax } from "react-parallax";
import { PiStudent } from "react-icons/pi";
import { FaPencilRuler, FaBook } from "react-icons/fa";
import styles from "../styles/main.module.css";
import consult from "../accept/Platon_and_bro.jpg";
import { useMediaQuery } from "react-responsive";
// import teacher1 from "../accept/teachers/1.jpg";
// import teacher2 from "../accept/teachers/2.jpg";
// import msu from "../accept/msu.png";
// import mstu from "../accept/mstu.png";
// import spbgu from "../accept/spbgu.png";
// import itmo from "../accept/itmo.png";
import teacher3 from "../accept/teachers/3.jpg";
import teacher4 from "../accept/teachers/4.jpg";
import { useIsVisible } from "react-is-visible";
import AnimatedSVG from "../components/Animated";
import { Link } from "react-router-dom";
import AboutWe from "../components/About_Us";
import Consult from "../components/Consult";

const Main = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

    const CoursesRef = useRef();
    const CoursesIsVisible = useIsVisible(CoursesRef);

    // const GeomtrRef = useRef();
    // const GeomtrIsVisible = useIsVisible(GeomtrRef);

    const [isVisible1, SetisVisible1] = useState(false);

    // const [isVisisble2 , SetisVisisble2] = useState(false);
    

    useMemo(async() => {
        if (CoursesIsVisible) {
            SetisVisible1(true);
        }
        // setTimeout(()=>SetisVisisble2(true),
        // 5000
        // )
    }, [CoursesIsVisible]);

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

            <div className={styles.courses}>
                <div className={styles.courses_window}>
                    <div className={styles.about}>
                        {isMobile ? null : (
                            <div
                                className={styles.decor}
                                style={{ paddingRight: "100px" }}
                            >
                                {[...Array(10).keys()].map((item, key) => (
                                    <div key={key}></div>
                                ))}
                            </div>
                        )}
                        <div style={{ paddingBottom: "30px" }}>
                            <h2>Наши курсы</h2>
                            <div
                                className={
                                    isVisible1 ? styles.desc : styles.desc_0
                                }
                            >
                                <p>разовые занятия</p>
                                <p>8 занеятий на месяц</p>
                                <p>12 занятий на месяц</p>
                                <p>Lorem ipsum dolor sit amet</p>
                                <p ref={CoursesRef}>
                                    consectetur adipisicing elit. Dolorem
                                </p>
                            </div>
                            <Link to={'/courses'}><div className="btn-secondary">Подробнее</div></Link>
                        </div>
                        {isMobile ? null : (
                            <div
                                className={styles.decor}
                                style={{ paddingLeft: "100px" }}
                            >
                                {[...Array(10).keys()].map((item, key) => (
                                    <div key={key}></div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                {!isMobile ? 
                    <div className={styles.background}>
                        {isVisible1?<AnimatedSVG />:<div className={styles.s500x500}></div>}
                        {/* {isVisisble2?<div>hardbus</div>:null} */}
                    </div>
                 : null}
            </div>

            <div className={styles.teachers}>
                <h2>Наш предовательский состав</h2>
                <div className={styles.photos}>
                    <img src={teacher3} alt="" />
                    {/* <img src={teacher4} alt="" /> */}
                    {/* <img src={msu} alt="" /> */}
                    {/* <img src={mstu} alt="" />
                    <img src={spbgu} alt="" /> */}
                    {/* <img src={itmo} alt="" /> */}
                </div>
            </div>
        </div>
    );
};

export default Main;