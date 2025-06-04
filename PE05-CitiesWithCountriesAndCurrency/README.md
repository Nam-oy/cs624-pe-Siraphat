#Input
User interacts with the app through a tab navigation interface.

Inputs come from screens like AddCity and AddCountry where users can enter:

City name

Country name

Location details

Currency name

Navigation between tabs and stack screens also serves as input events.



#Process
State Management:
The app manages two main pieces of state:

cities: a list of city objects (each can contain locations)

countries: a list of country objects (each can contain currency data)

Functionality:

addCity(city): adds a new city with an empty locations array.

addLocation(location, city): adds a location to a specific city.

addCountry(country): adds a new country with an empty locations array.

addCurrency(currency, country): adds a currency to a specific country.

Navigation Setup:

Uses @react-navigation/native to organize the app into tabs and nested stacks:

Tabs: CitiesNav, AddCity, CountriesNav, AddCountry

Each stack shows either a list screen or a detail screen (e.g., Cities → City)



#Output
The UI updates dynamically based on the current state:

Displays a list of added cities and countries.

Navigates to detailed views showing city locations or country currencies.

Displays messages if no data is available (e.g., “No saved countries!”).

The user's input is stored in the app state and reflected in the visual output immediately.