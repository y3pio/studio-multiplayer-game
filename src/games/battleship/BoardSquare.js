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
    console.log("clicked")
    if(this.state.ifvisible === "hidden"){

      this.setState({
        ifvisible: 'visible',
        p1numberofship:+1
      });
    } else if(this.state.ifvisible === "visible" ){

      this.setState({
        ifvisible: 'hidden',
        p1numberofship:-1
      });
    }

  }

  render(){
    return(
      <Holder
        onClick={this.action}
      >
        <Image
          style={{ visibility:this.state.ifvisible }}
          alt="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQU9Vb5tYWn6R6moUuhXJqIRJMOedsRdmNUkDn2XOi3y5QFZz9"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQU9Vb5tYWn6R6moUuhXJqIRJMOedsRdmNUkDn2XOi3y5QFZz9"
        />
      </Holder>
    );
  }

}
