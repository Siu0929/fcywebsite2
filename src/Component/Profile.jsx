import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <>
      <div className="stack flex flex-col justify-center items-center mt-10">
        <div className="flex justify-center">
          <img
            src="Icon.jpg"
            alt="Icon"
            height={200}
            width={200}
            className="rounded-lg shadow-md shadow-slate-700"
          />
        </div>
        <div className="card card-compact w-96 rounded-md shadow-lg shadow-slate-700 bg-gray-1000">
          <div className="card-body">
            <h1 className="text-white text-center text-3xl font-bold">Fong Ching Yin</h1>
            <p className="text-neutral-400 text-center text-md font-normal">- 電影的自我修養 🎥 -</p>
            <h3 className="text-white text-center text-lg font-light">Film Maker and Video Editor</h3>
            <div className="divider pl-5 pr-5" /> 
            <div className="pl-5">
              <p className="text-white text-left">
                • 3 years of filming experience
              </p>
              <p className="text-white text-left">
                • 5 years of video editing experience
              </p>
            </div>
            <div className="h-5 bg-transparent"></div>
            <div className="card-actions justify-center space-x-4 flex-row">
              <button
              className="btn text-white bg-slate-800 hover:bg-slate-600 rounded-full w-full"
              onClick={ () => navigate("/Contact") }
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
