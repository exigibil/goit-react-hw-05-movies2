import React, { useState, Suspense } from 'react';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';

const SearchMovie = React.lazy(() => import('../Movies/SearchMovie'));
const MovieDetails = React.lazy(() => import("../MovieDetails/MovieDetails"));

function MoviesDetails() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); 

  const handleSearch = (query) => {
    setSearchQuery(query);
    navigate(`/movies?UserSearch=${query.toLowerCase()}`); 
  };

  return (
    <div>
      <Navbar />
      <div>
        <SearchBar onSearch={handleSearch} />
        <Suspense fallback={<p>Loading...</p>}>
          {searchQuery && (
            <SearchMovie query={searchQuery} />
          )}
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
          <MovieDetails />
        </Suspense>
      </div>
    </div>
  );
}

export default MoviesDetails;
