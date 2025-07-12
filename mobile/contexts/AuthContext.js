import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ApiService from '../services/apiService';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(null);

    // Initialize auth state
    useEffect(() => {
        checkAuthState();
    }, []);

    const checkAuthState = async () => {
        try {
            const savedToken = await AsyncStorage.getItem('auth_token');
            const savedUser = await AsyncStorage.getItem('user_data');

            if (savedToken && savedUser) {
                setToken(savedToken);
                setUser(JSON.parse(savedUser));
                ApiService.setAuthToken(savedToken);
            }
        } catch (error) {
            console.error('Error checking auth state:', error);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        try {
            setLoading(true);
            const response = await ApiService.login(email, password);

            const { user: userData, token: authToken } = response;

            // Save to AsyncStorage
            await AsyncStorage.setItem('auth_token', authToken);
            await AsyncStorage.setItem('user_data', JSON.stringify(userData));

            // Update state
            setToken(authToken);
            setUser(userData);
            ApiService.setAuthToken(authToken);

            return response;
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const signup = async (email, password) => {
        try {
            setLoading(true);
            const response = await ApiService.signup(email, password);

            const { user: userData, token: authToken } = response;

            // Save to AsyncStorage
            await AsyncStorage.setItem('auth_token', authToken);
            await AsyncStorage.setItem('user_data', JSON.stringify(userData));

            // Update state
            setToken(authToken);
            setUser(userData);
            ApiService.setAuthToken(authToken);

            return response;
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            // Clear AsyncStorage
            await AsyncStorage.removeItem('auth_token');
            await AsyncStorage.removeItem('user_data');

            // Clear state
            setToken(null);
            setUser(null);
            ApiService.setAuthToken(null);
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    const value = {
        user,
        token,
        loading,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
