import React, {Component} from 'react';
import Square from './BoardSquare.js';
import styled from '@emotion/styled';


const Holder =styled.div`
  width: 540px;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
  grid-column-gap: 0;
  grid-row-gap: 0;
  margin-left:auto;
	margin-right:auto;
`;


export default class Board extends Component{
  constructor() {
    super();
    this.state = {
      shiplocation:new Array(100).fill(false),
    };
    this.updateShipLocation = (index)=>{
      let newshiplocation=this.state.shiplocation;
      newshiplocation[index]=!newshiplocation[index];

      this.setState({
        shiplocation: newshiplocation
      })
    }
  }
  render(){
    const boardGrid = this.state.shiplocation.map((isShipHere, index) => {
      return (<Square
        visable={isShipHere}
        // update={this.updateShipLocation(index)}
      />);
    });
    return(
      <div>
          <h1>{this.props.id}</h1>
          <Holder>{boardGrid}</Holder>
        <button onClick={()=> { console.log('Need to send board info to Firebase'); }}>Submit Board</button>
      </div>
    );
  }
}
