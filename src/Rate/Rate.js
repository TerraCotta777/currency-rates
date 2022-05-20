import "./Rate.css";
import React from "react";
import Calc from "../Calc/Calc";

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      currencyRate: {},
    };
    this.currency = ["KGS", "EUR", "RUB", "TRY"];
    this.getRate();
  }

  getRate = () => {
    fetch("https://open.er-api.com/v6/latest")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        let date = new Date(data.time_last_update_unix * 1000);
        let dateConverted =
          date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear();
        console.log(dateConverted);
        this.setState({ date: dateConverted });
        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]];
        }
        this.setState({ currencyRate: result });
      });
  };

  render() {
    return (
      <div className="rate">
        <h3>Последнее обновление курса валют - {this.state.date}</h3>
        <div className="flex-container">
          {Object.keys(this.state.currencyRate).map((keyName, i) => (
            <div className="block flex-item" key={keyName}>
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">
                {this.state.currencyRate[keyName].toFixed(2)}*
              </div>
              <p className="note"> * Можно купить за 1 USD</p>
            </div>
          ))}
        </div>
        <Calc rate={this.state.currencyRate} />
      </div>
    );
  }
}

export default Rate;
