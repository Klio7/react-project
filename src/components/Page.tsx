import { ChangeEvent, Component } from "react";
import { getData } from "../api-service/search";
import { Card } from "./Card";

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
    query: " ",
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
      <div>
        <div>
          <input
            onChange={this.handleInputChange}
            type="text"
            defaultValue={localStorage.getItem("shutterstock") ?? " "}
          ></input>
          <button onClick={this.handleRequest}>SEARCH</button>
        </div>
        <button onClick={this.generateError}>Generate Error</button>
        <div>
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
