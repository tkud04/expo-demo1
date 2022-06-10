import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../common/Colors';
import CustomStyles from '../../common/CustomStyles';

export default function Welcome({navigation, route}){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <Text style={CustomStyles.headerText}>Welcome!</Text>
                <Text style={styles.bodyText}>This is a demo app to show how <Text style={[styles.bold,{color: Colors.info}]}>deep linking</Text> works in React Native (Expo)</Text>
                <Text style={styles.bodyText}>The link is set in <Text style={[styles.bold,{color: Colors.info}]}>app.json</Text>. Navigate to the link from your browser and you will be redirected to the app's <Text style={[styles.bold,{color: Colors.info}]}>Confirm Login</Text> screen.</Text>
           </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       alignItems: "center"
    },
    body: {
        marginTop: 50,
        marginHorizontal: 5,
        textAlign: "center"
    },
    bodyText: {
        marginTop: 60,
        fontSize: 20,
        color: Colors.text
    },
    bold: {
        fontWeight: "bold"
    }
});