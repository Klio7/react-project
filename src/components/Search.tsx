import { Component } from "react";
import { getData } from "../api-service/search";

export class Search extends Component {
  render() {
    return (
      <div>
        <input></input>
        <button onClick={() => getData("bag")}>SEARCH</button>
      </div>
    );
  }
}
