import React from 'react';
import { View, Text } from 'react-native';
import { useRoute,useNavigation } from '@react-navigation/native';

export default function List() {
    const navigation = useNavigation();
    const route =useRoute();

    function navigateToDashboard() {
        navigation.navigate("Dashboard");
    }
    return (
        <View style={styles.Dashboard}>
            <Text>Dashboard Screen</Text>
            <Button title="Open List Screen" onPress={() => navigateToDashboard()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    Dashboard:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})