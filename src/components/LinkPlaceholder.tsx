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
          .map(() => <div className="w-full rounded-lg bg-gray-200 p-5"></div>)}
    </>
  );
}
