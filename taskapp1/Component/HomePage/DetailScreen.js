import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';

class DetailScreen extends Component {
    static navigationOptions = {
        title: '任务详情',
        headerBackImage:<Image source={require('../HomePage/back.png')}/>,
    };

    render() {
        const data=this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Text>你好!</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
export {DetailScreen as default};