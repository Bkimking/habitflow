// localhost (https://localhost/habitflow/backend/api/auth.php)
// online server (https://habitflow.kenswedtechclub.org/backend/api/auth.php)
export const API_URL = 'https://habitflow.kenswedtechclub.org//backend/api/auth.php'; // Adjust this to your actual API base URL

// Login API function
export const login = async (email, password) => { // Accept email instead of username
    try {
        const response = await fetch(`${API_URL}?action=login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }), // Send email and password
        });

        const result = await response.json();
        return result; // Returns the result, which could include user info or an error message
    } catch (error) {
        console.error('Login error:', error);
        return { error: 'An error occurred during login.' };
    }
};

// Signup API function
export const signup = async (username, email, password) => { // Updated to accept username, email, and password
    try {
        const response = await fetch(`${API_URL}?action=signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }), // Send username, email, and password
        });

        const result = await response.json();
        return result; // Returns the result, which could include a success message or an error
    } catch (error) {
        console.error('Signup error:', error);
        return { error: 'An error occurred during signup.' };
    }
};
