import { NextResponse } from 'next/server';
import pool from '@/database/database';

let futbolistas = [];

export async function GET(req) {
  try {
    const games = await pool.query('select * from Juegos');

    return NextResponse.json(games[0]);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  //const { searchParams } = new URL(req.url);
  //const equipo = searchParams.get('equipo');

  //const filtroJugadores = equipo ? futbolistas.filter((jugador) => jugador.equipo === equipo) : futbolistas;

  //return NextResponse.json(filtroJugadores);
}
