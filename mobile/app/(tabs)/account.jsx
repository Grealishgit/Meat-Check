import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfilePage = () => {
    return (
        <SafeAreaView
            style={styles.safeView} >
            <View>
                <Text style={{ color: "white" }} >Profile</Text>
            </View>
        </SafeAreaView>
    )
}

export default ProfilePage

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 35 : 0,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
})