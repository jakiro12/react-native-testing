import { useNavigation } from "@react-navigation/native";
import React,{useState,useEffect} from "react";
import { Text,View,StyleSheet, Pressable,TextInput} from "react-native";





const Home =()=>{
    const[name,setName]=useState('')
    const[pass,setPass]=useState('')
    const[data,setData]=useState('')
    const navigation=useNavigation()
    const regex= /^[a-zA-Z]+$/
    const valid=()=>{
        if(regex.test(name)){
            navigation.navigate('second')
        }else{
            alert('campo vacio')
        }
    }
    const apiValues=()=>{
        fetch('http://192.168.0.7:3001/hi')
        .then(res=>res.json())
        .then(send=>setData(send))
    }
    useEffect(()=>{
        apiValues()
    },[])
    return(
        <View style={style.textS}>
        <Text style={style.firstText}>
            hola
        </Text> 
       
              <View style={style.view2}>   
           <TextInput
            style={style.input}
            placeholder='name'
            value={name}
            onChangeText={setName}
            textContentType={'name'}
           
           />
             <TextInput
            style={style.input}
            placeholder='password'
            value={pass}
            onChangeText={setPass}
            textContentType={'password'}
            secureTextEntry={true}
           />
           </View>
           <Pressable style={style.presBtn}
             onPress={valid}
           ><Text style={style.textBtn}>Ingresar</Text></Pressable>
          
        </View>
    )
}

export default Home;

const style=StyleSheet.create({
    textS:{
        paddingTop:55,        
        backgroundColor:'#2196f3',
        height: '100%',
        width: '100%',
    },    
    view2:{
        width: '100%',
        color: 'red',
    },
    presBtn:{
        marginTop:'80%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 100,
        elevation: 3,
        backgroundColor: 'black',
        width: 300,
        marginLeft:'15%', 
    
    },
    textBtn:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        margin:'auto',
    },
    firstText:{
        marginLeft: '25%',
        paddingBottom:10,
        fontSize:20,
        fontWeight:'bold',
        color: 'white',
        
    },
    input:{
        borderWidth:1,
        height: 45,
        marginLeft:'40%',
        width: 100,
        backgroundColor:'white',
        borderColor:'white',
        borderRadius:100,
        textAlign:'center',
        marginBottom:10,
        marginTop:50,
    }
})