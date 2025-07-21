Frontend - AI-Powered Meeting Insights Generator

This is the React (Next.js) frontend for the AI-Powered Meeting Insights Generator. It provides a user-friendly interface to upload meeting audio files, trigger LLM-based analysis, and display summaries, decisions, and action items.


---

🚀 Features

🎙️ Upload Meeting Audio Recordings (MP3, MP4, WAV)

🛠️ Trigger Whisper Transcription + LLM Analysis

📊 View Meeting Summary, Decisions, and Action Items

🎨 Responsive Web UI with Tailwind CSS



---

📦 Tech Stack

React (Next.js)

Axios (for API calls)

Tailwind CSS (styling)



---

🛠️ Installation

# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Run the development server
npm run dev

App will be running at: http://localhost:3000


---

⚙️ API Backend Dependency

Ensure the Django backend is running locally at:

http://localhost:8000/

API Endpoints consumed:

POST /upload_meeting/ (audio file upload)

GET /analyze_meeting/<meeting_id>/ (generate insights)



---

📁 Project Structure

frontend/
├── public/                # Static assets
├── src/
│   ├── pages/             # Next.js routes (main UI)
│   ├── styles/            # Global CSS using Tailwind
│   └── components/        # (Optional) UI components
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS config
└── README.md              # Project instructions


---

📞 Contact

Developed by Robert Chonge

📧 robertchonge07@gmail.com



---

"Turn your meetings into insights, effortlessly."

