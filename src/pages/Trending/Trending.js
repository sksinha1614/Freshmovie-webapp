import axios from "axios";
import { useEffect, useState } from "react";
import CustomPagination from "../../pagination/CustomPagination";
import SingleContent from "./../../components/SingleContent/SingleContent";
import "./Trending.css";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      ` https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);
  return (
    <div>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              title={c.title || c.name}
              poster={c.poster_path}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
            />
          ))}
      </div>

      <CustomPagination setPage={setPage} noOfPages={10} />
    </div>
  );
};

export default Trending;
