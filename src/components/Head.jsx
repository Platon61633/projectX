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
                <div>
                    <div className={styles.back_window} onClick={()=>SetIsShow(false)}>
                        <div className={styles.window} onClick={(e)=>e.stopPropagation()}>
                            <IoClose size={50} onClick={()=>SetIsShow(false)}/>
                            <section>
                                <p>Главная</p>
                                <p>Курсы</p>
                                <p>Преподователи</p>
                                <p>Страница 4</p>
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
                    <p>ka.best</p>
                </div>
                <div className={styles.right}>
                    <p>курсы</p>
                    <p>интенсивы</p>
                </div>
            </nav>
        </div>
    );
};

export default Head;
