import { IMAGE_URI } from "../utils/constants";

const VideoConatiner = ({ id, backdrop }) => {
  return (
    <div className="absolute w-[100%]  h-[100vh] pointer-events-none overflow-x-hidden overflow-y-hidden">
      {backdrop ? (
        <img
          className="w-[inherit] h-[100vh]"
          src={IMAGE_URI + backdrop}
          alt="Preview Img"
        />
      ) : (
        <iframe
          className="w-[inherit] h-[100%] scale-[6] sm:scale-[2.5] md:scale-[1.6]"
          src={`https://www.youtube.com/embed/${id}?si=lpakpNX5o_mI77gb&amp;autoplay=1&amp;&mute=1&amp;controls=0&amp;modestbranding=1&amp;showinfo=0&amp;rel=0`}
          title="YouTube video player"
          allow="autoplay;encrypted-media;"
          allowFullScreen="allowFullScreen"
        ></iframe>
      )}
    </div>
  );
};

export default VideoConatiner;
