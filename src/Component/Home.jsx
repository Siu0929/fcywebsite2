import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="stack, p-0" style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "80%",
            transform: "translate(-50%, -50%)",
            width: "40%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="stack bg-white bg-opacity-50"
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-7xl font-thin text- mr-2 text-black">WHITE</h1>
            <h1 className="text-xl font-thin text- mr-2 text-center text-black">AKA THOMAS GINGGONG</h1>
            <div className="h-20 bg-transparent" />
            <div>
              <button
                className="btn bg-zinc-300 rounded-full text-black font-light mt-4 ml-1 w-40 hover:bg-zinc-400"
                onClick={() => navigate("/Profile")}
              >
                Profile
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/Background.jpg"
            alt="FCY"
            top="0"
            left="0"
            className="bg-local"
          />
        </div>
      </div>

      {/* About me */}
      <div className="flex flex-col w-full h-[580px] bg-black">
        <p className="text-4xl text-white font-thin text-center items-center p-5">
          - About me -
        </p>
        <div class="grid grid-cols-2 grid-flow-col gap-2">
          <div className="flex-col text-white align-middle pt-10 pl-10 pr-10">
            <p className="text-4xl font-bold">
                Local Movie
            </p>
            <p className="text-4xl font-bold">
                Creation Team
            </p>
            <div className="h-10 bg-transparent" />
            <p>
              Full of experience and professional skills and gear
            </p>
            <p>
              Best video quality Guarantee
            </p>
            <p>我係乖仔</p>
            <div className="h-10 bg-transparent" />
            <button
              className="btn btn-ghost bg-zinc-300 text-black hover:bg-zinc-400"
              onClick={() => navigate("/Video")}
            >
              Gallery Transfer Window
            </button>
          </div >
          <div className="flex justify-center w-full">
            <img src="/Protrate.png" alt="FCY" className="flex h-[500px] w-[291]"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
