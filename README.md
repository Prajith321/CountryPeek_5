# CountryPeek – Part 5: Favourites Feature

This project is part of the CountryPeek React application assignment from Kalvium.

In Part 5, the application is extended with a Favourites feature that allows users to:

* Save countries to a favourites list
* Remove saved countries
* Persist favourites using localStorage
* View all saved countries on a dedicated Favourites page
* Manage state using React Context + useReducer

---

# Features Implemented

## Favourites Context

Created a `FavouritesContext` using:

* `createContext`
* `useReducer`
* `useEffect`
* Custom `useFavourites` hook

Reducer actions:

* `ADD_FAVOURITE`
* `REMOVE_FAVOURITE`

---

# localStorage Persistence

Favourites are:

* Loaded from localStorage when the app starts
* Automatically saved whenever the favourites state changes

```js
const savedFavourites = JSON.parse(
  localStorage.getItem('favourites') || '[]'
)
```

```js
useEffect(() => {
  localStorage.setItem(
    'favourites',
    JSON.stringify(favourites)
  )
}, [favourites])
```

---

# Favourite Button

Each `CountryCard` contains a toggle button:

* `♡ Save` → adds country to favourites
* `♥ Saved` → removes country from favourites

`e.stopPropagation()` is used so clicking the button does not trigger navigation.

---

# Favourites Page

A dedicated `/favourites` route displays:

* All saved countries using the reusable `CountryCard` component
* Empty state UI when no favourites exist

---

# Technologies Used

* React
* React Router
* Context API
* useReducer
* localStorage
* CSS
* Vite

---

# Folder Structure

```bash
src/
│
├── components/
│   └── CountryCard.jsx
│
├── context/
│   └── FavouritesContext.jsx
│
├── pages/
│   └── Favourites.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

---

# How to Run the Project

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

The application will run at:

```bash
http://localhost:5173
```

---

# Git Commands

```bash
git checkout -b part-5/favourites

git add .

git commit -m "feat: add favourites feature with useReducer and localStorage persistence"

git push origin part-5/favourites
```

---

# Scenario Question Answer

Reducers should never mutate the existing state directly because React depends on immutable updates to detect changes.

The `.filter()` method creates and returns a brand-new array instead of modifying the original array. This ensures the state reference changes.

If state is mutated directly using methods like `.push()` or `.splice()`, React may not detect that the state changed because the reference remains the same. As a result:

* Components may not re-render correctly
* UI updates can become inconsistent
* Debugging state issues becomes difficult

React compares old and new state references to determine whether it should re-render components. Returning a new array ensures React correctly detects updates and refreshes the UI.

---

# Assignment Checklist

* [x] FavouritesContext implemented
* [x] useReducer with ADD_FAVOURITE and REMOVE_FAVOURITE
* [x] localStorage persistence
* [x] Favourite toggle button
* [x] stopPropagation added
* [x] Favourites page created
* [x] Empty state implemented
* [x] App wrapped with FavouritesProvider
* [x] CountryCard reused on Favourites page

---

# Author

Prajith P
