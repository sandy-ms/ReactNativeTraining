import React, { PureComponent } from 'react'
import { ImageBackground, StyleSheet ,Text, View ,Image} from 'react-native'

export default class WelcomeScreen extends PureComponent {
    render() {
        var icon=require('../assets/logo-white.png');
        return (
            
            <ImageBackground 
                style={styles.splash}
                source={icon}></ImageBackground>
            
           
        )
    }
}

const styles = StyleSheet.create({
    splash:{
        flex:1,
        width :'100%',
        height : '100%',
        backgroundColor : '#000',
        resizeMode:'contain',
    },
})