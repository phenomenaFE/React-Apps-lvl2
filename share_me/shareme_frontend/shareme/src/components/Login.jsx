import React from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { client } from "../client";
const user = {
  name: "test",
  googleId: "12718378178173813",
  imageUrl: "https://placehold.co/600x400/png",
};
const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = () => {
    const { name, googleId, imageUrl } = user;
    localStorage.setItem("user", JSON.stringify(user));
    const doc = {
      _id: googleId,
      _type: "user",
      userName: name,
      image: imageUrl,
    };
    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };
  return (
    <div className="flex justify-start  items-center flex-col h-screen">
      <div className="relative w-full  h-full">
        <video
          src={shareVideo}
          autoPlay="true "
          type="video/mp4"
          loop
          controls={false}
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
          <div className="p-5">
            <img src={logo} alt="image" width={"130px"} />
            <div className="shadow-2xl">
              {/* <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                render={(renderprops) => (
                  <button
                    type="button "
                    onClick={renderprops.onClick}
                    disabled={renderprops.disabled}
                    className="bg-mainColor mt-4 flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  >
                    <FcGoogle className="mr-4" />
                    SignIn With Google
                  </button>
                )}
              /> */}
              <button
                type="button "
                onClick={responseGoogle}
                className="bg-mainColor mt-4 flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
              >
                <FcGoogle className="mr-4" />
                SignIn With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
