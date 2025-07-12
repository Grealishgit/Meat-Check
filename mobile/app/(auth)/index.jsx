import { Image, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import login from '../../assets/illustrations/login.png'
import AppColors from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useAuth } from '../../contexts/AuthContext'

const Login = () => {
    const router = useRouter();
    const { login, loading } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        try {
            await login(email, password);
            Alert.alert('Success', 'Login successful!');
            router.push('/(tabs)/');
        } catch (error) {
            Alert.alert('Login Failed', error.message || 'Please check your credentials');
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.outerContainer}>

                <View style={styles.contentContainer}>

                    <View style={styles.formGroup}>
                        <View style={styles.textContainer}>
                            <Text style={styles.headerTitle} >Welcome Back!</Text>
                            <Text style={styles.headerText} >
                                Please login to continue using
                                <Text style={styles.spanText} > MeatCheck</Text> 
                            </Text>
                        </View>
                        <Text style={styles.labelText}>Email</Text>
                        <TextInput
                            style={styles.inputGroup}
                            placeholder="Enter your email"
                            keyboardType='email-address'
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                        />
                        <Text style={styles.labelText}>Password</Text>

                        <View style={styles.passwordInput}>
                            <TextInput
                                style={styles.inputGroup}
                                placeholder="Enter your password"
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
                            />
                            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.passwordButton}>
                                <Ionicons
                                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                                    size={20}
                                    color={AppColors.primary[500]}
                                    style={styles.eyeIcon}
                                />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={[styles.buttonGroup, loading && styles.disabledButton]}
                            onPress={handleLogin}
                            disabled={loading}
                        >
                            {loading ? (
                                <ActivityIndicator size="small" color="white" />
                            ) : (
                                <Text style={styles.buttonText}>Login</Text>
                            )}
                        </TouchableOpacity>
                        <View style={styles.linkGroup}>
                            <Text style={styles.linkText2} >Don't have an Account?</Text>
                            <TouchableOpacity onPress={() => router.push('/(auth)/signup')}>
                                <Text style={styles.linkText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: AppColors.primary[100],
        padding: 8,
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    headerText: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginBottom: 10,
    },
    contentContainer: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },

    inputGroup: {
        width: '100%',
        marginBottom: 15,
        borderWidth: 1,
        borderRadius: 8,
        height: 45,
        borderColor: AppColors.primary[500],
        paddingHorizontal: 10
    },
    labelText: {
        fontSize: 16,
        color: 'black',
        marginBottom: 5,
    },
    formGroup: {
        paddingTop: 20,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: AppColors.primary[500],
        padding: 20,
        width: '100%',
        backgroundColor: '#fefefe',
    },
    buttonGroup: {
        backgroundColor: AppColors.primary[500],
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10
    },
    disabledButton: {
        opacity: 0.6,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    linkGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        gap: 5,
    },
    linkText: {
        color: AppColors.primary[500],
        fontWeight: 'bold',
        fontSize: 16,
    },
    linkText2: {
        fontWeight: 'semibold',
        fontSize: 16,
    },
    passwordInput: {
        position: 'relative',
    },

    passwordButton: {
        position: 'absolute',
        right: 10,
        top: 12,
    },
    spanText: {
        color: AppColors.primary[500],
        fontWeight: 'bold',
    }
})