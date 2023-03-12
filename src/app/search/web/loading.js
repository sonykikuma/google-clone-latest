export default function loading() {
  return (
    <>
      {" "}
      <div className="mx-2 pt-10 max-w-6xl lg:pl-52 animate-pulse">
        <div className="bg-gray-200 rounded-full mb-2.5 h-2.5 w-48"></div>
        <div className="bg-gray-200 rounded-full mb-2.5 h-3.5 max-w-[360px]"></div>
        <div className="bg-gray-200 rounded-full mb-2.5 max-w-[560px] h-2"></div>
        <div className="bg-gray-200 rounded-full mb-2.5 max-w-[530px] h-2"></div>
        <div className="bg-gray-200 rounded-full mb-2.5 max-w-[560px] h-2"></div>
        <div className="bg-gray-200 rounded-full mb-2.5 max-w-[530px] h-2"></div>
      </div>
    </>
  );
}
