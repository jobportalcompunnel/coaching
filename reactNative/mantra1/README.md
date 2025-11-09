# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
-------------------------------------------------------------
***************
powershell - adminstartion mode
choco install -y nodejs-lts microsoft-openjdk17
npx create-expo-app@latest
cmd -  adminstartion mode
yarn install
cd mantram software

********
npm install -g eas-cli
eas login
eas build:configure
eas build --platform android --profile development
npm i @react-native-community/cli
npx react-native start --reset-cache
npm install -g npm@11.6.0 // if npm not match
npm cache clean --force // if any issue 


************
run application on mobile:
npx expo start // choose s  - for expo go // open expo go app in mobile and scan qr code

run application on web:
npm start -- --reset-cache  // then choose w
npm run web
**************************
npm install react-native-web react-dom --save

npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader html-webpack-plugin webpack webpack-cli webpack-dev-server

npm install react-native-reanimated

D:\pradeep-poc\react-mfe\reactNative\mantra1\babel.config.js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // other plugins, if any
      'react-native-reanimated/plugin', // This must be the last plugin!
    ],
  };
};

npm start -- --reset-cache

npm run reset-project
*************
simeple app
https://docs.expo.dev/tutorial/create-your-first-app/
https://expo.dev/
https://reactnative.dev/docs/environment-setup


npm start -- --reset-cache  /// final for run

************************************
deployment

npx expo install expo-dev-client
npm install -g eas-cli
eas login
eas init
   {
    ✔ Which account should own this project? > your-username
    ✔ Would you like to create a project for @your-username/sticker-smash? … yes
    ✔ Created @your-username/sticker-smash
    ✔ Project successfully linked (ID: XXXX-XX-XX-XXXX) (modified app.json)
   }
   
√ Would you like to create a project for @pradeep786expo/mantra1? ... yes
✔ Created @pradeep786expo/mantra1: https://expo.dev/accounts/pradeep786expo/projects/mantra1
√ Project successfully linked (ID: 64aa1ae6-987f-49e5-8b6f-3375ec666cc5) (modified app.json)

open link
https://docs.expo.dev/tutorial/eas/android-development-build/

eas build --platform android --profile development

build on expo site 

--> on expo 
npm install --global eas-cli
eas init --id 64aa1ae6-987f-49e5-8b6f-3375ec666cc5
npx expo export --platform web
eas deploy
eas deploy --prod

Dashboard       https://expo.dev/projects/64aa1ae6-987f-49e5-8b6f-3375ec666cc5/hosting/deployments
Deployment URL  https://mantra1--mdsz953bzm.expo.app // after eas deploy
Production URL  https://mantra1.expo.app // after eas deploy --prod


// for mobile build
eas build:configure
eas build --platform android
https://expo.dev/artifacts/eas/vNuhgs8bzXgjT8idFZee3m.aab  // downlaod for play store
