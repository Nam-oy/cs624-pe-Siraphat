import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import uuid from "react-native-uuid";
import { colors } from "../theme";

class AddCountry extends React.Component {
  state = {
    country_name: "",
    currency: "",
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  submit = () => {
    const { country_name, currency } = this.state;
    if (country_name === "" || currency === "") {
      alert("Please complete the form");
      return;
    }

    const newCountry = {
      country_name,
      currency,
      id: uuid.v4(),
      currencies: [
        {
          name: currency,
          country: country_name,
          info: "", // or some default
        },
      ],
    };

    this.props.addCountry(newCountry);

    this.setState(
      {
        country_name: "",
        currency: "",
      },
      () => {
        this.props.navigation.navigate("Countries");
      }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Add Country</Text>
        <TextInput
          placeholder="Country name"
          onChangeText={(val) => this.onChangeText("country_name", val)}
          style={styles.input}
          value={this.state.country_name}
        />
        <TextInput
          placeholder="Currency"
          onChangeText={(val) => this.onChangeText("currency", val)}
          style={styles.input}
          value={this.state.currency}
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Country</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: "center",
  },
  heading: {
    color: "white",
    fontSize: 40,
    marginBottom: 10,
    alignSelf: "center",
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    paddingHorizontal: 8,
    height: 50,
  },
  button: {
    height: 50,
    backgroundColor: "#666",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default AddCountry;
