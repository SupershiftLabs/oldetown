export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img src="/logo2.jpg" alt="Olde Town Roofing logo" className="h-12 sm:h-14 w-auto shrink-0 object-contain rounded-lg" />
    </div>
  );
}