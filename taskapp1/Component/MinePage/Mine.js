import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,ListView,FlatList,Image,TouchableOpacity,Dimensions,StatusBar} from 'react-native';

var {height,width} =  Dimensions.get('window');
class Mine extends React.Component {
    static navigationOptions = {
        title: '我的',
        header:null,
    };

    state = {selected: (new Map(): Map<string, boolean>)};
    _keyExtractor = (item, index) => index;

    itemClick(item, index) {
        //alert('点击了第' + index + '项，name为：' + item.title);

        this.props.navigation.navigate('Details',{
            userName:'Tory',
            userInfo:'Hello'
        })

    }

    header = () => {
        return (

            <View style={styles.headViewStyle}>
                <View style={styles.userViewStyle}>
                    <Image
                        source={{uri: 'http://img01.myyzz.com/upload/images/20190429/userlogo/20190429wxxwjv24rgl1.png'}}
                        style={styles.iconImageStyle}
                    />
                    <Text style={styles.nameStyle}>Geniusn</Text>
                </View>

            </View>
        )
    };

    render() {
        let movies = [
            {title: '我的互助'},
            {title: '分享给好友'},
            {title: '版本更新'},
            {title: '设置'},
            {title: '退出登录'},
        ];
        return (
            <View style={styles.container}>
                <FlatList
                    data = {movies}
                    showsVerticalScrollIndicator = {false}
                    keyExtractor={this._keyExtractor}
                    ListHeaderComponent={this.header}
                    renderItem={

                        ({item}) =>
                            <TouchableOpacity onPress={this.itemClick.bind(this, item, item.index)}>
                                <View style={styles.cellView} >
                                    <Text style={[styles.titleStyle,styles.contentStyle]}>{item.title}</Text>
                                    <Image
                                        source={require('../MinePage/ordershow.png')}
                                        style={styles.showImageStyle}
                                    />

                                </View>
                            </TouchableOpacity>


                    }
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
        backgroundColor: '#F4F4F4',
    },
    cellView: {
        flexDirection:'row',
        backgroundColor: '#ffffff',
        marginBottom: 1,
        flex: 1,
        height:50,
        width:width,
    },
    contentStyle:{
        marginLeft:20,
        marginTop:17,
        width: 230,
    },
    titleStyle: {
        color: '#333333',
        fontSize: 16,
        textAlign:'left',
    },
    showImageStyle: {
        width:15,
        height:20,
        marginTop:15,
        marginLeft: 98,
    },
    headViewStyle:{
        flexDirection:'row',
        backgroundColor: '#EA7B00',
        height:220,
        justifyContent:'center',
    },
    userViewStyle:{
        width:70,
        height:100,
        marginTop:60,
    },
    iconImageStyle:{
        width:70,
        height:70,
        borderRadius:35,
        resizeMode:'cover',
    },
    nameStyle:{
        color: '#ffffff',
        fontSize: 18,
        marginTop:10,
    },
});

export {Mine as default};
