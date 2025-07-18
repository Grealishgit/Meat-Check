import { Platform, View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Image, Alert, ActivityIndicator } from 'react-native';
import Appcolor from '@/constants/Colors';
import { useRouter } from 'expo-router';
import AppColors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useAuth } from '../../contexts/AuthContext';


export default function HomeScreen() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [captureImage, setCaptureImage] = useState(true);
  const [uploadImage, setUploadImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageFromCamera = async () => {
    // Request camera permissions
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Sorry, we need camera permissions to make this work!');
      return;
    }

    // Launch camera
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const pickImageFromGallery = async () => {
    // Request media library permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Sorry, we need gallery permissions to make this work!');
      return;
    }

    // Launch gallery
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handleLogout = async () => {
    await logout();
    router.push('/(auth)/');
  };

  return (
    <>
      <SafeAreaView
        style={styles.safeView} >
        <View style={styles.headerContainer} >
          <Text style={[styles.headerTitle, { textTransform: 'capitalize' }]} >Hello {user?.email.length > 10
            && user.email.slice(0, 3) || 'User'}👋 </Text>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Logout</Text>
            <Ionicons
              name="log-out-outline"
              size={24}
              color='white'
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View style={styles.titleContainer}>
        <Text style={styles.headerText}>
          Click the button below to capture a picture of your meat.
        </Text>

        <View style={styles.captureUpload} >

          <TouchableOpacity
            style={[styles.actionButtons, captureImage && styles.activeActionButtons]}
            onPress={() => {
              setCaptureImage(true);
              setUploadImage(false);
              setSelectedImage(null); // Clear image when switching modes
            }}>
            <Text style={styles.actionButtonText} >Capture</Text>
          </TouchableOpacity >


          <TouchableOpacity
            style={[styles.actionButtons, uploadImage && styles.activeActionButtons]}
            onPress={() => {
              setUploadImage(true);
              setCaptureImage(false);
              setSelectedImage(null); // Clear image when switching modes
            }}>
            <Text style={styles.actionButtonText} >Upload </Text>
          </TouchableOpacity >
        </View>

        {captureImage && (
          <View style={styles.formGroup}>
            <TouchableOpacity style={[styles.imagePicker]} onPress={pickImageFromCamera}>
              {selectedImage ? (
                <Image source={{ uri: selectedImage }} style={styles.previewImage} />
              ) : (
                <View style={styles.placeholderContainer}>
                  <Ionicons
                    name="camera-outline"
                    size={40}
                    color={AppColors.primary[500]}
                  />
                  <Text style={styles.placeholderText}>Tap to take an Image</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        )}

        {!captureImage && (
          <View style={styles.formGroup}>
            <TouchableOpacity style={styles.imagePicker} onPress={pickImageFromGallery}>
              {selectedImage ? (
                <Image source={{ uri: selectedImage }} style={styles.previewImage} />
              ) : (
                <View style={styles.placeholderContainer}>
                  <Ionicons
                    name="cloud-upload-outline"
                    size={40}
                    color={AppColors.primary[500]}
                  />
                  <Text style={styles.placeholderText}>Tap to upload an Image</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity style={styles.submitButton} >

          <Ionicons
            name="cloud-upload-outline"
            size={24}
            color="white"
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeView: {
    paddingTop: Platform.OS === 'android' ? 35 : 0,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: AppColors.primary[400],
    padding: 8,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 7,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Appcolor.primary[500],
  },
  headerText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  scrollViewStyle: {
    flex: 1,
    backgroundColor: 'white',
  },

  formGroup: {
    width: '100%',
    marginBottom: 10,
  },
  cardImageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: 'black',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: AppColors.primary[200],
    paddingHorizontal: 12,
  },
  imagePicker: {
    width: "100%",
    height: 200,
    backgroundColor: AppColors.primary[100],
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'red',
    overflow: "hidden",
  },
  previewImage: {
    width: "100%",
    height: "100%",
  },
  placeholderContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: '#999',
    marginTop: 8,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 12,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: "600",
  },
  buttonIcon: {
    marginRight: 8,
  },
  cardContainer: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: AppColors.primary[50],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 1,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  cardImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    resizeMode: 'cover',
    backgroundColor: '#fff',
  },
  cardContent: {
    flex: 1,
    flexDirection: 'column',
    gap: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: AppColors.primary[500],
    marginBottom: 2,
  },
  cardType: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 2,
  },
  cardDescription: {
    fontSize: 13,
    color: '#444',
  },
  mainContainer: {
    flex: 1,
    width: '100%',
    marginTop: 20,
  },
  captureUpload: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  activeActionButtons: {
    backgroundColor: AppColors.primary[500],
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 10,
    width: '45%',
  },
  actionButtons: {
    borderWidth: 2,
    borderColor: AppColors.primary[500],
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 10,
    width: '45%',
  },
  activeActionButtonText: {
    color: AppColors.primary[500],
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    backgroundColor: AppColors.primary[500],
    padding: 10,
    paddingHorizontal: 80,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  }
});
