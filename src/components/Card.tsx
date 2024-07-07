import { Component } from "react";
import styles from "./Card.module.css";
interface ICardProps {
  description?: string;
  image?: string;
}

export class Card extends Component<ICardProps> {
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.cardDescription}>{this.props.description}</div>
        <img src={this.props.image} />
      </div>
    );
  }
}
