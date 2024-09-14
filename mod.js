const armorsFilePath = 'global\\excel\\armor.txt';
const armors = D2RMM.readTsv(armorsFilePath);
const armorsMaxDefs = armors.rows.reduce((acc, v) => {
  acc[v.code] = v.maxac;
  return acc;
}, {});

const setItemsFilePath = 'global\\excel\\setitems.txt';
const setItems = D2RMM.readTsv(setItemsFilePath);
const setItemsNames = setItems.rows.map(row => row.index);

const uniqueItemsFilePath = 'global\\excel\\uniqueitems.txt';
const uniqueItems = D2RMM.readTsv(uniqueItemsFilePath);
const uniqueItemsNames = uniqueItems.rows.map(row => row.index);

const langs = [
    "enUS",
    "zhTW",
    "deDE",
    "esES",
    "frFR",
    "itIT",
    "koKR",
    "plPL",
    "esMX",
    "jaJP",
    "ptBR",
    "ruRU",
    "zhCN"
]

const items = [
    {
        "id": 1930,
        "Key": "cap",
        "stats": ""
    },
    {
        "id": 1931,
        "Key": "skp",
        "stats": ""
    },
    {
        "id": 1932,
        "Key": "hlm",
        "stats": ""
    },
    {
        "id": 1933,
        "Key": "fhl",
        "stats": ""
    },
    {
        "id": 1934,
        "Key": "ghm",
        "stats": ""
    },
    {
        "id": 1935,
        "Key": "crn",
        "stats": ""
    },
    {
        "id": 1936,
        "Key": "msk",
        "stats": ""
    },
    {
        "id": 1937,
        "Key": "qui",
        "stats": ""
    },
    {
        "id": 1938,
        "Key": "lea",
        "stats": ""
    },
    {
        "id": 1939,
        "Key": "hla",
        "stats": ""
    },
    {
        "id": 1940,
        "Key": "stu",
        "stats": ""
    },
    {
        "id": 1941,
        "Key": "rng",
        "stats": ""
    },
    {
        "id": 1942,
        "Key": "scl",
        "stats": ""
    },
    {
        "id": 1943,
        "Key": "chn",
        "stats": ""
    },
    {
        "id": 1944,
        "Key": "brs",
        "stats": ""
    },
    {
        "id": 1945,
        "Key": "spl",
        "stats": ""
    },
    {
        "id": 1946,
        "Key": "plt",
        "stats": ""
    },
    {
        "id": 1947,
        "Key": "fld",
        "stats": ""
    },
    {
        "id": 1948,
        "Key": "gth",
        "stats": ""
    },
    {
        "id": 1949,
        "Key": "ful",
        "stats": ""
    },
    {
        "id": 1950,
        "Key": "aar",
        "stats": ""
    },
    {
        "id": 1951,
        "Key": "ltp",
        "stats": ""
    },
    {
        "id": 1952,
        "Key": "buc",
        "stats": ""
    },
    {
        "id": 1953,
        "Key": "sml",
        "stats": ""
    },
    {
        "id": 1954,
        "Key": "lrg",
        "stats": ""
    },
    {
        "id": 1955,
        "Key": "kit",
        "stats": ""
    },
    {
        "id": 1956,
        "Key": "tow",
        "stats": ""
    },
    {
        "id": 1957,
        "Key": "gts",
        "stats": ""
    },
    {
        "id": 1958,
        "Key": "lgl",
        "stats": ""
    },
    {
        "id": 1959,
        "Key": "vgl",
        "stats": ""
    },
    {
        "id": 1960,
        "Key": "mgl",
        "stats": ""
    },
    {
        "id": 1961,
        "Key": "tgl",
        "stats": ""
    },
    {
        "id": 1962,
        "Key": "hgl",
        "stats": ""
    },
    {
        "id": 1963,
        "Key": "lbt",
        "stats": ""
    },
    {
        "id": 1964,
        "Key": "vbt",
        "stats": ""
    },
    {
        "id": 1965,
        "Key": "mbt",
        "stats": ""
    },
    {
        "id": 1966,
        "Key": "tbt",
        "stats": ""
    },
    {
        "id": 1967,
        "Key": "hbt",
        "stats": ""
    },
    {
        "id": 1968,
        "Key": "lbl",
        "stats": ""
    },
    {
        "id": 1969,
        "Key": "vbl",
        "stats": ""
    },
    {
        "id": 1970,
        "Key": "mbl",
        "stats": ""
    },
    {
        "id": 1971,
        "Key": "tbl",
        "stats": ""
    },
    {
        "id": 1972,
        "Key": "hbl",
        "stats": ""
    },
    {
        "id": 1973,
        "Key": "bhm",
        "stats": ""
    },
    {
        "id": 1974,
        "Key": "bsh",
        "stats": ""
    },
    {
        "id": 1975,
        "Key": "spk",
        "stats": ""
    },
    {
        "id": 1976,
        "Key": "hax",
        "stats": ""
    },
    {
        "id": 1977,
        "Key": "axe",
        "stats": ""
    },
    {
        "id": 1978,
        "Key": "2ax",
        "stats": ""
    },
    {
        "id": 1979,
        "Key": "mpi",
        "stats": ""
    },
    {
        "id": 1980,
        "Key": "wax",
        "stats": ""
    },
    {
        "id": 1981,
        "Key": "lax",
        "stats": ""
    },
    {
        "id": 1982,
        "Key": "bax",
        "stats": ""
    },
    {
        "id": 1983,
        "Key": "btx",
        "stats": ""
    },
    {
        "id": 1984,
        "Key": "gax",
        "stats": ""
    },
    {
        "id": 1985,
        "Key": "gix",
        "stats": ""
    },
    {
        "id": 1986,
        "Key": "wnd",
        "stats": ""
    },
    {
        "id": 1987,
        "Key": "ywn",
        "stats": ""
    },
    {
        "id": 1988,
        "Key": "bwn",
        "stats": ""
    },
    {
        "id": 1989,
        "Key": "gwn",
        "stats": ""
    },
    {
        "id": 1990,
        "Key": "clb",
        "stats": ""
    },
    {
        "id": 1991,
        "Key": "scp",
        "stats": ""
    },
    {
        "id": 1992,
        "Key": "gsc",
        "stats": ""
    },
    {
        "id": 1993,
        "Key": "wsp",
        "stats": ""
    },
    {
        "id": 1994,
        "Key": "spc",
        "stats": ""
    },
    {
        "id": 1995,
        "Key": "mac",
        "stats": ""
    },
    {
        "id": 1996,
        "Key": "mst",
        "stats": ""
    },
    {
        "id": 1997,
        "Key": "fla",
        "stats": ""
    },
    {
        "id": 1998,
        "Key": "whm",
        "stats": ""
    },
    {
        "id": 1999,
        "Key": "mau",
        "stats": ""
    },
    {
        "id": 2000,
        "Key": "gma",
        "stats": ""
    },
    {
        "id": 2001,
        "Key": "ssd",
        "stats": ""
    },
    {
        "id": 2002,
        "Key": "scm",
        "stats": ""
    },
    {
        "id": 2003,
        "Key": "sbr",
        "stats": ""
    },
    {
        "id": 2004,
        "Key": "flc",
        "stats": ""
    },
    {
        "id": 2005,
        "Key": "crs",
        "stats": ""
    },
    {
        "id": 2006,
        "Key": "bsd",
        "stats": ""
    },
    {
        "id": 2007,
        "Key": "lsd",
        "stats": ""
    },
    {
        "id": 2008,
        "Key": "wsd",
        "stats": ""
    },
    {
        "id": 2009,
        "Key": "2hs",
        "stats": ""
    },
    {
        "id": 2010,
        "Key": "clm",
        "stats": ""
    },
    {
        "id": 2011,
        "Key": "gis",
        "stats": ""
    },
    {
        "id": 2012,
        "Key": "bsw",
        "stats": ""
    },
    {
        "id": 2013,
        "Key": "flb",
        "stats": ""
    },
    {
        "id": 2014,
        "Key": "gsd",
        "stats": ""
    },
    {
        "id": 2015,
        "Key": "dgr",
        "stats": ""
    },
    {
        "id": 2016,
        "Key": "dir",
        "stats": ""
    },
    {
        "id": 2017,
        "Key": "kri",
        "stats": ""
    },
    {
        "id": 2018,
        "Key": "bld",
        "stats": ""
    },
    {
        "id": 2019,
        "Key": "tkf",
        "stats": ""
    },
    {
        "id": 2020,
        "Key": "tax",
        "stats": ""
    },
    {
        "id": 2021,
        "Key": "bkf",
        "stats": ""
    },
    {
        "id": 2022,
        "Key": "bal",
        "stats": ""
    },
    {
        "id": 2023,
        "Key": "jav",
        "stats": ""
    },
    {
        "id": 2024,
        "Key": "pil",
        "stats": ""
    },
    {
        "id": 2025,
        "Key": "ssp",
        "stats": ""
    },
    {
        "id": 2026,
        "Key": "glv",
        "stats": ""
    },
    {
        "id": 2027,
        "Key": "tsp",
        "stats": ""
    },
    {
        "id": 2028,
        "Key": "spr",
        "stats": ""
    },
    {
        "id": 2029,
        "Key": "tri",
        "stats": ""
    },
    {
        "id": 2030,
        "Key": "brn",
        "stats": ""
    },
    {
        "id": 2031,
        "Key": "spt",
        "stats": ""
    },
    {
        "id": 2032,
        "Key": "pik",
        "stats": ""
    },
    {
        "id": 2033,
        "Key": "bar",
        "stats": ""
    },
    {
        "id": 2034,
        "Key": "vou",
        "stats": ""
    },
    {
        "id": 2035,
        "Key": "scy",
        "stats": ""
    },
    {
        "id": 2036,
        "Key": "pax",
        "stats": ""
    },
    {
        "id": 2037,
        "Key": "hal",
        "stats": ""
    },
    {
        "id": 2038,
        "Key": "wsc",
        "stats": ""
    },
    {
        "id": 2039,
        "Key": "sst",
        "stats": ""
    },
    {
        "id": 2040,
        "Key": "lst",
        "stats": ""
    },
    {
        "id": 2041,
        "Key": "cst",
        "stats": ""
    },
    {
        "id": 2042,
        "Key": "bst",
        "stats": ""
    },
    {
        "id": 2043,
        "Key": "wst",
        "stats": ""
    },
    {
        "id": 2044,
        "Key": "sbw",
        "stats": ""
    },
    {
        "id": 2045,
        "Key": "hbw",
        "stats": ""
    },
    {
        "id": 2046,
        "Key": "lbw",
        "stats": ""
    },
    {
        "id": 2047,
        "Key": "cbw",
        "stats": ""
    },
    {
        "id": 2048,
        "Key": "sbb",
        "stats": ""
    },
    {
        "id": 2049,
        "Key": "lbb",
        "stats": ""
    },
    {
        "id": 2050,
        "Key": "swb",
        "stats": ""
    },
    {
        "id": 2051,
        "Key": "lwb",
        "stats": ""
    },
    {
        "id": 2052,
        "Key": "lxb",
        "stats": ""
    },
    {
        "id": 2053,
        "Key": "mxb",
        "stats": ""
    },
    {
        "id": 2054,
        "Key": "hxb",
        "stats": ""
    },
    {
        "id": 2055,
        "Key": "rxb",
        "stats": ""
    },
    {
        "id": 2056,
        "Key": "xpk",
        "stats": ""
    },
    {
        "id": 2057,
        "Key": "xsh",
        "stats": ""
    },
    {
        "id": 2058,
        "Key": "xh9",
        "stats": ""
    },
    {
        "id": 2059,
        "Key": "zhb",
        "stats": ""
    },
    {
        "id": 2060,
        "Key": "ztb",
        "stats": ""
    },
    {
        "id": 2061,
        "Key": "zmb",
        "stats": ""
    },
    {
        "id": 2062,
        "Key": "zvb",
        "stats": ""
    },
    {
        "id": 2063,
        "Key": "zlb",
        "stats": ""
    },
    {
        "id": 2064,
        "Key": "xhb",
        "stats": ""
    },
    {
        "id": 2065,
        "Key": "xtb",
        "stats": ""
    },
    {
        "id": 2066,
        "Key": "xmb",
        "stats": ""
    },
    {
        "id": 2067,
        "Key": "xvb",
        "stats": ""
    },
    {
        "id": 2068,
        "Key": "xlb",
        "stats": ""
    },
    {
        "id": 2070,
        "Key": "xtg",
        "stats": ""
    },
    {
        "id": 2071,
        "Key": "xmg",
        "stats": ""
    },
    {
        "id": 2072,
        "Key": "xvg",
        "stats": ""
    },
    {
        "id": 2073,
        "Key": "xlg",
        "stats": ""
    },
    {
        "id": 2074,
        "Key": "xts",
        "stats": ""
    },
    {
        "id": 2075,
        "Key": "xow",
        "stats": ""
    },
    {
        "id": 2076,
        "Key": "xit",
        "stats": ""
    },
    {
        "id": 2077,
        "Key": "xrg",
        "stats": ""
    },
    {
        "id": 2078,
        "Key": "xml",
        "stats": ""
    },
    {
        "id": 2079,
        "Key": "xuc",
        "stats": ""
    },
    {
        "id": 2080,
        "Key": "xtp",
        "stats": ""
    },
    {
        "id": 2081,
        "Key": "xar",
        "stats": ""
    },
    {
        "id": 2082,
        "Key": "xul",
        "stats": ""
    },
    {
        "id": 2083,
        "Key": "xth",
        "stats": ""
    },
    {
        "id": 2084,
        "Key": "xld",
        "stats": ""
    },
    {
        "id": 2085,
        "Key": "xlt",
        "stats": ""
    },
    {
        "id": 2086,
        "Key": "xpl",
        "stats": ""
    },
    {
        "id": 2087,
        "Key": "xrs",
        "stats": ""
    },
    {
        "id": 2088,
        "Key": "xhn",
        "stats": ""
    },
    {
        "id": 2089,
        "Key": "xcl",
        "stats": ""
    },
    {
        "id": 2090,
        "Key": "xng",
        "stats": ""
    },
    {
        "id": 2091,
        "Key": "xtu",
        "stats": ""
    },
    {
        "id": 2092,
        "Key": "xla",
        "stats": ""
    },
    {
        "id": 2093,
        "Key": "xea",
        "stats": ""
    },
    {
        "id": 2094,
        "Key": "xui",
        "stats": ""
    },
    {
        "id": 2095,
        "Key": "xsk",
        "stats": ""
    },
    {
        "id": 2096,
        "Key": "xrn",
        "stats": ""
    },
    {
        "id": 2098,
        "Key": "xhl",
        "stats": ""
    },
    {
        "id": 2099,
        "Key": "xlm",
        "stats": ""
    },
    {
        "id": 2100,
        "Key": "xkp",
        "stats": ""
    },
    {
        "id": 2101,
        "Key": "xap",
        "stats": ""
    },
    {
        "id": 2102,
        "Key": "8rx",
        "stats": ""
    },
    {
        "id": 2103,
        "Key": "8hx",
        "stats": ""
    },
    {
        "id": 2104,
        "Key": "8mx",
        "stats": ""
    },
    {
        "id": 2105,
        "Key": "8lx",
        "stats": ""
    },
    {
        "id": 2106,
        "Key": "8lw",
        "stats": ""
    },
    {
        "id": 2107,
        "Key": "8sw",
        "stats": ""
    },
    {
        "id": 2108,
        "Key": "8l8",
        "stats": ""
    },
    {
        "id": 2109,
        "Key": "8s8",
        "stats": ""
    },
    {
        "id": 2110,
        "Key": "8cb",
        "stats": ""
    },
    {
        "id": 2111,
        "Key": "8lb",
        "stats": ""
    },
    {
        "id": 2112,
        "Key": "8hb",
        "stats": ""
    },
    {
        "id": 2113,
        "Key": "8sb",
        "stats": ""
    },
    {
        "id": 2114,
        "Key": "8ws",
        "stats": ""
    },
    {
        "id": 2115,
        "Key": "8bs",
        "stats": ""
    },
    {
        "id": 2116,
        "Key": "8cs",
        "stats": ""
    },
    {
        "id": 2117,
        "Key": "8ls",
        "stats": ""
    },
    {
        "id": 2118,
        "Key": "8ss",
        "stats": ""
    },
    {
        "id": 2119,
        "Key": "9wc",
        "stats": ""
    },
    {
        "id": 2120,
        "Key": "9h9",
        "stats": ""
    },
    {
        "id": 2121,
        "Key": "9pa",
        "stats": ""
    },
    {
        "id": 2122,
        "Key": "9s8",
        "stats": ""
    },
    {
        "id": 2123,
        "Key": "9vo",
        "stats": ""
    },
    {
        "id": 2124,
        "Key": "9b7",
        "stats": ""
    },
    {
        "id": 2125,
        "Key": "9p9",
        "stats": ""
    },
    {
        "id": 2126,
        "Key": "9st",
        "stats": ""
    },
    {
        "id": 2127,
        "Key": "9br",
        "stats": ""
    },
    {
        "id": 2128,
        "Key": "9tr",
        "stats": ""
    },
    {
        "id": 2129,
        "Key": "9sr",
        "stats": ""
    },
    {
        "id": 2130,
        "Key": "9ts",
        "stats": ""
    },
    {
        "id": 2131,
        "Key": "9gl",
        "stats": ""
    },
    {
        "id": 2132,
        "Key": "9s9",
        "stats": ""
    },
    {
        "id": 2133,
        "Key": "9pi",
        "stats": ""
    },
    {
        "id": 2134,
        "Key": "9ja",
        "stats": ""
    },
    {
        "id": 2135,
        "Key": "9b8",
        "stats": ""
    },
    {
        "id": 2136,
        "Key": "9bk",
        "stats": ""
    },
    {
        "id": 2137,
        "Key": "9ta",
        "stats": ""
    },
    {
        "id": 2138,
        "Key": "9tk",
        "stats": ""
    },
    {
        "id": 2140,
        "Key": "9kr",
        "stats": ""
    },
    {
        "id": 2141,
        "Key": "9di",
        "stats": ""
    },
    {
        "id": 2142,
        "Key": "9dg",
        "stats": ""
    },
    {
        "id": 2143,
        "Key": "9gd",
        "stats": ""
    },
    {
        "id": 2144,
        "Key": "9fb",
        "stats": ""
    },
    {
        "id": 2145,
        "Key": "9gs",
        "stats": ""
    },
    {
        "id": 2146,
        "Key": "9cm",
        "stats": ""
    },
    {
        "id": 2147,
        "Key": "92h",
        "stats": ""
    },
    {
        "id": 2148,
        "Key": "9wd",
        "stats": ""
    },
    {
        "id": 2149,
        "Key": "9ls",
        "stats": ""
    },
    {
        "id": 2150,
        "Key": "9bs",
        "stats": ""
    },
    {
        "id": 2151,
        "Key": "9cr",
        "stats": ""
    },
    {
        "id": 2152,
        "Key": "9fc",
        "stats": ""
    },
    {
        "id": 2153,
        "Key": "9sb",
        "stats": ""
    },
    {
        "id": 2154,
        "Key": "9sm",
        "stats": ""
    },
    {
        "id": 2155,
        "Key": "9ss",
        "stats": ""
    },
    {
        "id": 2156,
        "Key": "9gm",
        "stats": ""
    },
    {
        "id": 2157,
        "Key": "9m9",
        "stats": ""
    },
    {
        "id": 2158,
        "Key": "9wh",
        "stats": ""
    },
    {
        "id": 2159,
        "Key": "9fl",
        "stats": ""
    },
    {
        "id": 2160,
        "Key": "9mt",
        "stats": ""
    },
    {
        "id": 2161,
        "Key": "9ma",
        "stats": ""
    },
    {
        "id": 2162,
        "Key": "9sp",
        "stats": ""
    },
    {
        "id": 2163,
        "Key": "9ws",
        "stats": ""
    },
    {
        "id": 2164,
        "Key": "9qs",
        "stats": ""
    },
    {
        "id": 2165,
        "Key": "9sc",
        "stats": ""
    },
    {
        "id": 2166,
        "Key": "9cl",
        "stats": ""
    },
    {
        "id": 2167,
        "Key": "9gw",
        "stats": ""
    },
    {
        "id": 2168,
        "Key": "9bw",
        "stats": ""
    },
    {
        "id": 2169,
        "Key": "9yw",
        "stats": ""
    },
    {
        "id": 2170,
        "Key": "9wn",
        "stats": ""
    },
    {
        "id": 2171,
        "Key": "9gi",
        "stats": ""
    },
    {
        "id": 2172,
        "Key": "9ga",
        "stats": ""
    },
    {
        "id": 2173,
        "Key": "9bt",
        "stats": ""
    },
    {
        "id": 2174,
        "Key": "9ba",
        "stats": ""
    },
    {
        "id": 2175,
        "Key": "9la",
        "stats": ""
    },
    {
        "id": 2176,
        "Key": "9wa",
        "stats": ""
    },
    {
        "id": 2177,
        "Key": "9mp",
        "stats": ""
    },
    {
        "id": 2178,
        "Key": "92a",
        "stats": ""
    },
    {
        "id": 2179,
        "Key": "9ax",
        "stats": ""
    },
    {
        "id": 2180,
        "Key": "9ha",
        "stats": ""
    },
    {
        "id": 2181,
        "Key": "9b9",
        "stats": ""
    },
    {
        "id": 2212,
        "Key": "amu",
        "stats": ""
    },
    {
        "id": 2214,
        "Key": "rin",
        "stats": ""
    },
    {
        "id": 2236,
        "Key": "gcv",
        "stats": ""
    },
    {
        "id": 2237,
        "Key": "gfv",
        "stats": ""
    },
    {
        "id": 2238,
        "Key": "gsv",
        "stats": ""
    },
    {
        "id": 2239,
        "Key": "gzv",
        "stats": ""
    },
    {
        "id": 2240,
        "Key": "gpv",
        "stats": ""
    },
    {
        "id": 2241,
        "Key": "gcy",
        "stats": ""
    },
    {
        "id": 2242,
        "Key": "gfy",
        "stats": ""
    },
    {
        "id": 2243,
        "Key": "gsy",
        "stats": ""
    },
    {
        "id": 2244,
        "Key": "gly",
        "stats": ""
    },
    {
        "id": 2245,
        "Key": "gpy",
        "stats": ""
    },
    {
        "id": 2246,
        "Key": "gcb",
        "stats": ""
    },
    {
        "id": 2247,
        "Key": "gfb",
        "stats": ""
    },
    {
        "id": 2249,
        "Key": "glb",
        "stats": ""
    },
    {
        "id": 2250,
        "Key": "gpb",
        "stats": ""
    },
    {
        "id": 2251,
        "Key": "gcg",
        "stats": ""
    },
    {
        "id": 2252,
        "Key": "gfg",
        "stats": ""
    },
    {
        "id": 2253,
        "Key": "glg",
        "stats": ""
    },
    {
        "id": 2255,
        "Key": "gpg",
        "stats": ""
    },
    {
        "id": 2256,
        "Key": "gcr",
        "stats": ""
    },
    {
        "id": 2257,
        "Key": "gfr",
        "stats": ""
    },
    {
        "id": 2259,
        "Key": "glr",
        "stats": ""
    },
    {
        "id": 2260,
        "Key": "gpr",
        "stats": ""
    },
    {
        "id": 2261,
        "Key": "gcw",
        "stats": ""
    },
    {
        "id": 2262,
        "Key": "gfw",
        "stats": ""
    },
    {
        "id": 2264,
        "Key": "glw",
        "stats": ""
    },
    {
        "id": 2265,
        "Key": "gpw",
        "stats": ""
    },
    {
        "id": 2277,
        "Key": "skc",
        "stats": ""
    },
    {
        "id": 2278,
        "Key": "skf",
        "stats": ""
    },
    {
        "id": 2279,
        "Key": "sku",
        "stats": ""
    },
    {
        "id": 2280,
        "Key": "skl",
        "stats": ""
    },
    {
        "id": 2281,
        "Key": "skz",
        "stats": ""
    },
    {
        "id": 2387,
        "Key": "veil",
        "stats": ""
    },
    {
        "id": 2574,
        "Key": "The Gnasher",
        "stats": "70ED"
    },
    {
        "id": 2575,
        "Key": "Deathspade",
        "stats": "70ED"
    },
    {
        "id": 2576,
        "Key": "Bladebone",
        "stats": "50ED"
    },
    {
        "id": 2577,
        "Key": "Mindrend",
        "stats": "100ED/100AR/1-15LD"
    },
    {
        "id": 2578,
        "Key": "Rakescar",
        "stats": "150ED"
    },
    {
        "id": 2579,
        "Key": "Fechmars Axe",
        "stats": "90ED"
    },
    {
        "id": 2580,
        "Key": "Goreshovel",
        "stats": "50ED"
    },
    {
        "id": 2581,
        "Key": "The Chieftan",
        "stats": "20@Res"
    },
    {
        "id": 2582,
        "Key": "Brainhew",
        "stats": "80ED/13LM"
    },
    {
        "id": 2583,
        "Key": "The Humongous",
        "stats": "120ED/8-25DAM/30STR"
    },
    {
        "id": 2585,
        "Key": "Maelstromwrath",
        "stats": "3/3/3/3"
    },
    {
        "id": 2586,
        "Key": "Gravenspine",
        "stats": "50Mana"
    },
    {
        "id": 2587,
        "Key": "Umes Lament",
        "stats": ""
    },
    {
        "id": 2588,
        "Key": "Felloak",
        "stats": "80ED"
    },
    {
        "id": 2589,
        "Key": "Knell Striker",
        "stats": "80ED"
    },
    {
        "id": 2590,
        "Key": "Rusthandle",
        "stats": "60ED/110DTU/3Vengeance"
    },
    {
        "id": 2591,
        "Key": "Stormeye",
        "stats": "120ED/5RL"
    },
    {
        "id": 2592,
        "Key": "Stoutnail",
        "stats": "10ATD"
    },
    {
        "id": 2593,
        "Key": "Crushflange",
        "stats": "60ED"
    },
    {
        "id": 2594,
        "Key": "Bloodrise",
        "stats": ""
    },
    {
        "id": 2595,
        "Key": "The Generals Tan Do Li Ga",
        "stats": "60ED"
    },
    {
        "id": 2596,
        "Key": "Ironstone",
        "stats": "150ED/150AR"
    },
    {
        "id": 2597,
        "Key": "Bonesob",
        "stats": "300ED"
    },
    {
        "id": 2598,
        "Key": "Steeldriver",
        "stats": "250ED"
    },
    {
        "id": 2599,
        "Key": "Rixots Keen",
        "stats": ""
    },
    {
        "id": 2600,
        "Key": "Blood Crescent",
        "stats": "80ED"
    },
    {
        "id": 2601,
        "Key": "Krintizs Skewer",
        "stats": ""
    },
    {
        "id": 2602,
        "Key": "Gleamscythe",
        "stats": "100ED"
    },
    {
        "id": 2603,
        "Key": "Azurewrath",
        "stats": "13SA/270ED/10@Attr"
    },
    {
        "id": 2604,
        "Key": "Griswolds Edge",
        "stats": "120ED/12-25FD"
    },
    {
        "id": 2605,
        "Key": "Hellplague",
        "stats": "80ED"
    },
    {
        "id": 2606,
        "Key": "Culwens Point",
        "stats": "80ED"
    },
    {
        "id": 2607,
        "Key": "Shadowfang",
        "stats": ""
    },
    {
        "id": 2608,
        "Key": "Soulflay",
        "stats": "100ED/10LM"
    },
    {
        "id": 2609,
        "Key": "Kinemils Awl",
        "stats": "100ED/150AR/6-40FD"
    },
    {
        "id": 2610,
        "Key": "Blacktongue",
        "stats": "60ED"
    },
    {
        "id": 2611,
        "Key": "Ripsaw",
        "stats": "100ED"
    },
    {
        "id": 2612,
        "Key": "The Patriarch",
        "stats": "120ED"
    },
    {
        "id": 2613,
        "Key": "Gull",
        "stats": ""
    },
    {
        "id": 2614,
        "Key": "The Diggler",
        "stats": ""
    },
    {
        "id": 2615,
        "Key": "The Jade Tan Do",
        "stats": "150AR"
    },
    {
        "id": 2616,
        "Key": "Irices Shard",
        "stats": ""
    },
    {
        "id": 2617,
        "Key": "The Dragon Chang",
        "stats": ""
    },
    {
        "id": 2618,
        "Key": "Razortine",
        "stats": "50ED"
    },
    {
        "id": 2619,
        "Key": "Bloodthief",
        "stats": "70ED/12LL"
    },
    {
        "id": 2620,
        "Key": "Lance of Yaggai",
        "stats": ""
    },
    {
        "id": 2621,
        "Key": "The Tannr Gorerod",
        "stats": "100ED"
    },
    {
        "id": 2622,
        "Key": "Dimoaks Hew",
        "stats": ""
    },
    {
        "id": 2623,
        "Key": "Steelgoad",
        "stats": "80ED"
    },
    {
        "id": 2624,
        "Key": "Soul Harvest",
        "stats": "90ED"
    },
    {
        "id": 2625,
        "Key": "The Battlebranch",
        "stats": "70ED/100AR"
    },
    {
        "id": 2626,
        "Key": "Woestave",
        "stats": "40ED"
    },
    {
        "id": 2627,
        "Key": "The Grim Reaper",
        "stats": ""
    },
    {
        "id": 2628,
        "Key": "Bane Ash",
        "stats": "60ED"
    },
    {
        "id": 2629,
        "Key": "Serpent Lord",
        "stats": "40ED"
    },
    {
        "id": 2630,
        "Key": "Lazarus Spire",
        "stats": ""
    },
    {
        "id": 2631,
        "Key": "The Salamander",
        "stats": ""
    },
    {
        "id": 2632,
        "Key": "The Iron Jang Bong",
        "stats": ""
    },
    {
        "id": 2633,
        "Key": "Pluckeye",
        "stats": ""
    },
    {
        "id": 2634,
        "Key": "Witherstring",
        "stats": "50ED"
    },
    {
        "id": 2635,
        "Key": "Rimeraven",
        "stats": "70ED"
    },
    {
        "id": 2636,
        "Key": "Piercerib",
        "stats": "60ED"
    },
    {
        "id": 2637,
        "Key": "Pullspite",
        "stats": "90ED"
    },
    {
        "id": 2638,
        "Key": "Wizendraw",
        "stats": "80ED/100AR/-35CR"
    },
    {
        "id": 2639,
        "Key": "Hellclap",
        "stats": "90ED/75AR/15-50FD"
    },
    {
        "id": 2640,
        "Key": "Blastbark",
        "stats": "130ED"
    },
    {
        "id": 2641,
        "Key": "Leadcrow",
        "stats": ""
    },
    {
        "id": 2642,
        "Key": "Ichorsting",
        "stats": ""
    },
    {
        "id": 2643,
        "Key": "Hellcast",
        "stats": "80ED"
    },
    {
        "id": 2644,
        "Key": "Doomspittle",
        "stats": "100ED"
    },
    {
        "id": 2645,
        "Key": "War Bonnet",
        "stats": "Def19"
    },
    {
        "id": 2646,
        "Key": "Tarnhelm",
        "stats": "Def11/50MF"
    },
    {
        "id": 2647,
        "Key": "Coif of Glory",
        "stats": "Def28"
    },
    {
        "id": 2648,
        "Key": "Duskdeep",
        "stats": "50ED/20DEF"
    },
    {
        "id": 2649,
        "Key": "Wormskull",
        "stats": "Def36"
    },
    {
        "id": 2650,
        "Key": "Howltusk",
        "stats": ""
    },
    {
        "id": 2651,
        "Key": "Undead Crown",
        "stats": "100UAR/60ED"
    },
    {
        "id": 2652,
        "Key": "The Face of Horror",
        "stats": "Def52"
    },
    {
        "id": 2653,
        "Key": "Greyform",
        "stats": "Def31"
    },
    {
        "id": 2654,
        "Key": "Blinkbats Form",
        "stats": "Def42"
    },
    {
        "id": 2655,
        "Key": "The Centurion",
        "stats": "Def54"
    },
    {
        "id": 2656,
        "Key": "Twitchthroe",
        "stats": "Def60"
    },
    {
        "id": 2657,
        "Key": "Darkglow",
        "stats": "100ED"
    },
    {
        "id": 2658,
        "Key": "Hawkmail",
        "stats": "100ED"
    },
    {
        "id": 2659,
        "Key": "Sparking Mail",
        "stats": "85ED/14ATD"
    },
    {
        "id": 2660,
        "Key": "Venomsward",
        "stats": "100ED"
    },
    {
        "id": 2661,
        "Key": "Iceblink",
        "stats": "80ED"
    },
    {
        "id": 2662,
        "Key": "Boneflesh",
        "stats": "120ED"
    },
    {
        "id": 2663,
        "Key": "Rockfleece",
        "stats": "130ED"
    },
    {
        "id": 2664,
        "Key": "Rattlecage",
        "stats": "Def335"
    },
    {
        "id": 2665,
        "Key": "Goldskin",
        "stats": "150ED"
    },
    {
        "id": 2666,
        "Key": "Victors Silk",
        "stats": "120ED"
    },
    {
        "id": 2667,
        "Key": "Heavenly Garb",
        "stats": ""
    },
    {
        "id": 2668,
        "Key": "Pelta Lunata",
        "stats": "24DUR/40ED"
    },
    {
        "id": 2669,
        "Key": "Umbral Disk",
        "stats": "31DUR/50ED"
    },
    {
        "id": 2670,
        "Key": "Stormguild",
        "stats": "39DUR/60ED"
    },
    {
        "id": 2671,
        "Key": "Wall of the Eyeless",
        "stats": "40ED"
    },
    {
        "id": 2672,
        "Key": "Swordback Hold",
        "stats": "60ED"
    },
    {
        "id": 2673,
        "Key": "Steelclash",
        "stats": "50DUR/100ED"
    },
    {
        "id": 2674,
        "Key": "Bverrit Keep",
        "stats": "160DUR/120ED"
    },
    {
        "id": 2675,
        "Key": "The Ward",
        "stats": "50@Res"
    },
    {
        "id": 2676,
        "Key": "The Hand of Broc",
        "stats": "20ED"
    },
    {
        "id": 2677,
        "Key": "Bloodfist",
        "stats": "Def88(UP*2)/20ED"
    },
    {
        "id": 2678,
        "Key": "Chance Guards",
        "stats": "Def102(UP*2)/30ED/40MF"
    },
    {
        "id": 2679,
        "Key": "Magefist",
        "stats": "Def98(UP*2)/30ED"
    },
    {
        "id": 2680,
        "Key": "Frostburn",
        "stats": "Def93(UP)/20ED"
    },
    {
        "id": 2681,
        "Key": "Hotspur",
        "stats": "20ED"
    },
    {
        "id": 2682,
        "Key": "Gorefoot",
        "stats": "30ED"
    },
    {
        "id": 2683,
        "Key": "Treads of Cthon",
        "stats": "40ED"
    },
    {
        "id": 2684,
        "Key": "Goblin Toe",
        "stats": "60ED"
    },
    {
        "id": 2685,
        "Key": "Tearhaunch",
        "stats": "80ED"
    },
    {
        "id": 2686,
        "Key": "Lenyms Cord",
        "stats": ""
    },
    {
        "id": 2687,
        "Key": "Snakecord",
        "stats": "30ED"
    },
    {
        "id": 2688,
        "Key": "Nightsmoke",
        "stats": "50ED"
    },
    {
        "id": 2689,
        "Key": "Goldwrap",
        "stats": "Def130(UP*2)/60ED/80EG"
    },
    {
        "id": 2690,
        "Key": "Bladebuckle",
        "stats": "100ED"
    },
    {
        "id": 2692,
        "Key": "The Eye of Etlich",
        "stats": "2-5CD/7LL/40MDef/5LR"
    },
    {
        "id": 2693,
        "Key": "The Mahim-Oak Curio",
        "stats": ""
    },
    {
        "id": 2694,
        "Key": "Nagelring",
        "stats": "75AR/30MF"
    },
    {
        "id": 2695,
        "Key": "Manald Heal",
        "stats": "7LM/8REP"
    },
    {
        "id": 2696,
        "Key": "Gorgethroat",
        "stats": ""
    },
    {
        "id": 2701,
        "Key": "The Stone of Jordan",
        "stats": ""
    },
    {
        "id": 10000,
        "Key": "Cutthroat1",
        "stats": "200ED/9LL"
    },
    {
        "id": 10021,
        "Key": "xhm",
        "stats": ""
    },
    {
        "id": 10122,
        "Key": "Civerb's Ward",
        "stats": "Def29"
    },
    {
        "id": 10123,
        "Key": "Civerb's Icon",
        "stats": ""
    },
    {
        "id": 10124,
        "Key": "Civerb's Cudgel",
        "stats": "23MAX"
    },
    {
        "id": 10125,
        "Key": "Hsarus' Iron Heel",
        "stats": "Def9"
    },
    {
        "id": 10126,
        "Key": "Hsarus' Iron Fist",
        "stats": "BDef6"
    },
    {
        "id": 10127,
        "Key": "Hsarus' Iron Stay",
        "stats": ""
    },
    {
        "id": 10128,
        "Key": "Cleglaw's Tooth",
        "stats": ""
    },
    {
        "id": 10129,
        "Key": "Cleglaw's Claw",
        "stats": "Def27"
    },
    {
        "id": 10130,
        "Key": "Cleglaw's Pincers",
        "stats": "Def9"
    },
    {
        "id": 10131,
        "Key": "Iratha's Cord",
        "stats": ""
    },
    {
        "id": 10132,
        "Key": "Iratha's Coil",
        "stats": "BDef45"
    },
    {
        "id": 10133,
        "Key": "Iratha's Cuff",
        "stats": "Def11"
    },
    {
        "id": 10134,
        "Key": "Iratha's Collar",
        "stats": ""
    },
    {
        "id": 10135,
        "Key": "Isenhart's Horns",
        "stats": "Def26"
    },
    {
        "id": 10136,
        "Key": "Isenhart's Case",
        "stats": "BDef68"
    },
    {
        "id": 10137,
        "Key": "Isenhart's Parry",
        "stats": "Def75"
    },
    {
        "id": 10138,
        "Key": "Isenhart's Lightbrand",
        "stats": ""
    },
    {
        "id": 10140,
        "Key": "Vidala's Ambush",
        "stats": "BDef17"
    },
    {
        "id": 10141,
        "Key": "Vidala's Fetlock",
        "stats": "Def11"
    },
    {
        "id": 10142,
        "Key": "Vidala's Barb",
        "stats": ""
    },
    {
        "id": 10143,
        "Key": "Milabrega's Robe",
        "stats": ""
    },
    {
        "id": 10144,
        "Key": "Milabrega's Diadem",
        "stats": "Def45"
    },
    {
        "id": 10145,
        "Key": "Milabrega's Rod",
        "stats": ""
    },
    {
        "id": 10146,
        "Key": "Milabrega's Orb",
        "stats": ""
    },
    {
        "id": 10147,
        "Key": "Cathan's Seal",
        "stats": ""
    },
    {
        "id": 10148,
        "Key": "Cathan's Sigil",
        "stats": ""
    },
    {
        "id": 10149,
        "Key": "Cathan's Visage",
        "stats": "BDef27"
    },
    {
        "id": 10150,
        "Key": "Cathan's Mesh",
        "stats": "Def90"
    },
    {
        "id": 10151,
        "Key": "Cathan's Rule",
        "stats": ""
    },
    {
        "id": 10152,
        "Key": "Tancred's Crowbill",
        "stats": ""
    },
    {
        "id": 10153,
        "Key": "Tancred's Spine",
        "stats": "BDef161"
    },
    {
        "id": 10154,
        "Key": "Tancred's Hobnails",
        "stats": "Def3"
    },
    {
        "id": 10155,
        "Key": "Tancred's Weird",
        "stats": ""
    },
    {
        "id": 10156,
        "Key": "Tancred's Skull",
        "stats": "Def36"
    },
    {
        "id": 10157,
        "Key": "Sigon's Visor",
        "stats": "Def60"
    },
    {
        "id": 10158,
        "Key": "Sigon's Shelter",
        "stats": ""
    },
    {
        "id": 10159,
        "Key": "Sigon's Gage",
        "stats": "Def15"
    },
    {
        "id": 10160,
        "Key": "Sigon's Sabot",
        "stats": "Def15"
    },
    {
        "id": 10161,
        "Key": "Sigon's Wrap",
        "stats": "BDef11"
    },
    {
        "id": 10162,
        "Key": "Sigon's Guard",
        "stats": "Def25"
    },
    {
        "id": 10163,
        "Key": "Infernal Cranium",
        "stats": "BDef5"
    },
    {
        "id": 10164,
        "Key": "Infernal Torch",
        "stats": ""
    },
    {
        "id": 10165,
        "Key": "Infernal Sign",
        "stats": ""
    },
    {
        "id": 10166,
        "Key": "Berserker's Headgear",
        "stats": "Def33"
    },
    {
        "id": 10167,
        "Key": "Berserker's Hauberk",
        "stats": "BDef95"
    },
    {
        "id": 10168,
        "Key": "Berserker's Hatchet",
        "stats": ""
    },
    {
        "id": 10169,
        "Key": "Death's Hand",
        "stats": "Def3"
    },
    {
        "id": 10170,
        "Key": "Death's Guard",
        "stats": ""
    },
    {
        "id": 10171,
        "Key": "Death's Touch",
        "stats": ""
    },
    {
        "id": 10172,
        "Key": "Angelic Sickle",
        "stats": ""
    },
    {
        "id": 10173,
        "Key": "Angelic Mantle",
        "stats": ""
    },
    {
        "id": 10174,
        "Key": "Angelic Halo",
        "stats": ""
    },
    {
        "id": 10175,
        "Key": "Angelic Wings",
        "stats": ""
    },
    {
        "id": 10176,
        "Key": "Arctic Horn",
        "stats": ""
    },
    {
        "id": 10177,
        "Key": "Arctic Furs",
        "stats": "325ED"
    },
    {
        "id": 10178,
        "Key": "Arctic Binding",
        "stats": ""
    },
    {
        "id": 10179,
        "Key": "Arctic Mitts",
        "stats": "Def11"
    },
    {
        "id": 10180,
        "Key": "Arcanna's Sign",
        "stats": ""
    },
    {
        "id": 10181,
        "Key": "Arcanna's Deathwand",
        "stats": ""
    },
    {
        "id": 10182,
        "Key": "Arcanna's Head",
        "stats": "BDef11"
    },
    {
        "id": 10183,
        "Key": "Arcanna's Flesh",
        "stats": "BDef107"
    },
    {
        "id": 10911,
        "Key": "Whichwild String",
        "stats": "170ED"
    },
    {
        "id": 11006,
        "Key": "neg",
        "stats": ""
    },
    {
        "id": 11008,
        "Key": "uhf",
        "stats": ""
    },
    {
        "id": 11010,
        "Key": "7wa",
        "stats": ""
    },
    {
        "id": 11012,
        "Key": "xhg",
        "stats": ""
    },
    {
        "id": 11028,
        "Key": "9bl",
        "stats": ""
    },
    {
        "id": 11146,
        "Key": "pk1",
        "stats": ""
    },
    {
        "id": 11147,
        "Key": "pk2",
        "stats": ""
    },
    {
        "id": 11148,
        "Key": "pk3",
        "stats": ""
    },
    {
        "id": 11149,
        "Key": "dhn",
        "stats": ""
    },
    {
        "id": 11150,
        "Key": "bey",
        "stats": ""
    },
    {
        "id": 11151,
        "Key": "mbr",
        "stats": ""
    },
    {
        "id": 11152,
        "Key": "std",
        "stats": ""
    },
    {
        "id": 11153,
        "Key": "Hellfire Torch",
        "stats": "20@Attr/20@Res"
    },
    {
        "id": 11164,
        "Key": "tes",
        "stats": ""
    },
    {
        "id": 11165,
        "Key": "ceh",
        "stats": ""
    },
    {
        "id": 11166,
        "Key": "bet",
        "stats": ""
    },
    {
        "id": 11167,
        "Key": "fed",
        "stats": ""
    },
    {
        "id": 20181,
        "Key": "ktr",
        "stats": ""
    },
    {
        "id": 20182,
        "Key": "wrb",
        "stats": ""
    },
    {
        "id": 20183,
        "Key": "ces",
        "stats": ""
    },
    {
        "id": 20184,
        "Key": "clw",
        "stats": ""
    },
    {
        "id": 20185,
        "Key": "btl",
        "stats": ""
    },
    {
        "id": 20186,
        "Key": "skr",
        "stats": ""
    },
    {
        "id": 20187,
        "Key": "9ar",
        "stats": ""
    },
    {
        "id": 20188,
        "Key": "9wb",
        "stats": ""
    },
    {
        "id": 20189,
        "Key": "9xf",
        "stats": ""
    },
    {
        "id": 20190,
        "Key": "9cs",
        "stats": ""
    },
    {
        "id": 20191,
        "Key": "9lw",
        "stats": ""
    },
    {
        "id": 20192,
        "Key": "9tw",
        "stats": ""
    },
    {
        "id": 20193,
        "Key": "9qr",
        "stats": ""
    },
    {
        "id": 20194,
        "Key": "7ar",
        "stats": ""
    },
    {
        "id": 20195,
        "Key": "7wb",
        "stats": ""
    },
    {
        "id": 20196,
        "Key": "7xf",
        "stats": ""
    },
    {
        "id": 20197,
        "Key": "7cs",
        "stats": ""
    },
    {
        "id": 20198,
        "Key": "7lw",
        "stats": ""
    },
    {
        "id": 20199,
        "Key": "7tw",
        "stats": ""
    },
    {
        "id": 20200,
        "Key": "7qr",
        "stats": ""
    },
    {
        "id": 20201,
        "Key": "7ha",
        "stats": ""
    },
    {
        "id": 20202,
        "Key": "7ax",
        "stats": ""
    },
    {
        "id": 20203,
        "Key": "72a",
        "stats": ""
    },
    {
        "id": 20204,
        "Key": "7mp",
        "stats": ""
    },
    {
        "id": 20206,
        "Key": "7la",
        "stats": ""
    },
    {
        "id": 20207,
        "Key": "7ba",
        "stats": ""
    },
    {
        "id": 20208,
        "Key": "7bt",
        "stats": ""
    },
    {
        "id": 20209,
        "Key": "7ga",
        "stats": ""
    },
    {
        "id": 20210,
        "Key": "7gi",
        "stats": ""
    },
    {
        "id": 20211,
        "Key": "7wn",
        "stats": ""
    },
    {
        "id": 20212,
        "Key": "7yw",
        "stats": ""
    },
    {
        "id": 20213,
        "Key": "7bw",
        "stats": ""
    },
    {
        "id": 20214,
        "Key": "7gw",
        "stats": ""
    },
    {
        "id": 20215,
        "Key": "7cl",
        "stats": ""
    },
    {
        "id": 20216,
        "Key": "7sc",
        "stats": ""
    },
    {
        "id": 20217,
        "Key": "7qs",
        "stats": ""
    },
    {
        "id": 20218,
        "Key": "7ws",
        "stats": ""
    },
    {
        "id": 20219,
        "Key": "7sp",
        "stats": ""
    },
    {
        "id": 20220,
        "Key": "7ma",
        "stats": ""
    },
    {
        "id": 20221,
        "Key": "7mt",
        "stats": ""
    },
    {
        "id": 20222,
        "Key": "7fl",
        "stats": ""
    },
    {
        "id": 20223,
        "Key": "7wh",
        "stats": ""
    },
    {
        "id": 20224,
        "Key": "7m7",
        "stats": ""
    },
    {
        "id": 20225,
        "Key": "7gm",
        "stats": ""
    },
    {
        "id": 20226,
        "Key": "7ss",
        "stats": ""
    },
    {
        "id": 20227,
        "Key": "7sm",
        "stats": ""
    },
    {
        "id": 20228,
        "Key": "7sb",
        "stats": ""
    },
    {
        "id": 20229,
        "Key": "7fc",
        "stats": ""
    },
    {
        "id": 20230,
        "Key": "7cr",
        "stats": ""
    },
    {
        "id": 20231,
        "Key": "7bs",
        "stats": ""
    },
    {
        "id": 20232,
        "Key": "7ls",
        "stats": ""
    },
    {
        "id": 20233,
        "Key": "7wd",
        "stats": ""
    },
    {
        "id": 20234,
        "Key": "72h",
        "stats": ""
    },
    {
        "id": 20235,
        "Key": "7cm",
        "stats": ""
    },
    {
        "id": 20236,
        "Key": "7gs",
        "stats": ""
    },
    {
        "id": 20237,
        "Key": "7b7",
        "stats": ""
    },
    {
        "id": 20238,
        "Key": "7fb",
        "stats": ""
    },
    {
        "id": 20239,
        "Key": "7gd",
        "stats": ""
    },
    {
        "id": 20240,
        "Key": "7dg",
        "stats": ""
    },
    {
        "id": 20241,
        "Key": "7di",
        "stats": ""
    },
    {
        "id": 20242,
        "Key": "7kr",
        "stats": ""
    },
    {
        "id": 20243,
        "Key": "7bl",
        "stats": ""
    },
    {
        "id": 20244,
        "Key": "7tk",
        "stats": ""
    },
    {
        "id": 20245,
        "Key": "7ta",
        "stats": ""
    },
    {
        "id": 20246,
        "Key": "7bk",
        "stats": ""
    },
    {
        "id": 20247,
        "Key": "7b8",
        "stats": ""
    },
    {
        "id": 20248,
        "Key": "7ja",
        "stats": ""
    },
    {
        "id": 20249,
        "Key": "7pi",
        "stats": ""
    },
    {
        "id": 20250,
        "Key": "7s7",
        "stats": ""
    },
    {
        "id": 20251,
        "Key": "7gl",
        "stats": ""
    },
    {
        "id": 20252,
        "Key": "7ts",
        "stats": ""
    },
    {
        "id": 20253,
        "Key": "7sr",
        "stats": ""
    },
    {
        "id": 20254,
        "Key": "7tr",
        "stats": ""
    },
    {
        "id": 20255,
        "Key": "7br",
        "stats": ""
    },
    {
        "id": 20256,
        "Key": "7st",
        "stats": ""
    },
    {
        "id": 20257,
        "Key": "7p7",
        "stats": ""
    },
    {
        "id": 20258,
        "Key": "7o7",
        "stats": ""
    },
    {
        "id": 20259,
        "Key": "7vo",
        "stats": ""
    },
    {
        "id": 20260,
        "Key": "7s8",
        "stats": ""
    },
    {
        "id": 20261,
        "Key": "7pa",
        "stats": ""
    },
    {
        "id": 20262,
        "Key": "7h7",
        "stats": ""
    },
    {
        "id": 20263,
        "Key": "7wc",
        "stats": ""
    },
    {
        "id": 20264,
        "Key": "6ss",
        "stats": ""
    },
    {
        "id": 20265,
        "Key": "6ls",
        "stats": ""
    },
    {
        "id": 20266,
        "Key": "6cs",
        "stats": ""
    },
    {
        "id": 20267,
        "Key": "6bs",
        "stats": ""
    },
    {
        "id": 20268,
        "Key": "6ws",
        "stats": ""
    },
    {
        "id": 20269,
        "Key": "6sb",
        "stats": ""
    },
    {
        "id": 20270,
        "Key": "6hb",
        "stats": ""
    },
    {
        "id": 20271,
        "Key": "6lb",
        "stats": ""
    },
    {
        "id": 20272,
        "Key": "6cb",
        "stats": ""
    },
    {
        "id": 20273,
        "Key": "6s7",
        "stats": ""
    },
    {
        "id": 20274,
        "Key": "6l7",
        "stats": ""
    },
    {
        "id": 20275,
        "Key": "6sw",
        "stats": ""
    },
    {
        "id": 20276,
        "Key": "6lw",
        "stats": ""
    },
    {
        "id": 20277,
        "Key": "6lx",
        "stats": ""
    },
    {
        "id": 20278,
        "Key": "6mx",
        "stats": ""
    },
    {
        "id": 20279,
        "Key": "6hx",
        "stats": ""
    },
    {
        "id": 20280,
        "Key": "6rx",
        "stats": ""
    },
    {
        "id": 20281,
        "Key": "ob1",
        "stats": ""
    },
    {
        "id": 20282,
        "Key": "ob2",
        "stats": ""
    },
    {
        "id": 20283,
        "Key": "ob3",
        "stats": ""
    },
    {
        "id": 20284,
        "Key": "ob4",
        "stats": ""
    },
    {
        "id": 20285,
        "Key": "as1",
        "stats": ""
    },
    {
        "id": 20286,
        "Key": "as2",
        "stats": ""
    },
    {
        "id": 20287,
        "Key": "as3",
        "stats": ""
    },
    {
        "id": 20288,
        "Key": "as4",
        "stats": ""
    },
    {
        "id": 20289,
        "Key": "as5",
        "stats": ""
    },
    {
        "id": 20290,
        "Key": "as6",
        "stats": ""
    },
    {
        "id": 20291,
        "Key": "as7",
        "stats": ""
    },
    {
        "id": 20292,
        "Key": "am1",
        "stats": ""
    },
    {
        "id": 20293,
        "Key": "am2",
        "stats": ""
    },
    {
        "id": 20294,
        "Key": "am3",
        "stats": ""
    },
    {
        "id": 20295,
        "Key": "am4",
        "stats": ""
    },
    {
        "id": 20296,
        "Key": "am5",
        "stats": ""
    },
    {
        "id": 20297,
        "Key": "ob6",
        "stats": ""
    },
    {
        "id": 20298,
        "Key": "ob7",
        "stats": ""
    },
    {
        "id": 20299,
        "Key": "ob8",
        "stats": ""
    },
    {
        "id": 20300,
        "Key": "ob9",
        "stats": ""
    },
    {
        "id": 20301,
        "Key": "oba",
        "stats": ""
    },
    {
        "id": 20302,
        "Key": "am6",
        "stats": ""
    },
    {
        "id": 20303,
        "Key": "am7",
        "stats": ""
    },
    {
        "id": 20304,
        "Key": "am8",
        "stats": ""
    },
    {
        "id": 20305,
        "Key": "am9",
        "stats": ""
    },
    {
        "id": 20306,
        "Key": "ama",
        "stats": ""
    },
    {
        "id": 20307,
        "Key": "obb",
        "stats": ""
    },
    {
        "id": 20308,
        "Key": "obc",
        "stats": ""
    },
    {
        "id": 20309,
        "Key": "obd",
        "stats": ""
    },
    {
        "id": 20310,
        "Key": "obe",
        "stats": ""
    },
    {
        "id": 20311,
        "Key": "obf",
        "stats": ""
    },
    {
        "id": 20312,
        "Key": "amb",
        "stats": ""
    },
    {
        "id": 20313,
        "Key": "amc",
        "stats": ""
    },
    {
        "id": 20314,
        "Key": "amd",
        "stats": ""
    },
    {
        "id": 20315,
        "Key": "ame",
        "stats": ""
    },
    {
        "id": 20316,
        "Key": "amf",
        "stats": ""
    },
    {
        "id": 20317,
        "Key": "dr4",
        "stats": ""
    },
    {
        "id": 20318,
        "Key": "dr2",
        "stats": ""
    },
    {
        "id": 20319,
        "Key": "dr3",
        "stats": ""
    },
    {
        "id": 20320,
        "Key": "dr1",
        "stats": ""
    },
    {
        "id": 20321,
        "Key": "dr5",
        "stats": ""
    },
    {
        "id": 20322,
        "Key": "ba1",
        "stats": ""
    },
    {
        "id": 20323,
        "Key": "ba2",
        "stats": ""
    },
    {
        "id": 20324,
        "Key": "ba3",
        "stats": ""
    },
    {
        "id": 20325,
        "Key": "ba4",
        "stats": ""
    },
    {
        "id": 20326,
        "Key": "ba5",
        "stats": ""
    },
    {
        "id": 20327,
        "Key": "pa1",
        "stats": ""
    },
    {
        "id": 20328,
        "Key": "pa2",
        "stats": ""
    },
    {
        "id": 20329,
        "Key": "pa3",
        "stats": ""
    },
    {
        "id": 20330,
        "Key": "pa4",
        "stats": ""
    },
    {
        "id": 20331,
        "Key": "pa5",
        "stats": ""
    },
    {
        "id": 20332,
        "Key": "ne1",
        "stats": ""
    },
    {
        "id": 20333,
        "Key": "ne2",
        "stats": ""
    },
    {
        "id": 20334,
        "Key": "ne3",
        "stats": ""
    },
    {
        "id": 20335,
        "Key": "ne4",
        "stats": ""
    },
    {
        "id": 20336,
        "Key": "ne5",
        "stats": ""
    },
    {
        "id": 20337,
        "Key": "ci0",
        "stats": ""
    },
    {
        "id": 20338,
        "Key": "ci1",
        "stats": ""
    },
    {
        "id": 20339,
        "Key": "ci2",
        "stats": ""
    },
    {
        "id": 20340,
        "Key": "ci3",
        "stats": ""
    },
    {
        "id": 20341,
        "Key": "uap",
        "stats": ""
    },
    {
        "id": 20342,
        "Key": "ukp",
        "stats": ""
    },
    {
        "id": 20343,
        "Key": "ulm",
        "stats": ""
    },
    {
        "id": 20344,
        "Key": "uhl",
        "stats": ""
    },
    {
        "id": 20345,
        "Key": "uhm",
        "stats": ""
    },
    {
        "id": 20346,
        "Key": "urn",
        "stats": ""
    },
    {
        "id": 20347,
        "Key": "usk",
        "stats": ""
    },
    {
        "id": 20348,
        "Key": "uui",
        "stats": ""
    },
    {
        "id": 20349,
        "Key": "uea",
        "stats": ""
    },
    {
        "id": 20350,
        "Key": "ula",
        "stats": ""
    },
    {
        "id": 20351,
        "Key": "utu",
        "stats": ""
    },
    {
        "id": 20352,
        "Key": "ung",
        "stats": ""
    },
    {
        "id": 20353,
        "Key": "ucl",
        "stats": ""
    },
    {
        "id": 20354,
        "Key": "uhn",
        "stats": ""
    },
    {
        "id": 20355,
        "Key": "urs",
        "stats": ""
    },
    {
        "id": 20356,
        "Key": "upl",
        "stats": ""
    },
    {
        "id": 20357,
        "Key": "ult",
        "stats": ""
    },
    {
        "id": 20358,
        "Key": "uld",
        "stats": ""
    },
    {
        "id": 20359,
        "Key": "uth",
        "stats": ""
    },
    {
        "id": 20360,
        "Key": "uul",
        "stats": ""
    },
    {
        "id": 20361,
        "Key": "uar",
        "stats": ""
    },
    {
        "id": 20362,
        "Key": "utp",
        "stats": ""
    },
    {
        "id": 20363,
        "Key": "uuc",
        "stats": ""
    },
    {
        "id": 20364,
        "Key": "uml",
        "stats": ""
    },
    {
        "id": 20365,
        "Key": "urg",
        "stats": ""
    },
    {
        "id": 20366,
        "Key": "uit",
        "stats": ""
    },
    {
        "id": 20367,
        "Key": "uow",
        "stats": ""
    },
    {
        "id": 20368,
        "Key": "uts",
        "stats": ""
    },
    {
        "id": 20369,
        "Key": "ulg",
        "stats": ""
    },
    {
        "id": 20370,
        "Key": "uvg",
        "stats": ""
    },
    {
        "id": 20371,
        "Key": "umg",
        "stats": ""
    },
    {
        "id": 20372,
        "Key": "utg",
        "stats": ""
    },
    {
        "id": 20373,
        "Key": "uhg",
        "stats": ""
    },
    {
        "id": 20374,
        "Key": "ulb",
        "stats": ""
    },
    {
        "id": 20375,
        "Key": "uvb",
        "stats": ""
    },
    {
        "id": 20376,
        "Key": "umb",
        "stats": ""
    },
    {
        "id": 20377,
        "Key": "utb",
        "stats": ""
    },
    {
        "id": 20378,
        "Key": "uhb",
        "stats": ""
    },
    {
        "id": 20379,
        "Key": "ulc",
        "stats": ""
    },
    {
        "id": 20380,
        "Key": "uvc",
        "stats": ""
    },
    {
        "id": 20381,
        "Key": "umc",
        "stats": ""
    },
    {
        "id": 20382,
        "Key": "utc",
        "stats": ""
    },
    {
        "id": 20383,
        "Key": "uhc",
        "stats": ""
    },
    {
        "id": 20384,
        "Key": "uh9",
        "stats": ""
    },
    {
        "id": 20385,
        "Key": "ush",
        "stats": ""
    },
    {
        "id": 20386,
        "Key": "upk",
        "stats": ""
    },
    {
        "id": 20387,
        "Key": "dr9",
        "stats": ""
    },
    {
        "id": 20388,
        "Key": "dr7",
        "stats": ""
    },
    {
        "id": 20389,
        "Key": "dr8",
        "stats": ""
    },
    {
        "id": 20390,
        "Key": "dr6",
        "stats": ""
    },
    {
        "id": 20391,
        "Key": "dra",
        "stats": ""
    },
    {
        "id": 20392,
        "Key": "ba6",
        "stats": ""
    },
    {
        "id": 20393,
        "Key": "ba7",
        "stats": ""
    },
    {
        "id": 20394,
        "Key": "ba8",
        "stats": ""
    },
    {
        "id": 20395,
        "Key": "ba9",
        "stats": ""
    },
    {
        "id": 20396,
        "Key": "baa",
        "stats": ""
    },
    {
        "id": 20397,
        "Key": "pa6",
        "stats": ""
    },
    {
        "id": 20398,
        "Key": "pa7",
        "stats": ""
    },
    {
        "id": 20399,
        "Key": "pa8",
        "stats": ""
    },
    {
        "id": 20400,
        "Key": "pa9",
        "stats": ""
    },
    {
        "id": 20401,
        "Key": "paa",
        "stats": ""
    },
    {
        "id": 20402,
        "Key": "ne6",
        "stats": ""
    },
    {
        "id": 20403,
        "Key": "ne7",
        "stats": ""
    },
    {
        "id": 20404,
        "Key": "ne8",
        "stats": ""
    },
    {
        "id": 20405,
        "Key": "ne9",
        "stats": ""
    },
    {
        "id": 20406,
        "Key": "nea",
        "stats": ""
    },
    {
        "id": 20407,
        "Key": "dre",
        "stats": ""
    },
    {
        "id": 20408,
        "Key": "drc",
        "stats": ""
    },
    {
        "id": 20409,
        "Key": "drd",
        "stats": ""
    },
    {
        "id": 20410,
        "Key": "drb",
        "stats": ""
    },
    {
        "id": 20411,
        "Key": "drf",
        "stats": ""
    },
    {
        "id": 20412,
        "Key": "bab",
        "stats": ""
    },
    {
        "id": 20413,
        "Key": "bac",
        "stats": ""
    },
    {
        "id": 20414,
        "Key": "bad",
        "stats": ""
    },
    {
        "id": 20415,
        "Key": "bae",
        "stats": ""
    },
    {
        "id": 20416,
        "Key": "baf",
        "stats": ""
    },
    {
        "id": 20417,
        "Key": "pab",
        "stats": ""
    },
    {
        "id": 20418,
        "Key": "pac",
        "stats": ""
    },
    {
        "id": 20419,
        "Key": "pae",
        "stats": ""
    },
    {
        "id": 20420,
        "Key": "paf",
        "stats": ""
    },
    {
        "id": 20421,
        "Key": "neb",
        "stats": ""
    },
    {
        "id": 20422,
        "Key": "nec",
        "stats": ""
    },
    {
        "id": 20423,
        "Key": "ned",
        "stats": ""
    },
    {
        "id": 20424,
        "Key": "nee",
        "stats": ""
    },
    {
        "id": 20425,
        "Key": "nef",
        "stats": ""
    },
    {
        "id": 20433,
        "Key": "jew",
        "stats": ""
    },
    {
        "id": 20434,
        "Key": "hrb",
        "stats": ""
    },
    {
        "id": 20435,
        "Key": "cm1",
        "stats": ""
    },
    {
        "id": 20436,
        "Key": "cm2",
        "stats": ""
    },
    {
        "id": 20437,
        "Key": "cm3",
        "stats": ""
    },
    {
        "id": 20676,
        "Key": "spe",
        "stats": ""
    },
    {
        "id": 20677,
        "Key": "scz",
        "stats": ""
    },
    {
        "id": 20678,
        "Key": "sol",
        "stats": ""
    },
    {
        "id": 20679,
        "Key": "qll",
        "stats": ""
    },
    {
        "id": 20680,
        "Key": "fng",
        "stats": ""
    },
    {
        "id": 20681,
        "Key": "flg",
        "stats": ""
    },
    {
        "id": 20682,
        "Key": "tal",
        "stats": ""
    },
    {
        "id": 20683,
        "Key": "hrn",
        "stats": ""
    },
    {
        "id": 20684,
        "Key": "eyz",
        "stats": ""
    },
    {
        "id": 20685,
        "Key": "jaw",
        "stats": ""
    },
    {
        "id": 20686,
        "Key": "brz",
        "stats": ""
    },
    {
        "id": 20687,
        "Key": "hrt",
        "stats": ""
    },
    {
        "id": 21286,
        "Key": "Coldkill",
        "stats": "190ED"
    },
    {
        "id": 21287,
        "Key": "Butchers Cleaver",
        "stats": ""
    },
    {
        "id": 21288,
        "Key": "Butcher's Pupil",
        "stats": "200ED"
    },
    {
        "id": 21289,
        "Key": "Islestrike",
        "stats": "190ED"
    },
    {
        "id": 21290,
        "Key": "Pompe's Wrath",
        "stats": "170ED"
    },
    {
        "id": 21291,
        "Key": "Guardian Naga",
        "stats": "180ED"
    },
    {
        "id": 21292,
        "Key": "Warlord's Trust",
        "stats": ""
    },
    {
        "id": 21293,
        "Key": "Spellsteel",
        "stats": "15MDR"
    },
    {
        "id": 21294,
        "Key": "Stormrider",
        "stats": "lvl20CB"
    },
    {
        "id": 21295,
        "Key": "Boneslayer Blade",
        "stats": "220ED"
    },
    {
        "id": 21296,
        "Key": "The Minotaur",
        "stats": ""
    },
    {
        "id": 21297,
        "Key": "Suicide Branch",
        "stats": ""
    },
    {
        "id": 21298,
        "Key": "Cairn Shard",
        "stats": ""
    },
    {
        "id": 21299,
        "Key": "Arm of King Leoric",
        "stats": ""
    },
    {
        "id": 21300,
        "Key": "Blackhand Key",
        "stats": ""
    },
    {
        "id": 21301,
        "Key": "Dark Clan Crusher",
        "stats": "25AR"
    },
    {
        "id": 21302,
        "Key": "Drulan's Tongue",
        "stats": ""
    },
    {
        "id": 21303,
        "Key": "Zakrum's Hand",
        "stats": ""
    },
    {
        "id": 21304,
        "Key": "The Fetid Sprinkler",
        "stats": "190ED/200AR"
    },
    {
        "id": 21305,
        "Key": "Hand of Blessed Light",
        "stats": "160ED"
    },
    {
        "id": 21306,
        "Key": "Fleshrender",
        "stats": "200ED"
    },
    {
        "id": 21307,
        "Key": "Sureshrill Frost",
        "stats": "180ED"
    },
    {
        "id": 21308,
        "Key": "Moonfall",
        "stats": "150ED/12MDR"
    },
    {
        "id": 21309,
        "Key": "Baezils Vortex",
        "stats": ""
    },
    {
        "id": 21310,
        "Key": "Earthshaker",
        "stats": ""
    },
    {
        "id": 21311,
        "Key": "Bloodtree Stump",
        "stats": "220ED"
    },
    {
        "id": 21312,
        "Key": "The Gavel of Pain",
        "stats": "160ED"
    },
    {
        "id": 21313,
        "Key": "Bloodletter",
        "stats": "3Whirlwind/4BM"
    },
    {
        "id": 21314,
        "Key": "Coldsteal Eye",
        "stats": ""
    },
    {
        "id": 21315,
        "Key": "Hexfire",
        "stats": "160ED"
    },
    {
        "id": 21316,
        "Key": "Blade of Ali Baba",
        "stats": "120ED/15DEX"
    },
    {
        "id": 21317,
        "Key": "Riftslash",
        "stats": ""
    },
    {
        "id": 21318,
        "Key": "Headstriker",
        "stats": ""
    },
    {
        "id": 21319,
        "Key": "Plague Bearer",
        "stats": ""
    },
    {
        "id": 21320,
        "Key": "The Atlantien",
        "stats": ""
    },
    {
        "id": 21321,
        "Key": "Crainte Vomir",
        "stats": "200ED"
    },
    {
        "id": 21322,
        "Key": "Bing Sz Wang",
        "stats": "160ED"
    },
    {
        "id": 21323,
        "Key": "The Vile Husk",
        "stats": "200ED"
    },
    {
        "id": 21324,
        "Key": "Cloudcrack",
        "stats": "200ED"
    },
    {
        "id": 21325,
        "Key": "Todesfaelle Flamme",
        "stats": "160ED"
    },
    {
        "id": 21326,
        "Key": "Swordguard",
        "stats": "180ED/20@Res"
    },
    {
        "id": 21327,
        "Key": "Spineripper",
        "stats": "240ED"
    },
    {
        "id": 21328,
        "Key": "Heart Carver",
        "stats": "240ED"
    },
    {
        "id": 21329,
        "Key": "Blackbog's Sharp",
        "stats": ""
    },
    {
        "id": 21330,
        "Key": "Stormspike",
        "stats": ""
    },
    {
        "id": 21331,
        "Key": "The Impaler",
        "stats": "170ED"
    },
    {
        "id": 21332,
        "Key": "Kelpie Snare",
        "stats": "180ED"
    },
    {
        "id": 21333,
        "Key": "Soulfeast Tine",
        "stats": "190ED/250AR"
    },
    {
        "id": 21334,
        "Key": "Hone Sundan",
        "stats": "200ED"
    },
    {
        "id": 21335,
        "Key": "Spire of Honor",
        "stats": "200ED"
    },
    {
        "id": 21336,
        "Key": "The Meat Scraper",
        "stats": "200ED"
    },
    {
        "id": 21337,
        "Key": "Blackleach Blade",
        "stats": "140ED"
    },
    {
        "id": 21338,
        "Key": "Athena's Wrath",
        "stats": "3DRU/180ED"
    },
    {
        "id": 21339,
        "Key": "Pierre Tombale Couant",
        "stats": "220ED/200AR"
    },
    {
        "id": 21340,
        "Key": "Husoldal Evo",
        "stats": "200ED/250AR"
    },
    {
        "id": 21341,
        "Key": "Grim's Burning Dead",
        "stats": "180ED/250AR"
    },
    {
        "id": 21342,
        "Key": "Ribcracker",
        "stats": "300ED"
    },
    {
        "id": 21343,
        "Key": "Chromatic Ire",
        "stats": "25MaxLife/40@Res"
    },
    {
        "id": 21344,
        "Key": "Warpspear",
        "stats": ""
    },
    {
        "id": 21345,
        "Key": "Skullcollector",
        "stats": ""
    },
    {
        "id": 21346,
        "Key": "Skystrike",
        "stats": "200ED"
    },
    {
        "id": 21347,
        "Key": "Kuko Shakaku",
        "stats": "180ED"
    },
    {
        "id": 21348,
        "Key": "Endlessshail",
        "stats": ""
    },
    {
        "id": 21350,
        "Key": "Godstrike Arch",
        "stats": "250ED/150AR/200DTD/200DTU"
    },
    {
        "id": 21351,
        "Key": "Langer Briser",
        "stats": "200ED/30MAX/60MF"
    },
    {
        "id": 21352,
        "Key": "Pus Spiter",
        "stats": "220ED"
    },
    {
        "id": 21353,
        "Key": "Buriza-Do Kyanon",
        "stats": "200ED/150DEF"
    },
    {
        "id": 21354,
        "Key": "Vampiregaze",
        "stats": "8LM/8LL/20DR/15MDR"
    },
    {
        "id": 21355,
        "Key": "String of Ears",
        "stats": "Def188(UP)/8LL/180ED/15DR/15MDR"
    },
    {
        "id": 21356,
        "Key": "Gorerider",
        "stats": "Def213(UP)/200ED"
    },
    {
        "id": 21357,
        "Key": "Lavagout",
        "stats": "200ED"
    },
    {
        "id": 21358,
        "Key": "Venom Grip",
        "stats": "160ED/25DEF"
    },
    {
        "id": 21359,
        "Key": "Visceratuant",
        "stats": "150ED"
    },
    {
        "id": 21360,
        "Key": "Guardian Angle",
        "stats": "200ED"
    },
    {
        "id": 21361,
        "Key": "Shaftstop",
        "stats": "Def2422(EthUP)/220ED"
    },
    {
        "id": 21362,
        "Key": "Skin of the Vipermagi",
        "stats": "Def1034(UP)/35@Res/13MDR"
    },
    {
        "id": 21363,
        "Key": "Blackhorn",
        "stats": ""
    },
    {
        "id": 21364,
        "Key": "Valkiry Wing",
        "stats": "2AMA/200ED/4EK"
    },
    {
        "id": 21365,
        "Key": "Peasent Crown",
        "stats": "12REP"
    },
    {
        "id": 21366,
        "Key": "Demon Machine",
        "stats": ""
    },
    {
        "id": 21367,
        "Key": "Magewrath",
        "stats": "150ED/250AR/13MDR"
    },
    {
        "id": 21368,
        "Key": "Cliffkiller",
        "stats": "230ED/10-30DAM"
    },
    {
        "id": 21369,
        "Key": "Riphook",
        "stats": "220ED/10LL"
    },
    {
        "id": 21370,
        "Key": "Razorswitch",
        "stats": ""
    },
    {
        "id": 21371,
        "Key": "Meatscrape",
        "stats": ""
    },
    {
        "id": 21372,
        "Key": "Coldsteel Eye",
        "stats": "250ED"
    },
    {
        "id": 21373,
        "Key": "Pitblood Thirst",
        "stats": ""
    },
    {
        "id": 21374,
        "Key": "Gaya Wand",
        "stats": ""
    },
    {
        "id": 21375,
        "Key": "Ondal's Wisdom",
        "stats": "4Skills/550DEF/50ENG/8MDR"
    },
    {
        "id": 21376,
        "Key": "Geronimo's Fury",
        "stats": ""
    },
    {
        "id": 21377,
        "Key": "Charsi's Favor",
        "stats": ""
    },
    {
        "id": 21378,
        "Key": "Doppleganger's Shadow",
        "stats": ""
    },
    {
        "id": 21379,
        "Key": "Deathbit",
        "stats": "180ED/450AR/6LM/9LL"
    },
    {
        "id": 21380,
        "Key": "Warshrike",
        "stats": "250ED"
    },
    {
        "id": 21381,
        "Key": "Gutsiphon",
        "stats": "220ED/18LL"
    },
    {
        "id": 21382,
        "Key": "Razoredge",
        "stats": "225ED"
    },
    {
        "id": 21383,
        "Key": "Stonerattle",
        "stats": ""
    },
    {
        "id": 21384,
        "Key": "Marrowgrinder",
        "stats": ""
    },
    {
        "id": 21385,
        "Key": "Gore Ripper",
        "stats": ""
    },
    {
        "id": 21386,
        "Key": "Bush Wacker",
        "stats": ""
    },
    {
        "id": 21387,
        "Key": "Demonlimb",
        "stats": "230ED/13LL/20FR"
    },
    {
        "id": 21388,
        "Key": "Steelshade",
        "stats": "8LM/130ED/18REP/11FA"
    },
    {
        "id": 21389,
        "Key": "Tomb Reaver",
        "stats": "280ED/230DTU/350UAR/50@Res/14LK/80MF/3S"
    },
    {
        "id": 21390,
        "Key": "Death's Web",
        "stats": ""
    },
    {
        "id": 21391,
        "Key": "Gaia's Wrath",
        "stats": ""
    },
    {
        "id": 21392,
        "Key": "Khalim's Vengance",
        "stats": ""
    },
    {
        "id": 21393,
        "Key": "Angel's Song",
        "stats": ""
    },
    {
        "id": 21394,
        "Key": "The Reedeemer",
        "stats": "300ED/120DAM/250DTD/4Redemption/4HB"
    },
    {
        "id": 21395,
        "Key": "Fleshbone",
        "stats": ""
    },
    {
        "id": 21396,
        "Key": "Odium",
        "stats": ""
    },
    {
        "id": 21397,
        "Key": "Blood Comet",
        "stats": ""
    },
    {
        "id": 21398,
        "Key": "Bonehew",
        "stats": "320ED"
    },
    {
        "id": 21399,
        "Key": "Steelrend",
        "stats": "Def281/60ED/210DEF/20STR"
    },
    {
        "id": 21400,
        "Key": "Stone Crusher",
        "stats": "320ED/30DAM/30STR"
    },
    {
        "id": 21401,
        "Key": "Bul-Kathos' Might",
        "stats": ""
    },
    {
        "id": 21402,
        "Key": "Arioc's Needle",
        "stats": "4Skills/230ED"
    },
    {
        "id": 21403,
        "Key": "Shadowdancer",
        "stats": "2SD/100ED/25DEX"
    },
    {
        "id": 21404,
        "Key": "Indiego's Fancy",
        "stats": ""
    },
    {
        "id": 21405,
        "Key": "Aladdin's Eviserator",
        "stats": ""
    },
    {
        "id": 21406,
        "Key": "Tyrael's Mercy",
        "stats": ""
    },
    {
        "id": 21407,
        "Key": "Souldrain",
        "stats": "7LM/7LL/120ED"
    },
    {
        "id": 21408,
        "Key": "Runemaster",
        "stats": "270ED/5S"
    },
    {
        "id": 21409,
        "Key": "Deathcleaver",
        "stats": "280ED/9LK"
    },
    {
        "id": 21410,
        "Key": "Executioner's Justice",
        "stats": "290ED"
    },
    {
        "id": 21411,
        "Key": "Wallace's Tear",
        "stats": ""
    },
    {
        "id": 21412,
        "Key": "Leviathan",
        "stats": "200ED/150DEF/50STR/25DR"
    },
    {
        "id": 21413,
        "Key": "The Wanderer's Blade",
        "stats": ""
    },
    {
        "id": 21414,
        "Key": "Qual'Kek's Enforcer",
        "stats": ""
    },
    {
        "id": 21415,
        "Key": "Dawnbringer",
        "stats": ""
    },
    {
        "id": 21416,
        "Key": "Dragontooth",
        "stats": ""
    },
    {
        "id": 21417,
        "Key": "Wisp",
        "stats": "20LA/20MF"
    },
    {
        "id": 21418,
        "Key": "Gargoyle's Bite",
        "stats": "230ED/15LL"
    },
    {
        "id": 21419,
        "Key": "Lacerator",
        "stats": "210ED"
    },
    {
        "id": 21420,
        "Key": "Mang Song's Lesson",
        "stats": "-15LR/-15FR/-15CR"
    },
    {
        "id": 21421,
        "Key": "Viperfork",
        "stats": "240ED/250AR/50PR"
    },
    {
        "id": 21422,
        "Key": "Blood Chalice",
        "stats": ""
    },
    {
        "id": 21423,
        "Key": "El Espiritu",
        "stats": ""
    },
    {
        "id": 21424,
        "Key": "The Long Rod",
        "stats": ""
    },
    {
        "id": 21425,
        "Key": "Demonhorn's Edge",
        "stats": "3/3/3/6LL/160ED/77ATD"
    },
    {
        "id": 21426,
        "Key": "The Ensanguinator",
        "stats": ""
    },
    {
        "id": 21427,
        "Key": "The Reaper's Toll",
        "stats": "240ED/15LL"
    },
    {
        "id": 21428,
        "Key": "Spiritkeeper",
        "stats": "2DRU/190ED/40FR/14LA/25CA"
    },
    {
        "id": 21429,
        "Key": "Hellrack",
        "stats": "230ED/150AR"
    },
    {
        "id": 21430,
        "Key": "Alma Negra",
        "stats": "2PAL/75/75/210/9"
    },
    {
        "id": 21431,
        "Key": "Darkforge Spawn",
        "stats": "3/3/3/180ED"
    },
    {
        "id": 21432,
        "Key": "Rockhew",
        "stats": ""
    },
    {
        "id": 21433,
        "Key": "Sankenkur's Resurrection",
        "stats": ""
    },
    {
        "id": 21434,
        "Key": "Erion's Bonehandle",
        "stats": ""
    },
    {
        "id": 21435,
        "Key": "The Archon Magus",
        "stats": ""
    },
    {
        "id": 21436,
        "Key": "Widow maker",
        "stats": ""
    },
    {
        "id": 21437,
        "Key": "Catgut",
        "stats": ""
    },
    {
        "id": 21438,
        "Key": "Ghostflame",
        "stats": "240ED/15LM"
    },
    {
        "id": 21439,
        "Key": "Shadowkiller",
        "stats": "220ED/15EK"
    },
    {
        "id": 21440,
        "Key": "Bling Bling",
        "stats": ""
    },
    {
        "id": 21441,
        "Key": "Nebucaneezer's Storm",
        "stats": ""
    },
    {
        "id": 21442,
        "Key": "Griffon's Eye",
        "stats": "Def260/-20LR/15LD/200DEF"
    },
    {
        "id": 21443,
        "Key": "Eaglewind",
        "stats": ""
    },
    {
        "id": 21444,
        "Key": "Windhammer",
        "stats": "230ED"
    },
    {
        "id": 21445,
        "Key": "Thunderstroke",
        "stats": "4J&S/200ED"
    },
    {
        "id": 21446,
        "Key": "Giantmaimer",
        "stats": ""
    },
    {
        "id": 21447,
        "Key": "Demon's Arch",
        "stats": "210ED/12LL"
    },
    {
        "id": 21448,
        "Key": "The Scalper",
        "stats": "200ED/6LL"
    },
    {
        "id": 21449,
        "Key": "Bloodmoon",
        "stats": "260ED/15LL/13LK"
    },
    {
        "id": 21450,
        "Key": "Djinnslayer",
        "stats": "240ED/150DTD/300DAR/6LM/7LA/2S"
    },
    {
        "id": 21451,
        "Key": "Cranebeak",
        "stats": "300ED/50MF"
    },
    {
        "id": 21452,
        "Key": "Iansang's Frenzy",
        "stats": ""
    },
    {
        "id": 21453,
        "Key": "Warhound",
        "stats": ""
    },
    {
        "id": 21454,
        "Key": "Gulletwound",
        "stats": ""
    },
    {
        "id": 21455,
        "Key": "Headhunter's Glory",
        "stats": "Def593/420DEF/350MDef/30FR/40PR/7LK/3S"
    },
    {
        "id": 21456,
        "Key": "Mordoc's marauder",
        "stats": ""
    },
    {
        "id": 21457,
        "Key": "Talberd's Law",
        "stats": ""
    },
    {
        "id": 21458,
        "Key": "Amodeus's Manipulator",
        "stats": ""
    },
    {
        "id": 21459,
        "Key": "Darksoul",
        "stats": ""
    },
    {
        "id": 21460,
        "Key": "The Black Adder",
        "stats": ""
    },
    {
        "id": 21461,
        "Key": "Earthshifter",
        "stats": "300ED"
    },
    {
        "id": 21462,
        "Key": "Nature's Peace",
        "stats": "30PR/11DR"
    },
    {
        "id": 21463,
        "Key": "Horazon's Chalice",
        "stats": ""
    },
    {
        "id": 21464,
        "Key": "Seraph's Hymn",
        "stats": "2DA/50/250/50/250"
    },
    {
        "id": 21465,
        "Key": "Zakarum's Salvation",
        "stats": ""
    },
    {
        "id": 21466,
        "Key": "Fleshripper",
        "stats": "300ED"
    },
    {
        "id": 21467,
        "Key": "Stonerage",
        "stats": ""
    },
    {
        "id": 21468,
        "Key": "Blood Rain",
        "stats": ""
    },
    {
        "id": 21469,
        "Key": "Horizon's Tornado",
        "stats": "280ED"
    },
    {
        "id": 21470,
        "Key": "Nord's Tenderizer",
        "stats": "330ED/180AR/4FT/15CA"
    },
    {
        "id": 21471,
        "Key": "Wrath of Cain",
        "stats": ""
    },
    {
        "id": 21472,
        "Key": "Siren's call",
        "stats": ""
    },
    {
        "id": 21473,
        "Key": "Jadetalon",
        "stats": "2SD/2MA/240ED/15LM/50@Res"
    },
    {
        "id": 21474,
        "Key": "Wraithfang",
        "stats": ""
    },
    {
        "id": 21475,
        "Key": "Blademaster",
        "stats": ""
    },
    {
        "id": 21476,
        "Key": "Cerebus",
        "stats": "4SS/120AR/10LL/2FR/140ED"
    },
    {
        "id": 21477,
        "Key": "Archangel's Deliverance",
        "stats": ""
    },
    {
        "id": 21478,
        "Key": "Sinblade",
        "stats": ""
    },
    {
        "id": 21479,
        "Key": "Runeslayer",
        "stats": ""
    },
    {
        "id": 21480,
        "Key": "Excalibur",
        "stats": ""
    },
    {
        "id": 21481,
        "Key": "Fuego Del Sol",
        "stats": ""
    },
    {
        "id": 21482,
        "Key": "Stoneraven",
        "stats": "3J&S/280ED/600DEF/50@Res"
    },
    {
        "id": 21483,
        "Key": "El Infierno",
        "stats": ""
    },
    {
        "id": 21484,
        "Key": "Moonrend",
        "stats": ""
    },
    {
        "id": 21485,
        "Key": "Larzuk's Champion",
        "stats": ""
    },
    {
        "id": 21486,
        "Key": "Nightsummon",
        "stats": ""
    },
    {
        "id": 21487,
        "Key": "Bonescapel",
        "stats": ""
    },
    {
        "id": 21488,
        "Key": "Rabbit Slayer",
        "stats": ""
    },
    {
        "id": 21489,
        "Key": "Pagan's Athame",
        "stats": ""
    },
    {
        "id": 21490,
        "Key": "The Swashbuckler",
        "stats": ""
    },
    {
        "id": 21491,
        "Key": "Kang's Virtue",
        "stats": ""
    },
    {
        "id": 21492,
        "Key": "Snaketongue",
        "stats": ""
    },
    {
        "id": 21493,
        "Key": "Lifechoke",
        "stats": ""
    },
    {
        "id": 21494,
        "Key": "Ethereal edge",
        "stats": ""
    },
    {
        "id": 21495,
        "Key": "Palo Grande",
        "stats": ""
    },
    {
        "id": 21496,
        "Key": "Carnageleaver",
        "stats": ""
    },
    {
        "id": 21497,
        "Key": "Ghostleach",
        "stats": ""
    },
    {
        "id": 21498,
        "Key": "Soulreaper",
        "stats": ""
    },
    {
        "id": 21499,
        "Key": "Samual's Caretaker",
        "stats": ""
    },
    {
        "id": 21500,
        "Key": "Hell's Whisper",
        "stats": ""
    },
    {
        "id": 21501,
        "Key": "The Harvester",
        "stats": ""
    },
    {
        "id": 21502,
        "Key": "Raiden's Crutch",
        "stats": ""
    },
    {
        "id": 21503,
        "Key": "The TreeEnt",
        "stats": ""
    },
    {
        "id": 21504,
        "Key": "Stormwillow",
        "stats": ""
    },
    {
        "id": 21505,
        "Key": "Moonshadow",
        "stats": ""
    },
    {
        "id": 21507,
        "Key": "Demonweb",
        "stats": ""
    },
    {
        "id": 21508,
        "Key": "Bloodraven's Charge",
        "stats": "4B&C/230ED/300AR"
    },
    {
        "id": 21509,
        "Key": "Shadefalcon",
        "stats": ""
    },
    {
        "id": 21510,
        "Key": "Robin's Yolk",
        "stats": ""
    },
    {
        "id": 21511,
        "Key": "Glimmershred",
        "stats": ""
    },
    {
        "id": 21512,
        "Key": "Wraithflight",
        "stats": "190ED/13LL"
    },
    {
        "id": 21513,
        "Key": "Lestron's Mark",
        "stats": ""
    },
    {
        "id": 21514,
        "Key": "Banshee's Wail",
        "stats": ""
    },
    {
        "id": 21515,
        "Key": "Windstrike",
        "stats": ""
    },
    {
        "id": 21516,
        "Key": "Medusa's Gaze",
        "stats": "9LL/180ED/80CR"
    },
    {
        "id": 21517,
        "Key": "Titanfist",
        "stats": ""
    },
    {
        "id": 21518,
        "Key": "Hadeshorn",
        "stats": ""
    },
    {
        "id": 21519,
        "Key": "Rockstopper",
        "stats": "Def694(EthUP)/220ED/40CR/40LR/50FR"
    },
    {
        "id": 21520,
        "Key": "Stealskull",
        "stats": "Def758(EthUP)/240ED/50MF"
    },
    {
        "id": 21521,
        "Key": "Darksight Helm",
        "stats": "BDef84/40FR"
    },
    {
        "id": 21522,
        "Key": "Crown of Thieves",
        "stats": "Def741(EthUP)/12LL/200ED/100EG"
    },
    {
        "id": 21523,
        "Key": "Blackhorn's Face",
        "stats": "Def739(EthUP)/220ED"
    },
    {
        "id": 21524,
        "Key": "The Spirit Shroud",
        "stats": "11MDR"
    },
    {
        "id": 21525,
        "Key": "Skin of the Flayed One",
        "stats": ""
    },
    {
        "id": 21526,
        "Key": "Ironpelt",
        "stats": "100ED/20DR/16MDR"
    },
    {
        "id": 21527,
        "Key": "Spiritforge",
        "stats": "160ED"
    },
    {
        "id": 21528,
        "Key": "Crow Caw",
        "stats": "180ED"
    },
    {
        "id": 21529,
        "Key": "Duriel's Shell",
        "stats": "Def2256(EthUP)/200ED"
    },
    {
        "id": 21530,
        "Key": "Skullder's Ire",
        "stats": "Def2331(EthUP)/200ED"
    },
    {
        "id": 21531,
        "Key": "Toothrow",
        "stats": "220ED/60DEF/40ATD"
    },
    {
        "id": 21532,
        "Key": "Atma's Wail",
        "stats": "160ED"
    },
    {
        "id": 21533,
        "Key": "Black Hades",
        "stats": "Def2505(EthUP)/60DTD/250DAR/200ED"
    },
    {
        "id": 21534,
        "Key": "Corpsemourn",
        "stats": "180ED"
    },
    {
        "id": 21535,
        "Key": "Que-hegan's Wisdom",
        "stats": "160ED/10MDR"
    },
    {
        "id": 21536,
        "Key": "Moser's Blessed Circle",
        "stats": ""
    },
    {
        "id": 21537,
        "Key": "Stormchaser",
        "stats": "220ED"
    },
    {
        "id": 21538,
        "Key": "Tiamat's Rebuke",
        "stats": "200ED/35@Res"
    },
    {
        "id": 21539,
        "Key": "Gerke's Sanctuary",
        "stats": ""
    },
    {
        "id": 21540,
        "Key": "Radimant's Sphere",
        "stats": "200ED"
    },
    {
        "id": 21541,
        "Key": "Gravepalm",
        "stats": "200DTU/200UAR/180ED"
    },
    {
        "id": 21542,
        "Key": "Ghoulhide",
        "stats": "5LM/190ED"
    },
    {
        "id": 21543,
        "Key": "Hellmouth",
        "stats": "200ED"
    },
    {
        "id": 21544,
        "Key": "Infernostride",
        "stats": "150ED/70EG"
    },
    {
        "id": 21545,
        "Key": "Waterwalk",
        "stats": "Def201(UP)/210ED/65Life"
    },
    {
        "id": 21546,
        "Key": "Silkweave",
        "stats": "Def194(UP)/190ED"
    },
    {
        "id": 21547,
        "Key": "Wartraveler",
        "stats": "190ED/10ATD/50MF"
    },
    {
        "id": 21548,
        "Key": "Razortail",
        "stats": "Def172(UP)/150ED"
    },
    {
        "id": 21549,
        "Key": "Gloomstrap",
        "stats": "150ED"
    },
    {
        "id": 21550,
        "Key": "Snowclash",
        "stats": "lvl20Blizzard/170ED"
    },
    {
        "id": 21551,
        "Key": "Thudergod's Vigor",
        "stats": "200ED"
    },
    {
        "id": 21552,
        "Key": "Lidless Wall",
        "stats": "130ED/5EK"
    },
    {
        "id": 21553,
        "Key": "Lanceguard",
        "stats": ""
    },
    {
        "id": 21554,
        "Key": "Squire's Cover",
        "stats": ""
    },
    {
        "id": 21555,
        "Key": "Boneflame",
        "stats": "3NEC/150ED/30@Res"
    },
    {
        "id": 21556,
        "Key": "Steelpillar",
        "stats": "260ED/80DEF"
    },
    {
        "id": 21557,
        "Key": "Nightwing's Veil",
        "stats": "15CD/120ED/20DEX/9CA"
    },
    {
        "id": 21558,
        "Key": "Hightower's Watch",
        "stats": ""
    },
    {
        "id": 21559,
        "Key": "Crown of Ages",
        "stats": "150DEF/30@Res/15DR/2S"
    },
    {
        "id": 21560,
        "Key": "Andariel's Visage",
        "stats": "10LL/150ED/30STR"
    },
    {
        "id": 21561,
        "Key": "Darkfear",
        "stats": ""
    },
    {
        "id": 21562,
        "Key": "Dragonscale",
        "stats": "200ED/25STR/20FA"
    },
    {
        "id": 21563,
        "Key": "Steel Carapice",
        "stats": "220ED/15RegMana/60CR/14DR"
    },
    {
        "id": 21564,
        "Key": "Ashrera's Wired Frame",
        "stats": ""
    },
    {
        "id": 21565,
        "Key": "Rainbow Facet",
        "stats": "5/5"
    },
    {
        "id": 21566,
        "Key": "Ravenlore",
        "stats": "-20FR/150ED/30ENG/25@Res"
    },
    {
        "id": 21567,
        "Key": "Boneshade",
        "stats": "2/3/3/5/5"
    },
    {
        "id": 21568,
        "Key": "Nethercrow",
        "stats": ""
    },
    {
        "id": 21569,
        "Key": "Hellwarden's Husk",
        "stats": ""
    },
    {
        "id": 21570,
        "Key": "Flamebellow",
        "stats": "240ED/18Inferno/20STR/10VIT/30FA"
    },
    {
        "id": 21571,
        "Key": "Fathom",
        "stats": "30CD/40LR/40FR"
    },
    {
        "id": 21572,
        "Key": "Wolfhowl",
        "stats": "3/6/6/6/150/15/15/15"
    },
    {
        "id": 21573,
        "Key": "Spirit Ward",
        "stats": "30ICB/180ED/40@Res/11CA"
    },
    {
        "id": 21574,
        "Key": "Kira's Guardian",
        "stats": "Def170/120DEF/70@Res"
    },
    {
        "id": 21575,
        "Key": "Orumus' Robes",
        "stats": ""
    },
    {
        "id": 21576,
        "Key": "Gheed's Fortune",
        "stats": "160EG/40MF/-15Price"
    },
    {
        "id": 21577,
        "Key": "The Vicar",
        "stats": ""
    },
    {
        "id": 21578,
        "Key": "Stormlash",
        "stats": "300ED/9LA"
    },
    {
        "id": 21579,
        "Key": "Halaberd's Reign",
        "stats": "2BO/2BC/170ED/23REP"
    },
    {
        "id": 21580,
        "Key": "Parkersor's Calm",
        "stats": ""
    },
    {
        "id": 21581,
        "Key": "Warriv's Warder",
        "stats": ""
    },
    {
        "id": 21582,
        "Key": "Spike Thorn",
        "stats": "150ED/20DR"
    },
    {
        "id": 21583,
        "Key": "Dracul's Grasp",
        "stats": "10LL/120ED/15STR/10LK"
    },
    {
        "id": 21584,
        "Key": "Frostwind",
        "stats": "230ED/14AB/15CA"
    },
    {
        "id": 21585,
        "Key": "Templar's Might",
        "stats": "2OA/220ED/300MDef/15STR/15VIT/50MS"
    },
    {
        "id": 21586,
        "Key": "Eschuta's temper",
        "stats": "3SOR/20LD/20FD/30ENG"
    },
    {
        "id": 21587,
        "Key": "Firelizard's Talons",
        "stats": "3MA/270ED/2/2/70FR"
    },
    {
        "id": 21588,
        "Key": "Sandstorm Trek",
        "stats": "170ED/15STR/15VIT/70PR"
    },
    {
        "id": 21589,
        "Key": "Marrowwalk",
        "stats": "2SM/200ED/20STR"
    },
    {
        "id": 21590,
        "Key": "Heaven's Light",
        "stats": "3PAL/300ED/20DLK/2S"
    },
    {
        "id": 21591,
        "Key": "Merman's Speed",
        "stats": ""
    },
    {
        "id": 21592,
        "Key": "Arachnid Mesh",
        "stats": "120ED"
    },
    {
        "id": 21593,
        "Key": "Nosferatu's Coil",
        "stats": "Def63/7LL"
    },
    {
        "id": 21594,
        "Key": "Metalgird",
        "stats": ""
    },
    {
        "id": 21595,
        "Key": "Verdugo's Hearty Cord",
        "stats": "140ED/40VIT/13REP/120MS/15DR"
    },
    {
        "id": 21596,
        "Key": "Sigurd's Staunch",
        "stats": ""
    },
    {
        "id": 21597,
        "Key": "Carrion Wind",
        "stats": "9LL/160MDef"
    },
    {
        "id": 21598,
        "Key": "Giantskull",
        "stats": "Def477/320DEF/35STR/2S"
    },
    {
        "id": 21599,
        "Key": "Ironward",
        "stats": "4CS/290ED/85DAM/200AR/7DR"
    },
    {
        "id": 21600,
        "Key": "Gillian's Brazier",
        "stats": ""
    },
    {
        "id": 21601,
        "Key": "Drakeflame",
        "stats": ""
    },
    {
        "id": 21602,
        "Key": "Dust Storm",
        "stats": ""
    },
    {
        "id": 21603,
        "Key": "Skulltred",
        "stats": ""
    },
    {
        "id": 21604,
        "Key": "Alma's Reflection",
        "stats": ""
    },
    {
        "id": 21605,
        "Key": "Drulan's Tounge",
        "stats": ""
    },
    {
        "id": 21606,
        "Key": "Sacred Charge",
        "stats": ""
    },
    {
        "id": 21607,
        "Key": "Bul-Kathos",
        "stats": ""
    },
    {
        "id": 21608,
        "Key": "Saracen's Chance",
        "stats": "25@Res"
    },
    {
        "id": 21609,
        "Key": "Highlord's Wrath",
        "stats": ""
    },
    {
        "id": 21610,
        "Key": "Raven Frost",
        "stats": "250AR/20DEX"
    },
    {
        "id": 21611,
        "Key": "Dwarf Star",
        "stats": "15MDR"
    },
    {
        "id": 21612,
        "Key": "Atma's Scarab",
        "stats": ""
    },
    {
        "id": 21613,
        "Key": "Mara's Kaleidoscope",
        "stats": "30@Res"
    },
    {
        "id": 21614,
        "Key": "Crescent Moon",
        "stats": "15LM/6LL"
    },
    {
        "id": 21615,
        "Key": "The Rising Sun",
        "stats": "lvl19Meteor"
    },
    {
        "id": 21616,
        "Key": "The Cat's Eye",
        "stats": ""
    },
    {
        "id": 21617,
        "Key": "Bul Katho's Wedding Band",
        "stats": "5LL"
    },
    {
        "id": 21618,
        "Key": "Rings",
        "stats": ""
    },
    {
        "id": 21619,
        "Key": "Metalgrid",
        "stats": "450AR/350DEF/35@Res"
    },
    {
        "id": 21621,
        "Key": "Stormshield",
        "stats": "BDef148"
    },
    {
        "id": 21622,
        "Key": "Blackoak Shield",
        "stats": "200ED"
    },
    {
        "id": 21623,
        "Key": "Ormus' Robes",
        "stats": "Def487/15CD/15LD/15FD/20DEF/15RegMana"
    },
    {
        "id": 21624,
        "Key": "Arkaine's Valor",
        "stats": "2Skills/180ED/15DR"
    },
    {
        "id": 21625,
        "Key": "The Gladiator's Bane",
        "stats": "200ED/20DR/20MDR"
    },
    {
        "id": 21626,
        "Key": "Veil of Steel",
        "stats": ""
    },
    {
        "id": 21627,
        "Key": "Harlequin Crest",
        "stats": "Def141"
    },
    {
        "id": 21628,
        "Key": "Lance Guard",
        "stats": "120ED"
    },
    {
        "id": 21629,
        "Key": "Kerke's Sanctuary",
        "stats": "240ED/30@Res/16DR/18MDR"
    },
    {
        "id": 21630,
        "Key": "Mosers Blessed Circle",
        "stats": "220ED"
    },
    {
        "id": 21631,
        "Key": "Que-Hegan's Wisdon",
        "stats": "160ED/10MDR"
    },
    {
        "id": 21632,
        "Key": "Guardian Angel",
        "stats": "200ED"
    },
    {
        "id": 21633,
        "Key": "Skin of the Flayerd One",
        "stats": "7LL/190ED/25REP"
    },
    {
        "id": 21634,
        "Key": "Armor",
        "stats": ""
    },
    {
        "id": 21635,
        "Key": "Windforce",
        "stats": "8LM"
    },
    {
        "id": 21636,
        "Key": "Eaglehorn",
        "stats": ""
    },
    {
        "id": 21637,
        "Key": "Gimmershred",
        "stats": "210ED"
    },
    {
        "id": 21638,
        "Key": "Widowmaker",
        "stats": "200ED/5GA"
    },
    {
        "id": 21639,
        "Key": "Stormspire",
        "stats": "250ED"
    },
    {
        "id": 21640,
        "Key": "Naj's Puzzler",
        "stats": ""
    },
    {
        "id": 21641,
        "Key": "Ethereal Edge",
        "stats": "180ED/350AR/200DTD/12FA/10DLK"
    },
    {
        "id": 21642,
        "Key": "Wizardspike",
        "stats": ""
    },
    {
        "id": 21643,
        "Key": "The Grandfather",
        "stats": "250ED"
    },
    {
        "id": 21644,
        "Key": "Doombringer",
        "stats": "250ED/7LL"
    },
    {
        "id": 21645,
        "Key": "Tyrael's Might",
        "stats": "100DTD/150ED/30STR/30@Res"
    },
    {
        "id": 21646,
        "Key": "Lightsabre",
        "stats": "lvl20CL/200ED/7LM"
    },
    {
        "id": 21647,
        "Key": "The Cranium Basher",
        "stats": "240ED"
    },
    {
        "id": 21648,
        "Key": "Schaefer's Hammer",
        "stats": "130ED"
    },
    {
        "id": 21649,
        "Key": "Baranar's Star",
        "stats": ""
    },
    {
        "id": 21650,
        "Key": "Deaths's Web",
        "stats": "2P&B/-50PR/12EK/12LK"
    },
    {
        "id": 21651,
        "Key": "Messerschmidt's Reaver",
        "stats": ""
    },
    {
        "id": 21652,
        "Key": "Hellslayer",
        "stats": "lvl20FB"
    },
    {
        "id": 21653,
        "Key": "Endlesshail",
        "stats": "220ED/5 Strafe"
    },
    {
        "id": 21654,
        "Key": "The Atlantian",
        "stats": "250ED"
    },
    {
        "id": 21655,
        "Key": "Riftlash",
        "stats": ""
    },
    {
        "id": 21656,
        "Key": "Baezil's Vortex",
        "stats": "200ED"
    },
    {
        "id": 21657,
        "Key": "Zakarum's Hand",
        "stats": "220ED"
    },
    {
        "id": 21658,
        "Key": "Carin Shard",
        "stats": ""
    },
    {
        "id": 21659,
        "Key": "The Minataur",
        "stats": "200ED/20STR"
    },
    {
        "id": 21661,
        "Key": "Trang-Oul's Guise",
        "stats": "Def257/100DEF"
    },
    {
        "id": 21662,
        "Key": "Trang-Oul's Wing",
        "stats": "Def189/45FR"
    },
    {
        "id": 21663,
        "Key": "Trang-Oul's Mask",
        "stats": ""
    },
    {
        "id": 21664,
        "Key": "Trang-Oul's Scales",
        "stats": ""
    },
    {
        "id": 21665,
        "Key": "Trang-Oul's Claws",
        "stats": "Def74"
    },
    {
        "id": 21666,
        "Key": "Trang-Oul's Girth",
        "stats": "Def166/100DEF/50Mana"
    },
    {
        "id": 21668,
        "Key": "Natalya's Totem",
        "stats": "Def300/175DEF/20STR/30DEX/20@Res"
    },
    {
        "id": 21669,
        "Key": "Natalya's Mark",
        "stats": ""
    },
    {
        "id": 21670,
        "Key": "Natalya's Shadow",
        "stats": "Def721/225DEF/3S"
    },
    {
        "id": 21671,
        "Key": "Natalya's Soul",
        "stats": "Def169/125DEF/25CR/25LR"
    },
    {
        "id": 21673,
        "Key": "Griswolds's Redemption",
        "stats": "240ED/4S"
    },
    {
        "id": 21674,
        "Key": "Griswold's Honor",
        "stats": "Def333"
    },
    {
        "id": 21675,
        "Key": "Griswold's Heart",
        "stats": "Def950"
    },
    {
        "id": 21676,
        "Key": "Griswold's Valor",
        "stats": "75ED/30MF"
    },
    {
        "id": 21677,
        "Key": "Tang's Imperial Robes",
        "stats": ""
    },
    {
        "id": 21678,
        "Key": "Tang's Fore-Fathers",
        "stats": ""
    },
    {
        "id": 21679,
        "Key": "Tang's Rule",
        "stats": ""
    },
    {
        "id": 21680,
        "Key": "Tang's Throne",
        "stats": ""
    },
    {
        "id": 21681,
        "Key": "Tang's Battle Standard",
        "stats": ""
    },
    {
        "id": 21682,
        "Key": "Ogun's Fierce Visage",
        "stats": ""
    },
    {
        "id": 21683,
        "Key": "Ogun's Shadow",
        "stats": ""
    },
    {
        "id": 21684,
        "Key": "Ogun's Lash",
        "stats": ""
    },
    {
        "id": 21685,
        "Key": "Ogun's Vengeance",
        "stats": ""
    },
    {
        "id": 21686,
        "Key": "Bul-Kathos' Warden",
        "stats": ""
    },
    {
        "id": 21688,
        "Key": "Bul-Kathos' Sacred Charge",
        "stats": ""
    },
    {
        "id": 21689,
        "Key": "Bul-Kathos' Tribal Guardian",
        "stats": ""
    },
    {
        "id": 21690,
        "Key": "Bul-Kathos' Custodian",
        "stats": ""
    },
    {
        "id": 21691,
        "Key": "Flowkrad's Howl",
        "stats": ""
    },
    {
        "id": 21692,
        "Key": "Flowkrad's Grin",
        "stats": ""
    },
    {
        "id": 21693,
        "Key": "Flowkrad's Fur",
        "stats": ""
    },
    {
        "id": 21694,
        "Key": "Flowkrad's Paws",
        "stats": ""
    },
    {
        "id": 21695,
        "Key": "Flowkrad's Sinew",
        "stats": ""
    },
    {
        "id": 21697,
        "Key": "Aldur's Stony Gaze",
        "stats": "Def171/50CR"
    },
    {
        "id": 21698,
        "Key": "Aldur's Deception",
        "stats": "Def857/50LR"
    },
    {
        "id": 21699,
        "Key": "Aldur's Guantlet",
        "stats": ""
    },
    {
        "id": 21700,
        "Key": "Aldur's Advance",
        "stats": "Def47/50FR"
    },
    {
        "id": 21702,
        "Key": "M'avina's True Sight",
        "stats": "Def210"
    },
    {
        "id": 21703,
        "Key": "M'avina's Embrace",
        "stats": "BDef523/12MDR"
    },
    {
        "id": 21704,
        "Key": "M'avina's Icy Clutch",
        "stats": "Def97/50DEF"
    },
    {
        "id": 21705,
        "Key": "M'avina's Tenet",
        "stats": "Def86"
    },
    {
        "id": 21706,
        "Key": "M'avina's Caster",
        "stats": ""
    },
    {
        "id": 21708,
        "Key": "Sazabi's Cobalt Redeemer",
        "stats": ""
    },
    {
        "id": 21709,
        "Key": "Sazabi's Ghost Liberator",
        "stats": "Def917/75Life"
    },
    {
        "id": 21710,
        "Key": "Sazabi's Mental Sheath",
        "stats": "Def184/20LR/20FR"
    },
    {
        "id": 21712,
        "Key": "Hwanin's Justice",
        "stats": ""
    },
    {
        "id": 21713,
        "Key": "Hwanin's Splendor",
        "stats": ""
    },
    {
        "id": 21714,
        "Key": "Hwanin's Refuge",
        "stats": "Def390"
    },
    {
        "id": 21715,
        "Key": "Hwanin's Cordon",
        "stats": ""
    },
    {
        "id": 21717,
        "Key": "Telling of Beads",
        "stats": "50PR/10ATD"
    },
    {
        "id": 21718,
        "Key": "Laying of Hands",
        "stats": "Def87"
    },
    {
        "id": 21719,
        "Key": "Rite of Passage",
        "stats": "Def60/25MS"
    },
    {
        "id": 21720,
        "Key": "Spiritual Custodian",
        "stats": "Def882/415DEF"
    },
    {
        "id": 21721,
        "Key": "Credendum",
        "stats": "Def115"
    },
    {
        "id": 21723,
        "Key": "Cow King's Horns",
        "stats": "Def128"
    },
    {
        "id": 21724,
        "Key": "Cow King's Hide",
        "stats": ""
    },
    {
        "id": 21725,
        "Key": "Cow King's Hoofs",
        "stats": "Def41/35DEF"
    },
    {
        "id": 21726,
        "Key": "Aragon's Masterpiece",
        "stats": ""
    },
    {
        "id": 21727,
        "Key": "Aragon's Sunfire",
        "stats": ""
    },
    {
        "id": 21728,
        "Key": "Aragon's Icy Stare",
        "stats": ""
    },
    {
        "id": 21729,
        "Key": "Aragon's Storm Cloud",
        "stats": ""
    },
    {
        "id": 21731,
        "Key": "Guillaume's Face",
        "stats": ""
    },
    {
        "id": 21732,
        "Key": "Willhelm's Pride",
        "stats": ""
    },
    {
        "id": 21733,
        "Key": "Magnus' Skin",
        "stats": ""
    },
    {
        "id": 21734,
        "Key": "Wihtstan's Guard",
        "stats": ""
    },
    {
        "id": 21735,
        "Key": "Titan's Revenge",
        "stats": "200ED/9LL"
    },
    {
        "id": 21736,
        "Key": "Shakabra's Crux",
        "stats": ""
    },
    {
        "id": 21737,
        "Key": "Lycander's Aim",
        "stats": "200ED/8LM"
    },
    {
        "id": 21738,
        "Key": "Shadow's Touch",
        "stats": ""
    },
    {
        "id": 21739,
        "Key": "The Prowler",
        "stats": ""
    },
    {
        "id": 21740,
        "Key": "Mortal Crescent",
        "stats": ""
    },
    {
        "id": 21741,
        "Key": "Cutthroat",
        "stats": ""
    },
    {
        "id": 21742,
        "Key": "Sarmichian Justice",
        "stats": ""
    },
    {
        "id": 21743,
        "Key": "Annihilus",
        "stats": "20@Attr/20@Res/10EXP"
    },
    {
        "id": 21744,
        "Key": "Arreat's Face",
        "stats": "Def756(EthUP)/200ED/6LL"
    },
    {
        "id": 21745,
        "Key": "The Harbinger",
        "stats": ""
    },
    {
        "id": 21746,
        "Key": "Doomseer",
        "stats": ""
    },
    {
        "id": 21747,
        "Key": "Howling Visage",
        "stats": ""
    },
    {
        "id": 21748,
        "Key": "Terra",
        "stats": ""
    },
    {
        "id": 21749,
        "Key": "Syrian",
        "stats": ""
    },
    {
        "id": 21750,
        "Key": "Jalal's Mane",
        "stats": "200ED"
    },
    {
        "id": 21751,
        "Key": "Malignant",
        "stats": ""
    },
    {
        "id": 21752,
        "Key": "Apothecary's Tote",
        "stats": ""
    },
    {
        "id": 21753,
        "Key": "Apocrypha",
        "stats": ""
    },
    {
        "id": 21754,
        "Key": "Foci of Visjerei",
        "stats": ""
    },
    {
        "id": 21755,
        "Key": "Homunculus",
        "stats": "200ED"
    },
    {
        "id": 21756,
        "Key": "Aurora's Guard",
        "stats": ""
    },
    {
        "id": 21757,
        "Key": "Crest of Morn",
        "stats": ""
    },
    {
        "id": 21758,
        "Key": "Herald of Zakarum",
        "stats": "Def579(UP)/200ED"
    },
    {
        "id": 21759,
        "Key": "Akarat's Protector",
        "stats": ""
    },
    {
        "id": 21760,
        "Key": "Ancient Eye",
        "stats": ""
    },
    {
        "id": 21761,
        "Key": "Globe of Visjerei",
        "stats": ""
    },
    {
        "id": 21762,
        "Key": "The Oculus",
        "stats": ""
    },
    {
        "id": 21763,
        "Key": "Phoenix Egg",
        "stats": ""
    },
    {
        "id": 21764,
        "Key": "Xenos",
        "stats": ""
    },
    {
        "id": 21765,
        "Key": "Nagas",
        "stats": ""
    },
    {
        "id": 21766,
        "Key": "Wyvern's Head",
        "stats": ""
    },
    {
        "id": 21767,
        "Key": "Sightless Veil",
        "stats": ""
    },
    {
        "id": 21768,
        "Key": "ChampionFormatX",
        "stats": ""
    },
    {
        "id": 21778,
        "Key": "ob5",
        "stats": ""
    },
    {
        "id": 21779,
        "Key": "pad",
        "stats": ""
    },
    {
        "id": 21780,
        "Key": "axf",
        "stats": ""
    },
    {
        "id": 21784,
        "Key": "Class Specific",
        "stats": ""
    },
    {
        "id": 21785,
        "Key": "fana",
        "stats": ""
    },
    {
        "id": 21805,
        "Key": "0sc",
        "stats": ""
    },
    {
        "id": 21816,
        "Key": "Tal Rasha's Fire-Spun Cloth",
        "stats": "BDef40/15MF"
    },
    {
        "id": 21817,
        "Key": "Tal Rasha's Adjudication",
        "stats": ""
    },
    {
        "id": 21818,
        "Key": "Tal Rasha's Howling Wind",
        "stats": "Def941"
    },
    {
        "id": 21819,
        "Key": "Tal Rasha's Lidless Eye",
        "stats": "2CM/2LM/2FM"
    },
    {
        "id": 21820,
        "Key": "Tal Rasha's Horadric Crest",
        "stats": "Def131"
    },
    {
        "id": 21821,
        "Key": "Hwanin's Seal",
        "stats": ""
    },
    {
        "id": 21823,
        "Key": "Dangoon's Teaching",
        "stats": ""
    },
    {
        "id": 21824,
        "Key": "Ondal's Almighty",
        "stats": "Def209"
    },
    {
        "id": 21825,
        "Key": "Heaven's Taebaek",
        "stats": "Def220"
    },
    {
        "id": 21826,
        "Key": "Haemosu's Adament",
        "stats": "Def702"
    },
    {
        "id": 21827,
        "Key": "Lycander's Flank",
        "stats": "200ED/9LL"
    },
    {
        "id": 21828,
        "Key": "Constricting Ring",
        "stats": ""
    },
    {
        "id": 21829,
        "Key": "Ginther's Rift",
        "stats": "150ED/12MDR"
    },
    {
        "id": 21830,
        "Key": "Naj's Ancient Set",
        "stats": ""
    },
    {
        "id": 21831,
        "Key": "Naj's Light Plate",
        "stats": "Def830"
    },
    {
        "id": 21832,
        "Key": "Naj's Circlet",
        "stats": "Def105/35FD"
    },
    {
        "id": 21833,
        "Key": "Sander's Superstition",
        "stats": ""
    },
    {
        "id": 21834,
        "Key": "Sander's Taboo",
        "stats": ""
    },
    {
        "id": 21835,
        "Key": "Sander's Basis",
        "stats": ""
    },
    {
        "id": 21836,
        "Key": "Sander's Derby",
        "stats": ""
    },
    {
        "id": 21837,
        "Key": "Sander's Court Jester",
        "stats": ""
    },
    {
        "id": 21838,
        "Key": "Ghost Liberator",
        "stats": ""
    },
    {
        "id": 21839,
        "Key": "Wilhelm's Pride",
        "stats": ""
    },
    {
        "id": 21840,
        "Key": "Immortal King's Stone Crusher",
        "stats": "40CB"
    },
    {
        "id": 21841,
        "Key": "Immortal King's Pillar",
        "stats": "BDef128"
    },
    {
        "id": 21842,
        "Key": "Immortal King's Forge",
        "stats": "BDef53"
    },
    {
        "id": 21843,
        "Key": "Immortal King's Detail",
        "stats": ""
    },
    {
        "id": 21844,
        "Key": "Immortal King's Soul Cage",
        "stats": ""
    },
    {
        "id": 21845,
        "Key": "Immortal King's Will",
        "stats": "Def175/40MF"
    },
    {
        "id": 21847,
        "Key": "Aldur's Gauntlet",
        "stats": "3S"
    },
    {
        "id": 21848,
        "Key": "Ancient Statue 3",
        "stats": ""
    },
    {
        "id": 21849,
        "Key": "Ancient Statue 2",
        "stats": ""
    },
    {
        "id": 21850,
        "Key": "Ancient Statue 1",
        "stats": ""
    },
    {
        "id": 21856,
        "Key": "Baal Subject 6",
        "stats": ""
    },
    {
        "id": 21857,
        "Key": "Baal Subject 6a",
        "stats": ""
    },
    {
        "id": 21858,
        "Key": "Baal Subject 6b",
        "stats": ""
    },
    {
        "id": 21861,
        "Key": "BaalColdMage",
        "stats": ""
    },
    {
        "id": 21863,
        "Key": "Baal Tentacle",
        "stats": ""
    },
    {
        "id": 21875,
        "Key": "McAuley's Superstition",
        "stats": ""
    },
    {
        "id": 21876,
        "Key": "McAuley's Taboo",
        "stats": "Def31/25DEF"
    },
    {
        "id": 21877,
        "Key": "McAuley's Riprap",
        "stats": "Def6"
    },
    {
        "id": 21878,
        "Key": "McAuley's Paragon",
        "stats": "BDef5"
    },
    {
        "id": 22485,
        "Key": "Moe",
        "stats": ""
    }
]

