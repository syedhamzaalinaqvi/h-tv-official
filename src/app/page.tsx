'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import ChannelList, { ChannelType } from '@/components/ChannelList';
import AddChannelForm from '@/components/AddChannelForm';

// Dynamic import for the VideoPlayer component to avoid SSR issues
const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), {
  ssr: false,
});

// Sample channels (these will be replaced by user's channels)
const initialChannels: ChannelType[] = [
  {
    id: '1',
    name: 'PTV Sports',
    category: 'Sports',
    url: 'https://sports.example.com/ptv-sports.m3u8',
  },
  {
    id: '2',
    name: 'Geo Super',
    category: 'Sports',
    url: 'https://sports.example.com/geo-super.m3u8',
  },
  {
    id: '3',
    name: 'Ten Sports',
    category: 'Sports',
    url: 'https://sports.example.com/ten-sports.m3u8',
  },
  {
    id: '4',
    name: 'Geo News',
    category: 'News',
    url: 'https://news.example.com/geo-news.m3u8',
  },
  {
    id: '5',
    name: 'ARY News',
    category: 'News',
    url: 'https://news.example.com/ary-news.m3u8',
  },
  {
    id: '6',
    name: 'HUM TV',
    category: 'Entertainment',
    url: 'https://entertainment.example.com/hum-tv.m3u8',
  },
  {
    id: '7',
    name: 'ARY Digital',
    category: 'Entertainment',
    url: 'https://entertainment.example.com/ary-digital.m3u8',
  },
];

export default function Home() {
  const [channels, setChannels] = useState<ChannelType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeChannel, setActiveChannel] = useState<ChannelType | null>(null);
  const [m3u8Input, setM3u8Input] = useState('');
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  // Load channels from localStorage on initial render
  useEffect(() => {
    const savedChannels = localStorage.getItem('channels');
    if (savedChannels) {
      try {
        const parsedChannels = JSON.parse(savedChannels);
        setChannels(parsedChannels);
        // Extract categories from the channels
        const uniqueCategories = [...new Set(parsedChannels.map((ch: ChannelType) => ch.category))];
        setCategories(uniqueCategories);
        // Set the first channel as active
        if (parsedChannels.length > 0 && !activeChannel) {
          setActiveChannel(parsedChannels[0]);
        }
      } catch (e) {
        console.error('Error parsing channels from localStorage', e);
        // Fallback to initial channels
        setChannels(initialChannels);
        const uniqueCategories = [...new Set(initialChannels.map(ch => ch.category))];
        setCategories(uniqueCategories);
        setActiveChannel(initialChannels[0]);
      }
    } else {
      // No saved channels, use initial data
      setChannels(initialChannels);
      const uniqueCategories = [...new Set(initialChannels.map(ch => ch.category))];
      setCategories(uniqueCategories);
      setActiveChannel(initialChannels[0]);
    }
  }, []);

  // Save channels to localStorage whenever they change
  useEffect(() => {
    if (channels.length > 0) {
      localStorage.setItem('channels', JSON.stringify(channels));
    }
  }, [channels]);

  const handleSelectChannel = (channel: ChannelType) => {
    setActiveChannel(channel);
  };

  const handleSelectCategory = (category: string) => {
    setActiveCategory(category);
  };

  const handleAddChannel = (name: string, url: string, category: string) => {
    const newChannel: ChannelType = {
      id: `custom-${Date.now()}`,
      name,
      url,
      category,
    };

    const updatedChannels = [...channels, newChannel];
    setChannels(updatedChannels);

    // Update categories if needed
    if (!categories.includes(category)) {
      setCategories([...categories, category]);
    }

    // Set as active channel
    setActiveChannel(newChannel);
  };

  const handleImportM3U = () => {
    if (!m3u8Input.trim()) return;

    try {
      // Check if it's a URL to a .m3u or .m3u8 file
      if (m3u8Input.match(/^https?:\/\/.*\.(m3u|m3u8)$/i)) {
        // For simplicity in this demo, we'll just add it as a single channel
        // In a real app, you'd fetch and parse the m3u/m3u8 file
        const newChannel: ChannelType = {
          id: `imported-${Date.now()}`,
          name: 'Imported Playlist',
          url: m3u8Input,
          category: 'Imported',
        };

        const updatedChannels = [...channels, newChannel];
        setChannels(updatedChannels);

        // Update categories if needed
        if (!categories.includes('Imported')) {
          setCategories([...categories, 'Imported']);
        }

        // Set as active channel
        setActiveChannel(newChannel);
      } else {
        // It's a direct stream URL
        const newChannel: ChannelType = {
          id: `stream-${Date.now()}`,
          name: 'Custom Stream',
          url: m3u8Input,
          category: 'Custom',
        };

        const updatedChannels = [...channels, newChannel];
        setChannels(updatedChannels);

        // Update categories if needed
        if (!categories.includes('Custom')) {
          setCategories([...categories, 'Custom']);
        }

        // Set as active channel
        setActiveChannel(newChannel);
      }

      // Close modal and reset input
      setIsImportModalOpen(false);
      setM3u8Input('');
    } catch (error) {
      console.error('Error importing M3U8:', error);
      alert('Failed to import the M3U8 stream. Please check the URL and try again.');
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      <div className="flex-1 container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-secondary rounded-lg overflow-hidden shadow-xl mb-6">
            {activeChannel ? (
              <>
                <div className="p-4 bg-primary">
                  <h1 className="text-xl font-bold text-white">{activeChannel.name}</h1>
                  <p className="text-gray-400 text-sm">Category: {activeChannel.category}</p>
                </div>
                <VideoPlayer src={activeChannel.url} />
              </>
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-400">
                  No channel selected. Please select a channel from the list or add a custom channel.
                </p>
              </div>
            )}
          </div>

          <div className="bg-secondary rounded-lg p-4 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Quick Import</h2>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={m3u8Input}
                onChange={(e) => setM3u8Input(e.target.value)}
                placeholder="Enter M3U8 URL"
                className="flex-1 bg-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                onClick={handleImportM3U}
                className="bg-accent hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Add Stream
              </button>
            </div>
          </div>
        </div>

        <div className="h-[600px] lg:h-auto">
          <ChannelList
            channels={channels}
            activeChannel={activeChannel?.id}
            onSelect={handleSelectChannel}
            category={activeCategory !== 'all' ? activeCategory : undefined}
          />
        </div>
      </div>

      <AddChannelForm
        onAddChannel={handleAddChannel}
        categories={categories}
      />
    </main>
  );
}
