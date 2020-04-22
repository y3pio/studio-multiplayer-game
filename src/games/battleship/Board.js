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
const Readybutton = styled.button`
`;

export default class Board extends Component{
  constructor(props) {
    super(props);

    this.state = {
      shiplocation:new Array(100).fill(false),
    };

    this.updateShipLocation = (index)=>{
      let newshiplocation=this.state.shiplocation;
      newshiplocation[index]=!newshiplocation[index];

      this.setState({
        shiplocation: newshiplocation,
      })
    }

    }
  render(){
    const boardGrid = this.state.shiplocation.map((isShipHere, index) => {
      return (<Square
        visable={isShipHere}
        update={this.updateShipLocation(index)}
      />);
    });
    return(
      <div>
        <Readybutton onClick={()=> {this.props.ref.set(this.state.shiplocation); }}>Ready</Readybutton>
        <Holder>{boardGrid}</Holder>
        
      </div>
    );
  }
}
