import { useState, useRef } from "react";
import { UploadCloud, X, ImageIcon, Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

type Item = { id: string; name: string; url?: string; uploading: boolean; error?: boolean; preview: string };

export default function PhotoUpload({ onChange }: { onChange: (urls: string[]) => void }) {
  const [items, setItems] = useState<Item[]>([]);
  const [drag, setDrag] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const sync = (list: Item[]) => {
    setItems(list);
    onChange(list.filter((i) => i.url).map((i) => i.url!));
  };

  const uploadOne = async (file: File, item: Item, current: Item[]) => {
    try {
      const ext = file.name.split(".").pop() || "jpg";
      const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
      const { error } = await supabase.storage.from("roof-photos").upload(path, file, { upsert: false });
      if (error) throw error;
      const { data } = supabase.storage.from("roof-photos").getPublicUrl(path);
      setItems((prev) => {
        const updated = prev.map((p) => (p.id === item.id ? { ...p, uploading: false, url: data.publicUrl } : p));
        onChange(updated.filter((i) => i.url).map((i) => i.url!));
        return updated;
      });
    } catch {
      setItems((prev) => prev.map((p) => (p.id === item.id ? { ...p, uploading: false, error: true } : p)));
    }
  };

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const imgs = Array.from(files).filter((f) => f.type.startsWith("image/")).slice(0, 8);
    const newItems: Item[] = imgs.map((f) => ({
      id: `${f.name}-${Date.now()}-${Math.random()}`,
      name: f.name,
      uploading: true,
      preview: URL.createObjectURL(f),
    }));
    const combined = [...items, ...newItems].slice(0, 8);
    setItems(combined);
    imgs.forEach((f, idx) => uploadOne(f, newItems[idx], combined));
  };

  const remove = (id: string) => sync(items.filter((i) => i.id !== id));

  return (
    <div>
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => { e.preventDefault(); setDrag(false); handleFiles(e.dataTransfer.files); }}
        className={`cursor-pointer rounded-xl border-2 border-dashed px-4 py-6 text-center transition-colors ${
          drag ? "border-[#D71920] bg-[#D71920]/10" : "border-white/15 bg-white/5 hover:border-[#D71920]/50"
        }`}
      >
        <UploadCloud className="h-7 w-7 text-[#D71920] mx-auto mb-2" />
        <p className="text-sm text-white font-medium">Drag &amp; drop roof photos</p>
        <p className="text-xs text-white/40 mt-1">or tap to browse — up to 8 images</p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {items.length > 0 && (
        <div className="mt-3 grid grid-cols-4 gap-2">
          {items.map((it) => (
            <div key={it.id} className="relative aspect-square rounded-lg overflow-hidden border border-white/10 bg-white/5">
              <img src={it.preview} alt={it.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                {it.uploading && <Loader2 className="h-5 w-5 text-white animate-spin" />}
                {it.url && <CheckCircle2 className="h-5 w-5 text-[#D71920]" />}
                {it.error && <ImageIcon className="h-5 w-5 text-red-400" />}
              </div>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); remove(it.id); }}
                className="absolute top-1 right-1 h-5 w-5 rounded-full bg-black/70 text-white flex items-center justify-center"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
