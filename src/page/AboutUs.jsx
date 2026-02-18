import React from "react";
import styles from "../styles/about_us.module.css";
import logo from "../accept/achievement.png"

const AboutUs = () => {
    return (
        <div className={styles.AboutUs}>
            <div className={styles.desc}>
                <p>
                    ka.best - Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Et numquam molestias reprehenderit
                    blanditiis repellendus sed pariatur ex qui illum provident
                    vel natus, in explicabo, officiis eius accusantium expedita
                    minima voluptas. Ratione maiores repellat vel recusandae
                    animi, in placeat deserunt nihil fugit ut aspernatur aut
                    excepturi iusto nesciunt non illum exercitationem.
                    Repudiandae, magni commodi tenetur quo velit provident
                    consequatur tempore asperiores. Facilis, voluptate quis
                    doloribus perspiciatis mollitia ullam provident excepturi
                    animi nobis aut impedit molestias culpa quibusdam libero
                    quos quisquam inventore optio iure architecto nam! Culpa,
                    amet unde! Voluptate, porro animi!
                </p>
                <img width={70} src={logo} alt="" />
            </div>
            <div className={styles.desc}>
                <p>
                    Наши цели -
                    <ul>
                        <li>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Iure atque doloribus est, amet, ea
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quos nobis debitis vero numqu
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Laboriosam enim reprehenderit
                            voluptatibus{" "}
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
