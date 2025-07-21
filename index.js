import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [file, setFile] = useState(null);
  const [uploadId, setUploadId] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    setLoading(true);
    const response = await axios.post('http://localhost:8000/upload_meeting/', formData);
    setUploadId(response.data.meeting_id);
    setLoading(false);
  };

  const handleAnalyze = async () => {
    setLoading(true);
    const response = await axios.get(`http://localhost:8000/analyze_meeting/${uploadId}/`);
    setAnalysis(response.data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">AI Meeting Insights Generator</h1>

      <input type="file" accept="audio/*" onChange={handleFileChange} className="mb-4" />

      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Upload Recording
      </button>

      {uploadId && (
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="bg-green-500 text-white px-4 py-2 rounded mb-4 ml-4"
        >
          Generate Insights
        </button>
      )}

      {loading && <p>Processing...</p>}

      {analysis && (
        <div className="mt-8 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Meeting Summary</h2>
          <p>{analysis.summary}</p>

          <h2 className="text-xl font-bold mt-4 mb-2">Decisions Made</h2>
          <pre className="whitespace-pre-wrap">{analysis.decisions}</pre>

          <h2 className="text-xl font-bold mt-4 mb-2">Action Items</h2>
          <pre className="whitespace-pre-wrap">{analysis.action_items}</pre>
        </div>
      )}
    </div>
  );
}
