import Image from "next/image";

export default function UnderConstrution() {
  return (
    <main className="grid min-h-full place-items-center bg-white sm:py-32 lg:px-8">
      <div className="text-center object-center">
        <h1 className="mt-4 font-playfair text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page Under Construction
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {/* <a
            href="#"
            className="rounded-md bg-pink px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Go back home
          </a> */}
        </div>
      </div>
    </main>
  );
}
