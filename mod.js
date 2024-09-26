const skillNamesFilename = 'local\\lng\\strings\\skills.json';
const skillNames = D2RMM.readJson(skillNamesFilename);

const armorsFilePath = 'global\\excel\\armor.txt';
const armors = D2RMM.readTsv(armorsFilePath);
const armorsMaxDefs = armors.rows.reduce((acc, v) => {
  acc[v.code] = v.maxac;
  return acc;
}, {});

const setItemsFilePath = 'global\\excel\\setitems.txt';
const setItems = D2RMM.readTsv(setItemsFilePath);
const setItemsByIndex = setItems.rows.reduce((acc, v) => {
    acc[v.index] = v;
    return acc;
}, {});

const uniqueItemsFilePath = 'global\\excel\\uniqueitems.txt';
const uniqueItems = D2RMM.readTsv(uniqueItemsFilePath);
const uniqueItemsByIndex = uniqueItems.rows.reduce((acc, v) => {
    acc[v.index] = v;
    return acc;
}, {});

const runesFilePath = 'global\\excel\\runes.txt';
const runesItems = D2RMM.readTsv(runesFilePath);
const runewordsByName = runesItems.rows.reduce((acc, v) => {
    acc[v.Name] = v;
    return acc;
}, {});

const itemStatCostFilePath = 'global\\excel\\itemStatCost.txt';
const itemStatCostItems = D2RMM.readTsv(itemStatCostFilePath);
const descPriorityByStatsCode = itemStatCostItems.rows.reduce((acc, v) => {
    acc[v.Stat] = v.descpriority;
    return acc;
}, {});
const idByStatsCode = itemStatCostItems.rows.reduce((acc, v) => {
    acc[v.Stat] = v.ID;
    return acc;
}, {});

const fallbackStatByPropCode = {
    "dmg-min": "item_mindamage_percent",
    "dmg-max": "item_maxdamage_percent",
    "dmg%": "item_mindamage_percent",
    "indestruct": "item_indesctructible",
}

const propertiesFilePath = 'global\\excel\\properties.txt';
const propertiesItems = D2RMM.readTsv(propertiesFilePath);
const propDescPriorityByCode = propertiesItems.rows.reduce((acc, v) => {
    acc[v.code] = +(descPriorityByStatsCode[v.stat1 || fallbackStatByPropCode[v.code]] || 0);
    return acc;
}, {});
const propFuncByCode = propertiesItems.rows.reduce((acc, v) => {
    acc[v.code] = +v.func1;
    return acc;
}, {});
const propIDByCode = propertiesItems.rows.reduce((acc, v) => {
    acc[v.code] = +idByStatsCode[v.stat1];
    return acc;
}, {});

const skillsFilePath = 'global\\excel\\skills.txt';
const skillsItems = D2RMM.readTsv(skillsFilePath);
const skillDescFilePath = 'global\\excel\\skilldesc.txt';
const skillDescItems = D2RMM.readTsv(skillDescFilePath);
const skillNameBySkill = skillsItems.rows.reduce((acc, v) => {
    const skillDesc = skillDescItems.rows.find(r => r.skilldesc === v.skilldesc);
    if (skillDesc) {
        const skillName = skillDesc["str name"];
        acc[v.skill] = skillNames.find(s => s["Key"] === skillName);
    } else {
        acc[v.skill] = v.skill;
    }
    return acc;
}, {});

const weaponsFilePath = 'global\\excel\\weapons.txt';
const weaponsItems = D2RMM.readTsv(weaponsFilePath);
const armorFilePath = 'global\\excel\\armor.txt';
const armorItems = D2RMM.readTsv(armorFilePath);
const socketsByItemCode = (weaponsItems.rows.concat(armorItems.rows)).reduce((acc, v) => {
    acc[v.code] = v.gemsockets;
    return acc;
}, {});

normalItemColor = "ÿc="
magicItemColor = "ÿcB"
setItemColor = "ÿcC"
uniqueItemColor = "ÿcD"

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

const statsSeparator = "/"

