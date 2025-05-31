import { Platform, View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Appcolor from '@/constants/Colors';
import { useRouter } from 'expo-router';



export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView
      style={styles.safeView} >
      <View style={styles.titleContainer}>
        <Text style={styles.headerTitle} >Hello User!</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/(auth)/')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/(auth)/signup')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 35 : 0,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Appcolor.primary[500],
  },
  button: {
    backgroundColor: Appcolor.primary[500],
    padding: 10,
    width: '80%',
    borderRadius: 8,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
