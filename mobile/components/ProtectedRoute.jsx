import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import AppColors from '../constants/Colors';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.push('/(auth)/');
        }
    }, [isAuthenticated, loading]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={AppColors.primary[500]} />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    if (!isAuthenticated) {
        return null; // Will redirect in useEffect
    }

    return children;
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: AppColors.primary[500],
    },
});

export default ProtectedRoute;
