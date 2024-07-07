import { Component } from "react";
interface ICardProps {
  description?: string;
  image?: string;
}

export class Card extends Component<ICardProps> {
  render() {
    return (
      <div>
        <div>{this.props.description}</div>
        <img src={this.props.image} />
      </div>
    );
  }
}
