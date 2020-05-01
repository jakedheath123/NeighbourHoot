import * as React from "react";
import { Platform, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import MainScreen from "./screens/MainScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

const instructions = Platform.select({
	ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
	android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Main'
					component={MainScreen}
					options={{ title: "Main" }}
				/>
				<Stack.Screen
					name='Home'
					component={HomeScreen}
					options={{ title: "Home" }}
				/>
				<Stack.Screen
					name='Login'
					component={LoginScreen}
					options={{ title: "Login" }}
				/>
				<Stack.Screen
					name='SignUp'
					component={SignUpScreen}
					options={{ title: "Sign Up" }}
				/>
				<Stack.Screen
					name='Welcome'
					component={WelcomeScreen}
					options={{ title: "Welcome" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5,
	},
});
