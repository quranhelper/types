import { Number, String, Array, Record, Static } from "runtypes";
export declare const SurahC: Record<{
    n: String;
    s: Number;
    r: Number;
    l: Number;
    p: Array<Number, false>;
}, false>;
export declare type SurahC = Static<typeof SurahC>;
export declare const Surah: Record<{
    name: String;
    surah_id: Number;
    revelation_order: Number;
    associated_locatiom: Number;
    pages: Array<Number, false>;
}, false>;
export declare type Surah = Static<typeof Surah>;
export declare const toSurah: (s: SurahC) => Surah;
