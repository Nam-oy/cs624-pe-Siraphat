// #Input
// - User interacts with the app to add cities, locations, countries, and currencies
// - Input is received via UI components from AddCity, AddCountry, Cities, and Countries screens

// #Process
// - State management using this.state: cities and countries arrays
// - addCity(): Adds a new city object with an empty locations array
// - addLocation(): Adds a location to an existing city's locations array
// - addCountry(): Adds a new country object with an empty currencies array
// - addCurrency(): Adds a currency to an existing country's currencies array
// - Navigation between screens using React Navigation (Tab and Stack navigators)

// #Output
// - Updated lists of cities and countries displayed on Cities and Countries screens
// - Navigation to detail screens (City, Country)
// - New entries reflected in the UI after being added
