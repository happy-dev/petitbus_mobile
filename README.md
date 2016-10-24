# Welcome to the future !

**React Native POC of the PetitBus application**


## Getting started

1.  **Download the app on your machine** <br/>
`git clone git@github.com:happy-dev/petitbus_mobile.git`


2.  **Install dependencies** <br/>
Run the following command from the project root : <br/>
`npm install`


3.  **Launch NodeJS server locally** <br/> 
In a Terminal tab, from the project root, run : <br/>
`react-native start` <br/>
If you do not have the `react-native` command installed, please follow this [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html#content) from the official website.


4.  **Android** <br/>
To launch the app, either in a simulator or on a connected device, run the following command from the project root : <br/>
`react-native run-android`

<br/>
To access the developer's menu, enter the following command line once the app is launched : <br/>
`adb shell input keyevent 82`

<br/>
In `Dev Settings > Debug server host & port for device`, dev setting is probably `localhost:8081`.<br/>
`Hot Reloading` should be enabled.<br/>
