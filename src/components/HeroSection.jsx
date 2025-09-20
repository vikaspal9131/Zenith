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

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-end items-start bg-black/60 px-6 sm:px-12 md:px-20 lg:px-[80px] pb-10 sm:pb-14 md:pb-[60px] lg:pb-[80px]">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl text-white font-[Grenze_Gotisch] leading-tight">
            Attack On Titan
          </h1>

          <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-2xl text-white font-extralight font-[Grenze_Gotisch] max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]">
            Attack on Titan is a Japanese anime and manga series created by Hajime
            Isayama. <br className="hidden md:block" /> The story is set in a world where
            humanity lives inside massive walled cities to protect <br className="hidden lg:block" />
            themselves from giant humanoid creatures called Titans, who devour
            humans.
          </p>

          <button className="text-black bg-white rounded-2xl px-4 sm:px-6 md:px-[30px] py-2 sm:py-3 mt-4 sm:mt-6 font-[Iceberg] font-bold text-sm sm:text-base md:text-lg">
            Watch now
          </button>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
