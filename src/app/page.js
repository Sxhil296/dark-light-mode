import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-800 bg-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto dark:border-gray-300 lg:rounded-xl lg:border  lg:p-4 lg:dark:bg-zinc-800/30">
          Dark/Light Mode in NetxJS13 and TailwindCSS
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <ThemeToggle />
        </div>
      </div>

     

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 ">
        <p>Built by Sahil</p>
      </div>
    </main>
  );
}