const db = items.reduce((acc, v) => {
  acc[v["id"]] = v;
  return acc;
}, {});

const itemNamesFilename = 'local\\lng\\strings\\item-names.json';
const itemNames = D2RMM.readJson(itemNamesFilename);
itemNames.forEach(processItemName);
D2RMM.writeJson(itemNamesFilename, itemNames);


function formatName(text) {
  armorMaxDef = armorsMaxDefs[key]
  if (armorMaxDef) {
    return `${text} ${config.maxStatsColor}•Def${armorsMaxDefs[key]}•`
  }

  stats = db[id]["stats"] || armorMaxDef
  if (stats) {
    return `${config.maxStatsColor}•${config.maxStatsPrefix}${stats}•\n${nameColor}${text}`;
  }
  return `${nameColor}${text}`;
}

function getNameColor(key) {
    if (setItemsNames.includes(key)) {
        return "ÿcC" ;
    }
    if (uniqueItemsNames.includes(key)) {
        return "ÿcD" ;
    }
    return "ÿc=";
}

function processItemName(item) {
    id = item["id"];
    key = item["Key"];

    if (key in armorsMaxDefs && !config.basesEnabled) {
        return; 
    }
    if (setItemsNames.includes(key) && !config.setsEnabled) {
        return; 
    }
    if (uniqueItemsNames.includes(key) && !config.uniquesEnabled) {
        return;
    }

    if (db[id]) {
        nameColor = getNameColor(key)

        for (let lang of langs) {
            item[lang] = formatName(item[lang]);
        }
    }
}
