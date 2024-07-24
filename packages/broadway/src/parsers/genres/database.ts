import { NamedEntity } from "@/types"

export const data: NamedEntity[] = [
  {
    "label": "classic",
    "aliases": {
      "en": [
        // yeah those prompt suck a bit
        "meeting",
        "love",
        "romance",
        "phone call",
        "discovers",
        "surprise",
        "money",
      ]
    }, 
    prompts: {
      CHARACTER: [],
      LOCATION: [],
      TRANSITION: [],
      TIME: [],
      ERA: [],
      LIGHTING: [],
      WEATHER: [],
      ACTION: [],
      MUSIC: ["suspenseful", "movie soundtrack"],
      SOUND: [],
      DIALOGUE: [],
      STYLE: ["dimly lit", "suspenseful"],
      CAMERA: [],
    }
  },
  {
    "label": "police",
    "aliases": {
      "en": [
        "spy",
        "spies",
        "spying",
        "CIA",
        "MI6",
        "hidden camera",
        "hidden microphone",
        "secret tapes",
        "secret agent",
        "secret agents",
        "exchange prisonners",
        "prisonner exchange",
        "cold war",
        "spy agency",
        "spy agencies",
        "treason",
        "communist",
        "communists",
        "KGB",
        "state secret",
        "state scandal",
        "phone taped",
        "tape the phone",
        "tape his phone",
        "tape her phone"
      ]
    }, 
    prompts: {
      CHARACTER: [],
      LOCATION: [],
      TRANSITION: [],
      TIME: [],
      ERA: [],
      LIGHTING: [],
      WEATHER: [],
      ACTION: [],
      MUSIC: ["suspenseful", "mystery", "jazzy", "noir movie"],
      SOUND: [],
      DIALOGUE: [],
      STYLE: ["dimly lit", "tense", "suspenseful", "cold", "strong shadows"],
      CAMERA: [],
    }
  },
  {
    "label": "police",
    "aliases": {
      "en": [
        // "investigation",
        "police investigation",
        "inspector",
        "inspectors",
        // "detective",
        "detectives",
        // "police",
        "FBI",
        "FBI agent",
        "FBI agents",
        "interpol",
        "interpol agent",
        "interpol agents",
        "under arrest",
        "DUI"
      ]
    }, 
    prompts: {
      CHARACTER: [],
      LOCATION: [],
      TRANSITION: [],
      TIME: [],
      ERA: [],
      LIGHTING: [],
      WEATHER: [],
      ACTION: [],
      MUSIC: ["suspenseful", "mystery", "noir movie"],
      SOUND: [],
      DIALOGUE: [],
      STYLE: ["dimly lit", "tense", "suspenseful", "cold", "strong shadows"],
      CAMERA: [],
    }
  },
  {
    "label": "fantasy, magic",
    "aliases": {
      "en": [
        "transfigure",
        "transfigures",
        "transfiguration",
        "dragon",
        "dragons",
        "dragon breath",
        "unicorn",
        "unicorns",
        "gnome",
        "gnomes",
        "levitating",
        "levitation",
        "elixir of life",
        "invisibility cape",
        "invisibility potion",
        "sorcerer",
        "magic stick",
        "witch",
        "witches",
        "mage",
        "mages",
        "dark wizard",
        "wizard",
        "wizards",
        "wizard school",
        "wizardry",
        "magician",
        "magicians",
        "witchcraft",
        "witchcrafts",
        "spell casting",
        "spellcast",
        "spell cast",
        "spell casting",
        "casting a spell",
        "casting spells",
        "casts a spell",
        "casts spells",
        "cast spells",
        "cast spell",
        "spell book",
        "magic spell",
        "magic spells",
        "forbidden magic",
        "dark arts",
        "potion",
        "potions",
        "magic potion",
        "magic potions",
        "magic school",
        "magic door",
        "magic portal",
        "magic window",
        "magic broom",
        "flying broom",
        "abracadabra",
        "talking tree",
        "forest troll",
        "montain troll",
        "trolls",
        "troll",
        "troll blood",
        "goblin",
        "goblins",
        "dwarf",
        "dwarfs",
        "dwarves",
        "merlin",
        "muggle"
      ]
    }, 
    prompts: {
      CHARACTER: [],
      LOCATION: [],
      TRANSITION: [],
      TIME: [],
      ERA: [],
      LIGHTING: ["dimly lit"],
      WEATHER: [],
      ACTION: [],
      MUSIC: [],
      SOUND: [],
      DIALOGUE: [],
      STYLE: ["fantasy"],
      CAMERA: [],
    }
  },
  {
    "label": "adventure",
    "aliases": {
      "en": [
        "secret",
        "mystery",
        "treasure",
        "treasures",
        "discovery",
        "adventure",
        "expedition",
        "cave",
        "mountain",
        "desert",
        "diving",
        "scuba"
      ]
    }, 
    prompts: {
      CHARACTER: [],
      LOCATION: [],
      TRANSITION: [],
      TIME: [],
      ERA: [],
      LIGHTING: [],
      WEATHER: [],
      ACTION: [],
      MUSIC: ["mystery", "adventure", "indiana jones", "goonies", "pirates"],
      SOUND: [],
      DIALOGUE: [],
      STYLE: [],
      CAMERA: [],
    }
  },
  {
    "label": "action",
    "aliases": {
      "en": [
        "smashes",
        "smashing",
        "fireball",
        "fire ball",
        "destroys",
        "destroying",
        "bulletproof",
        "heavily armored",
        "heavy armor",
        "escape the building",
        "chased by",
        "explodes",
        "explosive",
        "explosives",
        "fast paced",
        "semi-automatic weapon",
        "semi-automatic weapons",
        "semi-auto",
        "car crash",
        "cars crash",
        "car crashes",
        "vehicles barrel",
        "vehicle barrels",
        "cloud of debris",
        "grenade",
        "grenades",
        "gun",
        "guns",
        "pistol",
        "pistols",
        "helicopter",
        "helicopters",
        "car chase",
        "car chases",
        "police chase",
        "police chases",
        "heist",
        "heists",
      ]
    }, 
    prompts: {
      CHARACTER: [],
      LOCATION: [],
      TRANSITION: [],
      TIME: [],
      ERA: [],
      LIGHTING: [],
      WEATHER: [],
      ACTION: [],
      MUSIC: ["action movie", "thriller", "fast paced"],
      SOUND: [],
      DIALOGUE: [],
      STYLE: ["action movie", "thriller", "fast paced"],
      CAMERA: [],
    }
  },
  {
    "label": "science-fiction",
    "aliases": {
      "en": [
        "self-destruct button",
        "flying car",
        "flying cars",
        "flying taxi",
        "flying taxis",
        "spaceship",
        "space ship",
        "star ship",
        "starship",
        "mothership",
        "space helmet",
        "space helmets",
        "astronaut",
        "astronauts",
        "inter-stellar",
        "hyper-drive",
        "range of the planet",
        "landing on the planet",
        "orbital insertion",
        "probe retract system",
        "landing probe",
        "planet's surface",
        "hostile planet",
        "depressurization",
        "pepressurization",
        "space vacuum",
        "laser pistol",
        "laser pistols",
        "servomoteur",
        "android",
        "cyberspace",
        "air lock",
        "airlock",
        "asteroids",
        "asteroid belt",
        "light year",
        "light years",
        "diagnostic coffin",
        "laser beam",
        "last door",
        "blast doors",
        "alien creature",
        "alien device",
        "cryosleep",
        "hypersleep",
        "science fiction",
        "science-fiction",
        "sometime in the future",
      ]
    }, 
    prompts: {
      CHARACTER: [],
      LOCATION: [],
      TRANSITION: [],
      TIME: [],
      ERA: [],
      LIGHTING: [],
      WEATHER: [],
      ACTION: [],
      MUSIC: [],
      SOUND: [],
      DIALOGUE: [],
      STYLE: ["science", "engineering"],
      CAMERA: [],
    }
  },
  {
    "label": "gore",
    "aliases": {
      "en": [
        "kills him",
        "kills her",
        "murders him",
        "murders her",
        "smear of blood",
        "blood spatter",
        "blood spatters",
        "blood spattering",
        "blood splatter",
        "blood splatters",
        "blood splattering",
        "gruesome",
        "beheaded",
        "splatters fluids and blood",
        "splatters blood",
        "blood pooling",
        "blood oozing",
        "blood droplets",
        "blood spurting out",
        "blood spurts out",
        "covered with blood",
        "hole in his chest",
        "gutted corpse",
        "dead corpse",
        "guts him",
        "guts her",
        "slashes him",
        "slashes her",
        "bleed",
        "bleeding",
        "bleeds"
      ]
    }, 
    prompts: {
      CHARACTER: [],
      LOCATION: [],
      TRANSITION: [],
      TIME: [],
      ERA: [],
      LIGHTING: [],
      WEATHER: [],
      ACTION: [],
      MUSIC: [],
      SOUND: [],
      DIALOGUE: [],
      STYLE: ["bloody", "gore"],
      CAMERA: [],
    }
  },
  {
    "label": "horror",
    "aliases": {
      "en": [
        "sound demonic",
        "panic increases",
        "demonic",
        "hideous silhouette",
        "silhouette in the darkness",
        "suspended in terror",
        "hideous",
        "beyond terror",
        "from beyond",
        "screeching sound",
        "she looks human",
        "he looks human",
        "not quite human",
        "clicking her jaw",
        "oozing",
        "oozes",
        "spooky",
        "spooking",
        "spooked",
        "spooks",
        "ghastly",
        "spasms",
        "squealing in pain",
        "go limp",
        "squealing stops",
        "morbid fascination",
        "whispering voice",
        "whispering voices",
        "demonic whispers",
        "whispers intensify",
        "eerie silence",
        "in horror",
        "terrified",
        "terrifying",
        "dread",
        "dreadful",
        "screeching sound",
        "horrifying",
        "with anxiety",
        "contorts with rage",
        "spectral",
        "spectral sight",
        "anxiously",
        "check under the bed",
        "anxious",
        "anxiety",
        "the monster",
        "hurt you",
        "hurt me",
        "decrepit",
        "creeping over",
        "face tenses",
        "face crumbles",
        "devastating",
        "look of helplessness",
        "preoccupied",
        "heard a noise",
        "hears a noise",
        "check for monster",
        "check for monsters",
        "peering underneath",
        "somehow creepy",
        "very creepy",
        "creepy",
        "freaky",
        "howling with fear",
        "nightmare",
        "nightmares",
        "creepy shadow",
        "creepy shadows",
        "creepy face",
        "genuinely scared",
        "trembling",
        "very concerned",
      ]
    }, 
    prompts: {
      CHARACTER: ["anxiety"],
      LOCATION: [],
      TRANSITION: [],
      TIME: [],
      ERA: [],
      LIGHTING: ["dimly lit"],
      WEATHER: [],
      ACTION: [],
      MUSIC: ["uneasy", "creepy"],
      SOUND: ["silence", "creepy"],
      DIALOGUE: [],
      STYLE: ["creepy", "uneasy"],
      CAMERA: [],
    }
  },
  {
    "label": "war, military",
    "aliases": {
      "en": [
        "sergent",
        "smattering of soldiers",
        "soldiers mill",
        "chain of soldiers",
        "chains of soldiers",
        "royal engineer",
        "royal engineers",
        "artillery",
        "shell artillery",
        "mess tents",
        "mess tent",
        "comms trench",
        "trenches",
        "tanks",
        "ordnance",
        "AK-47",
        "AK47",
        "spy",
        "soldier",
        "soldiers",
        "military",
        // "war",
        "war effort",
        "war relief",
        "invasion",
        "bombing",
        "bomber",
        "bombers",
        "bombardier",
        "Western Front"
      ]
    }, 
    prompts: {
      CHARACTER: [],
      LOCATION: [],
      TRANSITION: [],
      TIME: [],
      ERA: [],
      LIGHTING: [],
      WEATHER: [],
      ACTION: [],
      MUSIC: [],
      SOUND: [],
      DIALOGUE: [],
      STYLE: [],
      CAMERA: [],
    }
  },
  {
    "label": "WW1",
    "aliases": {
      "en": [
        "first world war",
        "world war 1",
        "world war",
        "the great war",
        "1914",
        "1915",
        "1916",
        "1917",
        "1918",
        "WW1",
        "Western Front"
      ]
    }, 
    prompts: {
      CHARACTER: [],
      LOCATION: [],
      TRANSITION: [],
      TIME: [],
      ERA: [],
      LIGHTING: [],
      WEATHER: [],
      ACTION: [],
      MUSIC: [],
      SOUND: [],
      DIALOGUE: [],
      STYLE: ["military", "ww1"],
      CAMERA: [],
    }
  },
  {
    "label": "WW2",
    "aliases": {
      "en": [
        "world war 2",
        "world war II",
        "second world war",
        "1939",
        "1940",
        "1941",
        "1942",
        "1943",
        "1944",
        "1945",
        "WW2",
        "WWII",
        "Western Front"
      ]
    }, 
    prompts: {
      CHARACTER: [],
      LOCATION: [],
      TRANSITION: [],
      TIME: [],
      ERA: [],
      LIGHTING: [],
      WEATHER: [],
      ACTION: [],
      MUSIC: [],
      SOUND: [],
      DIALOGUE: [],
      STYLE: ["military", "ww2"],
      CAMERA: [],
    }
  }
]