import { Number, String, Record, Static } from "runtypes";
export declare const Verse: Record<{
    id: Number;
    surah_id: Number;
    content: String;
    root_content: String;
}, false>;
export declare type Verse = Static<typeof Verse>;
export declare const VerseC: Record<{
    v: Number;
    s: Number;
    c: String;
    r: String;
}, false>;
export declare type VerseC = Static<typeof VerseC>;
export declare const VerseProps: Record<{
    surah: Number;
    page: Number;
}, false>;
export declare type VerseProps = Static<typeof VerseProps>;
export declare const toVerse: (v: VerseC) => Verse;
