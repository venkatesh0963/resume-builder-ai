export default function BuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full flex-col bg-slate-50 overflow-hidden">
      {children}
    </div>
  );
}
