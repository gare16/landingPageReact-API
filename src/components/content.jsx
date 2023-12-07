import { Button, Typography } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
import progressGradient from "@material-tailwind/react/theme/components/progress/progressGradient";
import axios from "axios";
import { useEffect, useState } from "react";

export const Content = () => {
  const [photos, setPhotos] = useState({});

  const getPhotos = async () => {
    const res = await axios.get(
      `https://api.unsplash.com/photos/random?client_id=${
        import.meta.env.VITE_ACCESS_TOKEN2
      }`
    );
    const response = await res.data;
    console.log(response.urls);
    setPhotos(response);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <div className="flex justify-around mt-24">
        <div className=" max-w-md p-6 rounded-xl shadow-sm hover:shadow-secondayColor  ">
          <Typography variant="paragraph" className="text-primaryColor">
            Hi, my name is
          </Typography>
          <Typography variant="h1" className="text-7xl my-5">
            Mochamad <span className="text-primaryColor">Tegar</span>
          </Typography>
          <Typography variant="small">
            <span className="text-4xl">A </span>{" "}
            <strong className="text-primaryColor text-lg">
              Front-end Developer
            </strong>{" "}
            is like the architect of the internet, turning designs into real,
            interactive websites. Using languages like HTML, CSS, and
            JavaScript, they create the cool stuff you see and click on. They
            make sure websites work on your computer, phone, or tablet, no
            matter which browser you prefer. Team players, they collaborate with
            designers to make things look awesome and focus on making websites
            easy to use. Think of them as the superheroes of the web world,
            fixing problems and writing smart code to give you a smooth and
            enjoyable online experience. They're the ones who make the internet
            both pretty and practical!
          </Typography>
        </div>
        <div className="">
          <img
            className="h-96 w-96 rounded-full object-cover object-center shadow-sm shadow-secondayColor"
            src={photos.raw}
            alt="random"
          />
        </div>
      </div>
    </>
  );
};
