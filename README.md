# Movie Explorer

A responsive and interactive movie browsing application built using **React.js**. This project was developed as part of my React learning journey to practise state management, props, conditional rendering, dynamic lists, and event handling.

## Overview

Movie Explorer allows users to browse a collection of movies, search for specific titles, and manage their favourite movies through an interactive interface.

The application uses locally stored movie data and dynamically updates the displayed content based on user interactions.

## Features

- **Movie Collection:** Displays movie posters, titles, release years, genres, and ratings.
- **Search Functionality:** Search movies by their titles.
- **Dynamic Filtering:** Displays matching movies as the user types.
- **Reset Search:** Clears the search input and restores the complete movie collection.
- **Conditional Rendering:** Displays appropriate messages for empty searches and searches with no matching results.
- **Favourite Toggle:** Add movies to or remove movies from favourites.
- **Favourite Movies Section:** Displays selected favourite movies separately.
- **Responsive Design:** Supports desktop, tablet, and mobile screen sizes.

## Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3

## React Concepts Practised

Through this project, I explored:

- JSX
- Functional Components
- Component-Based Architecture
- Props and Component Reusability
- State Management using `useState`
- Event Handling
- Conditional Rendering
- Dynamic List Rendering using `map()`
- Array Methods: `filter()` and `includes()`
- Passing Data and Functions through Props

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd movie-explorer
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm start
```

The application will open at:

`http://localhost:3000`

## Project Structure
movie-explorer/
│
├── public/
├── src/
│   ├── components/
│   │   ├── explorer.js
│   │   ├── explorer.css
│   │   ├── card.js
│   │   └── search.js
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── package.json
└── README.md
*Note: Adjust filenames if your actual project structure differs.*

## Learning Outcome

Building Movie Explorer helped me understand how React state and props work together to create interactive applications. I also gained practical experience with dynamic filtering, conditional rendering, reusable components, and responsive UI development.

It was a valuable hands-on experience in strengthening my React fundamentals through building and debugging.

---

**Built with React.js as part of my learning journey.** 🌱

