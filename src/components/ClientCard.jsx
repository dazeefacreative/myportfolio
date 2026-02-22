

export default function clientCard({ client }) {
  return (
    <div
      className="flex flex-col sm:gap-6 h-full border border-gray-100 sm:max-w-[400px] max-w-[300px] py-4 px-6 shadow-lg active:scale-110 active:z-10 transition-shadow duration-300"
    >
      {/* Content */}
      <div className="flex flex-col justify-between">
        <p className={`leading-[130%] font-light mb-2 before:content-['"'] before:mr-1 after:ml-1 after:content-['"']`}>
          {client.report}
        </p>
        <h3 className="text-sm font-black">
          {client.name}
        </h3>
        <span className="text-xs opacity-50 font-light">
          {client.title}
        </span>

      </div>
    </div>
  );
}
