import { Number, String, Record, Static } from "runtypes";

export const Verse = Record({
  id: Number,
  surah_id: Number,
  content: String,
  root_content: String,
});

export type Verse = Static<typeof Verse>;

export const VerseC = Record({
  v: Number,
  s: Number,
  c: String,
  r: String,
});

export type VerseC = Static<typeof VerseC>;

export const VerseProps = Record({
  surah: Number,
  page: Number,
});

export type VerseProps = Static<typeof VerseProps>;

export const toVerse = (v: VerseC): Verse => {
  VerseC.check(v);
  return {
    id: v.v,
    surah_id: v.s,
    content: v.c,
    root_content: v.r,
  };
};
