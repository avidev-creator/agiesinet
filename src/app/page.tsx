import Heroimg from "@/assets/Hero-Wrapper__image.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full grid grid-cols-2">
        <div className="text-white w-full flex flex-wrap items-center justify-center">
          <span className="max-w-xl text-[2.9rem] leading-none font-extrabold text-center tracking-wide">
            Learn Your Desired Skills From The Experts
          </span>
          <p className="relative top-[-18%] max-w-xl text-[1.5rem] leading-none font-light text-center mb-5 tracking-tighter">
            We don&apos;t simply give students lectures, we also provide them
            with real-life experiments, projects and a rich experience
            thoughtout the journey!
          </p>
        </div>
        <div className="grid gap-2 px-16">
          <Image src={Heroimg} alt="" />
        </div>
      </div>
    </main>
  );
}
