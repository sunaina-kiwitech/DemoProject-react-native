DemoProject-react-native

Build and run the app
Install React Native as described at https://facebook.github.io/react-native/docs/getting-started.html#content

Clone this repository

Run yarn install , all required components will be installed automatically

iOS
Run pod install from react-native-demo/ios folder
Android
no steps required

Note: To enable android push notifications in the demo project:

It is recommended to run react-native start command from root project directory.

Run your project from XCode (Cmd+R) for iOS, or use react-native run-android to run your project on Android.

Current Concepts
Navigation
The sole method of navigation (what's showing on the screen and where the back button goes) is via urls. We parse urls to determine the route stack. There is some stuff to make "related" url navigation look "right" (push and pop). Making everything addressable by URL is great for deep linking and forces each screen to be able to load all on it's own from simple data.

The Router handles parsing different routes depending if you are logged in or not. The urls must be able to represent the entire navigation stack, so that means they can be recursive like my friend's friend's friend's feed (sample://dashboard/follows/john/follows/sarah/follows/amy/posts).

Data storage
Info is currently stored as json to the local file system.

Components
Some shared components that might be helpful
