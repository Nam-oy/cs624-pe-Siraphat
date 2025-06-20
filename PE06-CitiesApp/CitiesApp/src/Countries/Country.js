import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CenterMessage from "../components/CenterMessage";
import { colors } from "../theme";

class Country extends React.Component {
  state = {
    name: "",
    info: "",
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  addCurrency = () => {
  const { name, info } = this.state;
  if (name === "" || info === "") return;

  const { country, addCurrency, countries } = this.props.route.params;
  const currency = { name, info };

  addCurrency(currency, country);

  // Force a manual update after adding
  const updatedCountry =
    countries.find((item) => item.id === country.id) || country;
  updatedCountry.currencies = [
    ...(updatedCountry.currencies || []),
    currency,
  ];

  this.setState({ name: "", info: "" });
};

  render() {
    const { countries, country } = this.props.route.params;
    const updatedCountry = countries.find((item) => item.id === country.id) || country;
    const currencies = updatedCountry.currencies || [];

    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={[!currencies.length && { flex: 1 }]}>
          <View
            style={[
              styles.locationsContainer,
              !currencies.length && { flex: 1, justifyContent: "center" },
            ]}
          >
            {!currencies.length ? (
              <CenterMessage message="No currencies for this country!" />
            ) : (
              currencies.map((currency, index) => (
                <View key={index} style={styles.locationContainer}>
                  <Text style={styles.locationName}>{currency.name}</Text>
                  <Text style={styles.locationInfo}>{currency.country} {currency.name}</Text>
                </View>
              ))
            )}
          </View>
        </ScrollView>

        <TextInput
          onChangeText={(val) => this.onChangeText("name", val)}
          placeholder="Currency name"
          value={this.state.name}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          onChangeText={(val) => this.onChangeText("info", val)}
          placeholder="Currency info"
          value={this.state.info}
          style={[styles.input, styles.input2]}
          placeholderTextColor="white"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.addCurrency}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Currency</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  locationsContainer: {
    paddingBottom: 104,
  },
  input: {
    height: 50,
    backgroundColor: colors.primary,
    color: "white",
    paddingHorizontal: 8,
    position: "absolute",
    width: "100%",
    bottom: 104,
    left: 0,
  },
  input2: {
    bottom: 52,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  button: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
  locationContainer: {
    padding: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
  },
  locationName: {
    fontSize: 20,
  },
  locationInfo: {
    color: "rgba(0, 0, 0, .5)",
  },
});

export default Country;
