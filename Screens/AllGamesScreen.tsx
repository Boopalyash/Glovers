import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from 'react-native-elements';
import SegmentedControlTab from "react-native-segmented-control-tab";

const data = {
    monday: {
        title: 'Today',
        data: [
            { id: '1', location: 'San Francisco,CA,USA', date: 'April 13', time: '10.00 AM', team1: 'Yankees', team2: 'Viji game', score1: '0', score2: '0', outs: '0,0 out', subTitle: 'Today' },
            { id: '2', location: 'San Francisco,CA,USA', date: 'April 13', time: '10.00 AM', team1: 'Yankees', team2: 'Viji game', score1: '0', score2: '0', outs: '0,0 out', subTitle: 'Today' },
        ],
    },
    tuesday: {
        titles: 'Upcoming',
        data: [
            { id: '3', location: 'San Francisco,CA,USA', date: 'April 13', time: '10.00 AM', team1: 'Yankees', team2: 'Viji game', score1: '0', score2: '0', outs: '0,0 out', subTitle: 'Upcoming' },
            { id: '4', location: 'San Francisco,CA,USA', date: 'April 13', time: '10.00 AM', team1: 'Yankees', team2: 'Viji game', score1: '0', score2: '0', outs: '0,0 out', subTitle: 'Upcoming' },
            { id: '5', location: 'San Francisco,CA,USA', date: 'April 13', time: '10.00 AM', team1: 'Yankees', team2: 'Viji game', score1: '0', score2: '0', outs: '0,0 out', subTitle: 'Upcoming' }
        ],
    }
};

const DATA = {
    today: {
        titles: 'Fall 2022',
        data: [
            { id: '1', teams: 'Yankees', record: '0-1' },
            { id: '2', teams: 'Test Yankees', record: '0-1' },
        ],
    },
    tomorrow: {
        titles: 'Winter 2022-2023',
        data: [
            { id: '3', teams: 'Red Sox', record: '3-0' },
            { id: '4', teams: 'Test Red Sox', record: '1-0' },
            { id: '5', teams: 'Red Sox', record: '5-0' },
            { id: '6', teams: 'Test Red Sox', record: '1-3' },
            { id: '7', teams: 'Red Sox', record: '1-0' },
            { id: '8', teams: 'Test Red Sox', record: '1-0' },
        ],
    },
};

function SectionHeader({ title }: any) {
    return (
        <View>
            <Text style={{ fontSize: 18, color: 'black', marginLeft: 25, fontWeight: 'bold',margin:10, }}>{title}</Text>
        </View>
    );
}

