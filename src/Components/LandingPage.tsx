const LandingPage = () => {
  return (
    <>
      <div
        id="landing-page-container"
        className=" w-full h-[90vh] flex justify-evenly items-center"
      >
        <div id="intro-container" className="w-[35vw]">
          <h1 className="text-[2.5rem]">Hello! 🙋🏽‍♂️My name is Bao Tran!</h1>
          <h2 className="text-[1.5rem]">
            I am a motivated Full-Stack Developer based out of the Little Apple,
            in Manhattan, KS 🍎📍.
          </h2>
        </div>
        <div
          id="img-container"
          className="w-[20vw] flex justify-center items-center"
        >
          <h1 className="border-2">Placeholder</h1>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
