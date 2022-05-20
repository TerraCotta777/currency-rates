import "./Calc.css";
import React from "react";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      base: ["USD"],
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate };
  }

  calcRate = (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    let countCurrency = elements["count-currency"].value;
    let typeCurrency = elements["type-currency"].value;
    this.setState({
      result: (countCurrency / this.state.rate[typeCurrency]).toFixed(2),
    });
  };

  render() {
    return (
      <div className="calculator">
        <h3> Конвертер</h3>
        <div className="block">
          <form className="sell" onSubmit={this.calcRate}>
            <label>Меняю</label>
            <div className="sell-box">
              <input
                type="number"
                defaultValue="150"
                name="count-currency"
                className="count-currency"
              />
              <select name="type-currency" id="" className="type-currency">
                {Object.keys(this.props.rate).map((keyName, i) => (
                  <option key={keyName} value={keyName}>
                    {keyName}
                  </option>
                ))}
              </select>
              <input type="submit" value="&#x3D;" />
            </div>
          </form>
          <div className="buy">
            <label>Получаю</label>
            <div className="buy-box">
              <p className="count-currency">{this.state.result}</p>
              <select name="type-currency" id="">
                {this.state.base.map((elem) => (
                  <option key={elem} value={elem}>
                    {elem}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
