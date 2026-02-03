"use client";

import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse rounded-3xl border border-white/10 bg-white/5" />
  ),
});

export default function SplineScene({ scene }: { scene: string }) {
  return (
    <div className="h-full w-full">
      <Spline scene={scene} />
    </div>
  );
}
