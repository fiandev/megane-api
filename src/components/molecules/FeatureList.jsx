import { SiFastapi } from "react-icons/si";

export default function FeatureList({ feature }) {
  return (
    <div className="flex items-start justify-center gap-2 p-2 bg-secondary rounded-md shadow-md">
      <div className="flex items-center justify-center w-1/4 h-full">
        <div className="flex w-[5em] h-[2.5em] items-center justify-center w-fit h-fit text-lg rounded-lg text-light">
          <SiFastapi />
        </div>
      </div>
      <div className="flex flex-col items-start justify-end text-start">
        <h1 className="text-light text-lg capitalize font-semibold"></h1>
        <p className="text-light text-sm">
          Selamat datang di papan klip Gboard, teks apa pun yang Anda salin akan
          disimpan di sini.
        </p>
      </div>
    </div>
  );
}
