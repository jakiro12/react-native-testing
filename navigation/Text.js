import React,{useState,useEffect} from "react";
import { Text,View,StyleSheet } from "react-native";
const URL='http://192.168.0.7:3001/hi' //useEffect se ejecuta dos veces, no encuentro modo estricto
const Texto =()=>{
    const[data,setData]=useState([])
    const info=async()=>{
        try {
            const response= await fetch(URL).then(res=>res.json()).then(info=>setData(info))
          
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        info()
    },[])
    return(
        <View style={style.ver}>
        <Text>
            hola  {console.log(data[2])}
        </Text>
        </View>
    )
}

export default Texto;

const style=StyleSheet.create({
    ver:{
        paddingTop:105,
        marginLeft:100,
    }
})