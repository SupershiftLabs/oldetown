export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
  <img src="/6B0A2363-B29A-4F05-A003-5265975FF4C2.PNG" alt="Logo" className="h-16 w-auto shrink-0 object-contain" />
    </div>
  );
}
