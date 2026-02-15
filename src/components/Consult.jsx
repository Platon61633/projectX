import React from "react";
import styles from "../styles/consult.module.css";
import teacher1 from '../accept/teachers/1.jpg'
import teacher2 from '../accept/teachers/2.jpg'
import consult from '../accept/Platon_and_bro.jpg'


const Consult = () => {
    return (
        <div className={styles.consult}>
            <div className={styles.block}>
                <img src={consult} alt="" />
                {/* <div className={styles.quadro_2}></div> */}
                <div className={styles.text}>
                    <h1>Преподователи</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quidem qui architecto veniam ad sint illo omnis.
                        Suscipit inventore assumenda delectus. Molestias hic
                        suscipit, consequatur incidunt aut distinctio eligendi
                        ipsum porro.
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default Consult;
