import GameComponent from '../../GameComponent.js';
import React from 'react';
import UserApi from '../../UserApi.js';

import styled from '@emotion/styled';


import Board from './Board.js';

export default class App extends GameComponent{
	constructor(props) {
		super(props);
		this.state = {
			p1shiplocation:null ,
			p2shiplocation: null,
			hasGameStarted: false,
			playeroneready:false,
			playertwoready:false
		};
		this.getSessionDatabaseRef().update(this.state);
	}


	onSessionDataChanged(data) {
    this.setState({
      p1shiplocation: data.p1shiplocation,
      p2shiplocation: data.p2shiplocation,
      hasGameStarted: data.hasGameStarted,
			playeroneready: data.playeroneready,
			playertwoready: data.playertwoready,
    });
	}
	

	startgame=(isready)=>{


		if (this.getSessionCreatorUserId() === this.getMyUserId()) {
			this.getSessionDatabaseRef().update({
        playeroneready: isready
			});
		}else{
			this.getSessionDatabaseRef().update({
        playertwoready: isready
			});
		}
		if(this.state.playeroneready === true && this.state.playertwoready === true){
			this.getSessionDatabaseRef().update({
        hasGameStarted: true
			});
		}
	}

	render() {
			
		//picking loctaion of ships//////////////////////////////////////////////////

			if (!this.state.hasGameStarted) {
				return(
					<div>
						<Board 
							startgame={(isready)=>this.startgame(isready)}

							creator={this.getSessionCreatorUserId()}
							myid={this.getMyUserId()}
							playeronename={UserApi.getName(this.getSessionUserIds()[0])}
							playertwoname={UserApi.getName(this.getSessionUserIds()[1])}
							playeroneready={this.state.playeroneready}
							playertwoready={this.state.playertwoready}
							/>
					</div>
				)
			}

			if (this.state.hasGameStarted && this.getSessionCreatorUserId() === this.getMyUserId()){
				return(
					<div>
						<h1>game started for player one</h1>
					</div>
				)
			}else if(this.state.hasGameStarted){
				return(
					<div>
						<h1>game started for player two</h1>
					</div>
				)
			}
		
	}
}