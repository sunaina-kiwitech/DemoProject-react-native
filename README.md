DemoProject-react-native

iOS
In the root directory

Install dependencies: npm install
In the ios directory

Install Pods: gem install cocoapods
Install Pods: pod install
Install xcpretty: gem install xcpretty
Launch: open Sample.xcworkspace
Android
You might need to do this to run it in Android Studio or on real device: adb reverse tcp:8081 tcp:8081
And for the sample server: adb reverse tcp:3000 tcp:3000
To run from command line try: react-native run-android
Server
There is a server that the app hits for data. The data is only stored in memory, but it should produce a more realistic environment.

In the server directory

Install nvm and node-4.2.3
Install dependencies: npm install
Run it: npm start
It has sample data in the models.js file. For example, there is a user bleonard (password: "sample") that you can log in as.

Current Concepts
Navigation
The sole method of navigation (what's showing on the screen and where the back button goes) is via urls. We parse urls to determine the route stack. There is some stuff to make "related" url navigation look "right" (push and pop). Making everything addressable by URL is great for deep linking and forces each screen to be able to load all on it's own from simple data.

The Router handles parsing different routes depending if you are logged in or not. The urls must be able to represent the entire navigation stack, so that means they can be recursive like my friend's friend's friend's feed (sample://dashboard/follows/john/follows/sarah/follows/amy/posts).

Data storage
Info is currently stored as json to the local file system.

Components
Some shared components that might be helpful
