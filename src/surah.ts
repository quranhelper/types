import { Number, String, Array, Record, Static } from "runtypes";

export const SurahC = Record({
  n: String,
  s: Number,
  r: Number,
  l: Number,
  p: Array(Number),
});

export type SurahC = Static<typeof SurahC>;

export const Surah = Record({
  name: String,
  surah_id: Number,
  revelation_order: Number,
  associated_locatiom: Number,
  pages: Array(Number),
});

export type Surah = Static<typeof Surah>;

export const toSurah = (s: SurahC): Surah => {
  SurahC.check(s);
  return {
    name: s.n,
    surah_id: s.s,
    revelation_order: s.r,
    associated_locatiom: s.l,
    pages: s.p,
  };
};
