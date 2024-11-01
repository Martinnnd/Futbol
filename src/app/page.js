"use client";
import Juegos from "@/components/Juegos";

export default function Home() {
  return (
    <div className="text-center grid bg-mi-cuarto-personalizado">
      <h1 className="text-4xl italic font-bold bg-mi-color-personalizado border-y-2 border-t-0 py-4 border-b border-cyan-500 text-yellow-500 uppercase">
        Futbol <span className="text-cyan-400 uppercase">11 argentina</span>
      </h1>
      <Juegos />
    </div>
  );
}
