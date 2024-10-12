export default function LinkPlaceholder({
  linksLength,
}: {
  linksLength: number;
}) {
  return (
    <>
      {linksLength < 3 &&
        new Array(3 - linksLength)
          .fill(0)
          .map((v) => (
            <div
              key={v + 1}
              className="w-full rounded-lg bg-gray-200 p-5"
            ></div>
          ))}
    </>
  );
}
