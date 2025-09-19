function HeroSection() {
  return (
    <>
    <section className="relative h-screen w-full">
      <video
        src="https://res.cloudinary.com/dyv9kenuj/video/upload/hero_rofn23.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      ></video>

      <div className="absolute inset-0 flex flex-col justify-end items-start bg-black/60 px-[100px] pb-[80px] ">
        <h1 className="text-8xl  text-white font-[Grenze_Gotisch] ">Attack On Titan</h1>
        <p className="text-white text-2xl font-extralight font-[Grenze_Gotisch]">Attack on Titan is a Japanese anime and manga series created by Hajime Isayama. <br /> The story is set in a world where humanity lives inside massive walled cities to protect <br /> themselves from giant humanoid creatures called Titans, who devour humans.</p>
        <button className="text-black bg-white rounded-2xl px-[30px] py-[10px] mt-[20px] font-[Iceberg] font-bold ">Watch now</button>
      </div>
    </section>
     </>
  );
}

export default HeroSection;
