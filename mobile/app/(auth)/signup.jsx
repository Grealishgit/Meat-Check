import { Image, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useRouter } from 'expo-router'
import signup from '../../assets/illustrations/signup.png'
import { Ionicons } from '@expo/vector-icons'
import AppColors from '../../constants/Colors'
import { useState } from 'react'

const SignUp = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
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
                            <Text style={styles.headerTitle} >Create An Account!</Text>
                            <Text style={styles.headerText} >
                                Create an account to get started with  <Text style={styles.spanText} > MeatCheck</Text>
                            </Text>
                        </View>
                        <Text style={styles.labelText}>Your Email</Text>
                        <TextInput
                            style={styles.inputGroup}
                            placeholder="Enter your email"
                        />
                        <Text style={styles.labelText}>Your Password</Text>

                        <View style={styles.passwordInput}>
                            <TextInput
                                style={styles.inputGroup}
                                placeholder="Enter your password"
                                secureTextEntry={!showPassword}

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
                        <Text style={styles.labelText}>Confirm Password</Text>
                        <View style={styles.passwordInput}>
                            <TextInput
                                style={styles.inputGroup}
                                placeholder="Confirm your password"
                                secureTextEntry={!showConfirmPassword}
                            />
                            <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.passwordButton}>
                                <Ionicons
                                    name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                                    size={20}
                                    color={AppColors.primary[500]}
                                    style={styles.eyeIcon}
                                />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.buttonGroup} onPress={() => router.push('/(tabs)/')}>
                            <Text style={styles.buttonText}>Return Home</Text>
                        </TouchableOpacity>
                        <View style={styles.linkGroup}>
                            <Text style={styles.linkText2} >Already have an Account?</Text>
                            <TouchableOpacity onPress={() => router.push('/(auth)/')}>
                                <Text style={styles.linkText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default SignUp

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
    spanText: {
        color: AppColors.primary[500],
        fontWeight: 'bold',
    },
    passwordInput: {
        position: 'relative',
    },

    passwordButton: {
        position: 'absolute',
        right: 10,
        top: 12,
    },
})