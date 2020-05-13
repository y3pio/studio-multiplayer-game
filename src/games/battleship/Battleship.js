import GameComponent from '../../GameComponent.js';
import React from 'react';
import UserApi from '../../UserApi.js';

import Board from './Board.js';

export default class App extends GameComponent{
	constructor(props) {
		super(props);
		this.state = {
			p1shiplocation: new Array(100).fill(false),
			p2shiplocation: new Array(100).fill(false),
			hasGameStarted: false,
			playeroneready:'false',
			playertwoready:'false',
		};
		//temporarily
		this.getSessionDatabaseRef().update(this.state);
	}

	onSessionDataChanged(data) {
    this.setState({
      p1shiplocation: data.p1shiplocation,
			p2shiplocation: data.p2shiplocation,
      hasGameStarted: data.hasGameStarted,
			playeroneready: data.playeroneready,
			playertwoready: data.playertwoready
    });
	}

	updateshiplocation=(index)=>{
			if(this.getSessionCreatorUserId() === this.getMyUserId()){
				let newshiplocation=this.state.p1shiplocation;
				newshiplocation[index]=!newshiplocation[index];
				this.setState({
					p1shiplocation:newshiplocation
				});
			}else{
				let newshiplocation=this.state.p2shiplocation;
				newshiplocation[index]=!newshiplocation[index];
				this.setState({
					p2shiplocation:newshiplocation
				});
			}
	}

	ready=()=>{
		if(this.getSessionCreatorUserId() === this.getMyUserId()){
			this.getSessionDatabaseRef().update({
				p1shiplocation:this.state.p1shiplocation
			});
		}else{
			this.getSessionDatabaseRef().update({
				p2shiplocation:this.state.p2shiplocation
			});
		};
	};

	attacking=(index)=>{
		if(this.getSessionCreatorUserId() === this.getMyUserId()){
			let newshiplocation=this.state.p2shiplocation;
			if(newshiplocation[index] === true){
				newshiplocation[index]="hit"
				this.getSessionDatabaseRef().update({
					p2shiplocation:newshiplocation
				})
			}else if(newshiplocation[index] === false){
				newshiplocation[index]="miss"
				this.getSessionDatabaseRef().update({
					p2shiplocation:newshiplocation
				})
			}
		}else{
			let newshiplocation=this.state.p1shiplocation;
			if(newshiplocation[index] === true){
				newshiplocation[index]="hit"
				this.getSessionDatabaseRef().update({
					p1shiplocation:newshiplocation
				})
			}else{
				newshiplocation[index]="miss"
				this.getSessionDatabaseRef().update({
					p1shiplocation:newshiplocation
				})
			}
		}
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
		if(this.state.playeroneready === 'true' && this.state.playertwoready === 'true'){
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
							hgs={this.state.hasGameStarted}
							C={this.getSessionCreatorUserId()}
							myid={this.getMyUserId()}
							PON={UserApi.getName(this.getSessionUserIds()[0])}
							PTN={UserApi.getName(this.getSessionUserIds()[1])}

							p1sl={this.state.p1shiplocation}
							p2sl={this.state.p2shiplocation}
							USL={(index)=>this.updateshiplocation(index)}

							ready={()=>this.ready()}
							startg={(isready)=>this.startgame(isready)}
							/>
					</div>
				)
		}
		//game started/////////////////////////////////////////////////////////////////
		else if (this.state.hasGameStarted){
			return(
				<div>
					<Board
						hgs={this.state.hasGameStarted}
						C={this.getSessionCreatorUserId()}
						myid={this.getMyUserId()}
						
						PON={UserApi.getName(this.getSessionUserIds()[0])}
						PTN={UserApi.getName(this.getSessionUserIds()[1])}

						p1sl={this.state.p1shiplocation}
						p2sl={this.state.p2shiplocation}

						AT={(index)=>this.attacking(index)}
						/>
				</div>
			)
		}
	}
}