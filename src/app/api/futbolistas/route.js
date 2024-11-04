import { NextResponse } from 'next/server';
import pool from '@/database/database';

let futbolistas = [];

export async function GET(req) {
  const futbolistas = await pool.query('select * from Jugadores');

  //const { searchParams } = new URL(req.url);
  //const equipo = searchParams.get('equipo');

  //const filtroJugadores = equipo ? futbolistas.filter((jugador) => jugador.equipo === equipo) : futbolistas;

  //return NextResponse.json(filtroJugadores);
  return NextResponse.json(futbolistas[0]);
}

export async function POST(req) {
  const nuevoJugador = await req.json();

  if (!nuevoJugador.name || !nuevoJugador.equipo) {
    return NextResponse.json({ error: 'El nombre y el equipo son obligatorios' }, { status: 400 });
  }

  futbolistas.push(nuevoJugador);

  return NextResponse.json(nuevoJugador, { status: 291 });
}
