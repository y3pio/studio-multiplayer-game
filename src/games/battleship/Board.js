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
      p1sl:props.p1sl || [],
      p2sl:props.p2sl || [],
      hgs:props.hgs

      // p1sl:props.p1sl,
      // p2sl:props.p2sl,
      // hgs:props.hgs,
    };
  }
  addtonumbersofships=()=>{
    this.setState({
      numberofship: this.state.numberofship+1
    });
  };

  subtractonumbersofships=()=>{
    this.setState({
      numberofship:this.state.numberofship-1
    });
  };

  render(){
    ///////////////////seleting ships////////////////////////////////
    if(!this.props.hgs){
      let boardGrid;
      let welcomeplayername = this.props.PON;
      if(this.props.myid === this.props.C){
        boardGrid = this.props.p1sl.map((isShipHere, index) => {
        return (<Square
          key={"playerone"+index}
          nos={this.state.numberofship}
          visable={isShipHere}
          update={()=> this.props.USL(index)}
          addships={()=>this.addtonumbersofships()}
          subtractoships={()=>this.subtractonumbersofships()}
        />);
      });
    }else{
      boardGrid = this.props.p2sl.map((isShipHere, index) => {
        return (<Square
          key={"playertwo"+index}
          nos={this.state.numberofship}
          visable={isShipHere}
          update={()=> this.props.USL(index)}
          addships={()=>this.addtonumbersofships()}
          subtractoships={()=>this.subtractonumbersofships()}
        />);
      });
      if (this.props.myid !== this.props.C) {
        welcomeplayername = this.props.PTN;
      }
    }
      return(
        <div>
          <Title>Welcome player: {welcomeplayername} to battleship. Select the locations of your ships.</Title>
          <Readybutton onClick={()=> {
            this.props.ready();
            }}>Ready</Readybutton>
          <p>you are missing {20-this.state.numberofship} ships</p>
          <Holder>
          <Background url="https://i.gifer.com/96Aw.gif" src="https://i.gifer.com/96Aw.gif"/>
          <Map >{boardGrid}</Map>
          </Holder>
        </div>
      );
    }
    //////////players attacking//////////////
    else if(this.props.hgs){
      const renderscorebored=(opponentshiplist)=>{
        const scorebored=opponentshiplist.reduce((score,ship)=>{
          if(ship === "hit"){
            score.totalhits=score.totalhits+1;
          }
          if(ship === true || ship === "hit"){
            score.totalships=score.totalships+1
          }
          return(score)
        },{totalships:0, totalhits: 0})
        return(scorebored)
      };

      let mysl;
      let opponentsl;
      let playername;
      let scoreboard;
      if(this.props.myid === this.props.C){
        playername=this.props.PON+"player one";
         mysl = this.props.p1sl.map((isShipHere, index) => {
          return (<Square
            key={"playerone"+index}
            visable={isShipHere}
            didithit={isShipHere}
            hgs={this.props.hgs}
          />);
        });

        opponentsl = this.props.p2sl.map((isShipHere, index) => {
          return (<Square
            key={"playerotwo"+index}
            hgs={this.props.hgs}
            didithit={isShipHere}
            attacking={()=>this.props.AT(index)}
          />);
        });

        scoreboard = renderscorebored(this.props.p2sl);
      }else{
        playername=this.props.PTN+"Player two";
        mysl = this.props.p2sl.map((isShipHere, index) => {
          return (<Square
            key={"playerotwo"+index}
            visable={isShipHere}
            didithit={isShipHere}
            hgs={this.props.hgs}
          />);
        });

        opponentsl = this.props.p1sl.map((isShipHere, index) => {
          return (<Square
            key={"playerone"+index}
            didithit={isShipHere}
            hgs={this.props.hgs}
            attacking={()=>this.props.AT(index)}
          />);
        });

        scoreboard = renderscorebored(this.props.p1sl);
      }

      return(
        <div>
          <h1>game starteddddd for {playername}</h1>
          <div>{JSON.stringify(scoreboard)}</div>
          <Column>
            <Holder>
              <Background url="https://i.gifer.com/96Aw.gif" src="https://i.gifer.com/96Aw.gif"/>
              <Map>{mysl}</Map>
              <Cover  onClick={()=>{alert("can't attack your own ships")}}/>
            </Holder>
            <Holder>
              <Background url="https://i.gifer.com/96Aw.gif" src="https://i.gifer.com/96Aw.gif"/>
              <Map>{opponentsl}</Map>
            </Holder>
          </Column>
        </div>
        )

    }
  }
}
