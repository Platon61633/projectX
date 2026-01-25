import React from "react";
import { Parallax } from "react-parallax";
import { PiStudent } from "react-icons/pi";
import { FaPencilRuler, FaBook } from "react-icons/fa";
import styles from "../styles/main.module.css";
import { useMediaQuery } from "react-responsive";

const Main = () => {

    const isMobile = useMediaQuery({ maxWidth: 1000 });

    return (
        <div className={styles.main}>
            <Parallax
                blur={10}
                bgImage={require("../accept/gradient.jpg")}
                bgImageAlt="background"
                strength={200}
            >
                <div className={styles.infa}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae quia autem ullam voluptates odio, qui maxime natus
                    pariatur dolorum voluptate, ipsum voluptatibus inventore
                    laborum. Culpa officiis molestiae sint alias animi? A iusto
                    sed tempora omnis iste hic exercitationem possimus
                    perferendis aliquid quidem. Suscipit mollitia exercitationem
                    explicabo eum praesentium. Sequi tempora quos doloribus
                    aspernatur. Nulla itaque deserunt odio similique ratione
                    officia! Reprehenderit nobis sunt iusto expedita, facilis
                    alias soluta officia placeat dolores quidem. Ipsum molestias
                    repellat dolore distinctio minus magni fugit est aliquid
                    nulla voluptas blanditiis, doloribus eos natus suscipit
                    eaque. Autem minus quo consequatur at non repellendus,
                    delectus reiciendis accusamus odio incidunt earum dolorem
                    numquam iure suscipit, provident nemo vero corporis magni et
                    maiores ea molestias maxime? Architecto, harum voluptas!
                    Fugit, dignissimos doloribus incidunt neque reiciendis dicta
                    reprehenderit adipisci aspernatur explicabo odit similique
                    ab animi provident perspiciatis dolorum et odio, esse
                    possimus earum veniam in quas cum. Natus, neque mollitia.
                </div>
            </Parallax>
            <div className={styles.plus}>
                <h1>Достоинства</h1>
                <div className={styles.cards} style={{gridTemplateColumns: `1fr${isMobile?null:' 1fr 1fr'}`}}>
                    <div className={styles.card}>
                        <h2>1</h2>
                        <PiStudent size={50}/>
                        <p>
                            мы вообще классные молодые ребята, ещё перспективные
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h2>2</h2>
                        <FaPencilRuler size={50} />
                        <p>
                            мы вообще классные молодые ребята, ещё перспективные
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h2>3</h2>
                        <FaBook size={50} />
                        <p>
                            мы вообще классные молодые ребята, ещё перспективные
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