const statsCodeMap = {
    "ac": "Def",
    "ac-hth": "DefMi",
    "ac-miss": "DefMe",
    "red-dmg": "DR",
    "red-dmg%": "%DR",
    "ac%": "ED",
    "red-mag": "MDR",
    "str": "Str",
    "dex": "Dex",
    "vit": "Vit",
    "enr": "Enr",
    "mana": "Mana",
    "mana%": "%Mana",
    "hp": "Life",
    "hp%": "%Life",
    "att": "AR",
    "block": "IBC",
    "cold-min": "CD",
    "cold-max": "CD",
    "cold-len": "",
    "fire-min": "FD",
    "fire-max": "FD",
    "ltng-min": "LD",
    "ltng-max": "LD",
    "pois-min": "PD",
    "pois-max": "PD",
    "pois-len": "",
    "dmg-min": "Dmg",
    "dmg-max": "Dmg",
    "dmg%": "ED",
    "dmg-to-mana": "DTM",
    "res-fire": "FRes",
    "res-fire-max": "maxFRes",
    "res-ltng": "LRes",
    "res-ltng-max": "maxLRes",
    "res-cold": "CRes",
    "res-cold-max": "maxCRes",
    "res-mag": "MRes",
    "res-mag-max": "maxMGes",
    "res-pois": "PRes",
    "res-pois-max": "maxPRes",
    "res-all": "@Res",
    "res-all-max": "max@Res",
    "abs-fire%": "FA",
    "abs-fire": "FA",
    "abs-ltng%": "LA",
    "abs-ltng": "LA",
    "abs-mag%": "MA",
    "abs-mag": "MA",
    "abs-cold%": "CA",
    "abs-cold": "CA",
    "dur": "Dur",
    "dur%": "%Dur",
    "regen": "RepLife",
    "thorns": "Thorns",
    "swing1": "IAS",
    "swing2": "IAS",
    "swing3": "IAS",
    "gold%": "GF",
    "mag%": "MF",
    "knock": "KB",
    "regen-stam": "RegStm",
    "regen-mana": "RegMana",
    "stam": "Stm",
    "time": "",
    "manasteal": "ML",
    "lifesteal": "LL",
    "ama": "Ama",
    "pal": "Pal",
    "nec": "Nec",
    "sor": "Sor",
    "bar": "Bar",
    "herb": "",
    "light": "LR",
    "color": "",
    "ease": "-Req",
    "move1": "FRW",
    "move2": "FRW",
    "move3": "FRW",
    "balance1": "FHR",
    "balance2": "FHR",
    "balance3": "FHR",
    "block1": "FBR",
    "block2": "FBR",
    "block3": "FBR",
    "cast1": "FCR",
    "cast2": "FCR",
    "cast3": "FCR",
    "res-pois-len": "PLR",
    "dmg": "Dmg",
    "howl": "HitMF",
    "stupidity": "HitBL",
    "ignore-ac": "ITD",
    "reduce-ac": "-TD",
    "noheal": "PMH",
    "half-freeze": "HFD",
    "att%": "%AR",
    "dmg-ac": "-DefHit",
    "dmg-demon": "%DmgDem",
    "dmg-undead": "%DmgUnd",
    "att-demon": "%ARDem",
    "att-undead": "%ARUnd",
    "throw": "Throw",
    "fireskill": "FireSkl",
    "allskills": "@Skills",
    "light-thorns": "LThorns",
    "freeze": "FT",
    "openwounds": "OW",
    "crush": "CB",
    "kick": "KickDmg",
    "mana-kill": "MaeK",
    "demon-heal": "LaeDK",
    "bloody": "",
    "deadly": "DS",
    "slow": "ST",
    "nofreeze": "CBF",
    "stamdrain": "SSD",
    "reanimate": "RnmtAs",
    "pierce": "PA",
    "magicarrow": "FMA",
    "explosivearrow": "FEA",
    "Expansion": "",
    "dru": "Dru",
    "ass": "Ass",
    "skill": "Skls",
    "skilltab": "SklsTab",
    "aura": "AuraLvl",
    "att-skill": "CCoA",
    "hit-skill": "CCoH",
    "gethit-skill": "CCoS",
    "gembonus": "",
    "regen-dur": "",
    "fire-fx": "",
    "ltng-fx": "",
    "sock": "Skt",
    "dmg-fire": "FDmg",
    "dmg-ltng": "LDmg",
    "dmg-mag": "MDmg",
    "dmg-cold": "CDmg",
    "dmg-pois": "PDmg",
    "dmg-throw": "TDmg",
    "dmg-norm": "NDmg",
    "ac/lvl": "Def|lvl",
    "ac%/lvl": "%Def|lvl",
    "hp/lvl": "Life|lvl",
    "mana/lvl": "Mana|lvl",
    "dmg/lvl": "Dmg|lvl",
    "dmg%/lvl": "%Dmg|lvl",
    "str/lvl": "Str|lvl",
    "dex/lvl": "Dex|lvl",
    "enr/lvl": "Enr|lvl",
    "vit/lvl": "Vit|lvl",
    "att/lvl": "AR|lvl",
    "att%/lvl": "%AR|lvl",
    "dmg-cold/lvl": "CDmg|lvl",
    "dmg-fire/lvl": "FDmg|lvl",
    "dmg-ltng/lvl": "LDmg|lvl",
    "dmg-pois/lvl": "PDmg|lvl",
    "res-cold/lvl": "CRes|lvl",
    "res-fire/lvl": "FRes|lvl",
    "res-ltng/lvl": "LRes|lvl",
    "res-pois/lvl": "PRes|lvl",
    "abs-cold/lvl": "CAbs|lvl",
    "abs-fire/lvl": "FAbs|lvl",
    "abs-ltng/lvl": "LAbs|lvl",
    "abs-pois/lvl": "PAbs|lvl",
    "thorns/lvl": "Thorns|lvl",
    "gold%/lvl": "GF|lvl",
    "mag%/lvl": "MF|lvl",
    "regen-stam/lvl": "RegStm|lvl",
    "stam/lvl": "Stm|lvl",
    "dmg-dem/lvl": "DmgDem|lvl",
    "dmg-und/lvl": "DmgUnd|lvl",
    "att-dem/lvl": "ARDem|lvl",
    "att-und/lvl": "ARUnd|lvl",
    "crush/lvl": "CB|lvl",
    "wounds/lvl": "OW|lvl",
    "kick/lvl": "Kick|lvl",
    "deadly/lvl": "DS|lvl",
    "gems%/lvl": "",
    "rep-dur": "RD",
    "rep-quant": "RQ",
    "stack": "ISS",
    "item%": "",
    "dmg-slash": "",
    "dmg-slash%": "",
    "dmg-crush": "",
    "dmg-crush%": "",
    "dmg-thrust": "",
    "dmg-thrust%": "",
    "abs-slash": "",
    "abs-crush": "",
    "abs-thrust": "",
    "abs-slash%": "",
    "abs-crush%": "",
    "abs-thrust%": "",
    "ac/time": "",
    "ac%/time": "",
    "hp/time": "",
    "mana/time": "",
    "dmg/time": "",
    "dmg%/time": "",
    "str/time": "",
    "dex/time": "",
    "enr/time": "",
    "vit/time": "",
    "att/time": "",
    "att%/time": "",
    "dmg-cold/time": "",
    "dmg-fire/time": "",
    "dmg-ltng/time": "",
    "dmg-pois/time": "",
    "res-cold/time": "",
    "res-fire/time": "",
    "res-ltng/time": "",
    "res-pois/time": "",
    "abs-cold/time": "",
    "abs-fire/time": "",
    "abs-ltng/time": "",
    "abs-pois/time": "",
    "gold%/time": "",
    "mag%/time": "",
    "regen-stam/time": "",
    "stam/time": "",
    "dmg-dem/time": "",
    "dmg-und/time": "",
    "att-dem/time": "",
    "att-und/time": "",
    "crush/time": "",
    "wounds/time": "",
    "kick/time": "",
    "deadly/time": "",
    "gems%/time": "",
    "pierce-fire": "%EFR",
    "pierce-ltng": "%ELR",
    "pierce-cold": "%ECR",
    "pierce-pois": "%EPR",
    "dmg-mon": "",
    "dmg%-mon": "",
    "att-mon": "",
    "att%-mon": "",
    "ac-mon": "",
    "ac%-mon": "",
    "indestruct": "Inds",
    "charged": "lvlCS",
    "extra-fire": "FSDmg",
    "extra-ltng": "LSDmg",
    "extra-cold": "CSDmg",
    "extra-pois": "PSDmg",
    "dmg-elem": "EDmg",
    "dmg-elem-min": "EDmg",
    "dmg-elem-max": "EDmg",
    "all-stats": "@Attr",
    "addxp": "EG",
    "heal-kill": "LaeK",
    "cheap": "RVP",
    "rip": "SMRiP",
    "att-mon%": "ARvs",
    "dmg-mon%": "DmgVs",
    "kill-skill": "CCoK",
    "death-skill": "CCoD",
    "levelup-skill": "CCoL",
    "skill-rand": "+Skl",
    "fade": "",
    "levelreq": "",
    "ethereal": "Eth",
    "oskill": "toSkl",
    "state": "",
    "randclassskill": "toSkls",
    "noconsume": "",
    "pierce-immunity-cold": "CSndr",
    "pierce-immunity-fire": "FSndr",
    "pierce-immunity-light": "LSndr",
    "pierce-immunity-poison": "PSndr",
    "pierce-immunity-damage": "DSndr",
    "pierce-immunity-magic": "MSndr",
    "charge-noconsume": "CnotCC"
}

