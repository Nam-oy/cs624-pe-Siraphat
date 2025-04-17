#Input
- User enters their favorite course in the TextInput field.
- The app uses a local image (icon.png) stored in the assets directory.
- Hardcoded course data is used for core, depth, and capstone courses.

#Process
- The app loads all required components (View, Text, ScrollView, Image, TextInput, and StyleSheet).
- It displays the image and the text input field.
- It maps arrays (coreCourses, depthCourses) and displays each course using the Text component.
- It enables vertical scrolling using ScrollView.
- A hyperlink is provided to access the CityU course catalog using Linking.openURL().

#Output
- A visually styled screen with:
- An image
- A prompt to enter a favorite course
- A list of 8 core courses, 2 depth courses, and 1 capstone course
- A clickable link to the official CityU catalog