const Modal = ({ movie }) => {
  return (
    <div>
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
    </div>
  );
};

export default Modal;
