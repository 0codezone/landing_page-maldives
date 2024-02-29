const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="w-full h-screen top-0 left-0 object-cover"
        src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg"
        alt="/"
      />
      <div className="w-full h-screen top-0 left-0 absolute bg-black/30 " />
      <div className="w-full h-full absolute top-0 text-white flex flex-col justify-center ">
        <div className="md:left-[10%] max-w-[1100px] mt-auto absolute p-4">
          <p>All Inclusive</p>
          <h1 className="md:text-7xl text-5xl font-bold drop-shadow-2xl">
            Private Beach & Gateways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            aspernatur sunt, aut amet doloremque veniam?
          </p>
          <button className="bg-white text-black">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
