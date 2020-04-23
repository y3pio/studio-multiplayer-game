import React, {Component} from 'react';
import styled from '@emotion/styled';

const Image = styled.img`
  height:50px;
  width:50px;
`;

const Holder= styled.div`
  height:50px;
  width: 50px;
  background-color:red;
  border:2px solid black;
`;

export default class Square extends Component{

  constructor() {
    super();
    this.state = {
      ifvisible: 'hidden',
    }
  }
  action=()=>{
    if(this.state.ifvisible === "hidden"){
      this.props.addships();
      this.setState({
        ifvisible: 'visible',
      });
    } else if(this.state.ifvisible === "visible" ){
      this.props.subtractoships();
      this.setState({
        ifvisible: 'hidden',
      });
    }
    console.log(this.state.p1numberofship);
  }

  render(){
      if(!this.props.hgs){
      return(
        <Holder
          onClick={()=>{
            this.action();
            this.props.update();
          }}
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
            this.action();
            this.props.update();
          }}
        >
          <Image
            style={{ visibility:isVisible }}
            alt="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQU9Vb5tYWn6R6moUuhXJqIRJMOedsRdmNUkDn2XOi3y5QFZz9"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQU9Vb5tYWn6R6moUuhXJqIRJMOedsRdmNUkDn2XOi3y5QFZz9"
          />
        </Holder>
      );
    }
  }

}
