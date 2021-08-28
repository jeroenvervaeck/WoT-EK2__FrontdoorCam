import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'

import firebase from 'firebase'
require('firebase/firestore')

const Logout = () => {
	firebase.auth().signOut();
}

export default function Account(props) {

	return (
		<View>
			<Text>Welcome, {props.props.name}</Text>
			<Button title="logout" 
			onPress={() => Logout()}/>
		</View>
	)
}
