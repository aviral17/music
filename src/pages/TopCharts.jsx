import { useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopCharts = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();

  // console.log("TopCharts = ", data);

  if (isFetching) return <Loader title="Loading Top Charts" />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-normal text-5xl text-white text-left mt-4 mb-10">
        Discover Top Charts
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
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

export default TopCharts;
