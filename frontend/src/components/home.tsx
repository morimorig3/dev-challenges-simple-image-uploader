import image from "@/assets/exit.svg";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

export const Home = () => {
  const [error, setError] = useState("");
  const { getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/gif": [".gif"],
    },
    maxSize: 2 * 1024 * 1024, // 2MB
    multiple: false,
    onDropAccepted: (files, event) => {
      // アップロード処理
      // リダイレクト処理
      console.log(files);
      console.log(event);
    },
    onDrop: (_, rejectedFiles) => {
      setError("");
      if (rejectedFiles.length === 0) return;
      const rejection = rejectedFiles[0];

      if (rejection.errors[0]?.code === "file-too-large") {
        setError("ファイルサイズは2MB以下にしてください");
      } else if (rejection.errors[0]?.code === "file-invalid-type") {
        setError("JPG、PNG、GIFファイルのみアップロード可能です");
      } else {
        setError("ファイルのアップロードに失敗しました");
      }
    },
  });
  return (
    <div className="w-full grid place-items-center px-10">
      <div className="w-full max-w-[640px] aspect-[16/9] rounded-md bg-[#FFFFFF] dark:bg-[#212936] shadow-2xl p-3">
        <div
          className="border border-dashed border-[#4D5562] w-full h-full rounded-md flex flex-col items-center justify-center gap-y-3"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <img className="w-8" src={image} alt="image upload icon" />
          <div className="text-sm text-center">
            <p>
              Drag & drop a file or{" "}
              <a
                className="text-[#3662E3] hover:cursor-pointer hover:underline"
                onClick={open}
              >
                browse files
              </a>
            </p>
            <p className="text-[#4D5562]">
              JPG, PNG or GIF - Max file size 2MB
            </p>
            {error && (
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
