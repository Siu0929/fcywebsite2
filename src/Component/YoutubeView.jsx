import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YouTubeViewCount = ({ videoId }) => {
  const [viewCount, setViewCount] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'AIzaSyATkZA99bqSWtq4klDA201qRNfYMgtWbwI'; // Replace with your API key
  const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${API_KEY}`;

  useEffect(() => {
    const fetchViewCount = async () => {
      try {
        const response = await axios.get(API_URL);
        const views = response.data.items[0].statistics.viewCount;
        setViewCount(views);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchViewCount();
  }, [API_URL]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {viewCount !== null ? (
        <p>{viewCount}</p>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default YouTubeViewCount;