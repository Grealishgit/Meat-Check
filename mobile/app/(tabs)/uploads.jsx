import { FlatList, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import beef from '../../assets/category/redmeat.jpg';
import pork from '../../assets/category/chicken.png';
import chicken from '../../assets/category/pork.png';
import lamb from '../../assets/category/lamb.png';
import fish from '../../assets/category/fish.png';
import { Image } from 'react-native';
import AppColors from '@/constants/Colors';

const meatTypes = [
    {
        id: '1',
        name: 'Beef',
        image: beef,
        type: 'red',
        description: 'Beef is the meat from cattle, known for its rich flavor and tenderness. It is a popular choice for steaks, roasts, and ground beef dishes.',
    },
    {
        id: '2',
        name: 'Pork',
        image: pork,
        type: 'white',
        description: 'Pork is the meat from pigs, known for its versatility and mild flavor. It can be prepared in various ways, including roasting, grilling, and frying.',
    },
    {
        id: '3',
        name: 'Chicken',
        image: chicken,
        type: 'white',
        description: 'Chicken is a widely consumed poultry meat known for its lean protein content and versatility in cooking. It can be grilled, roasted, or used in soups and stews.',
    },
    {
        id: '4',
        name: 'Lamb',
        image: lamb,
        type: 'red',
        description: 'Lamb is the meat from young sheep, known for its tender texture and distinct flavor. It is often used in Mediterranean and Middle Eastern cuisines.',
    },
    {
        id: '5',
        name: 'Fish',
        image: fish,
        type: 'white',
        description: 'Fish is a healthy source of protein and omega-3 fatty acids. It can be grilled, baked, or fried and comes in various types such as salmon, tuna, and cod.',
    }
]

const UploadsPage = () => {
    return (
        <>
            <SafeAreaView
                style={styles.safeView} >
            </SafeAreaView>
            <View style={styles.headerContainer} >
                <Text style={styles.headerTitle} >Uploads</Text>
            </View>
            <Text style={styles.headerUploads}>Recent Uploads</Text>
            <View style={styles.titleContainer}>

                <View style={styles.borderLine} />
                <View style={{ flex: 1, width: '100%' }}>
                    <FlatList
                        data={meatTypes}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{ paddingBottom: 20 }}
                        renderItem={({ item }) => (
                            <View style={styles.cardContainer}>
                                <View style={styles.cardRow}>
                                    <View style={styles.cardImageContainer}>
                                        <Image
                                            source={item.image}
                                            style={styles.cardImage}
                                        />
                                        <Text style={styles.cardTitle}>{item.name}</Text>
                                    </View>
                                    <View style={styles.cardContent}>
                                        <Text style={styles.cardType}>Type: <Text style={{ color: item.type === 'red' ? '#d32f2f' : '#388e3c' }}>{item.type}</Text></Text>
                                        <Text style={styles.cardDescriptionText}>Description: </Text>
                                        <Text style={styles.cardDescription}>{item.description}</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </>
    )
}

export default UploadsPage

const styles = StyleSheet.create({
    safeView: {
        paddingTop: Platform.OS === 'android' ? 35 : 0,
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: AppColors.primary[500],
    },
    headerUploads: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 15,
    },
    borderLine: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        width: '100%',
        marginBottom: 10
    },

    container: {
        flexGrow: 1,
        backgroundColor: 'white',
        padding: 16,
    },
    scrollViewStyle: {
        flex: 1,
        backgroundColor: 'white',
    },

    formGroup: {
        width: '100%',
        marginBottom: 10,
    },
    cardImageContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },


    cardContainer: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: AppColors.primary[500],
        padding: 12,
        marginBottom: 16,
        backgroundColor: AppColors.primary[50],
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.07,
        shadowRadius: 4,
        elevation: 1,
    },
    cardRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 12,
    },
    cardImage: {
        width: 70,
        height: 70,
        borderRadius: 8,
        resizeMode: 'cover',
        backgroundColor: '#fff',
    },
    cardContent: {
        flex: 1,
        flexDirection: 'column',
        gap: 4,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: AppColors.primary[500],
        marginBottom: 2,
    },
    cardType: {
        fontSize: 15,
        fontWeight: '600',
    },
    cardDescriptionText: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    cardDescription: {
        fontSize: 13,
        color: '#444',
    },
    mainContainer: {
        flex: 1,
        width: '100%',
        marginTop: 20,
    },
});