import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    function navigateToList(){
        navigation.navigate("List",{"name":"Himanshu"});
    }
    return (
        <View style={styles.Home}>
            <Text>Home Screen</Text>
            <Button title="Open List Screen" onPress={() => navigateToList()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    Home:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
})
