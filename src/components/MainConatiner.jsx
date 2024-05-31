import { useSelector } from "react-redux";
import VideoConatiner from "../components/VideoConatiner";
import VideoInfo from "../components/VideoInfo";

const MainConatiner = () => {
  const { tailerID } = useSelector((store) => store.movies);

  return tailerID && (
    <>
      <VideoConatiner id={tailerID?.key} backdrop={tailerID.backdrop ? tailerID.backdrop : null}  />
      <VideoInfo title={tailerID?.title} desc={tailerID?.desc} />
    </>
  );
};

export default MainConatiner;
