
export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-purple-500"></div>
      <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-red-500 ml-3"></div>
      <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-blue-500 ml-3"></div>
    </div>
  )
}

function Shimmer() {
  return (  
    <div className="relative w-80 flex-col rounded-xl bg-white shadow-md h-80 animate-pulse">
    <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gray-200 animate-pulse">
    </div>
    <div className="p-6">
      <div className="h-6 rounded-lg bg-gray-200 animate-pulse"></div>
      <div className="mt-2 h-4 rounded-lg bg-gray-200 animate-pulse"></div>
      <div className="mt-2 h-4 rounded-lg bg-gray-200 animate-pulse"></div>
      <div className="mt-2 h-4 rounded-lg bg-gray-200 animate-pulse"></div>
    </div>
  </div>
  )
}
  
export default Shimmer;