import { ChangeEvent, Component } from "react";
import { getData } from "../api-service/search";

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
    query: "",
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
    this.setState({ results: fetchedResult });
  };

  render() {
    return (
      <div>
        <div>
          <input onChange={this.handleInputChange}></input>
          <button onClick={this.handleRequest}>SEARCH</button>
        </div>
        <div>
          {this.state.results?.map((result: IParsedData) => {
            if (result) {
              return (
                <>
                  <div>{result.description}</div>
                  <img src={result.image} />
                </>
              );
            }
          })}
          ;
        </div>
      </div>
    );
  }
}
