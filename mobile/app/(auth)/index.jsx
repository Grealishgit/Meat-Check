import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import login from '../../assets/illustrations/login.png'
import AppColors from '../../constants/Colors'

const Login = () => {
    const router = useRouter();
    return (
        <View style={styles.outerContainer}>

            <View style={styles.contentContainer}>

                <View style={styles.formGroup}>
                    <View style={styles.textContainer}>
                        <Text style={styles.headerTitle} >Welcome Back!</Text>
                        <Text style={styles.headerText} >
                            Please login to continue using MeatCheck
                        </Text>
                    </View>
                    <Text style={styles.labelText}>Email</Text>
                    <TextInput
                        style={styles.inputGroup}
                        placeholder="Enter your email"
                    />
                    <Text style={styles.labelText}>Password</Text>
                    <TextInput
                        style={styles.inputGroup}
                        placeholder="Enter your password"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.buttonGroup}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.linkGroup}>
                        <Text style={styles.linkText2} >Already have an Account?</Text>
                        <TouchableOpacity onPress={() => router.push('/(auth)/signup')}>
                            <Text style={styles.linkText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
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
})