const propItemModsSetMin = 15;
const propItemModsSetMax = 16;
const ItemModsSetParam = 17;
const fixedDmgProps = [propItemModsSetMin, propItemModsSetMax, ItemModsSetParam]

const itemNamesFilename = 'local\\lng\\strings\\item-names.json';
const itemNames = D2RMM.readJson(itemNamesFilename);
itemNames.forEach(processItemName);
D2RMM.writeJson(itemNamesFilename, itemNames);

const runesNamesFilename = 'local\\lng\\strings\\item-runes.json';
const runesNames = D2RMM.readJson(runesNamesFilename);
runesNames.forEach(processRunesName);
D2RMM.writeJson(runesNamesFilename, runesNames);

function getMaxStatsText(key, lang, itemDB, maxProps, propPrefix, paramPrefix, minPrefix, maxPrefix) {
    const data = itemDB[key];
    const maxStats = {};
    let min = null;

    const allCodes = [];
    for (let i=1; i<=maxProps; i++) {
        allCodes.push(data[`${propPrefix}${i}`]);
    }

    for (let i=1; i<=maxProps; i++) {
        const code = data[`${propPrefix}${i}`];
        if (fixedDmgProps.includes(propFuncByCode[code])) {
            continue;
        }

        const minValue = data[`${minPrefix}${i}`]
        let maxValue = data[`${maxPrefix}${i}`]

        // Some items is configured to have more sockets than possible by its base (e.g. Aldur's Rhythm)
        if (code === "sock" ) {
            maxValue = Math.min(data[`${maxPrefix}${i}`], socketsByItemCode[data.item]);
        }

        if (minValue === maxValue) {
            continue;
        }

        const rawParam = data[`${paramPrefix}${i}`]
        if (rawParam && !Number.isNaN(Number.parseInt(rawParam, 10))) {
            continue;
        }

        const skillLoc = skillNameBySkill[rawParam];
        const skillFullName = (typeof skillLoc === "object" ? skillLoc[lang] : skillLoc);
        const skillFullNameList = skillFullName?.split(/(?=[A-Z])/);
        const skillShortName = skillFullNameList?.length > 1
            ? skillFullNameList.map(v => v[0]).join("") 
            : skillFullName?.substring(0, 3);

        // Store variable max value for min dmg
        if (code.endsWith("-min")) {
            min = maxValue;
            continue;
        }
        // Append variable max value for min dmg if available
        if (code.endsWith("-max") && min !== null) {
            maxValue = `${min}-${maxValue}`;
            min = null;
        }

        let statsCode = skillShortName || statsCodeMap[code] || code;
        // Differentiate Enhanced Damage from Enhanced Defense (e.g. Alma Negra)
        if (code === "dmg%" && allCodes.includes("ac%")) {
            statsCode += "mg";
        }

        maxStats[code] = `${maxValue}${statsCode}`;
    }
    
    return Object.entries(maxStats)
        .sort(([codeA, _a], [codeB, _b]) => 
            ((propDescPriorityByCode[codeB] || 0) - (propDescPriorityByCode[codeA] || 0)) ||
            (propIDByCode[codeA] - propIDByCode[codeB])
        )
        .map(([_, maxStats]) => maxStats);
}

