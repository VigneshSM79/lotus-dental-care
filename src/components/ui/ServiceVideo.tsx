export default function ServiceVideo({
  src,
  title,
  vertical = false,
}: {
  src: string;
  title: string;
  vertical?: boolean;
}) {
  return (
    <div className="mb-12">
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
        See How {title} Works
      </h3>
      <div className="flex justify-center">
        <video
          src={src}
          controls
          playsInline
          preload="metadata"
          className={
            vertical
              ? "rounded-lg max-h-[520px] w-auto max-w-full bg-black"
              : "rounded-lg w-full max-w-2xl bg-black"
          }
        />
      </div>
    </div>
  );
}
