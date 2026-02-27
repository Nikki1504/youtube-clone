## 🎥 YouTube Clone (React)

A YouTube-like video streaming application built using React, Redux Toolkit, and Tailwind CSS.
The project replicates core YouTube features such as video listing, watch page, live chat simulation, recursive comments, and debounced search suggestions.

Live Demo - https://youtubeclone-one-nu.vercel.app/

🛠 Tech Stack

- React 19
- Redux Toolkit
- React Router DOM
- Tailwind CSS

### ▶️ Getting Started

1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/youtube-clone.git

cd youtube-clone
```

2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Add your Google API Key

This project uses the YouTube Data API v3.

Create a file (or update existing):

src/utils/constants.js

## 🔑 Environment Variables (Required)

This project uses the YouTube Data API v3.

You must provide your own API key.

1- Create a .env file in the root directory

```env
REACT_APP_YOUTUBE_API_KEY=your_google_api_key_here
```

⚠️ Important:

- Variable name must start with REACT*APP*
- Do NOT commit .env to GitHub

2- API usage in code

const GOOGLE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

Used for:

- Fetching popular videos.
- Fetching channel details.
- Video metadata.
- Comments.

4️⃣ Run the project locally

```bash
npm start
```

The app will run on:
👉 http://localhost:3000

### 📌 Disclaimer

This project is built for educational and portfolio purposes only.

## ⚠️ Search Suggestions Note

The search suggestions feature uses Google's `suggestqueries` API.

This API does **not support CORS**, so search suggestions work in local development but may be blocked in production deployments (e.g. Vercel over HTTPS).

In a real-world production setup, this would be handled via:

- A backend proxy / serverless function
- Or a custom suggestion service

The core search flow and video fetching functionality remain fully functional.

### 👨‍💻 Author

Built with ❤️ by Nikita Thakur
