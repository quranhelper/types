"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var runtypes = require("runtypes");

const SurahC = runtypes.Record({
  n: runtypes.String,
  s: runtypes.Number,
  r: runtypes.Number,
  l: runtypes.Number,
  p: runtypes.Array(runtypes.Number),
});
const Surah = runtypes.Record({
  name: runtypes.String,
  surah_id: runtypes.Number,
  revelation_order: runtypes.Number,
  associated_locatiom: runtypes.Number,
  pages: runtypes.Array(runtypes.Number),
});
const toSurah = (s) => {
  SurahC.check(s);
  return {
    name: s.n,
    surah_id: s.s,
    revelation_order: s.r,
    associated_locatiom: s.l,
    pages: s.p,
  };
};

const Verse = runtypes.Record({
  id: runtypes.Number,
  surah_id: runtypes.Number,
  content: runtypes.String,
  root_content: runtypes.String,
});
const VerseC = runtypes.Record({
  v: runtypes.Number,
  s: runtypes.Number,
  c: runtypes.String,
  r: runtypes.String,
});
const VerseProps = runtypes.Record({
  surah: runtypes.Number,
  page: runtypes.Number,
});
const toVerse = (v) => {
  VerseC.check(v);
  return {
    id: v.v,
    surah_id: v.s,
    content: v.c,
    root_content: v.r,
  };
};

exports.Surah = Surah;
exports.SurahC = SurahC;
exports.Verse = Verse;
exports.VerseC = VerseC;
exports.VerseProps = VerseProps;
exports.toSurah = toSurah;
exports.toVerse = toVerse;
//# sourceMappingURL=index.js.map
