const Body = () => {
  return (
    <div className="-space-y-4 lg:flex lg:flex-row-reverse">
      <div className="flex justify-center items-center lg:flex-1">
        <img src="src/assets/girlImage.png" alt="1st image" />
      </div>
      <div className="mt-20 lg:flex-1 lg:content-center">
        <h1 className="text-5xl font-bold font-playFair leading-tight">
          Host your websit less than 5 minutes
        </h1>
        <p className="font-lato text-gray-400 mt-2 mb-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
          laboriosam. Assumenda nostrum aliquam incidunt obcaecati accusamus.
          Fugiat vitae itaque possimus?
        </p>
        <form action="" className="flex flex-col gap-4 mb-5 md:flex-row md:mt-2">
          <input className="rounded-md px-4 py-3 placeholder:text-gray-400" type="email" name="email" placeholder="Enter your email" />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-500 text-white">Join Waitlist</button>
        </form>
        <div className="flex gap-2 align-middle">
          <img src="src/assets/check.png" alt="check" className="h-5 align-middle"/>
          <p className="">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
