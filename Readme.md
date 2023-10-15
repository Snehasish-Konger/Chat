# Chat Application

This is a chat application built using React Native, Firebase, and Expo. It allows users to create accounts, log in, and chat with other users in real-time.

## Features

- User authentication: Users can create accounts and log in to the chat application using their email and password.
- Real-time messaging: Users can send and receive messages in real-time with other users.
- Chat rooms: Users can join different chat rooms to engage in specific conversations.
- User presence: Users can see the online/offline status of other users.
- Push notifications: Users receive push notifications for new messages when the application is in the background.

## Prerequisites

Make sure you have the following prerequisites installed on your development machine:

- Node.js
- npm or Yarn
- Expo CLI
- Firebase account

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Snehasish-Konger/Chat.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Chat
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. Create a Firebase project and set up authentication and real-time database services.

5. Configure Firebase in your project:

   - Copy the `firebase.example.js` file and rename it to `firebase.js`.
   - Replace the placeholder values in `firebase.js` with your Firebase project's configuration values.

6. Start the application:

   ```bash
   expo start
   ```

7. Use the Expo client to run the application on a physical device or emulator.

## Project Structure

The project structure is organized as follows:

```
.
├── App.js
├── app.json
├── assets
│   └── ...
├── components
│   ├── ChatRoom.js
│   ├── Message.js
│   ├── SignIn.js
│   └── ...
├── navigation
│   └── AppNavigator.js
└── screens
    ├── ChatScreen.js
    ├── HomeScreen.js
    ├── SignInScreen.js
    └── ...
```

- `App.js`: The entry point of the application where the navigation is set up.
- `app.json`: Configuration file for Expo.
- `assets`: Directory for static assets like images, icons, etc.
- `components`: Reusable components used throughout the application.
- `navigation`: Contains the navigation configuration for the screens.
- `screens`: Contains the individual screens of the application.

## Dependencies

The following dependencies are used in this project:

- `react`: JavaScript library for building user interfaces.
- `react-native`: Framework for building native applications using React.
- `firebase`: Official Firebase library for JavaScript.
- `expo`: Development platform for building mobile applications using React Native.
- `react-navigation`: Library for handling navigation in React Native apps.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Firebase](https://firebase.google.com/docs) - For providing authentication and real-time database services.
- [Expo](https://docs.expo.dev/) - For making it easy to develop and test React Native applications.

## Contact

For any inquiries or questions, please contact [snehasish@scientyficworld.org](mailto:snehasish@scientyficworld.org).
