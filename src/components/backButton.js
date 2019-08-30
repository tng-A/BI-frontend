import React, { Component } from 'react';
import { Button } from 'reactstrap'
import './index.css'


class BackButton extends Component {
   
    render() {
        const {history} = this.props
        return (
            <div>
                <Button block className="back-button">
                    <i className="icon-arrow-left"
                    onClick={(e)=>{ e.preventDefault() 
                    history.goBack()}} />
                </Button>
            </div>
        )
    }
}
export default BackButton;
