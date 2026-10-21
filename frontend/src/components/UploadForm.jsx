import { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import api from '../services/api';

export default function UploadForm({ onUploadSuccess, setLoading, loading }) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !title) return toast.error("Please provide a title and select a file!");

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);

    try {
      const response = await api.post('/lectures/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      onUploadSuccess(response.data.data || response.data);
      toast.success("Summary generated successfully!");
      setTitle('');
      setFile(null);
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FaCloudUploadAlt className="text-green-400" /> Upload Lecture
      </h2>
      <form onSubmit={handleUpload} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Lecture Title</label>
          <input 
            type="text" value={title} onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-gray-700 rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-400"
            placeholder="e.g., Intro to Machine Learning" required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Audio / PDF File</label>
          <input 
            type="file" onChange={(e) => setFile(e.target.files[0])}
            className="w-full bg-gray-700 rounded-lg p-3 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-400 file:text-gray-900 hover:file:bg-green-300"
            required
          />
        </div>
        <button type="submit" disabled={loading} className="mt-4 bg-green-500 hover:bg-green-400 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all disabled:opacity-50">
          {loading ? "Zzz... AI is reading... 🦥" : "Summarize Now"}
        </button>
      </form>
    </div>
  );
}