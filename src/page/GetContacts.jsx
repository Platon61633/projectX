import React, { useState } from "react";
import styles from "../styles/GetContacts.module.css";
import axios from "axios";
import whatsApp from "../accept/whatsApp.webp";
import Telegram from "../accept/Telegram.png"
import MAX from "../accept/MAX.png"
import VK from "../accept/VK Logo.svg"
import { FaPhone } from "react-icons/fa6";

const GetContacts = () => {
    const ChooseList = {
        Phone: "Введите номер телефона",
        Telegram: "Введите username или ссылку",
        WhatsApp: "Введите номер телефона",
        MAX: "Введите ссылку на MAX",
        VK: "Введите ссылку на VK или id",
    };

    const [Choose, SetChoose] = useState("Phone");

    const [Info , SetInfo] = useState({
        name: "",
        value: ""
    });

    const Submit = () => {
        axios.post(
            "/backend/index.php",
            {
                ...Info,
                type: Choose
            }
        ).then((e)=>console.log(e))
    };
    

    return (
        <div className={styles.GetContacts}>
            <h1>
                Подайте заявку, и мы свяжемся с вами удобным для вас способом.
            </h1>
            <div>
                <div className={styles.body}>
                    <div>
                        <h4>Ваше имя</h4>
                        <input type="text" name="name" placeholder="Имя" 
                        onChange={(e)=>SetInfo({
                            ...Info,
                            name: e.target.value
                        })}/>
                    </div>
                    <div>
                        <h4>Способ связи</h4>
                        <div className={styles.choose}>
                            <p
                                style={
                                    Choose === "Phone"
                                        ? { border: "1px solid black" }
                                        : null
                                }
                                onClick={() => SetChoose("Phone")}
                            >
                                <FaPhone /><div>Телефон</div>
                            </p>
                            <p
                                style={
                                    Choose === "Telegram"
                                        ? { border: "1px solid black" }
                                        : null
                                }
                                onClick={() => SetChoose("Telegram")}
                            >
                                <img width={25} src={Telegram} alt="" /><div>Telegram</div>
                            </p>
                            <p
                                style={
                                    Choose === "WhatsApp"
                                        ? { border: "1px solid black" }
                                        : null
                                }
                                onClick={() => SetChoose("WhatsApp")}
                            >
                                <img src={whatsApp} width={30} alt="" /><div>WhatsApp</div>
                            </p>
                            <p
                                style={
                                    Choose === "MAX"
                                        ? { border: "1px solid black" }
                                        : null
                                }
                                onClick={() => SetChoose("MAX")}
                            >
                                <img width={25} src={MAX} alt="" /><div>MAX</div>
                            </p>
                            <p
                                style={
                                    Choose === "VK"
                                        ? { border: "1px solid black" }
                                        : null
                                }
                                onClick={() => SetChoose("VK")}
                            >
                                <img width={25} src={VK} alt="" /><div>VK</div>
                            </p>
                        </div>
                        <input
                            type="text"
                            name="type"
                            placeholder={ChooseList[Choose]}
                            onChange={e=>SetInfo({
                                ...Info,
                                value: e.target.value
                            })}
                        />
                    </div>
                    <div
                        className="btn-secondary"
                        style={{ alignSelf: "center" }}
                        onClick={Submit}
                    >
                        Отправить
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetContacts;
