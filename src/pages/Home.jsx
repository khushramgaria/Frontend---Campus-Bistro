import React from "react";
import Heading from "../components/Heading";
import Canteens from "../components/Canteens";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()
    
    return (
    <>
      <Heading title="Campus Bistro" sideText="Welcome to" />

      <div className="flex flex-wrap w-full text-center mt-12">
        <Canteens
          name="Jaspal Canteen"
          about="kdj dbckj dbvkjs dbvkj dbkvjdsb kjdv nsdkvj dbvjkdb kvbdskj dsvbjkb vkdbsvk vkdbvjk vdbvjd vdbvjdm, vjdbvd v djvdnv dvdjivd v djvd dvjdijv"
          onClick={() => navigate("/menu")}
        />
        <Canteens
          name="The Canteen"
          about="kdj dbckj dbvkjs dbvkj dbkvjdsb kjdv nsdkvj dbvjkdb kvbdskj dsvbjkb vkdbsvk vkdbvjk vdbvjd vdbvjdm, vjdbvd v djvdnv dvdjivd v djvd dvjdijv"
          onClick=""
        />
        <Canteens
          name="Vaddi Canteen"
          about="kdj dbckj dbvkjs dbvkj dbkvjdsb kjdv nsdkvj dbvjkdb kvbdskj dsvbjkb vkdbsvk vkdbvjk vdbvjd vdbvjdm, vjdbvd v djvdnv dvdjivd v djvd dvjdijv"
          onClick=""
        />
        <Canteens
          name="Bru Canteen"
          about="kdj dbckj dbvkjs dbvkj dbkvjdsb kjdv nsdkvj dbvjkdb kvbdskj dsvbjkb vkdbsvk vkdbvjk vdbvjd vdbvjdm, vjdbvd v djvdnv dvdjivd v djvd dvjdijv"
          onClick=""
        />
      </div>
    </>
  );
}

export default Home;
