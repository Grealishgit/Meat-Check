import { Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppColors from '@/constants/Colors';
import { useAuth } from '@/contexts/AuthContext';
import { formatFullDate } from '../../utils/index';

const ProfilePage = () => {
    const { user, logout } = useAuth();

    return (
        <>
            <SafeAreaView style={styles.safeView} />
            <View style={styles.headerView}>
                <Text style={styles.headerTitle}>Profile</Text>
            </View>
            <View style={styles.profileContainer}>
                <View style={styles.profileCard}>
                    <View style={styles.avatarContainer}>
                        <View style={styles.avatar}>
                            <Image
                                source={{ uri: "https://avatar.iran.liara.run/public/87" }}
                                style={{ width: 80, height: 80, borderRadius: 50, borderWidth: 2, borderColor: 'red' }}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.profileEmail}>{user.email}</Text>
                        <View style={styles.profileDetails}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.profileLabel}>Member since:</Text>
                                <Text style={styles.profileValue}>{formatFullDate(user.createdAt)}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default ProfilePage

const styles = StyleSheet.create({
    safeView: {
        paddingTop: Platform.OS === 'android' ? 35 : 0,
        backgroundColor: '#fcfcfc',
    },
    profileContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fcfcfc',
        padding: 24,
    },
    headerView: {
        backgroundColor: '#ffffff',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: AppColors.primary[500],
        marginLeft: 16,
    },
    profileCard: {
        width: '100%',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 16,
        borderRadius: 8,
        padding: 16,
        backgroundColor: AppColors.primary[100],
        borderColor: AppColors.primary[500],
    },
    avatarContainer: {
        marginBottom: 16,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: '#ffffff',
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
        color: 'red',
        marginRight: 4,
    },
    profileValue: {
        fontSize: 15,
        color: '#333',
        fontWeight: '600',
    },
})