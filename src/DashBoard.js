import { Modal } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { useEffect, useState } from "react";
import Login from "./Login";

const DashBoard = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);

  const getMovies = async () => {
    const response = await fetch(
      " https://api.themoviedb.org/3/movie/top_rated?api_key=0fdb9d34c4d8b86ebbe306baa574026b&language=en-US&page=1"
    );
    const data = await response.json();
    setMovies(data.results);
  };
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleChangeSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="bg-gray-700">
      <div className="mx-4 py-02 bg-gray-900 text-gray-100 rounded-xl p-4">
        <label>Search </label>
        <input
          value={search}
          onChange={(e) => handleChangeSearch(e)}
          className="bg-gray-800 border"
          type="text"
        />

        <div className="w-full flex justify-end">
          <button
            onClick={() => logout()}
            type="submit"
            className="w-40 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Log out
          </button>
        </div>
        <h1 className="text-4xl font-bold m-2 pb-8 text-gray-100">
          Top Rated Movies
        </h1>

        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {movies
            .filter((movie) =>
              movie.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((movie) => (
              <li key={movie.id} className="relative">
                <div
                  onClick={() => setModal(true)}
                  className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
                >
                  <div className="absolute border-2 rounded-full border-gray-200">
                    <Avatar
                      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    />
                  </div>
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt=""
                    className="object-cover pointer-events-none group-hover:opacity-75"
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for {movie.title}
                    </span>
                  </button>
                </div>

                <p className="mt-2 block text-lg font-medium  truncate pointer-events-none">
                  {movie.title}
                </p>
                <p className="mt-2 block text-xs font-medium truncate  pointer-events-none">
                  {movie.overview}
                </p>
                <p className="mt-2 block text-sm font-medium  truncate pointer-events-none">
                  {movie.vote_average}
                </p>
                <p className="block text-sm font-medium  pointer-events-none">
                  {movie.release_date}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
