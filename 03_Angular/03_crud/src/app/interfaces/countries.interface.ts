export interface Country {
    name: Name;
    tld?: string[];
    cca2: string;
    ccn3?: string;
    cca3: string;
    cioc?: string;
    independent?: boolean;
    status: Status;
    unMember: boolean;
    currencies: Currencies;
    idd: Idd;
    capital: string[];
    altSpellings: string[];
    region: Region;
    subregion: Subregion;
    languages: Languages;
    translations: { [key: string]: Translation };
    latlng: number[];
    landlocked: boolean;
    borders?: string[];
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    gini?: { [key: string]: number };
    fifa?: string;
    car: Car;
    timezones: string[];
    continents: Region[];
    flags: CoatOfArms;
    coatOfArms: CoatOfArms;
    startOfWeek: StartOfWeek;
    capitalInfo: CapitalInfo;
    postalCode?: PostalCode;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side: Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Region {
    Europe = "Europe",
}

export interface Currencies {
    HUF?: All;
    HRK?: All;
    DKK?: All;
    FOK?: All;
    SEK?: All;
    EUR?: All;
    CHF?: All;
    BAM?: BAM;
    MKD?: All;
    UAH?: All;
    NOK?: All;
    MDL?: All;
    GBP?: All;
    GIP?: All;
    JEP?: All;
    ALL?: All;
    BGN?: All;
    PLN?: All;
    ISK?: All;
    BYN?: All;
    RUB?: All;
    GGP?: All;
    CZK?: All;
    IMP?: All;
    RON?: All;
    RSD?: All;
}

export interface All {
    name: string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng: Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root: string;
    suffixes: string[];
}

export interface Languages {
    hun?: string;
    hrv?: string;
    dan?: string;
    fao?: string;
    swe?: string;
    spa?: string;
    nld?: string;
    deu?: string;
    bos?: string;
    srp?: string;
    mkd?: string;
    cnr?: string;
    cat?: string;
    ukr?: string;
    fra?: string;
    ltz?: string;
    nno?: string;
    nob?: string;
    smi?: string;
    ron?: string;
    ita?: string;
    eng?: string;
    slv?: string;
    mlt?: string;
    fin?: string;
    sqi?: string;
    gle?: string;
    lat?: string;
    nrf?: string;
    bul?: string;
    pol?: string;
    isl?: string;
    bel?: string;
    rus?: string;
    lav?: string;
    bar?: string;
    est?: string;
    nfr?: string;
    gsw?: string;
    roh?: string;
    por?: string;
    ell?: string;
    tur?: string;
    ces?: string;
    slk?: string;
    glv?: string;
    lit?: string;
    nor?: string;
}

export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Name {
    common: string;
    official: string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common: string;
}

export interface PostalCode {
    format: string;
    regex: string;
}

export enum StartOfWeek {
    Monday = "monday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}

export enum Subregion {
    CentralEurope = "Central Europe",
    EasternEurope = "Eastern Europe",
    NorthernEurope = "Northern Europe",
    SoutheastEurope = "Southeast Europe",
    SouthernEurope = "Southern Europe",
    WesternEurope = "Western Europe",
}
