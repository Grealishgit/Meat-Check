import Constants from 'expo-constants';

const API_BASE_URL = 'https://meat-check.vercel.app/api';

class ApiService {
    constructor() {
        this.baseURL = API_BASE_URL;
        this.token = null;
    }

    // Set authentication token
    setAuthToken(token) {
        this.token = token;
    }

    // Generic API call method
    async apiCall(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...(this.token && { Authorization: `Bearer ${this.token}` }),
                ...options.headers,
            },
            ...options,
        };

        try {
            const response = await fetch(url, config);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'API request failed');
            }

            return data;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    // Authentication methods matching your userController
    async signup(email, password) {
        return this.apiCall('/users/signup', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        });
    }

    async login(email, password) {
        return this.apiCall('/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        });
    }

    async getUserProfile() {
        return this.apiCall('/users/profile', {
            method: 'GET',
        });
    }

    // Meat analysis methods for future use
    async uploadMeatImage(imageUri) {
        const formData = new FormData();
        formData.append('image', {
            uri: imageUri,
            type: 'image/jpeg',
            name: 'meat-image.jpg',
        });

        return this.apiCall('/meat/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formData,
        });
    }
}

export default new ApiService();
