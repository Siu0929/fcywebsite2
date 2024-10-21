import { video } from "./List";
import YouTubeViewCount from "./YoutubeView";
import { GrView } from "react-icons/gr";

function Video() {
  const API = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoIds = video.map((item) => API(item.url)); // Extract video IDs

  return (
    <div>
      <div className="p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {video.map((item, index) => (
          <div
            key={index}
            className="card card-compact w-auto max-w-3xl rounded-md shadow-lg hover:shadow-gray-700"
          >
            <figure>
              <button onClick={() => (window.location.href = item.url)}>
                <img src={`${item.thumb}`} alt={item.title} />
              </button>
            </figure>
            <div className="card-body">
              <a className="card-title link-hover" href={item.url}>
                {item.title}
              </a>
              <p>{item.description}</p>
              <div className="card-actions mt-2 justify-end text-stone-400">
                <GrView className="mt-1" />
                <YouTubeViewCount videoId={videoIds[index]} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Video;
