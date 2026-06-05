export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img src="/IMG_6946.jpg" alt="Logo" className="h-16 w-24 shrink-0 object-cover rounded" />
    </div>
  );
}
