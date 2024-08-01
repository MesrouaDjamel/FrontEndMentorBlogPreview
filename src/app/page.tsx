import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5D04E]  ">
      <div
        className="border border-slate-950 max-w-[375px] flex flex-col bg-white rounded-xl p-[20px] 
      gap-[10px] shadowEffect"
      >
        <Image
          src="/illustration-article.svg"
          alt="Profile"
          width={335}
          height={200}
          className="rounded-xl"
        />
        <button className="bg-[#F5D04E] rounded-lg w-[100px] py-2 font-bold">
          Learning
        </button>
        <span>Published 21 Dec 2023</span>
        <h1 className="font-bold  hover:text-[#f5d04e] transition-all cursor-pointer text-[22px]">
          HTML & CSS foundations
        </h1>
        <p className="text-[16px] text-gray-500 pb-[10px]">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="flex   items-center gap-2 font-bold">
          <Image
            src="/image-avatar.webp"
            alt="Profile"
            width={35}
            height={35}
          />

          <p className="text-[14px]">Greg Hooper</p>
        </div>
      </div>
    </main>
  );
}
