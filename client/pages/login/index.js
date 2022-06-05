import React, { useState } from "react";
import loginBg from '../../assets/pexels-tehmasip-khan-6601811.jpg'
import axios from "../../axios/";
import { GoogleLogin } from "react-google-login";

function Index() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const responseGoogle = async (response) => {
    console.log(response);
    console.log(response.profileObj);

    try {
      const res = await axios.post("/user/google_Login", {
        tokenId: response.tokenId,
      });

      setUser({ ...user, error: "", success: res.data.msg });
      if (res.status === 200) { 
        alert("Login Successfully");
        window.location.href = "/";
      }
    } catch (err) {
      console.log(err) ;
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-red-200 h-[100vh] justify-center items-center ">
    <div className="hidden md:block md:h-screen w-screen object-fill " style={{
    //    backgroundImage: `url(https://images.pexels.com/photos/6601811/pexels-photo-6601811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` ,
    //    backgroundPosition:'center', 
    //    height:'100%' ,
    //    backgroundSize: "cover"
    }}> 
     <img className="h-full w-full" src={'https://images.pexels.com/photos/6601811/pexels-photo-6601811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
            
    </div>
      <div className="flex flex-col w-3/4  items-center">
      <h1 className="text-[15px] mb-4 text-stone-600 font-semibold font-serif text-center text-lg md:text-4xl">Save the pooor animals! You are a Hero!</h1>
        <GoogleLogin
          clientId="223407826323-pcf12i097m2dbhqfdv9079nr23vjbkeg.apps.googleusercontent.com"
          buttonText="Login with google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          // isSignedIn={true}
        />
      
      </div> 
    </div>
  );
}

export default Index;
