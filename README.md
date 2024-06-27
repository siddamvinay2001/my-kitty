# Kitty Party App Monorepo

**Authors**: Vinay Siddam and Sudheep Rao

This monorepo contains the full-stack application for managing kitty parties, including backend, web frontend, and mobile frontend.
figma :- https://www.figma.com/design/LK7JGD3LxEAKZASpTwKxkg/kitty-party-app?node-id=0-1&t=rDAURB1xuMyEjnkJ-1

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Running the Applications](#running-the-applications)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Google Sign-In integration
- Create and manage parties
- Invite friends to join parties
- Randomly select a member to receive the funds each month
- Dashboard to view party details and member list

## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, Mongoose, Passport.js, Nodemailer, JWT
- **Web Frontend**: React, Axios
- **Mobile Frontend**: React Native, React Navigation, Axios, React Native Google Sign-In
- **Deployment**: Google Play Store, Apple App Store

## Setup Instructions

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn
- MongoDB
- Google Developer Account (for Google Sign-In)
- Apple Developer Account (for iOS deployment)
- Android SDK (for Android development)
- Xcode (for iOS development)

### Monorepo Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/kitty-party-app.git
    cd kitty-party-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

### Backend Setup

1. Navigate to the backend application:

    ```bash
    cd apps/backend
    ```

2. Set up environment variables:

    Create a `.env` file in the backend directory and add the following variables:

    ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    EMAIL_USER=your_email_address
    EMAIL_PASS=your_email_password
    ```

3. Start the backend server:

    ```bash
    nx serve backend
    ```

### Web Frontend Setup

1. Navigate to the frontend application:

    ```bash
    cd apps/frontend
    ```

2. Start the web application:

    ```bash
    nx serve frontend
    ```

### Mobile Frontend Setup

1. Navigate to the mobile application:

    ```bash
    cd apps/mobile
    ```

2. Start the mobile application:

    For Android:

    ```bash
    nx run-android mobile
    ```

    For iOS:

    ```bash
    nx run-ios mobile
    ```

## Running the Applications

- **Web**: Open your browser and navigate to `http://localhost:3000`.
- **Mobile**: Use an emulator or physical device to run the application.

## Deployment

### Google Play Store

1. Generate a signed APK:

    ```bash
    cd apps/mobile/android
    ./gradlew assembleRelease
    ```

2. Follow the instructions on the [Google Play Console](https://play.google.com/console/about/) to publish your app.

### Apple App Store

1. Archive your project in Xcode.
2. Follow the instructions on the [Apple Developer](https://developer.apple.com/app-store/) site to publish your app.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the repository.
2. Create a new branch: `git checkout -b my-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-branch-name`
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
