import React from "react";
import Navbar from "../Navbar";
import circle from "../../Images/home/circle.png"
import higher from "../../Images/home/higher.png"
import avatar from "../../Images/home/avatar.png"


function Home() {
  return (
    <>
      <Navbar tab="home" />

      <div className="flex pt-5 bg-black flex-col-reverse md:flex-row ">
        <div className="flex gap-3 px-5  flex-col">
          <img src={higher} className="h-auto w-screen "  alt="" />
          <p className="text-gray-100" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nam laboriosam, nulla amet sint similique consequuntur iste enim fuga, magni consequatur repellat consectetur architecto ipsam quasi at culpa nemo perferendis illo odit omnis magnam? Maxime magni corporis natus mollitia distinctio tempora laborum fugit officia! Quis, architecto. Voluptas deleniti excepturi sunt.</p>

        </div>

        <div>
          <div>
              {/* <img className="absolute top-20 left-5 z-10 md:top-8 md:left-[50rem] md:h-[90vh] " src={circle} alt="" /> */}
            <img className=" " src={avatar} alt="" />
          </div>
        </div>


      </div>




    </>
  );
}

export default Home;
