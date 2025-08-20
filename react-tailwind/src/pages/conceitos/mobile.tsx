export default function Mobile() {
  return (
    <div className="flex justify-center items-center bg-red-500 text-3xl md:text-4xl lg:text-6xl h-48 w-[90%] 2xl:w-[70%]">
      <span className="inline sm:hidden ">Mobile</span>
      <span className="hidden sm:inline">Não mobile</span>
    </div>
  );
}
