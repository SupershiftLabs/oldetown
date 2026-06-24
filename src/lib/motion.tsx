import React from "react";

// Lightweight framer-motion shim: strips animation props and renders plain elements.
const MOTION_PROPS = new Set([
  "initial", "animate", "exit", "transition", "variants", "whileHover", "whileTap",
  "whileInView", "viewport", "whileFocus", "whileDrag", "drag", "layout", "layoutId",
]);

function clean(props: Record<string, any>) {
  const out: Record<string, any> = {};
  for (const k in props) if (!MOTION_PROPS.has(k)) out[k] = props[k];
  return out;
}

type Tag = keyof JSX.IntrinsicElements;
const cache = new Map<string, ReturnType<typeof React.forwardRef>>();
const factory = (tag: Tag) => {
  if (!cache.has(tag)) {
    cache.set(tag, React.forwardRef<any, any>((props, ref) => React.createElement(tag, { ...clean(props), ref })));
  }
  return cache.get(tag);
};

export const motion: any = new Proxy(
  {},
  { get: (_t, tag: string) => factory(tag as Tag) }
);

export const AnimatePresence = ({ children }: { children: React.ReactNode }) => <>{children}</>;
