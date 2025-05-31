import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppColors from '@/constants/Colors';

const ProfilePage = () => {
    // Example user data (replace with real data or props as needed)
    const user = {
        name: 'User Name',
        email: 'username@email.com',
        joined: 'June 2025',
    };
    return (
        <>
            <SafeAreaView style={styles.safeView}>
            </SafeAreaView>
            <View style={styles.profileContainer}>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>{user.name[0]}</Text>
                    </View>
                </View>
                <Text style={styles.profileName}>{user.name}</Text>
                <Text style={styles.profileEmail}>{user.email}</Text>
                <View style={styles.profileDetails}>
                    <Text style={styles.profileLabel}>Member since:</Text>
                    <Text style={styles.profileValue}>{user.joined}</Text>
                </View>
            </View>
        </>
    )
}

export default ProfilePage

const styles = StyleSheet.create({
    safeView: {
        paddingTop: Platform.OS === 'android' ? 35 : 0,
    },
    profileContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 24,
    },
    avatarContainer: {
        marginBottom: 16,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: AppColors.primary[200],
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#333',
    },
    profileName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 4,
    },
    profileEmail: {
        fontSize: 16,
        color: '#666',
        marginBottom: 16,
    },
    profileDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    profileLabel: {
        fontSize: 15,
        color: '#888',
        marginRight: 4,
    },
    profileValue: {
        fontSize: 15,
        color: '#333',
        fontWeight: '600',
    },
})