# Foosball Trainer App 🎮

A React Native mobile application built with Expo to help foosball players practice different shots and techniques. The app provides voice-guided training sessions with random shot selections and timing.

## Features

- **5-Bar Training**: Practice wall, lane, and high-lane shots with random timing
- **Leo Spredeman 5-Bar**: Advanced training with wall, lane, bounce-wall, and bounce-lane shots
- **Snake Training**: Practice left, right, and center shots
- **SnakeLR Training**: Focus on left and right shots
- **Pull Training**: Practice short, middle, and long pulls

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo Go app on your mobile device
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/foosball-trainer.git
   cd foosball-trainer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npx expo start
   ```

4. Scan the QR code with your mobile device:
   - iOS: Use the Camera app
   - Android: Use the Expo Go app

## Building for Production

### Creating an APK

1. Install EAS CLI:
   ```bash
   npm install -g eas-cli
   ```

2. Log in to your Expo account:
   ```bash
   eas login
   ```

3. Configure the build:
   ```bash
   eas build:configure
   ```

4. Build the APK:
   ```bash
   eas build -p android --profile preview
   ```

The APK will be available for download once the build is complete.

## Project Structure

```
foosball-trainer/
├── app/                    # Main application code
│   ├── (tabs)/            # Tab-based navigation
│   │   ├── index.tsx      # Home screen
│   │   ├── 5-bar.tsx      # 5-Bar training
│   │   ├── snake.tsx      # Snake training
│   │   ├── snake-LR.tsx   # SnakeLR training
│   │   ├── pull.tsx       # Pull training
│   │   └── leo-spredeman-5-bar.tsx  # Leo Spredeman training
├── components/            # Reusable components
├── constants/            # App constants and theme
├── assets/              # Images and other static assets
└── hooks/               # Custom React hooks
```

## Training Modes

### 5-Bar
- Random wait time: 3-10 seconds
- Shot options: wall, lane, high-lane
- Perfect for practicing basic 5-bar shots

### Leo Spredeman 5-Bar
- Random wait time: 3-10 seconds
- Shot options: wall, lane, bounce-wall, bounce-lane
- Advanced training inspired by Spredeman Leo WCS

### Snake
- Random wait time: 3-13 seconds
- Shot options: left, right, center
- Focus on snake shot variations

### SnakeLR
- Random wait time: 3-13 seconds
- Shot options: left, right
- Specialized training for left-right shots

### Pull
- Random wait time: 3-13 seconds
- Shot options: short, middle, long
- Practice pull shot distances

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by foosball training techniques
- Built with [Expo](https://expo.dev)
- Uses [React Native](https://reactnative.dev)
