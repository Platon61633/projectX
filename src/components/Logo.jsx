import React from "react";
import styles from "../styles/logo.module.css";
import logo from "../accept/logo.svg";

const Logo = () => {
    return (
        <div className={styles.Logo}>
            <p>ka</p>
            <div className={styles.picture}>
                <img width={70} src={logo} alt="" />
            </div>
        </div>
    );
};

export default Logo;
