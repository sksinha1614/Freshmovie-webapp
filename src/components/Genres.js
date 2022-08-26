import { Chip } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setGenres(data.genres);

    return () => {
      setGenres({});
    };

    // eslint-disable-next-line
  };

  useEffect(() => {
    fetchGenres();
  }, []);
  return (
    <div style={{ padding: "16px 8px" }}>
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            label={genre.name}
            size="small"
            style={{ margin: 2 }}
            key={genre.id}
            color="primary"
            onDelete={() => handleRemove(genre)}
            clickable
          />
        ))}
      {genres.map((genre) => (
        <Chip
          label={genre.name}
          size="small"
          style={{ margin: 2 }}
          key={genre.id}
          onClick={() => handleAdd(genre)}
          clickable
        />
      ))}
    </div>
  );
};

export default Genres;
