import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import api from '../services/api';
import Header from '../components/Header';
import UploadForm from '../components/UploadForm';
import HistoryList from '../components/HistoryList';
import ResultDisplay from '../components/ResultDisplay';

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await api.get('/lectures');
      setHistory(response.data);
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };

  const handleUploadSuccess = (newSummary) => {
    console.log("Received Summary Data: ", newSummary); 
    setResult(newSummary);
    fetchHistory();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this lecture?")) return;
    try {
      await api.delete(`/lectures/${id}`);
      toast.success("Lecture deleted!");
      if (result && result.id === id) setResult(null); 
      fetchHistory();
    } catch (error) {
      toast.error("Failed to delete lecture.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 font-sans">
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto">
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700">
            <UploadForm 
              onUploadSuccess={handleUploadSuccess} 
              setLoading={setLoading} 
              loading={loading} 
            />
            <HistoryList 
              history={history} 
              onSelect={setResult} 
              onDelete={handleDelete} 
            />
          </div>
          
          <ResultDisplay loading={loading} result={result} />
        </div>
      </div>
    </div>
  );
}