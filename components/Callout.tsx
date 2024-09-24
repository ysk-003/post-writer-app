export default function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex items-center border border-1-4 p-4 rounded-md">
      <div>{children}</div>
    </div>
  );
}