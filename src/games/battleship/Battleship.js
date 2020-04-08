import GameComponent from '../../GameComponent.js';
import React from 'react';
import UserApi from '../../UserApi.js';

// import styled from '@emotion/styled';

// import firebase from 'firebase';

import Board from './Board.js';

// const PlayerView = styled.div`
//   display: flex;
// `;


export default class App extends GameComponent{
	constructor() {
		super();
		this.state = {
			yourId: 'Test Player 1',
			opponentId: 'Test Opponent',
			// yourId: undefined,
			// opponentId: undefined,
		}
	}

	render() {

		// const firebaseConfig = {
		// 	apiKey: "AIzaSyCIB8e9oNxAuJncAZJMKtDcB6mkuJou0bA",
		// 	authDomain: "cn-maze-hydra.firebaseapp.com",
		// 	databaseURL: "https://cn-maze-hydra.firebaseio.com",
		// 	projectId: "cn-maze-hydra",
		// 	storageBucket: "cn-maze-hydra.appspot.com",
		// 	messagingSenderId: "790701022584",
		// 	appId: "1:790701022584:web:0800f4ab648b4b1f3bbc8d"
		// };
		//
		// if (!firebase.apps.length) {
		// 	firebase.initializeApp(firebaseConfig);
		// }
		// firebase.initializeApp(firebaseConfig);
		// firebase.analytics();

		// var database = firebase.database();
		// var databaseRefp1 = database.ref("/playerone");
		// var databaseRefp2 = database.ref("/playertwo");

		return (
			<div>
				{/*<Scorebord/>*/}
				<Board isOpponent={false} id={this.state.yourId}/>
				{/*<Board isOpponent={true} id={this.state.opponentId}/>*/}

			</div>
		)
	}
}