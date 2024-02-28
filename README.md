# Worldwise: Travel Registry

## About

Worldwise is a React-based application that allows users to mark places they've traveled around the world and add notes about their experiences. Utilizing Leaflet for interactive mapping and a simple JSON server for data management, Worldwise offers a user-friendly platform for travelers to record and share their journeys.

## Features

- Interactive global map to mark traveled locations.
- Add, edit, and delete notes for each location.
- View detailed logs of travels and notes.
- Responsive design for desktop and mobile users.

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm (v6 or newer)

### Installation

1. Clone the repository:
   https://github.com/zhadowx/globe-journal.git
2. Navigate to the project directory:
   cd globe-journal
3. Install the dependencies:
   npm install

### Running the Application

1. Start the development server:
   npm run dev
2. In a new terminal, start the JSON server to serve the cities data:
   npm run server
3. Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## Data Requirements

### JSON Server Data Structure

For Worldwise to function properly, it requires a specific data structure within a `cities.json` file. This file serves as a mock database for the application, hosted by `json-server`. Ensure your `cities.json` is located in the `data` directory at the root of the project.

The `cities.json` file should contain an object with a `cities` key, which is an array of city objects. Each city object includes details about the city, such as name, country, emoji representation, visit date, notes, geographical position (latitude and longitude), and a unique identifier (`id`).

Here is the expected structure of the `cities.json` file:

```json
{
  "cities": [
    {
      "cityName": "City Name",
      "country": "Country Name",
      "emoji": "Country Flag Emoji",
      "date": "Visit Date in ISO 8601 Format",
      "notes": "Any notes about the visit",
      "position": {
        "lat": Latitude as a Number,
        "lng": Longitude as a Number
      },
      "id": Unique Identifier as a Number
    }
    // Add more city objects here
  ]
}
```

Example data entry for `cities.json` file:

```
{
  "cities": [
    {
      "cityName": "Lisbon",
      "country": "Portugal",
      "emoji": "🇵🇹",
      "date": "2027-10-31T15:59:59.138Z",
      "notes": "My favorite city so far!",
      "position": {
        "lat": 38.727881642324164,
        "lng": -9.140900099907554
      },
      "id": 73930385
    }
  ]
}
```

Project Link: [https://github.com/zhadowx/globe-journal.git](https://github.com/zhadowx/globe-journal.git)
