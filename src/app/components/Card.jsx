/**
 * ＠author 林彥佑 <newxmith@gmail.com>
 */

import Image from "next/image";

export default function CustomCard({ item }) {
  return (
    <div className="max-w-sm border rounded-md flex flex-col relative bg-white drop-shadow-md">
      <div className="h-52 w-full relative rounded-t-md overflow-hidden">
        <Image
          layout="fill"
          objectFit="cover"
          alt="Meaningful alt text for an image that is not purely decorative"
          src={item.Picture.PictureUrl1}
        />
      </div>
      <div className="flex-grow bg-white m-1.5">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-1.5 mb-1.5">
          {item.ScenicSpotName}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-5">
          {item.Description}
        </p>
      </div>
      <button className="bg-teal-400 rounded-md p-1.5 m-1.5 drop-shadow-md">
        <p className="text-slate-100">Read more</p>
      </button>
    </div>
  );
}
