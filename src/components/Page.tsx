import { ChangeEvent, Component } from "react";
import { getData } from "../api-service/search";
import { Card } from "./Card";
import styles from "./Page.module.css";

interface IParsedData {
  description: string | undefined;
  image: string | undefined;
}
interface IState {
  query: string;
  results: IParsedData[] | undefined;
}

export class Page extends Component {
  state: IState = {
    query: localStorage.getItem("shutterstock") ?? " ",
    results: undefined,
  };

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      this.setState({
        query: e.target.value,
      });
    }
  };

  handleRequest = async () => {
    const fetchedResult: IParsedData[] | undefined = await getData(
      this.state.query,
    );
    localStorage.setItem("shutterstock", this.state.query);
    this.setState({ results: fetchedResult });
  };

  generateError = () => {
    this.setState({ results: 0 });
  };
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.title}>SHUTTERSTOCK SEARCH</div>
        <div className={styles.searchBlock}>
          <input
            onChange={this.handleInputChange}
            type="text"
            defaultValue={localStorage.getItem("shutterstock") ?? " "}
          ></input>
          <button className={styles.button} onClick={this.handleRequest}>
            SEARCH
          </button>
        </div>
        <button className={styles.button} onClick={this.generateError}>
          Generate Error
        </button>
        <div className={styles.cards}>
          {this.state.results?.map((result: IParsedData) => {
            if (result) {
              return (
                <Card
                  description={result.description}
                  image={result.image}
                  key={result.image}
                />
              );
            }
          })}
          ;
        </div>
      </div>
    );
  }
}
