🎥 YouTube Clone (React)

A YouTube-like video streaming application built using React, Redux Toolkit, and Tailwind CSS.
The project replicates core YouTube features such as video listing, watch page, live chat simulation, recursive comments, and debounced search suggestions.

🛠 Tech Stack

- React 19
- Redux Toolkit
- React Router DOM
- Tailwind CSS

▶️ Getting Started

1️⃣ Clone the repository
git clone https://github.com/your-username/youtube-clone.git
cd youtube-clone

2️⃣ Install dependencies
npm install

3️⃣ Add your Google API Key
This project uses the YouTube Data API v3.
Create a file (or update existing):
src/utils/constants.js

🔑 Environment Variables (Required)
This project uses the YouTube Data API v3.
You must provide your own API key.

1- Create a .env file in the root directory
REACT_APP_YOUTUBE_API_KEY=your_google_api_key_here

⚠️ Important:

- Variable name must start with REACT*APP*
- Do NOT commit .env to GitHub

2️- API usage in code
const GOOGLE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

Used for:

Fetching popular videos
Fetching channel details
Video metadata
Comments

4️⃣ Run the project locally
npm start

The app will run on:
👉 http://localhost:3000

📌 Disclaimer
This project is built for educational and portfolio purposes only.

👨‍💻 Author
Built with ❤️ by Nikita Thakur
