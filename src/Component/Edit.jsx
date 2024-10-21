import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineSubtitles } from "react-icons/md";
import { LuSubtitles } from "react-icons/lu";
import { FaYoutube, FaFileImport } from "react-icons/fa";
import { video } from "./List";

function Edit() {
  const navigate = useNavigate();

  useEffect(() => {
    const Username = localStorage.getItem("Username");
    if (!Username) {
      navigate("/Login");
    }
  }, [navigate]);

  const [itemsArray, setItemsArray] = useState(video.map((item) => item.title));
  const [selectedDelete, setSelectedDelete] = useState("");

  const handleChange = (event) => {
    setSelectedDelete(event.target.value);
  };

  const handleButtonClick = () => {
    const index = itemsArray.indexOf(selectedDelete);
    if (index > -1) {
      video.splice(index, 1);
      setItemsArray(video.map((item) => item.title)); // Update the itemsArray
      setSelectedDelete(""); // Reset the selected value
    }
  };

  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [description, setDescription] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");

  const handleSubmit = () => {
    video.push({
      title: title,
      thumb: thumbnail,
      description: description,
      url: youtubeLink,
    });
    setItemsArray(video.map((item) => item.title));
    setTitle("");
    setThumbnail("");
    setDescription("");
    setYoutubeLink("");
    };

  return (
    <div>
      {/* Edit Video */}
      <div className="flex justify-center items-center">
        <div className="card bg-base-100 w-96 shadow-xl shadow-gray-600 m-10 rounded-lg">
          <div className="card-body gap-0">
            <h2 className="card-title text-3xl">
              <FaFileImport />
              Import New Video
            </h2>
            <div className="h-10 bg-transparent" />

            <label className="input input-bordered flex items-center gap-2 rounded-t-lg">
              <MdOutlineSubtitles />
              <input 
                type="text" 
                className="grow" 
                placeholder="Title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <CiImageOn />
              <input
                type="text"
                className="grow"
                placeholder="ThumbNail-Link"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <LuSubtitles />
              <input
                type="text"
                className="grow"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>

            <label className="input input-bordered flex items-center gap-2 rounded-b-lg">
              <FaYoutube />
              <input 
                type="text" 
                className="grow" 
                placeholder="YouTube Link" 
                value={youtubeLink}
                onChange={(e) => setYoutubeLink(e.target.value)}
              />
            </label>

            <div className="h-1 bg-transparent" />

            <button 
                className="btn btn-ghost rounded-lg text-white font-light mt-4 w-80"
                onClick={() => handleSubmit()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Delete Video */}
      <div className="flex justify-center items-center">
        <div className="card bg-base-100 w-96 shadow-xl shadow-gray-600 m-10 rounded-lg">
          <div className="card-body gap-0">
            <h2 className="card-title text-3xl mb-5">
              <FaFileImport />
              Delete Video
            </h2>
            <div>
              <ul className="flex-col">
                {itemsArray.map((item, index) => (
                  <li
                    key={index}
                    className="outline outline-[0.1px] outline-zinc-500 p-2"
                  >
                    {index + 1} {item}
                  </li>
                ))}
              </ul>
              <select
                className="select w-full max-w-xs mt-5"
                value={selectedDelete}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select a video to delete
                </option>
                {itemsArray.map((item, index) => (
                  <option
                    key={index}
                    value={item} // Ensure option value is set
                  >
                    {item}
                  </option>
                ))}
              </select>

              <button
                className="btn btn-ghost rounded-lg text-white font-light mt-4 w-80"
                onClick={handleButtonClick}
                disabled={!selectedDelete} // Corrected disabled condition
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
