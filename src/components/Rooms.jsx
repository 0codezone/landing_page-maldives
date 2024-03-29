const Rooms = () => {
  return (
    <section className="max-w-[1100px] h-[500px] bg-blue-100 mx-auto my-20 p-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4 border-t-[1px]">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h2 className="text-2xl font-bold">Fine Interior Rooms</h2>
        <p className="pt-4">
          Our rooms are designed to transport you into an environment made for
          leisure. Take your mind off the day-to-day of home life and find a
          private paradise for yourself.
        </p>
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          alt="/"
        />
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          alt="/"
        />
      </div>
    </section>
  );
};

export default Rooms;
