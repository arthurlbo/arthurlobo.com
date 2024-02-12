export const Hello = () => {
    return (
        <div className="z-10 flex flex-col gap-5 text-center text-zinc-200">
            <h1 className="text-2xl font-bold">Hello Dev 🥳</h1>

            <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-100/5 px-3 py-0.5 leading-none drop-shadow-lg backdrop-blur hover:border-zinc-700">
                <p className="text-sm font-medium">Get started by editing</p>
                <code className="font-mono text-xs font-normal">src/app/page.tsx</code>
            </div>

            <p className="mt-5 text-base">
                Made with 💜 by{" "}
                <a
                    className="inline-block underline underline-offset-[2px] transition-all duration-200 ease-in-out hover:-translate-y-[2px] hover:text-purple-400"
                    href="https://www.github.com/arthurlbo"
                    target="_blank"
                    rel="noreferrer"
                >
                    Arthur Lobo
                </a>
            </p>
        </div>
    );
};
