import React, { useState } from "react";
import styles from "../styles/head.module.css";
import { Si1Dot1Dot1Dot1 } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMediaQuery } from "react-responsive";
import { IoClose } from "react-icons/io5";

const Head = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

    const [IsShow, SetIsShow] = useState(false);

    return (
        <div className={styles.head}>
            {IsShow ? (
                <div className={styles.window} onClick={() => SetIsShow(false)}>
                    <div className={styles.close} onClick={()=>SetIsShow(false)}><IoClose size={50}/></div>
                    <main onClick={(e) => e.stopPropagation()}>
                        <div className={styles.navbarMobile}>
                            <div>Страница 1</div>
                            <div>Страница 2</div>
                            <div>Страница 3</div>
                            <div>Страница 4</div>
                            <div>Страница 5</div>
                        </div>
                    </main>
                </div>
            ) : null}
            <div className={styles.logoName}>
                <Si1Dot1Dot1Dot1 size={50} />
                <h1>Project</h1>
            </div>
            {isMobile ? (
                <RxHamburgerMenu size={50} onClick={() => SetIsShow(true)} />
            ) : (
                <div className={styles.navbar}>
                    <div className={styles.link}>Страница 1</div>
                    <div className={styles.link}>Страница 2</div>
                    <div className={styles.link}>Страница 3</div>
                    <div className={styles.link}>Страница 4</div>
                    <div className={styles.link}>Страница 5</div>
                </div>
            )}
        </div>
    );
};

export default Head;
