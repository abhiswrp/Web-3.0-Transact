// import { useEffect, useState } from "react";

// const APIKEY = import.meta.env.VITE_GIPHY_API;

// const useFetch = ({ keyword }) => {
//   const [gifUrl, setGifUrl] = useState("");

//   const fetchGifs = async () => {
//     try {
//       const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword.split(" ").join("")}&limit=1`);
//       const { data } = await response.json();

//       setGifUrl(data[0]?.images?.downsized_medium.url);
//     } catch (error) {
//         console.error(error);
//       setGifUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");
//     }
//   };

//   useEffect(() => {
//     if (keyword) fetchGifs();
//   }, [keyword]);

//   return gifUrl;
// };

// export default useFetch;

import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types"; // Importing PropTypes

const APIKEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState("");

  const fetchGifs = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword.split(" ").join("")}&limit=1`
      );
      const { data } = await response.json();
      setGifUrl(data[0]?.images?.downsized_medium.url);
    } catch (error) {
      console.error(error);
      setGifUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");
    }
  }, [keyword]);

  useEffect(() => {
    if (keyword) fetchGifs();
  }, [keyword, fetchGifs]);

  return gifUrl;
};

const GifComponent = ({ keyword }) => {
  const gifUrl = useFetch({ keyword });

  return (
    <div>
      {gifUrl ? (
        <img src={gifUrl} alt="GIF" />
      ) : (
        <p>No GIF found or loading...</p>
      )}
    </div>
  );
};

// Adding prop types for validation
GifComponent.propTypes = {
  keyword: PropTypes.string.isRequired, // Validate that 'keyword' is a required string
};

export default GifComponent;
