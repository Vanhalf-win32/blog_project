import React from "react";
import './css/style.css';


const CellTradeIndex = () => {
    return(
        <div>
            <div className="navigation">
                <div className="navigation-logo">
                    smartprice
                </div>
                <div className="navigation-info">
                    Бесплатная линия поддержки (круглосуточно)<br/>
                    <b>
                     8 (800) 302-43-53 <br/>
                    +7 (495) 175-43-53
                    </b>
                </div>
            </div>
            <hr style={{ height: "20px", background: "grey"}}/>
            <div className="main">
                <div className="main-check">
                    Проверка IMEI
                </div>
                <div>
                    Введите IMEI для проверки
                </div>
                <div className="main-form">
                    <form>
                        <input type="radio"/> Телефон <br/>
                        <input type="radio"/> Часы <br/>
                        <input placeholder="IMEI"/><br/>
                        <input type="submit"/>
                    </form>
                </div>
                <div>
                    <img src={require('./image/scanner.jpg')} alt="check"/>
                </div>
                <div className="main-info">
                    <p className="main-info-text">
                        IMEI устройство можно проверить запросом
                        USSD-команды *#06# в приложении 
                        «Телефон».
                        Отсканируйте штрих-код сканером или
                        IMEI устройства вручную.

                    </p>
                </div>
            </div>
        </div>
    );
};


export default CellTradeIndex;