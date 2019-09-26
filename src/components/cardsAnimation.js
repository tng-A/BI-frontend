import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import "./index.css"
  
  const CardComponent = (props) => {
    return (
      <div>
        <Card id="cardContainer" style={{margin:"10px"}}>
          <CardImg  src="" alt="Card image cap" style={{height:"50px"}} />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  };

export default CardComponent;