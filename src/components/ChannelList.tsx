'use client';

import React from 'react';
import Image from 'next/image';

export type ChannelType = {
  id: string;
  name: string;
  category: string;
  logo?: string;
  url: string;
};

interface ChannelListProps {
  channels: ChannelType[];
  activeChannel?: string;
  onSelect: (channel: ChannelType) => void;
  category?: string;
}

const ChannelList: React.FC<ChannelListProps> = ({
  channels,
  activeChannel,
  onSelect,
  category
}) => {
  const filteredChannels = category
    ? channels.filter(channel => channel.category === category)
    : channels;

  return (
    <div className="bg-secondary rounded-lg p-4 h-full overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 text-white">
        {category ? `${category} Channels` : 'All Channels'}
      </h2>
      <div className="space-y-2">
        {filteredChannels.length === 0 ? (
          <p className="text-gray-400">No channels available</p>
        ) : (
          filteredChannels.map(channel => (
            <div
              key={channel.id}
              className={`flex items-center p-3 rounded-md cursor-pointer transition-all ${
                activeChannel === channel.id
                  ? 'bg-accent text-white'
                  : 'bg-primary text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => onSelect(channel)}
            >
              {channel.logo && (
                <div className="w-8 h-8 mr-3 flex-shrink-0 relative">
                  <Image
                    src={channel.logo}
                    alt={channel.name}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <div className="flex-1">
                <h3 className="font-medium">{channel.name}</h3>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ChannelList;
