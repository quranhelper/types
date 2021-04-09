import { Record, String, Number, Array } from 'runtypes';

const SurahC = Record({
    n: String,
    s: Number,
    r: Number,
    l: Number,
    p: Array(Number),
});
const Surah = Record({
    name: String,
    surah_id: Number,
    revelation_order: Number,
    associated_locatiom: Number,
    pages: Array(Number),
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

const Verse = Record({
    id: Number,
    surah_id: Number,
    content: String,
    root_content: String,
});
const VerseC = Record({
    v: Number,
    s: Number,
    c: String,
    r: String,
});
const VerseProps = Record({
    surah: Number,
    page: Number,
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

export { Surah, SurahC, Verse, VerseC, VerseProps, toSurah, toVerse };
//# sourceMappingURL=index.esm.js.map
