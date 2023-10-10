import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  // animate-slideup extended class in tailwind.config.js created Manually by ME
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm  animate-slideup rounded-lg cursor-pointer ">
      <img
        src={track?.images?.coverart}
        alt="artist"
        className="w-full h-56 rounded-lg"
        onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
      />
      <p className="mt-4 font-semibold text-lg truncate"></p>
    </div>
  );
};

export default ArtistCard;
