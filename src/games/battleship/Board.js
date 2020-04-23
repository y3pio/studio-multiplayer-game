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
const Column =styled.div`
  width:1180px;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 100px;
  grid-row-gap: 0;
  margin-left:auto;
	margin-right:auto;
`;
const Holdergs =styled.div`
  width: 540px;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
  grid-column-gap: 0;
  grid-row-gap: 0;
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
    this.setState({
      numberofship:this.state.numberofship-1
    });
  }

  render(){
    ///////////////////player one seleting ships////////////////////////////////
    if(this.props.C === this.props.myid && !this.props.hgs){

      let boardGrid = this.props.p1sl.map((isShipHere, index) => {
        return (<Square
          visable={isShipHere}
          update={()=> this.props.USL(index)}
          
          addships={()=>this.addtonumbersofships()}
          subtractoships={()=>this.subtractonumbersofships()}
        />);
      });

        return(
          <div>
            <Title>player one Welcome {this.props.PON} to battleship. Select the locations of your ships.</Title>
            <Readybutton onClick={()=> {this.props.startg('true')}}>Ready</Readybutton>
            <p>you are missing {20-this.state.numberofship}</p>
            <Holder >{boardGrid}</Holder>
          </div>
        );

    }
    //////player two selecting ships///////////////////////////
    else if(!this.props.hgs){
      let boardGrid = this.props.p2sl.map((isShipHere, index) => {
        return (<Square
          visable={isShipHere}
          update={()=>this.props.USL(index)}

          addships={()=>this.addtonumbersofships()}
          subtractoships={()=>this.subtractonumbersofships()}
        />);
      });
        return(
          <div>
            <Title>player two Welcome {this.props.PTN} to battleship. Select the locations of your ships.</Title>
            <Readybutton onClick={()=> {this.props.startg('true')}}>Ready</Readybutton>
            <p>you are missing {20-this.state.numberofship}</p>
            <Holder >{boardGrid}</Holder>
          </div>
        );
    }
    //////////player one attacking//////////////
    else if(this.props.C === this.props.myid && this.props.hgs){


      let p1board = this.props.p1sl.map((isShipHere, index) => {
        console.log(isShipHere);
        console.log(index);
        return (<Square
          visable={isShipHere}
          update={()=> this.props.USL(index)}
          hgs={this.props.hgs}
          addships={()=>this.addtonumbersofships()}
          subtractoships={()=>this.subtractonumbersofships()}
        />);
      });
      let p2board = this.props.p2sl.map((isShipHere, index) => {
        return (<Square
          visable={isShipHere}
          update={()=> this.props.USL(index)}
          hgs={this.props.hgs}
          addships={()=>this.addtonumbersofships()}
          subtractoships={()=>this.subtractonumbersofships()}
        />);
      });


      return(
        <div>
          <h1>game starteddddd for player one</h1>
          <Column>
            <Holdergs>{p1board}</Holdergs>
            <Holdergs>{p2board}</Holdergs>
          </Column>
        </div>
        )

    }
    ///player two atcaking////////////////////////////////
    else if(this.props.hgs){

      let p1board = this.props.p1sl.map((isShipHere, index) => {
        return (<Square
          visable={isShipHere}
          update={()=> this.props.USL(index)}
          hgs={this.props.hgs}
          addships={()=>this.addtonumbersofships()}
          subtractoships={()=>this.subtractonumbersofships()}
        />);
      });


      let p2board = this.props.p2sl.map((isShipHere, index) => {
        return (<Square
          visable={isShipHere}
          update={()=> this.props.USL(index)}
          hgs={this.props.hgs}
          addships={()=>this.addtonumbersofships()}
          subtractoships={()=>this.subtractonumbersofships()}
        />);
      });
      console.log(this.props.p1sl);
      console.log(this.props.p2sl);

      return(
        <div>
          <h1>game starteddddd for player two</h1>
          <Column>
            <Holdergs>{p2board}</Holdergs>
            <Holdergs>{p1board}</Holdergs>
          </Column>
        </div>
        )

    }

  }
}
