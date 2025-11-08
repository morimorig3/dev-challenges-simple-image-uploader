import image from "@/assets/exit.svg";

export const Home = () => {
  return (
    <div className="w-full grid place-items-center px-10">
      <div className="w-full max-w-[580px] h-[380px] rounded-md bg-[#FFFFFF] dark:bg-[#212936] shadow-2xl p-3">
        <div className="border border-dashed border-[#4D5562] w-full h-full rounded-md flex flex-col items-center justify-center gap-y-3">
          <img className="w-8" src={image} alt="image upload icon" />
          <div className="text-sm">
            <p>
              Drag & drop a file or{" "}
              <a className="text-[#3662E3]">browse files</a>
            </p>
            <p className="text-[#4D5562]">
              JPG, PNG or GIF - Max file size 2MB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
