'use client';

import React, { useState } from 'react';

interface AddChannelFormProps {
  onAddChannel: (name: string, url: string, category: string) => void;
  categories: string[];
}

const AddChannelForm: React.FC<AddChannelFormProps> = ({ onAddChannel, categories }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState(categories[0] || 'Sports');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && url.trim()) {
      onAddChannel(name.trim(), url.trim(), category);
      setName('');
      setUrl('');
      setIsOpen(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-accent hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-colors z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-30">
      <div className="bg-secondary rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add Custom Channel</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Channel Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter channel name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">M3U8 URL</label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full bg-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="https://example.com/stream.m3u8"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 mr-2 rounded bg-gray-700 text-white hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-accent text-white hover:bg-blue-600 transition-colors"
            >
              Add Channel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddChannelForm;
