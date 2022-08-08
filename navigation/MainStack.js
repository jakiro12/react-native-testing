import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../components/home";
import Texto from "./Text";


const Stack=createNativeStackNavigator()

const MainStack=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:true}}>
                <Stack.Group>
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="second"
                    component={Texto}
                />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default  MainStack