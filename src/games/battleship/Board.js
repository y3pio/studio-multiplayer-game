import React, {Component} from 'react';
import Square from './BoardSquare.js';
import styled from '@emotion/styled';

const Holder =styled.div`
`;

const Map =styled.div`
  position:relative ;
  top:-540px;
  z-index:20;
  width: 540px;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
  grid-column-gap: 0;
  grid-row-gap: 0;
  margin-left:auto;
	margin-right:auto;
`;
const Background=styled.img`
  z-index:2;
  width: 540px;
  height: 540px;
  display: block;
  margin-left: auto;
  margin-right: auto;
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
const Title = styled.p`
	text-align: center;
	font-size: 20px;
`;
const Cover=styled.div`
  position:relative ;
  z-index:21;
  left:-10px;
  top:-1100px;
  height:600px;
  width:600px;

`;
const Backgroundimage=styled.img`
  z-index:-1;
  background-color:black;
  position:absolute;
  top:0;
  width:100%;
  height:100%;
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
            nos={this.state.numberofship}
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
          <p>you are missing {20-this.state.numberofship} ships</p>
          <Holder>
          <Background url="https://i.gifer.com/96Aw.gif" src="https://i.gifer.com/96Aw.gif"/>
          <Map >{boardGrid}</Map>
          </Holder>
        </div>
      );
    }
    //////player two selecting ships///////////////////////////
    else if(!this.props.hgs){
        let boardGrid = this.props.p2sl.map((isShipHere, index) => {
          return (
            <Square
              nos={this.state.numberofship}
              visable={isShipHere}
              update={()=>this.props.USL(index)}
              addships={()=>this.addtonumbersofships()}
              subtractoships={()=>this.subtractonumbersofships()}
            />
          );
        });
      return(
        <div>
          <Title>player two Welcome {this.props.PTN} to battleship. Select the locations of your ships.</Title>
          <Readybutton onClick={()=> {this.props.startg('true')}}>Ready</Readybutton>
          <p>you are missing {20-this.state.numberofship}</p>
          <Holder>
            <Background url="https://i.gifer.com/96Aw.gif" src="https://i.gifer.com/96Aw.gif"/>
            <Map >{boardGrid}</Map>
          </Holder>
        </div>
      );
    }
    //////////player one attacking//////////////
    else if(this.props.C === this.props.myid && this.props.hgs){


      let p1board = this.props.p1sl.map((isShipHere, index) => {
        return (<Square
          visable={isShipHere}
          didithit={isShipHere}
          hgs={this.props.hgs}
        />);
      });


      let p2board = this.props.p2sl.map((isShipHere, index) => {
        return (<Square
          hgs={this.props.hgs}
          didithit={isShipHere}
          attacking={()=>this.props.AT(index)}
        />);
      });

      return(
        <div>
          <Backgroundimage src="https://lh3.googleusercontent.com/proxy/01pxD7925WHVIvEvoB0QHPJyzCteHYrj5QAONpKxFswbR3TPy5tb0HYAzwd4JajC2ssDMdIar6AunHCrvJROSxhOMJyum5Eq7XdQeF0X3e3FFe01Ruu-BKUg2mv6z9dWBLXM5UwL5d0" alt="https://lh3.googleusercontent.com/proxy/01pxD7925WHVIvEvoB0QHPJyzCteHYrj5QAONpKxFswbR3TPy5tb0HYAzwd4JajC2ssDMdIar6AunHCrvJROSxhOMJyum5Eq7XdQeF0X3e3FFe01Ruu-BKUg2mv6z9dWBLXM5UwL5d0"/>
          <h1>game starteddddd for player one</h1>
          <Column>
            <Holder>
              <Background url="https://i.gifer.com/96Aw.gif" src="https://i.gifer.com/96Aw.gif"/>
              <Map>{p1board}</Map>
              <Cover  onClick={()=>{alert('can attack your own ships')}}/>
            </Holder>
            <Holder>
              <Background url="https://i.gifer.com/96Aw.gif" src="https://i.gifer.com/96Aw.gif"/>
              <Map>{p2board}</Map>
            </Holder>
          </Column>
        </div>
        )

    }
    ///player two atcaking////////////////////////////////
    else if(this.props.hgs){

      let p1board = this.props.p1sl.map((isShipHere, index) => {
        return (<Square
          attacking={()=>this.props.AT(index)}
          didithit={isShipHere}
          testing={this.props.p1sl}
          hgs={this.props.hgs}
        />);
      });


      let p2board = this.props.p2sl.map((isShipHere, index) => {
        return (<Square
          visable={isShipHere}
          didithit={isShipHere}
          hgs={this.props.hgs}
        />);
      });

      return(
        <div>
          <Backgroundimage src="https://lh3.googleusercontent.com/proxy/01pxD7925WHVIvEvoB0QHPJyzCteHYrj5QAONpKxFswbR3TPy5tb0HYAzwd4JajC2ssDMdIar6AunHCrvJROSxhOMJyum5Eq7XdQeF0X3e3FFe01Ruu-BKUg2mv6z9dWBLXM5UwL5d0" alt="https://lh3.googleusercontent.com/proxy/01pxD7925WHVIvEvoB0QHPJyzCteHYrj5QAONpKxFswbR3TPy5tb0HYAzwd4JajC2ssDMdIar6AunHCrvJROSxhOMJyum5Eq7XdQeF0X3e3FFe01Ruu-BKUg2mv6z9dWBLXM5UwL5d0"/>
          <h1>game starteddddd for player two</h1>
          <Column>
            <Holder>
              <Background url="https://i.gifer.com/96Aw.gif" src="https://i.gifer.com/96Aw.gif"/>
              <Map>{p2board}</Map>
              <Cover onClick={()=>{alert('can attack your own ships')}}/>
            </Holder>
            <Holder>
              <Background url="https://i.gifer.com/96Aw.gif" src="https://i.gifer.com/96Aw.gif"/>
              <Map>{p1board}</Map>
            </Holder>
          </Column>
        </div>
        )

    }

  }
}
