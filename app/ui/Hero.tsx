

export const Hero = () => {
  return (
    <>
      <div className='relative min-h-[60vh] grid place-items-center bg-[url("https://getwallpapers.com/wallpaper/full/8/e/c/656850.jpg")] bg-cover bg-center bg-no-repeat'>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <section className="relative z-10 max-w-3xl text-center  px-4">
          <h2 className="text-6xl uppercase md:text-5xl font-bold text-white mb-6">
            Get the latest and best movies
          </h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo iste perferendis enim, distinctio ab voluptates dolorem, repellat aperiam autem esse quibusdam aspernatur perspiciatis!
          </p>
        </section>
      </div>
    </>
  );
};;
  
