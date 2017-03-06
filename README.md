An example project using react native

# Reset react native build

    rm -rf ios android node_modules
    npm install
    react-native upgrade
    react-native link
    react-native run-ios

# Make react-native-maps (airbnb) work on iOS

When reinstalling use option 3 (manually) of
https://github.com/airbnb/react-native-maps/blob/master/docs/installation.md

I did not test Android yet.