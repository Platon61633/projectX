import React, { useEffect } from 'react';
import styles from "../styles/courses.module.css"



const Courses = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])
    return(
        <div className={styles.courses}>
            <h1>Скоро тут будут курсы</h1>
        </div>
    );
};

export default Courses