import React from "react";
import styles from "../styles/consult_in_main.module.css";
// import arrow from "../accept/arrow.svg";
import consult from "../accept/consult.png";
import VK from "../accept/VK Logo.svg";
import MAX from "../accept/MAX.png";
import Telegram from "../accept/Telegram.png";

const ConsultInMain = () => {
    return (
        <div className={styles.ConsultInMain}>
            <div className={styles.block}>
                <div className={styles.text}>
                    <p>Напишите нам в удобной социальной сети, а мы поможем и всё расскажем!</p>
                    <div className={styles.buttons}>
                        <img src={Telegram} alt="" />
                        <img src={VK} alt="" />
                        <img src={MAX} alt="" />
                    </div>
                </div>

                {/* <img src={arrow} className={styles.arrow1} alt="" /> */}
                <img src={consult} className={styles.picture} alt="" />
            </div>
        </div>
    );
};

export default ConsultInMain;
