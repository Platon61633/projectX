import React from "react";
import styles from "../styles/consult_in_main.module.css";
// import arrow from "../accept/arrow.svg";
import consult from "../accept/consult.png";
import VK from "../accept/VK Logo.svg";
import MAX from "../accept/MAX.png";
import Telegram from "../accept/Telegram.png";
import { useMediaQuery } from "react-responsive";

const ConsultInMain = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

    return (
        <div className={styles.ConsultInMain}>
            <div className={styles.block}>
                <div className={styles.text}>
                    <p>
                        Напишите нам в удобной социальной сети, а мы поможем и
                        всё расскажем!
                    </p>
                    <div className={styles.buttons}>
                        <a href="https://t.me/ka_best_manager"><img width={40} src={Telegram} alt="" /></a>
                        <a href="https://vk.ru/club236178059">
                            <img width={40} src={VK} alt="" />
                        </a>
                        <a href="https://max.ru/u/f9LHodD0cOIWBeXWl6gcUzWSYIOW0gDSiKS67-XZSB6osTey2D4BfdyXJIs">
                            <img width={40} src={MAX} alt="" />
                        </a>
                    </div>
                </div>

                {/* <img src={arrow} className={styles.arrow1} alt="" /> */}
                {isMobile ? null : (
                    <img src={consult} className={styles.picture} alt="" />
                )}
            </div>
        </div>
    );
};

export default ConsultInMain;
