import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

const Generate = (props) => (
    <TouchableWithoutFeedback
        //it works after we untouch
        onPress={()=> {props.add() } }
        //if we hold long
        onLongPress={()=> alert('This is loooong')}
        //it works asap as we touc
        //onPressIn()
    >
        <View style={styles.generate}>
            <Text>Add number</Text>
        </View>
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    generate: {
        backgroundColor:'#998877',
        alignItems: 'center',
        padding: 10,
        width: '100%',
        marginTop: 30
    }
});

export default Generate;