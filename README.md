# MyTube (YouTube Clone) - React & YouTube API

Welcome to the **MyTube** YouTube Clone project! This is a React-based web application that fetches data from the YouTube Data API v3 to display videos, categories, and related content. The project mimics some of the core functionalities of YouTube, such as browsing videos by category, viewing video details, and exploring recommended videos.

## Features

1.  **Homepage**
    -   Displays a feed of videos based on selected categories.

    -   Includes a **sidebar** for browsing video categories.
2. **Video Feed Page**
   - Shows detailed information about a selected video, including:
     - Channel name
     - Views count
     - Likes count
     - Comments
   - Includes a recommended videos section in the sidebar for related content
3. **Responsive Design**
   - The application is fully responsive and works seamlessly on desktop, tablet, and mobile devices.
## Technologies Used 
- React - Frontend library for building user interfaces.

- YouTube Data API v3 - Fetches video data, categories, and related content.

- React Router - Handles navigation between pages.

- Axios - For making HTTP requests to the YouTube API.

- CSS/SCSS - Styling the application.

- Material-UI (optional) - For pre-built UI components (if used).

## Getting Started
##### Prerequisites
1. Node.js installed on your machine.

2. A YouTube Data API v3 key. You can get one from the Google Cloud Console.

##### Installation
1. Clone the repository:
2. Install dependencies:
3. npm install
4. Create a .env file in the root directory and add your YouTube API key:
5. Start the development server


### How It Works
1. Fetching Data

   - The app uses the YouTube Data API to fetch:

       - Video categories (for the sidebar).

       - Video details (title, channel, views, likes, comments).

       - Recommended videos (based on the currently playing video).

2. Routing

   - React Router is used to navigate between the homepage and the video feed page.

3. State Management

    - React's useState and useEffect hooks are used to manage and update the application state.

### Screenshots
1. Homepage
<img src="![homepage](https://github.com/Rushikesh7997/youtube_react/blob/master/src/assets/mytube-homepage-1.PNG)">

2. Video Feed Page
<img src="![Video feed](https://github.com/Rushikesh7997/youtube_react/blob/master/src/assets/mytube-video-feed-2.PNG)">

3. Responsive Design
<img src="![alt text](https://github.com/Rushikesh7997/youtube_react/blob/master/src/assets/mytube-video-feed-mobile-view-3.PNG)">


### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Acknowledgments
- Thanks to YouTube for providing the API.

- Inspired by various YouTube clone tutorials and projects.
    