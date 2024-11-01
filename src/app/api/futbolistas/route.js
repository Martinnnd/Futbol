import { NextResponse } from "next/server";

let futbolistas = [];

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const equipo = searchParams.get("equipo");

  const filtroJugadores = equipo
    ? futbolistas.filter((jugador) => jugador.equipo === equipo)
    : futbolistas;

  return NextResponse.json(filtroJugadores);
}

export async function POST(req) {
  const nuevoJugador = await req.json();

  if (!nuevoJugador.name || !nuevoJugador.equipo) {
    return NextResponse.json(
      { error: "El nombre y el equipo son obligatorios" },
      { status: 400 }
    );
  }

  futbolistas.push(nuevoJugador);

  return NextResponse.json(nuevoJugador, { status: 291 });
}
