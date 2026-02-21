import React, { useState } from "react";
import styles from "../styles/MMO.module.css";
import { VscAccount } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import ConsultInMain from "../components/ConsultInMain";
// import list from "../accept/list.svg"

const MMO = () => {
    const [ShowProgram, SetShowProgram] = useState(false);
    const [ShowResult, SetShowResult] = useState(false);
    const [FourReason, SetFourReason] = useState(false);

    return (
        <div className={styles.MMO}>
            <div className={styles.title_main}>
                Интенсивная подготовка к Московской матемаческой олимпиаде(ММО)
            </div>
            <div className={styles.block1}>
                <h2>Об интенсиве:</h2>
                <p>
                    Московская математическая олимпиада — одна из старейших и
                    самых авторитетных перечневых олимпиад в России. Ее ценят
                    все ведущие вузы: МГУ, ВШЭ, МФТИ и другие.
                    <br />
                    Для 11-классников — это возможность получить БВИ
                    (поступление без вступительных испытаний) на лучшие
                    математические и IT-направления. Диплом ММО открывает двери
                    в топовые вузы без мучительной сдачи ЕГЭ по профильной
                    математике.
                    <br />
                    Для 7-8 классов — это идеальный полигон для пробы сил. Здесь
                    вы столкнетесь с настоящими олимпиадными задачами, поймете
                    уровень конкуренции и получите бесценный опыт перед ВсОШ и
                    более серьезными турнирами.
                </p>
                {/* <img src={list} alt="" /> */}
            </div>
            <div className={styles.block2}>
                <h2>Что вас ждет:</h2>
                <p>
                    Наш интенсив — это концентрированная подготовка к ММО за две
                    недели. Мы не будем долго раскачиваться. Сразу погрузимся в
                    задачи, которые реально падают на олимпиаде, и разберем их с
                    людьми, которые сами успешно их решали.
                    <br />
                    · 14 живых занятий с преподавателями, занимавшими призовые
                    места на ВСОШ.
                    <br />
                    · Разбор реальных задач прошлых лет + авторские задачи от
                    составителей
                    <br />· Индивидуальная проверка домашних заданий с разбором
                    ошибок
                </p>
            </div>
            <h1>Интенсив ведут</h1>
            <div className={styles.cards}>
                {[0, 0, 0].map((e, id) => (
                    <div className={styles.card} key={id}>
                        <VscAccount size={200} />
                        <h3>Имя Фамилия</h3>
                        <div>
                            <p>Студент МГУ им. Н. Манделы</p>
                            <br />
                            <p>Возраст: 18 лет</p>
                            <br />
                            <p>
                                Трёхкратный победитель региона ВсОШ, призёр
                                заключительного этапа ВсОШ, победитель устного
                                тура турнира Городов и серебряный медалист IZHO
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <section className={styles.info}>
                <div
                    className={styles.title}
                    onClick={() => {
                        if (!ShowProgram) {
                            SetShowProgram(true);
                        } else {
                            SetShowProgram(false);
                        }
                    }}
                >
                    <p>Программа</p>
                    <IoIosArrowDown />
                </div>
                {ShowProgram ? (
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias sequi ratione consectetur molestias iure facere
                        expedita, obcaecati fugit deleniti? Quia aliquam
                        corrupti sed voluptates neque reprehenderit quis
                        cupiditate dicta consequuntur! Fuga a sequi hic illum
                        nobis placeat voluptatibus, magnam accusantium eum
                        fugiat tenetur quasi expedita accusamus animi
                        architecto, vel tempore, officiis omnis! Atque quia,
                        harum ducimus sequi fugit rerum et. Cupiditate ex ullam
                        aperiam cumque fuga dolor dignissimos repudiandae est
                        sed iusto incidunt recusandae quaerat quia accusantium
                        architecto, neque, eum voluptatem, molestiae fugit
                        voluptate laborum eveniet? Debitis dignissimos cumque
                        quidem! Laboriosam quam, sed blanditiis obcaecati minima
                        minus ipsam excepturi ad veniam earum magni odio
                        veritatis sapiente iusto. Voluptatum reprehenderit quae,
                        ex laudantium hic impedit accusamus, consequatur tenetur
                        quidem, modi repellendus.
                    </p>
                ) : null}
            </section>
            <section className={styles.info}>
                <div
                    className={styles.title}
                    onClick={() => {
                        if (!ShowResult) {
                            SetShowResult(true);
                        } else {
                            SetShowResult(false);
                        }
                    }}
                >
                    <p>Результат</p>
                    <IoIosArrowDown />
                </div>
                {ShowResult ? (
                    <p className={styles.text}>
                        Что вы получите на выходе Для 11-классников:
                        <br />
                        · Реалистичную оценку своих шансов на диплом ММО.
                        <br />
                        · Понимание критериев оценивания (чтобы не терять баллы
                        на пустом месте).
                        <br />
                        · Готовность бороться за БВИ в топовые вузы.
                        <br />
                        Для 7-8 классов:
                        <br />
                        · Первый серьезный опыт решения олимпиадных задач под
                        руководством профи.
                        <br />
                        · Понимание своей траектории: что подтянуть, куда
                        двигаться дальше.
                        <br />
                        · Уверенность на туре и отсутствие страха перед сложными
                        формулировками. Общее:
                        <br />
                        · Вы закроете пробелы в комбинаторике, теории чисел,
                        геометрии и алгебре.
                        <br />
                        · Научитесь распределять время и не застревать на одной
                        задаче.
                        <br />· Поймете логику составителей: что именно они
                        хотят проверить.
                    </p>
                ) : null}
            </section>
            <section className={styles.info} style={{ marginBottom: 100 }}>
                <div
                    className={styles.title}
                    onClick={() => {
                        if (!FourReason) {
                            SetFourReason(true);
                        } else {
                            SetFourReason(false);
                        }
                    }}
                >
                    <p>4 причины выбрать ka.best</p>
                    <IoIosArrowDown />
                </div>
                {FourReason ? (
                    <p className={styles.text}>
                        Почему этот интенсив
                        даст результат 
                        <br />
                        • Экспертность. Наши преподаватели - это
                        победители и призеры Всероссийской олимпиады школьников,
                        которые сами прошли через все круги олимпиадного ада.
                        Они знают, что такое сидеть на туре 4 часа, как
                        справляться с паникой и где искать нестандартные ходы.
                        Добавьте к этому опыт преподавания в легендарных школах
                        (№179, 57») — и вы получите наставников, которые умеют
                        передать свой опыт детям. 
                        <br />
                        • Авторская программа. Это не
                        пересказ учебников, а выжимка реально работающих
                        методов, которые приносят дипломы. Мы знаем, какие темы
                        падают на ММО чаще всего, и бьем точно в цель. 
                        <br />
                        •
                        Мини-группы до 10 человек. Каждого участника слышно.
                        Никто не отсидится в уголке. Преподаватель видит, кто
                        понял, а кто плавает, и успевает помочь каждому. В
                        отличие от вебинаров на 100 человек, здесь вы не
                        потеряетесь. 
                        <br />
                        • Обратная связь. После каждого занятия —
                        домашка с персональной проверкой. Вы узнаете не просто
                        оценку, а подробный разбор ошибок. Для 11-классников это
                        критично — баллы снимают за мелкие недочеты, и мы научим
                        их избегать.
                    </p>
                ) : null}
            </section>

            <div className={styles.for_how}>
                <div
                    className={styles.title_main}
                    style={{ textAlign: "center" }}
                >
                    Чтобы задать свои вопросы или записаться на курс - пишите
                    нам!
                </div>
                <ConsultInMain />
            </div>
        </div>
    );
};

export default MMO;
