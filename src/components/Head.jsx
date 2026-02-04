import React, { useState } from "react";
import styles from "../styles/head.module.css";
import { Si1Dot1Dot1Dot1 } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMediaQuery } from "react-responsive";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Head = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

    const [IsShow, SetIsShow] = useState(false);

    return (
        <div className={styles.head}>
            {IsShow ? (
                <div className={styles.window} onClick={() => SetIsShow(false)}>
                    <div className={styles.close} onClick={()=>SetIsShow(false)}><IoClose/></div>
                    <main onClick={(e) => e.stopPropagation()}>
                        <div className={styles.navbarMobile}>
                            <div><Link to={'/'}>Главная</Link></div>
                            <div><Link to={'/courses'}>Курсы</Link></div>
                            <div>Страница 3</div>
                            <div>Страница 4</div>
                            <div>Страница 5</div>
                        </div>
                    </main>
                </div>
            ) : null}
            <div className={styles.logoName}>
                <Si1Dot1Dot1Dot1 />
                <h1>Project</h1>
            </div>
            {isMobile ? (
                <RxHamburgerMenu onClick={() => SetIsShow(true)} />
            ) : (
                <div className={styles.navbar}>
                    <div className={styles.link}><Link to={'/'}>Главная</Link></div>
                    <div className={styles.link}><Link to={'/courses'}>Курсы</Link></div>
                    <div className={styles.link}>Страница 3</div>
                    <div className={styles.link}>Страница 4</div>
                    <div className={styles.link}>Страница 5</div>
                </div>
            )}
        </div>
    );
};

export default Head;
