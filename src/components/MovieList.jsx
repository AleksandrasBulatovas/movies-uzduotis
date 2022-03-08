import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='container'>
					<img src={movie.Poster} alt='movie'></img>
				
				</div>
			))}
		</>
	);
};
export default MovieList