import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useRouter } from 'expo-router'
import signup from '../../assets/illustrations/signup.png'
import AppColors from '../../constants/Colors'

const SignUp = () => {
    const router = useRouter();
    return (
        <View style={styles.outerContainer}>

            <View style={styles.contentContainer}>

                <View style={styles.formGroup}>
                    <View style={styles.textContainer}>
                        <Text style={styles.headerTitle} >Create An Account!</Text>
                        <Text style={styles.headerText} >
                            Create an account to get started with MeatCheck
                        </Text>
                    </View>
                    <Text style={styles.labelText}>Your Email</Text>
                    <TextInput
                        style={styles.inputGroup}
                        placeholder="Enter your email"
                    />
                    <Text style={styles.labelText}>Your Password</Text>
                    <TextInput
                        style={styles.inputGroup}
                        placeholder="Enter your password"
                        secureTextEntry={true}
                    />
                    <Text style={styles.labelText}>Confirm Password</Text>
                    <TextInput
                        style={styles.inputGroup}
                        placeholder="Confirm your password"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.buttonGroup}>
                        <Text style={styles.buttonText}>Sign Up</Text>
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
})