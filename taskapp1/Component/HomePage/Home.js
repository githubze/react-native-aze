import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '任务',
    };
    render() {
        return (
            <View style={styles.container}>
                <Button title='跳转到详情'
                        onPress={()=>this.props.navigation.navigate('Details',{
                            userName:'Tory',
                            userInfo:'Hello'
                        })}
                />

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

export {HomeScreen as default};
