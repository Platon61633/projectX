import React from "react";
import styles from "../styles/ConsultInMain.module.css";
import arrow from "../accept/arrow.svg";
import consult from "../accept/consult.png";

const ConsultInMain = () => {
    return (
        <div className={styles.ConsultInMain}>
            <div className={styles.block}><div className={styles.text}>
                    <p>У вас остались вопросы?</p>
                    <div className={styles.button}>
                        <div className={"btn-primary"}>Консультация</div>
                    </div>
                </div>
                
                <img src={arrow} className={styles.arrow1} alt="" />
                <img src={consult} className={styles.picture} alt="" />
            </div>
        </div>
    );
};

export default ConsultInMain;
