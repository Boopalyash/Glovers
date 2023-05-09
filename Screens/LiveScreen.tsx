import React from "react";
import { View, Text, StyleSheet, Image, StatusBar, FlatList, TouchableOpacity } from "react-native";

const data = [
    { id: 1, location: 'New York City', team1: 'Red Sox', team2: 'Yankees', score1: 3, score2: 0, subTitle: '1' },
    { id: 2, location: 'New York City', team1: 'Tigers', team2: 'Yankees', score1: 0, score2: 1, subTitle: '2' },
   
];

const renderItem = ({ item }: any) => (
    <View style={styles.Cardss}>
        <View>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/images/Glovers-Icons/baseball.png')} style={styles.Ball} />
                </View>
                <Image source={require('../assets/images/Glovers-Icons/locationMarkIcon.png')} style={styles.Location} />
                <Text style={{ color: '#090909', fontSize: 13, marginTop: 10, marginRight: 100, fontWeight: 'bold', paddingHorizontal: 10 }}>
                    {item.location}
                </Text>
                <View>
                    <Text style={{ color: '#bc3f3d', fontSize: 13, marginTop: 10, fontWeight: 'bold', marginLeft: 20 }}>
                        Today
                    </Text>
                    <Text style={{ color: '#bc3f3d', fontSize: 13, marginTop: 10, fontWeight: 'bold' }}>
                        03.00 PM
                    </Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-around', }}>
                <Image source={require('../assets/images/Glovers-Icons/redsocksLogo.png')} style={styles.SmallIcon} />
                <Text style={{ color: '#101010', fontWeight: 'bold' }}>
                    {item.team1}
                </Text>
                <Text style={{ marginRight: 40, color: '#101010', fontSize: 16, fontWeight: 'bold' }}>
                    {item.score1}
                </Text>

                <View>
                    <View style={styles.containerss}>
                        <View style={[styles.square, { transform: [{ rotate: '45deg' }] }]}></View>
                        <View>
                            <View style={[styles.square2, { transform: [{ rotate: '45deg' }] }]}></View>
                        </View>
                        <View style={[styles.square3, { transform: [{ rotate: '45deg' }], backgroundColor: item.id === 2 ? '#99bfdd' : '#bc3f3d' }]}></View>
                    </View>
                    <Text style={{ marginTop: 5, color: 'black',  marginRight:50}}>
                        {item.id === 1 ? '2-2,1 out' : '0-0,0 out'}
                    </Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-around', marginRight: 150 }}>
                <Image source={require('../assets/images/Glovers-Icons/yankeesLogo.png')} style={styles.SmallIcon} />
                <Text style={{ color: '#101010', fontWeight: 'bold' }}>
                    {item.team2}
                </Text>
                <Text style={{ marginRight: 20, color: '#101010', fontSize: 16, fontWeight: 'bold' }}>
                    {item.score2}
                </Text>
            </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 15, alignSelf: 'center', backgroundColor: '#F5F5F5', padding: 10, width: 359, borderRadius: 12, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../assets/images/Glovers-Icons/Video_CameraIcon.png')} style={styles.LiveCamera} />
            <Text style={{ color: '#34a353', fontWeight: 'bold', marginLeft: 5 }}>
                Go Live
            </Text>
        </View>

    </View>
);


const LiveScreen = () => {
    return (
        <View style={{ flex: 1,backgroundColor:'white' }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <View style={{ flexDirection: 'row', marginTop: 40, justifyContent: 'space-between', paddingHorizontal: 30 }}>
                <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>
                    Live
                </Text>
                <View style={{ flexDirection: 'row', }} >
                    <TouchableOpacity>
                        <Image source={require('../assets/images/Glovers-Icons/search_big.png')} style={styles.Search} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/images/Glovers-Icons/notification_bell.png')} style={styles.Notification_bell} />
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.subTitle}
            />
        </View>
    );
}
export default LiveScreen;
const styles = StyleSheet.create({
    Search: {
        width: 18,
        height: 18,
        margin: 10,
    },
    Notification_bell: {
        width: 15,
        height: 18,
        margin: 10,
    },
    Cardss: {
        width: 360,
        height: 200,
        borderWidth: 0.3,
        borderColor: 'black',
        alignSelf: 'center',
        borderRadius: 12,
        marginTop: 12
    },
    imageContainer: {
        backgroundColor: '#005dab',
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
    },
    Ball: {
        width: 30,
        height: 30,
        tintColor: 'white',

    },
    Location: {
        width: 15,
        height: 20,
        marginTop: 10,
        marginLeft: 15
    },
    containerss: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 60,
    },
    square: {
        width: 12,
        height: 12,
        backgroundColor: '#99bfdd',
        marginTop: 12
    },
    square2: {
        width: 12,
        height: 12,
        backgroundColor: '#99bfdd',
    },
    square3: {
        width: 12,
        height: 12,
        backgroundColor: 'red',
        marginTop: 12
    },
    SmallIcon: {
        width: 15,
        height: 15,
        marginLeft: 40
    },
    LiveCamera: {
        width: 25,
        height: 10,
        tintColor: '#71bd86',


    },
});
