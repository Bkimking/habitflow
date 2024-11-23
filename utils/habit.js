// utils/habit.js
// localhost (https://localhost/habitflow/backend/api/habit.php)¬
// online server (https://habitflow.kenswedtechclub.org/backend/api/habit.php)
export const API_URL = 'https://habitflow.kenswedtechclub.org/habitflow/backend/api/habit.php'; // Adjust this to your actual API base URL

// Add habit tab API function
export const addHabitTab = async (userId, newTab) => {
    try {
      const response = await fetch(`${API_URL}?action=addHabitTab`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, newTab }),
      });
      const data = await response.json();
      if (data.success) {
        return data.message;
      } else {
        throw new Error(data.error || 'Failed to add habit tab');
      }
    } catch (error) {
      console.error('Error in addHabitTab:', error);
      throw error;
    }
  };  
  

// Add habit API function
export const addHabit = async (userId, tabId, habitName, description) => {
    try {
        const response = await fetch(`${API_URL}?action=addHabit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId,
                tabId,
                habitName,
                description,
            }),
        });

        const result = await response.json();
        return result; // Returns success or error message
    } catch (error) {
        console.error('Error adding habit:', error);
        return { error: 'An error occurred while adding the habit.' };
    }
};

// Fetch habits API function
export const fetchHabits = async (userId) => {
    try {
        const response = await fetch(`${API_URL}?action=getHabits`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId,
            }),
        });

        const result = await response.json();
        return result; // Returns the list of habits or an error message
    } catch (error) {
        console.error('Error fetching habits:', error);
        return { error: 'An error occurred while fetching the habits.' };
    }
};
