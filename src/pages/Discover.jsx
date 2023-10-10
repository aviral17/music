import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import mus from "../assets/music-logo.png";
// import { selectGenreListId } from "../redux/features/playerSlice";
// import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

import Content from "../components/AudioPlayLoader";

const Discover = () => {
  //   console.log(genres);

  const dispatch = useDispatch();

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopChartsQuery(); // isLoading is also there, type -- is -- to get suggestions
  const genreTitle = "Pop";

  // console.log("isFetching inside Discover.jsx = ", isFetching);
  // console.log("Data.tracks = ", data?.tracks);

  if (isFetching) {
    return <Loader title="Loading songs..." />;
  }
  if (error) return <Error />;

  // console.log("Data.tracks inside Discover.jsx= ", data.tracks);

  // console.log("isPlaying = ", isPlaying);

  return (
    <div className="flex flex-col">
      <div className=" flex justify-start items-center sm:flex-row flex-col mt-4 mb-10">
        <div className="bg-yellow-100 backdrop-filter backdrop-blur-3xl border-red-500 bg-opacity-5 rounded-3xl w-[130px] py-8 justify-center items-center flex">
          <img src={mus} alt="logo" className=" w-[120px] h-[70px]" />
        </div>
        <h2 className="text-5xl text-gray-400 font-light text-left mus_font ml-4">
          Music
        </h2>
        {isPlaying && (
          <div className="relative left-10 bottom-5">
            <Content />
          </div>
        )}
        {/* <select
          onChange={(e) => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5 "
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select> */}
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8 ">
        {data?.tracks?.map(
          (song, i) =>
            i !== 5 && (
              <SongCard
                key={song.key}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
                i={i}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Discover;
