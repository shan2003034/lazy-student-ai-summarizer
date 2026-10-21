import { FaHistory, FaCheckCircle, FaTrash } from 'react-icons/fa';

export default function HistoryList({ history, onSelect, onDelete }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-300">
        <FaHistory /> Past Summaries
      </h3>
      <ul className="space-y-3">
        {history.length === 0 && <p className="text-gray-500 text-sm">No summaries yet.</p>}
        {history.map((item) => (
          <li key={item.id} onClick={() => onSelect(item)} 
              className="group bg-gray-700 p-3 rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-600 transition-all">
            <span className="truncate pr-2">{item.title}</span>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-400" />
              <FaTrash 
                className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500" 
                onClick={(e) => {
                  e.stopPropagation(); 
                  onDelete(item.id);
                }} 
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}