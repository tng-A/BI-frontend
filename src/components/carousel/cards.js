import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Progress
} from "reactstrap";
import "./index.css";
import BackgroundImage from "../../assets/img/brand/JamboPayImg.png";

class CarouselCards extends Component {
  render() {
    const { value, percentage, determineColor, name } = this.props;
    return (
      <Card id="cardContainer">
        <CardImg
          src={BackgroundImage}
          alt="Card image cap"
          style={{ height: "20px", width: "50px", marginLeft: "10px" }}
        />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText style={{ marginLeft: "-15px" }}>
            <div
              className="chart-wrapper mx-3"
              style={{ height: "70px", marginLeft: "-30px" }}
              id="infosection"
            >
              <strong style={{ color: "white" }}>
                {value} {percentage}%
              </strong>
              <Progress
                className="progress-xs mt-2"
                color={determineColor}
                value={value}
              />
            </div>
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

export default CarouselCards;
