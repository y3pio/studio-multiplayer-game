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

const Title = styled.p`
	text-align: center;
	font-size: 20px;
`;

const Readybutton = styled.button`
`;

export default class Board extends Component{
  constructor(props) {
    super(props);

    this.state = {
      shiplocation:new Array(100).fill(false),
      numberofship:0,
    };
  }

  addtonumbersofships=()=>{
      this.setState({
        numberofship: this.state.numberofship+1
      });
    console.log(this.state.numberofship);
  }

  subtractonumbersofships=()=>{
    if(this.state.numberofship !== 20){
      
    }
    this.setState({
      numberofship:this.state.numberofship-1
    });
  }

  render(){

    const boardGrid = this.state.shiplocation.map((isShipHere, index) => {
      return (<Square
        key={index}
        visable={isShipHere}
        addships={()=>this.addtonumbersofships()}
        subtractoships={()=>this.subtractonumbersofships()}
      />);
    });

    if(this.props.creator === this.props.myid){
        return(
          <div>
            <Title>player one Welcome {this.props.playername} to battleship. Select the locations of your ships.</Title>
            <Readybutton onClick={()=> {this.props.startgame(true)}}>Ready</Readybutton>
            <p>you are missing {20-this.state.numberofship}</p>
            <Holder >{boardGrid}</Holder>
          </div>
        );

    }else{
        return(
          <div>
            <Title>player two Welcome {this.props.playername} to battleship. Select the locations of your ships.</Title>
            <Readybutton onClick={()=> {this.props.startgame(true)}}>Ready</Readybutton>
            <p>you are missing {20-this.state.numberofship}</p>
            <Holder >{boardGrid}</Holder>
          </div>
        );
    }


  }
}