const renderItem = ({ item }: any) => {
    return (
        <View style={[styles.Cards, item.subTitle === 'Upcoming' && styles.upcomingCard]}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/images/Glovers-Icons/baseball.png')} style={styles.Ball} />
                </View>
                <Image source={require('../assets/images/Glovers-Icons/locationMarkIcon.png')} style={styles.Location} />
                <View >
                    <Text style={{ color: '#090909', fontSize: 13, marginTop: 10, marginRight: 60, fontWeight: 'bold', paddingHorizontal: 10 }}>{item.location}</Text>
                </View>
                <View >
                    <Text style={{ color: '#bc3f3d', fontSize: 13, marginTop: 10, fontWeight: 'bold', }}>{item.date}</Text>
                    <Text style={{ color: '#bc3f3d', fontSize: 13, fontWeight: 'bold', }}>{item.time}</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-around', }}>
                <Image source={require('../assets/images/Glovers-Icons/yankeesLogo.png')} style={styles.SmallIcon} />
                <Text style={{ color: '#101010', fontWeight: 'bold', }}>{item.team1}</Text>
                <Text style={{ marginRight: 50, color: '#101010', fontSize: 16, fontWeight: 'bold' }}>{item.score1}</Text>
                <View>
                    <View style={styles.containers}>
                        <View style={[styles.square, { transform: [{ rotate: '45deg' }] }]}></View>
                        <View>
                            <View style={[styles.square1, { transform: [{ rotate: '45deg' }] }]}></View>
                        </View>
                        <View style={[styles.square, { transform: [{ rotate: '45deg' }] }]}></View>
                    </View>
                    <Text style={{ marginTop: 5, color: 'black', marginRight: 50 }}>0,0 out</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-around', marginRight: 150 }}>
                <Image source={require('../assets/images/Glovers-Icons/redsocksLogo.png')} style={styles.SmallIcon} />
                <Text style={{ color: '#101010', fontWeight: 'bold' }}>{item.team2}</Text>
                <Text style={{ marginRight: 20, color: '#101010', fontSize: 16, fontWeight: 'bold' }}>{item.score2}</Text>
            </View>

            {item.subTitle === 'Today' &&
                <View style={{ flexDirection: 'row', marginTop: 20, alignSelf: 'center', backgroundColor: '#F5F5F5', padding: 10, width: 359, borderRadius: 12, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../assets/images/Glovers-Icons/documentIcon.png')} style={styles.Document} />
                    <Text style={{ color: '#f6b704', fontWeight: 'bold', marginLeft: 5 }}>Start Scoring</Text>
                </View>
            }
        </View>
    );
}

const renderItem1 = ({ item }: any) => (

    <View style={styles.Card}>
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/Glovers-Icons/baseball.png')} style={styles.Ball1} />
            </View>
            <Image source={require('../assets/images/Glovers-Icons/red_profile.png')} style={styles.RedProfile} />
            <Text style={{ marginTop: 10, marginLeft: 10, fontWeight: 'bold' }}>Coach</Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 10, }}>
            <Image source={require('../assets/images/Glovers-Icons/yankeesLogo.png')} style={styles.SmallIcon} />
            <Text style={{ marginLeft: 10, color: 'black', fontWeight: 'bold' }}>{item.teams}</Text>
        </View>

        <View style={{ marginTop: 20, alignSelf: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                {item.record}
            </Text>
        </View>

        {['1', '3',].includes(item.id) &&
            (
                <View style={{ marginLeft: 140, marginBottom: 20 }}>
                    <TouchableOpacity>
                        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>UR</Text>
                    </TouchableOpacity>
                </View>
            )}
    </View>
);

const AllGamesScreen = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const renderAllGamesScreen = () => {
        return (
            <View >
                <FlatList
                    style={{ marginBottom: 150 }}
                    data={[
                        { key: "monday", title: data.monday.title, data: data.monday.data },
                        { key: "tuesday", title: data.tuesday.titles, data: data.tuesday.data },
                    ]}
                    renderItem={({ item }) => (
                        <>
                            <SectionHeader title={item.title} />
                            <FlatList
                                data={item.data}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                            />
                        </>
                    )}
                    keyExtractor={(item) => item.key}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    };

    const renderMyTeamsScreen = () => {
        return (
            <View >
                <FlatList
                    style={{ marginBottom: 150 }}
                    data={[
                        { key: "today", title: DATA.today.titles, data: DATA.today.data },
                        { key: "tomorrow", title: DATA.tomorrow.titles, data: DATA.tomorrow.data },
                    ]}
                    renderItem={({ item }) => (
                        <>
                            <SectionHeader title={item.title} />
                            <FlatList
                                data={item.data}
                                renderItem={renderItem1}
                                keyExtractor={(item) => item.id}
                                numColumns={2}
                            />
                        </>
                    )}
                    keyExtractor={(item) => item.key}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    };

    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <View style={{ flexDirection: 'row', marginTop: 40, justifyContent: 'space-between', paddingHorizontal: 30 }}>
                <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold'}}>
                    Home
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
            <SegmentedControlTab
                values={['All Games', 'My Teams']}
                selectedIndex={selectedIndex}
                onTabPress={(index) => setSelectedIndex(index)}
                tabsContainerStyle={styles.tabContainer}
                tabStyle={styles.tabStyle}
                activeTabStyle={styles.activeTabStyle}
                tabTextStyle={styles.tabTextStyle}
                activeTabTextStyle={styles.activeTabTextStyle} />
            {selectedIndex === 0 ? renderAllGamesScreen() : renderMyTeamsScreen()}
            <View style={{ position: 'absolute', bottom: 10, right: 20 }}>
                <Image source={require('../assets/images/Glovers-Icons/round_add.png')} style={styles.RoundAdd} />
            </View>
        </View>
    );
}
export default AllGamesScreen;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:'white'
    },
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
        width: 12,
        height: 15,
        marginTop: 10,
        marginLeft: 15
    },
    Document: {
        width: 15,
        height: 18,
    },
    tabContainer: {
        height: 40,
        width: 240,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 0.8,
        borderRadius: 20,
        overflow: 'hidden',
        borderColor:'#005dab'
    },
    tabStyle: {
        borderWidth: 0,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderEndWidth: 0
    },
    activeTabStyle: {
        backgroundColor: '#005dab',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    tabTextStyle: {
        color: '#005dab',
        fontWeight: 'normal',
    },
    activeTabTextStyle: {
        color: 'white',
        fontWeight: 'bold',
    },
    SmallIcon: {
        width: 15,
        height: 15,
        marginLeft: 40
    },
    containers: {
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
    square1: {
        width: 12,
        height: 12,
        backgroundColor: '#99bfdd',
    },
    Card: {
        width: 170,
        height: 160,
        borderRadius: 10,
        borderWidth: 0.3,
        borderColor: 'black',
        marginLeft: 25,
        marginBottom: 12
    },
    Ball1: {
        width: 30,
        height: 30,
        tintColor: 'white',
    },
    RedProfile: {
        width: 20,
        height: 20,
        marginTop: 10,
        marginLeft: 10
    },
    RoundAdd: {
        width: 50,
        height: 50,
        marginLeft: 350,
        marginBottom: 10
    },
    Cards: {
        width: 360,
        height: 200,
        borderWidth: 0.3,
        borderColor: 'black',
        alignSelf: 'center',
        borderRadius: 12,
        marginTop: 12,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 25,
        margin: 5,
        color: 'black'
    },
    upcomingCard: {
        height: 170,
    },
});

