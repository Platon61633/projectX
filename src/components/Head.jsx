import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/head.module.css";
// import { Si1Dot1Dot1Dot1 } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
// import { useMediaQuery } from "react-responsive";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Head = () => {
    // const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

    const [IsShow, SetIsShow] = useState(false);

    const [visible, setVisible] = useState(false);
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Determine scroll direction
            if (currentScrollY > prevScrollY.current) {
                // Scrolling down -> hide navbar
                setVisible(true);
            } else {
                // Scrolling up -> show navbar
                setVisible(false);
            }

            // Update ref with the current scroll position for the next event
            prevScrollY.current = currentScrollY;
        };

        // Throttle with requestAnimationFrame
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div className={`${styles.head} ${visible ? styles.navbar__hidden : styles.navbar__visible}`}>
            {IsShow ? (
                <div>
                    <div
                        className={styles.back_window}
                        onClick={() => SetIsShow(false)}
                    >
                        <div
                            className={styles.window}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <IoClose
                                size={50}
                                onClick={() => SetIsShow(false)}
                            />
                            
                            <section>
                                <p><Link to='/' onClick={()=>SetIsShow(false)}>Главная</Link></p>
                                <p>Курсы</p>
                                <p><Link to='/teachers' onClick={()=>SetIsShow(false)}>Преподователи</Link></p>
                                <p><Link to='/about_us' onClick={()=>SetIsShow(false)}>О нас</Link></p>
                                <p>Страница 5</p>
                            </section>
                        </div>
                    </div>
                </div>
            ) : null}
            <nav>
                <div className={styles.left}>
                    <RxHamburgerMenu
                        size={50}
                        onClick={() => SetIsShow(true)}
                    />
                    <p><Link to='/'>ka.best</Link></p>
                </div>
                <div className={styles.right}>
                    <p className={styles.link}>курсы и интенсивы</p>
                    {/* <p className={styles.link}>интенсивы</p> */}
                </div>
            </nav>
        </div>
    );
};

export default Head;
