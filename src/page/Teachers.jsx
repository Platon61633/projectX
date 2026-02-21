import React, { useEffect } from "react";
import styles from "../styles/teachers.module.css";
import first from "../accept/teachers/first.jpg"
import second from "../accept/teachers/second.jpg"
import third from "../accept/teachers/third.jpg"

const Teachers = () => {

        const Teachers = [
        {img: first, full_name: 'Иван Иванович Иванов', years: '18', university: 'МГУ им. М.В. Ломоносов', achievements: 'Трёхкратный победитель региона ВсОШ, призёр заключительного этапа ВсОШ, победитель устного тура турнира Городов и серебряный медалист IZHO' },
        {img: second, full_name: 'Иван Иванович Иванов', years: '18', university: 'МГУ им. М.В. Ломоносов', achievements: 'Победитель перечневых олимпиад по математике таких как ММО, Устный Турнир Городов, Высшая Проба, Курчатов, Физтех - все за 11 класс. Трехкратный участник заключительного этапа ВСОШ по математике и двухкратный участник ВСОШ по экономике' },
        {img: third, full_name: 'Иван Иванович Иванов', years: '18', university: 'МГУ им. М.В. Ломоносов', achievements: 'Трёхкратный победитель региона ВСОШ по математике, призер заключительного этапа ВСОШ по математике, победитель ММО 11 класс, победитель устного турнира городов' },
        
    ]

    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])

    return (
        <div className={styles.Teachers} id="top">
            <div className={styles.block}>
                <h2>Преподавательский состав</h2>
                <p>
                    Наши преподаватели — действующие победители и призеры
                        Всероссийской олимпиады школьников, студенты лучших
                        вузов России и выпускники сильнейших математических школ
                        Москвы. Это не просто учителя, а увлеченные своим делом
                        наставники, которые «горят» математикой и заражают этим
                        интересом детей. Основатели школы имеют уникальный опыт
                        преподавания олимпиадной математики на экономическом
                        факультете МГУ, что гарантирует академическую глубину и
                        качество программ. Мы делаем упор на развитие логики и
                        креативности, используя олимпиадные задачи как лучший
                        тренажер для ума.
                </p>
            </div>
            <div className={styles.title}>
                <h2>Наши преподаватели</h2>
            </div>
            <div className={styles.cards}>
                {Teachers.map((e, id) => (
                    <div className={styles.card} key={id}>
                        <img src={e.img} alt="" width={200} />
                        <h3>{e.full_name}</h3>
                        <div>
                            <p>Студент {e.university}</p>
                            <br />
                            <p>Возраст: {e.years} лет</p>
                            <br />
                            <p>
                                {e.achievements}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Teachers;
