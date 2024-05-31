
const VideoInfo = ({title, desc}) => {

  return (
    <div className="absolute text-white w-[100%] h-[100vh] bg-gradient-to-r from-black">
      <div className="info mt-[38%] sm:mt-[20%] md:mt-[12%] mx-4 sm:mx-10 md:mx-16">
        <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
        <p className="text-lg w-[98%] sm:w-[75%] md:w-[50%] my-5">
          {desc}
        </p>
        <div className="btns flex items-center">
          <button className="flex items-center mr-4 hover:bg-opacity-85 bg-slate-50 text-black p-2 text-lg  font-semibold px-4 rounded-md">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="pr-1"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96 448l320-192L96 64v384z"></path>
            </svg>
            Play
          </button>
          <button className="hidden sm:flex items-center hover:bg-opacity-85 bg-gray-800 text-white p-2 text-lg font-semibold px-4 rounded-md">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="mr-1"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path>
              <path d="M11 11H13V17H11zM11 7H13V9H11z"></path>
            </svg>
            
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
