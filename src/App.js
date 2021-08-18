import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false,
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((responce) => {
        this.setState({
          items: responce.results,
          loading: true,
        });
        localStorage.setItem("Profiles", JSON.stringify(responce.results));
      });
  }

  render() {
    var { items, loading } = this.state;

    if (!loading) {
      return (
        <div className="App">
          <header className="App-header">
            <p>App Random User loading..</p>
          </header>
        </div>
      );
    } else {
      return (
        <div className="container">
          {items.map((item) => (
            <div className="item" key={item.login.uuid}>
              <img
                className="foto"
                src={item.picture.medium}
                alt={item.name.first}
              />
              <p className="data">{item.name.first}</p>
              <p className="data">{item.name.last}</p>
              <p className="data">{item.location.city}</p>
              <p className="data">{item.location.country}</p>
              <Link className="buttom" to={`/profile/${item.login.uuid}`}>
                View{" "}
              </Link>
            </div>
          ))}
        </div>
      );
    }
  }
}
export default App;
