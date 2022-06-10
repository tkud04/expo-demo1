import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Colors from "../../common/Colors";
import CustomStyles from "../../common/CustomStyles";

export default function ConfirmLogin({navigation, route}){
   console.log("params: ",route.params);
   const {email} = route.params;

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.body}>
            <Text style={[CustomStyles.bold,CustomStyles.headerText,{color: Colors.primary}]}>Confirm Login Screen</Text>
            <Text style={[styles.bodyText]}>The email received from the params object is <Text style={ {color: Colors.info}}>{email}</Text></Text>
          </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
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
});