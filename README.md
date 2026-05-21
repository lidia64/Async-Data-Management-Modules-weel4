Week 4 Assignment

Overview

This project is a JavaScript assignment about promises, async functions, fetching data from an API, and saving data in local storage.

The app fetches posts from JSONPlaceholder, displays the first five posts in the console, and stores those posts in localStorage using the key userPosts.

Files

api.js
Contains the fetchPosts function. It gets posts from the JSONPlaceholder API and returns an empty array if the request fails.

app.js
Runs the main app. It imports fetchPosts and saveToLocal, gets the posts, shows the first five posts in the console, and saves them locally.

storage.js
Contains the saveToLocal function. It converts the posts to JSON and saves them in localStorage.

How to run

Open the project in a browser environment that supports JavaScript modules and localStorage.

Make sure the files are served through a local server because browser modules usually do not run correctly when opened directly from the file system.

Expected result

The browser console should show the first five posts.

The browser local storage should contain a userPosts item with the saved posts.

Main concepts

Promises
Async and await
Fetch API
Error handling
JSON data
Local storage
