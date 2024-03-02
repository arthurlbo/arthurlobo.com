"use client";

export const ScrollToTop = () => {
    const backToTop = () => {
        window.scrollTo({ top: 0 });
    };

    return (
        <button
            onClick={backToTop}
            className="rounded-lg bg-transparent text-sm font-semibold text-secondary transition-all duration-300 ease-in-out hover:text-primary focus:outline-none focus:ring-2  focus:ring-accent/70 focus:ring-offset-4  focus:ring-offset-background focus:duration-0"
        >
            Back to top
        </button>
    );
};
