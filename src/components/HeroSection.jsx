function HeroSection() {
  return (
    <section className="relative h-screen w-full">
      <video
        src="https://res.cloudinary.com/dyv9kenuj/video/upload/hero_rofn23.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      ></video>

      <div className="absolute inset-0 flex flex-col justify-center items-start bg-black/70 px-[100px]">
        <h1 className="text-5xl font-bold text-white">Welcome to Home</h1>
        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ab repellendus. Quas officiis qui <br /> vero rem sit iste doloremque consequuntur? Fugit voluptatibus, a quo voluptate doloribus libero! Officia, neque labore?</p>
        <button className="text-white bg-black  ">Watch now</button>
      </div>
    </section>
  );
}

export default HeroSection;