function formatBaseName(key, text) {
    const maxStatsColor = config.maxStatsColor

    const armorMaxDef = armorsMaxDefs[key]
    if (armorMaxDef) {
        const defStatsText = `•Def${armorMaxDef}•`
        return `${text} ${maxStatsColor}${defStatsText}`
    }
}

function formatSetItemName(text, maxStats) {
    const maxStatsColor = config.setsMaxStatsColor

    const itemNameColor = maxStatsColor ? setItemColor : ""
    const usingBottomPosition = config.uniqueMaxStatsPosition == "bottom"

    const maxStatsText = `•${config.maxStatsPrefix}${maxStats}•`
    if (usingBottomPosition) {
        return `${maxStatsColor}${maxStatsText}\n${itemNameColor}${text}`;
    } else {
        return `${text}\n${maxStatsColor}${maxStatsText}`;
    }
}

function formatUniqueItemName(text, maxStats) {
    const itemNameColor = uniqueItemColor
    const maxStatsColor = config.maxStatsColor

    const maxStatsText = `•${config.maxStatsPrefix}${maxStats}•`

    if (config.uniqueMaxStatsPosition == "bottom") {
        return `${maxStatsColor}${maxStatsText}\n${itemNameColor}${text}`;
    } else {
        return `${text}\n${maxStatsColor}${maxStatsText}`;
    }
    return text;
}

