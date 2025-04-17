import { View, Text, Image, ScrollView, TextInput, StyleSheet, Linking } from 'react-native';

const CoreComponent = () => {

  const coreCourses = [
    'CS 504 - Software Engineering',
    'CS 506 - Programming for Computing',
    'CS 519 - Cloud Computing Overview',
    'CS 533 - Computer Architecture',
    'CS 547 - Secure Systems and Programs',
    'CS 622 - Discrete Math and Algorithms for Computing',
    'CS 510 - Artificial Intelligence for Data Science',
    'CS 620 - Machine Learning & Deep Learning',
  ];

  const depthCourses = [
    'CS 624 - Full-Stack Development I',
    'CS 628 - Full-Stack Development II'
  ];

  const capstoneCourse = 'CS 687 - Computer Science Capstone';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>

        <Image source={require('../../assets/images/icon.png')} style={styles.icon} />

        {/* <Image
          source={{ uri: 'https://s3-media0.fl.yelpcdn.com/bphoto/Pu7PtPlLNE86zt474j3i-g/348s.jpg' }}
          style={styles.icon}
        /> */}

      </View>

      <Text style={styles.course}>Which couse did you like?</Text>
      <TextInput
        style={styles.input}
        placeholder="ex CS624"
      />

      <Text style={styles.sectionTitle}>Core Requirements (24 credits) </Text>
      {coreCourses.map((course, index) => (
        <Text key={index} style={styles.course}>{course}</Text>
      ))}

      <Text style={styles.sectionTitle}>Depth of Study Courses (6 credits) </Text>
      {depthCourses.map((course, index) => (
        <Text key={index} style={styles.course}>{course}</Text>
      ))}

      <Text style={styles.sectionTitle}>Capstone Course</Text>
      <Text style={styles.course}>{capstoneCourse}</Text>


      <Text style={styles.Link} onPress={() => Linking.openURL('https://cityu.smartcatalogiq.com/2022-2023/ay-2022-2023-catalog/')}>
        View CityU Catalog
      </Text>

    </ScrollView>

  );
};

const App = () => {
  return (
    <>
      <CoreComponent />
    </>
  );
};

export default App;


const styles = StyleSheet.create(
  {
    container: {
      marginTop: 50,
      padding: 10,
      backgroundColor: '#f5f5f5'
    },
    header: {
      alignItems: 'center',
      marginBottom: 20
    },
    icon: {
      width: 300,
      height: 300,
      marginBottom: 10,
    },
    input: {
      backgroundColor: '#fff',
      padding: 10,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 10
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 15,
      marginBottom: 5,
      backgroundColor: '#ffeb3b'
    },
    course: {
      fontSize: 16,
      marginBottom: 3
    },
    Link: {
      fontSize: 16,
      marginBottom: 3,
      color:'blue'
    }

  }
);


