---

---

# StudyFlicks

VidShare is a full-stack video-sharing platform built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to upload, view, and search for videos, as well as interact with other users through notifications and user profiles.

https://github.com/user-attachments/assets/25a96172-de72-4cbd-bbe1-4716b1715f94

## Features

- **Video Upload and Management**: Users can upload their videos, which are then stored and managed in the platform.
- **Video Playback**: Users can view videos on the platform with a modern, responsive player.
- **Search Functionality**: Search for videos based on keywords and filter results.
- **User Profiles**: Users have personalized profiles where they can view their uploaded videos and manage their account settings.
- **Notifications**: Real-time notifications for user interactions.
- **Responsive Design**: Fully responsive design to ensure usability on both mobile and desktop devices.

## Technologies Used

- **Frontend**:
   - React
   - Tailwind CSS
   - Redux Toolkit for state management
   - React Router for routing
   - React Icons for UI icons

- **Backend**:
   - Node.js
   - Express.js
   - MongoDB
   - Mongoose for MongoDB object modeling
   - Cloudinary for storage


![image](https://github.com/user-attachments/assets/25a96172-de72-4cbd-bbe1-4716b1715f94)
![image](https://github.com/user-attachments/assets/d5f19b11-7906-4d6e-8b4b-b0605efac14b)
![image](https://github.com/user-attachments/assets/9eb48e91-fc76-483d-90e8-d6dee09596d6)


## Project Setup

To set up the VidShare project, follow these steps:

1. Clone the repository to your local machine:

```lisp {"id":"01J4GXKG9WPC5P7TYBTAX2C4DK"}

```

2. Navigate to the project directory:

```sh {"id":"01J4GXKG9WPC5P7TYBTCEV1GXE"}
cd vidshare-full-stack
```

3. Install the dependencies for the frontend:

```sh {"id":"01J4GXKG9WPC5P7TYBTG40NTYX"}
cd frontend
npm i
```

4. Install the dependencies for the backend:

```sh {"id":"01J4GXKG9WPC5P7TYBTKMEMB9N"}
cd ../backend
npm i
```

5. Create a `.env` file in the `backend` directory and add the following environment variables:

```ini {"id":"01J4GXKG9WPC5P7TYBTMWPJAV1"}
PORT=8000
MONGODB_URI=<yourmongodburi>
CORS_ORIGIN=http://localhost:5173
ACCESS_TOKEN_SECRET=<yourAccessToken>
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=<yourRefreshToken>
REFRESH_TOKEN_EXPIRY=10d
CLOUDINARY_CLOUD_NAME=<yourCloudinaryCloudName>
CLOUDINARY_API_KEY=<yourapikey>
CLOUDINARY_API_SECRET=<yoursecret>
```

6. Start the frontend development server:

```sh {"id":"01J4GXKG9WPC5P7TYBTRW5S1TP"}
cd ../frontend
npm run dev
```

7. Start the backend server:

```sh {"id":"01J4GXKG9WPC5P7TYBTVFYVBFY"}
cd ../backend
npm run dev
```

8. Open your browser and navigate to `http://localhost:5173` to access the VidShare application.

That's it! You have successfully set up the VidShare project on your local machine.