function processItemName(item) {
    const id = item["id"];
    const key = item["Key"];
    const isBaseName = !!armorsMaxDefs[key]
    const isSetItem = Object.keys(setItemsByIndex).includes(key)
    const isUniqueItem = Object.keys(uniqueItemsByIndex).includes(key)

    if (key in armorsMaxDefs && !config.basesEnabled) {
        return; 
    }
    if (isSetItem && !config.setsEnabled) {
        return; 
    }
    if (isUniqueItem && !config.uniquesEnabled) {
        return;
    }

    for (let lang of langs) {
        if (isBaseName) {
            item[lang] = formatBaseName(key, item[lang]);
            continue;
        }
        if (isSetItem) {     
            const maxStats = getMaxStatsText(key, lang, setItemsByIndex, 9, "prop", "par", "min", "max");
            if (maxStats.length) {
                const maxStatsText = maxStats.join(statsSeparator);           
                item[lang] = formatSetItemName(item[lang], maxStatsText);
            }
            continue;
        }
        if (isUniqueItem) {                
            const maxStats = getMaxStatsText(key, lang, uniqueItemsByIndex, 12, "prop", "par", "min", "max");
            if (maxStats.length) {
                const maxStatsText = maxStats.join(statsSeparator);
                item[lang] = formatUniqueItemName(item[lang], maxStatsText);
            }
            continue;
        }
    }
}

function processRunesName(item) {
    const id = item["id"];
    const key = item["Key"];

    if (key.startsWith("Runeword")) {
        for (let lang of langs) {
            maxStats = getMaxStatsText(key, lang, runewordsByName, 7, "T1Code", "T1Param", "T1Min", "T1Max");
            if (maxStats.length) {                
                const maxStatsText = maxStats.join(statsSeparator)
                item[lang] = formatUniqueItemName(key, maxStatsText, item[lang]);
            }
        }
    }
}
