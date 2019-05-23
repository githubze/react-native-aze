import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,ListView,FlatList,Image,TouchableOpacity} from 'react-native';


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '任务',
    };

    state = {selected: (new Map(): Map<string, boolean>)};
    _keyExtractor = (item, index) => index;

    refreshing(){
        let timer = setTimeout(()=>{
            clearTimeout(timer)
            // alert('刷新成功')

        },15000)
    }

    itemClick(item, index) {
        //alert('点击了第' + index + '项，name为：' + item.title);

        this.props.navigation.navigate('Details',{
            userName:'Tory',
            userInfo:'Hello'
        })
    }


    render() {
        let movies = [
            {title: '微信分享 帮忙助力领跑汽车优惠 第一行',ProgressText:'33%',DetailText:'4.4',ImageName:'https://gsnapshot.alicdn.com/imgextra/i3/575127927/TB2n8OJIk9WBuNjSspeXXaz5VXa_!!575127927.jpg_430x430.jpg?time=1539689523000'},
            {title: '微信分享 帮忙助力领跑汽车优惠 第二行',ProgressText:'33%',DetailText:'4.4',ImageName:'https://gsnapshot.alicdn.com/imgextra/i3/575127927/TB2n8OJIk9WBuNjSspeXXaz5VXa_!!575127927.jpg_430x430.jpg?time=1539689523000'},
            {title: '微信分享 帮忙助力领跑汽车优惠 第三行',ProgressText:'33%',DetailText:'4.4',ImageName:'https://gsnapshot.alicdn.com/imgextra/i3/575127927/TB2n8OJIk9WBuNjSspeXXaz5VXa_!!575127927.jpg_430x430.jpg?time=1539689523000'},
            {title: '微信分享 帮忙助力领跑汽车优惠 第四行',ProgressText:'33%',DetailText:'4.4',ImageName:'https://gsnapshot.alicdn.com/imgextra/i3/575127927/TB2n8OJIk9WBuNjSspeXXaz5VXa_!!575127927.jpg_430x430.jpg?time=1539689523000'},
            {title: '微信分享 帮忙助力领跑汽车优惠 第五行',ProgressText:'33%',DetailText:'4.4',ImageName:'https://gsnapshot.alicdn.com/imgextra/i3/575127927/TB2n8OJIk9WBuNjSspeXXaz5VXa_!!575127927.jpg_430x430.jpg?time=1539689523000'},
            {title: '微信分享 帮忙助力领跑汽车优惠 第六行',ProgressText:'33%',DetailText:'4.4',ImageName:'https://gsnapshot.alicdn.com/imgextra/i3/575127927/TB2n8OJIk9WBuNjSspeXXaz5VXa_!!575127927.jpg_430x430.jpg?time=1539689523000'},
            {title: '微信分享 帮忙助力领跑汽车优惠 第七行',ProgressText:'33%',DetailText:'4.4',ImageName:'https://gsnapshot.alicdn.com/imgextra/i3/575127927/TB2n8OJIk9WBuNjSspeXXaz5VXa_!!575127927.jpg_430x430.jpg?time=1539689523000'},
        ];
        return (
            <View style={styles.container}>
                <FlatList
                    data = {movies}
                    showsVerticalScrollIndicator = {false}
                    keyExtractor={this._keyExtractor}
                    onRefresh={this.refreshing}
                    refreshing={false}
                    renderItem={

                        ({item}) =>
                            <TouchableOpacity onPress={this.itemClick.bind(this, item, item.index)}>
                            <View style={styles.cellView} >

                                    <View style={styles.contentStyle}>
                                        <Text style={styles.titleStyle}>{item.title}</Text>
                                        <Text style={styles.progressStyle}>{'完成率：'+item.ProgressText}</Text>
                                        <Text style={styles.detailStyle}>{'好评值：'+item.DetailText}</Text>
                                    </View>
                                    <View style={styles.imageContentStyle}>
                                        <Image
                                            source={{uri: 'https://gsnapshot.alicdn.com/imgextra/i3/575127927/TB2n8OJIk9WBuNjSspeXXaz5VXa_!!575127927.jpg_430x430.jpg?time=1539689523000'}}
                                            style={styles.showImageStyle}
                                        />
                                    </View>


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
    showImageStyle: {
        width:70,
        height:70,
    },
    cellView: {
        flexDirection:'row',
        backgroundColor: '#ffffff',
        marginBottom: 1,
        flex: 1,
    },
    contentStyle:{
        marginTop:16,
        marginLeft:20,
        width: 230,
    },
    imageContentStyle:{
        marginTop:19,
        marginRight:20,
        marginBottom:15,
        marginLeft: 35,
    },
    titleStyle: {
        color: '#333333',
        fontSize: 16,
        fontWeight: 'bold',
    },
    progressStyle: {
        color: '#A1A1A1',
        height:12,
        marginTop: 5,
        fontSize: 12,
    },
    detailStyle: {
        color: '#A1A1A1',
        height:12,
        marginTop: 3,
        fontSize: 12,
    },
});

export {HomeScreen as default};
