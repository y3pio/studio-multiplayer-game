import React, {Component} from 'react';
import styled from '@emotion/styled';

const Image = styled.img`
  height:50px;
  width:50px;
`;
const Imagetwo = styled.img`
  height:50px;
  width:50px;
  position:relative ;
  top:-54px
`;
const Imagethree = styled.img`
  height:50px;
  width:50px;
  position:relative ;
  top:-108px
`;

const Holder= styled.button`
  height:54px;
  width: 54px;
  border:2px solid black;
  padding:0;
  background-color: transparent;
`;

export default class Square extends Component{

  constructor() {
    super();
    this.state = {
      ifvisible: 'hidden',
      mised:'hidden',
      hit:'hidden'
    }
  }
  action=()=>{
    if(this.props.nos === 20){
      alert("You are ready");
    }else if(this.props.nos <20){
      if(this.state.ifvisible === "hidden"){
        this.props.addships();
        this.props.update();
        if(this.props.nos === 18){
          alert("You are reaching the max amount of ships. once you reach the max, you cant change the location of your ships. you can still change the location of your ships.");
        };
        this.setState({
          ifvisible: 'visible',
        });
      } else if(this.state.ifvisible === "visible" ){
        this.props.subtractoships();
        this.props.update();
        this.setState({
          ifvisible: 'hidden',
        });
      }
    }
  }

  action2=()=>{
  }
  render(){
      if(!this.props.hgs){
      return(
        <Holder
          onClick={()=>{this.action()}}
        >
          <Image
            style={{ visibility:this.state.ifvisible }}
            alt="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQU9Vb5tYWn6R6moUuhXJqIRJMOedsRdmNUkDn2XOi3y5QFZz9"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQU9Vb5tYWn6R6moUuhXJqIRJMOedsRdmNUkDn2XOi3y5QFZz9"
          />
        </Holder>
      );
    }else if(this.props.hgs){
      let isVisible = "hidden";
      if(this.props.visable){
        isVisible="visible"
      };
      return(
        <Holder
          onClick={()=>{
          }}
        >
          <Image
            style={{visibility:this.state.mised}}
            alt="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1200px-Red_X.svg.png"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1200px-Red_X.svg.png"
            />
          <Imagetwo
            style={{ visibility:isVisible }}
            alt="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQU9Vb5tYWn6R6moUuhXJqIRJMOedsRdmNUkDn2XOi3y5QFZz9"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQU9Vb5tYWn6R6moUuhXJqIRJMOedsRdmNUkDn2XOi3y5QFZz9"
          />
          <Imagethree
            style={{visibility:this.state.hit}}
            alt='https://supchina.com/wp-content/uploads/2017/12/Sichuan-pagoda-fire.gif'
            src='https://supchina.com/wp-content/uploads/2017/12/Sichuan-pagoda-fire.gif'
          />
        </Holder>
      );
    }
  }

}
