export default function Footer() {
  return (
    <div className="pb-8 bg-color-gray">
      <hr className=" h-0.5 bg-slate-400 shadow-lg mx-4 " />
      <div className="flex flex-col gap-3 mt-10 margin-regulation">
        <div className="flex flex-row items-center gap-3 ">
          <span className="text-2xl font-bold"> MovieApp</span>
          <span>/</span>
          <span className="text-xl italic ">by Coding School</span>
        </div>
        <p className="text-color-gray">created in 2024 / January</p>
        <p className="text-color-gray w-[50%] max-sm:w-full ">
          Created with: The OMDb API is a RESTful web service to obtain movie
          information. All content and images on the site are contributed and
          maintained by our users. More information about the API can be found
          here -
          <a
            className="text-blue-700 underline "
            href="https://www.omdbapi.com/"
          >
            https://www.omdbapi.com/
          </a>
        </p>
      </div>
    </div>
  );
}
