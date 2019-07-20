// regular (recurring) events are at the end, have 0000-00-00 dates 
var banners = [
  {"id":"2019-06-02"},
  {"id":"2019-06-06"},
  {"id":"2019-06-07"},
  {"id":"2019-06-15"},
  {"id":"2019-07-12"}
]

var events = [
  {
    "id":"2019-07-12",
    "title":"Tao Calligraphy with Master Sha (Toronto, Canada)",
    "dates": ["2019-07-12", "2019-07-18"]
  },
  {
    "id":"2019-06-15",
    "title":"Global Tao Chang Presentation with Hui-Ling Lin & Robert Feda",
    "dates": ["2019-06-15"]
  },
  {
    "id":"2019-06-14",
    "title":"Reduce Stress and Heal Trauma,  with Master Teachers Julie Manhard and Janet Potts",
    "dates":["2019-06-14", "2019-06-16"]
  },
  {
    "id":"2019-06-06",
    "title":"Tao Chang and Tao Calligraphy: Discover Your Gifts and Unleash Your Potential, with Masters Cecilia, Orlena and Patrick (Hawaii)",
    "dates":["2019-06-06", "2019-06-09"]
  },
  {
    "id":"2019-06-02",
    "title":"Global Tao Chang Presentation with Hui-Ling Lin & Robert Feda",
    "dates": ["2019-06-02"]
  },
  {
    "id":"2019-05-25",
    "title":"Guan Yin Lineage Retreat (Petaluma, California)",
    "dates": ["2019-05-25", "2019-05-29"],
    "register": {"fee":"255", "currency":"USD"},
    "password":"GYLineage"
  },
  {
    "id":"2019-05-25-GTC",
    "title":"Global Tao Chang Presentation with Henderson Ong, Peter Hudoba & Haui-Ling Lin (Petaluma, California)",
    "dates": ["2019-05-25"]
  },
  {
    "id":"2019-05-19",
    "title":"Global Tao Chang Presentation with Master Shunya",
    "dates": ["2019-05-19"],
    "register": {"fee":"0", "currency":"USD"}
  },
  {
    "id":"2019-05-11",
    "title":"Tao Hands Healing",
    "dates": ["2019-05-11"],
    "register": {"fee":"35", "currency":"USD"}
  },
  {
    "id":"2019-05-05",
    "title":"Yuan Bao Folding and Potluck Lunch",
    "dates": ["2019-05-05"]
  },
  {
    "id":"2019-05-03",
    "title":"Da Bei Zhou, The Great Compassion Mantra, with Master Hui-Ling",
    "dates": ["2019-05-03", "2019-05-04"],
    "icon": true,
    "password":"compassion",
    "register": {"fee":"50", "currency":"USD"},
    "videos": [
      {"date":"2019-05-03", "id":"hW8sxVAKnD8", "title":"Friday - Free Intro Evening", "free":true},
      {"date":"2019-05-04", "id":"-0HoP2522GI", "title":"Saturday, Morning"},
      {"date":"2019-05-04", "id":"6SNpIHQwhMY", "title":"Saturday, Afternoon"}
    ]
  },
  {
    "id":"2019-05-02",
    "title":"Tao Chang To Open Spiritual Channels",
    "dates": ["2019-05-02"],
    "register": {"fee":"35", "currency":"USD"}
  },
  {
    "id":"2019-04-30",
    "title":"Tao Chang Yoga",
    "dates": ["2019-04-30"],
    "icon": true,
    "register": {"fee":"35", "currency":"USD"},
    "password":"tcy201904",
    "videos": [
      {"date":"2019-04-30", "id":"MvO0Cr9RKuM", "title":"Tuesday -Tao Chang Yoga Class"}
    ]
  },
  {
    "id":"2019-04-25-Calligraphy",
    "title":"Tao Chang Calligraphy Writing Practice",
    "dates": ["2019-04-25"],
    "register": {"fee":"35", "currency":"USD"},
    "password":"tccw201904"
  },
  {
    "id":"2019-04-25",
    "title":"Tao Chang Mindfulness Meditation",
    "dates": ["2019-04-25"],
    "password":"tcmm201904"
  },
  {
    "id":"2019-04-23",
    "title":"Tao Chang Weight Loss Challenge",
    "dates": ["2019-04-23"],
    "password":"tcwl201904"
  },
  {
    "id":"2019-04-20",
    "title":"Messages of Love and Compassion from Mother Mary and Heaven's Angels",
    "dates": ["2019-04-20"],
    "password":"mlc2019",
    "register": {"fee":"100", "currency":"USD"}
  },
  {
    "id":"2019-04-19",
    "title":"RESURRECTION: A Special Advanced Workshop",
    "dates": ["2019-04-19", "2019-04-21"],
    "password":"radv2019",
    "register": {"fee":"100", "currency":"USD"},
    "videos": [
      {"date":"2019-04-19", "id":"6WhDoXg466w", "title":"Friday - Free Intro Evening", "free":true},
      {"date":"2019-04-20", "id":"EPeaZaovgu8", "title":"Saturday, Morning"},
      {"date":"2019-04-20", "id":"vOMljoNBKbY", "title":"Saturday, Afternoon"},
      {"date":"2019-04-21", "id":"KT1weSaBo-A", "title":"Sunday, Morning"},
      {"date":"2019-04-21", "id":"B-FjdQNIeP4", "title":"Sunday, Morning"}
    ]
  },
  {
    "id":"2019-04-13",
    "title":"Global Tao Chang Presentation with Master Carol",
    "dates": ["2019-04-13"],
    "videos": [
    {"date":"2019-04-13", "id":"6S_hRNjlzew", "title":"Global Tao Chang Presentation with Master Carol", "free":true}
    ]
  },
  {
    "id":"2019-04-12",
    "title":"The Power and Beauty of Writing Tao Oneness Calligraphy",
    "dates": ["2019-04-12", "2019-04-14"],
    "parts": "4/12 Friday - Free Intro 6-7pm, 4/13-14 Sat & Sun - Workshop 10am-6pm",
    "password":"DaAiTC2019",
    "icon": true,
    "register": {"fee":"100", "currency":"USD"},
    "videos": [
      {"date":"2019-04-12", "id":"pRLtSJImlJY", "title":"Friday - Free Intro Evening", "free":true},
      {"date":"2019-04-13", "id":"JP9dKFmd_1U", "title":"Saturday, Morning"},
      {"date":"2019-04-13", "id":"MkZZ9I7gS3w", "title":"Saturday, Afternoon"},
      {"date":"2019-04-14", "id":"v9-KlOr9Lg8", "title":"Sunday, Morning"},
      {"date":"2019-04-14", "id":"UgRuCeD1Sn8", "title":"Sunday, Morning"}
    ]
  },
  {
    "id":"2019-02-22",
    "title":"Tao Chang and Tao Calligraphy: Discover Your Gifts and Unleash Your Potential",
    "dates":["2019-02-22", "2019-02-24"],
    "password":"TCTC19FEB23",
    "icon":"2019-02-22.jpg",
    "register": {"fee":"100", "currency":"USD"},
    "videos": [
      {"date":"2019-02-22", "id":"ipTMmQaIQD8", "title":"Friday - Free Intro Evening", "free":true},
      {"date":"2019-02-23", "id":"xLwnmWT2X_I", "title":"Saturday, Morning"},
      {"date":"2019-02-23", "id":"t8gsUfGONA8", "title":"Afternoon"},
      {"date":"2019-02-24", "id":"q82I_8pZcg4", "title":"Sunday, Morning"},
      {"date":"2019-02-24", "id":"wpWIgMFldLE", "title":"Afternoon"}
    ]
  },
  {
    "id":"2019-02-16",
    "title":"Tu corazón está hablando.... ¿Estás escuchando?",
    "dates": ["2019-02-16"],
    "password":"201910tceh",
    "videos": [
      {"date":"2019-02-16", "id":"McOWZKco82s", "title":"Saturday - Workshop"}
    ]
  },
  {
    "id":"2019-02-09",
    "title":"Free Yourself Through Sacred Sound And Movement",
    "dates": ["2019-02-09"],
    "icon": true,
    "password":"201902fyssm",
    "videos": [
      {"date":"2019-02-09", "id":"-VCU4eBrgyQ", "title":"Saturday - Sacred Sound And Movement Class"}
    ]
  },
  {
    "id":"2019-02-08",
    "title":"The True Love Workshop",
    "dates": ["2019-02-08", "2019-02-10"],
    "password":"2019tl",
    "videos": [
      {"date":"2019-02-08", "id":"16tv0TMgKm8", "title":"Friday - Free Intro Evening", "free":true},
      {"date":"2019-02-09", "id":"gZNeA8dZpDM", "title":"Saturday, Morning"},
      {"date":"2019-02-09", "id":"IGF4BN0dTTU", "title":"Saturday, Afternoon"},
      {"date":"2019-02-10", "id":"FqumD8e_-uo", "title":"Sunday, Morning"},
      {"date":"2019-02-10", "id":"Hd_8th3bL04", "title":"Sunday, Afternoon"}
    ]
  },
  {
    "id":"2019-01-18",
    "title":"Golden Keys to a Successful and Abundant New Year",
    "dates": ["2019-01-18", "2019-01-20"],
    "password":"2019gk",
    "videos": [
      {"date":"2019-01-18", "id":"3gQaBiqBORo", "title":"Friday - Free Intro Evening", "free":true},
      {"date":"2019-01-19", "id":"KyAAGN_c7WY", "title":"Saturday, Morning"},
      {"date":"2019-01-19", "id":"cpJ1fzBV0a8", "title":"Saturday, Afternoon"},
      {"date":"2019-01-20", "id":"5fByMtzecOg", "title":"Sunday, Morning"},
      {"date":"2019-01-20", "id":"D9FXBKWpXkA", "title":"Sunday, Afternoon"}
    ]
  },
  {
    "id":"2018-12-28",
    "title":"Bringing in the New Year",
    "dates":["2018-12-28", "2018-12-30"],
    "password":"2018ny",
    "videos": [
      {"date":"2018-12-28", "id":"7THqfg5zcn8", "title":"Friday - Free Intro Evening", "free":true},
      {"date":"2018-12-29", "id":"CqHiSPVL28Y", "title":"Saturday, Morning"},
      {"date":"2018-12-29", "id":"aMVg9SgZETo", "title":"Saturday, Afternoon"},
      {"date":"2018-12-30", "id":"og2XeX7OVFw", "title":"Sunday, Morning"},
      {"date":"2018-12-30", "id":"fDJTpo9puzY", "title":"Sunday, Afternoon"}
    ]
  },
  {
    "id":"2018-12-14",
    "title":"Heart to Heart, Soul to Soul: Key to Lasting Client Relationships",
    "dates":["2018-12-14", "2018-12-16"],
    "password":"2018hhss",
    "videos": [
      {"date":"2018-12-14", "id":"9RvZAR6kg68", "title":"Friday - Free Intro Evening", "free":true},
      {"date":"2018-12-15", "id":"y0Xv40493cw", "title":"Saturday Afternoon"},
      {"date":"2018-12-16", "id":"_h9VTVwg-xE", "title":"Sunday, Morning"},
      {"date":"2018-12-16", "id":"_JacJRux3Rg", "title":"Afternoon"}
    ]
  },
  {
    "id":"2018-11-02",
    "title":"Tao Science: Bluprint for Prosperity and Abundance",
    "dates":["2018-11-02", "2018-11-04"],
    "password":"taosciabundance",
    "videos": [
      {"date":"2018-11-02", "id":"IW9zXms03LI", "title":"Friday - Free Intro Evening", "free":true},
      {"date":"2018-11-03", "id":"-AHgUqHvPYM", "title":"Saturday, Morning"},
      {"date":"2018-11-03", "id":"96FPz9mVZAY", "title":"Afternoon"},
      {"date":"2018-11-04", "id":"Ieo8I2J2gPA", "title":"Sunday, Morning"},
      {"date":"2018-11-04", "id":"YSRqBhCX9oQ", "title":"Afternoon"}
    ]
  },
  {
    "id":"2018-10-26",
    "title":"Open Spiritual Channels: Find Your Path and Live Your Purpose",
    "password":"oscpathpurpose",
    "videos": [
      {"date":"2018-10-26", "id":"XOI8fOQjy5I", "title":"Friday - Free Intro Evening", "free":true},
      {"date":"2018-10-27", "id":"YNqupZnHu8s", "title":"Saturday, Morning"},
      {"id":"BdA-caV9oAo", "title":"Afternoon"},
      {"date":"2018-10-28", "id":"i7yLxj53H4g", "title":"Sunday, Morning"},
      {"id":"nclL6QQHfvo", "title":"Afternoon"}
    ]
  },
  {
    "id":"2018-09-28",
    "title":"Connectado Con El Corazon ...",
    "password":"Connectado",
    "videos": [
      {"date":"2018-09-28", "id":"7w9ktRzCdps", "title":"Friday - Free Intro Evening", "free":true},
      {"date":"2018-09-29", "id":"Mx42XNVrMJs", "title":"Saturday, Morning"},
      {"id":"FnILQfKnDWs", "title":"Afternoon"}
    ]
  },
  {
    "id":"2018-09-20",
    "title":"Tao Source Communicator",
    "password":"tsc201809",
    "videos": [
      {"date":"2018-09-20", "id":"bzq2p6Tsyss", "title":"Thursday, Morning"},
      {"id":"etZ8ehedQzQ", "title":"Afternoon"},
      {"date":"2018-09-21", "id":"MTcBZYRxPIc", "title":"Friday, Morning"},
      {"id":"nXBhwL9Jo3E", "title":"Afternoon"},
      {"date":"2018-09-22", "id":"OZfvSB8MpqI", "title":"Saturday, Morning"},
      {"id":"5-oL-nB_wyU", "title":"Afternoon, Part 1"},
      {"id":"6MwPZv4Egz0", "title":"Afternoon, Part 2"},
      {"date":"2018-09-23", "id":"YXP3o_tTvPg", "title":"Sunday, Morning"},
      {"id":"-MROmt0TKEQ", "title":"Afternoon, Part 1"},
      {"id":"pc_kAHkdL2A", "title":"Afternoon, Part 2"},
      {"date":"2018-09-24", "id":"2VGOi4KzgJI", "title":"Monday, Morning"},
      {"id":"-MNjUA4Y56E", "title":"Afternoon"}
    ]
  },
  {
    "id":"2018-09-14",
    "title":"Gratitude - Transform Stress to Trust",
    "password":"stresstotrust",
    "videos": [
      {"date":"2018-09-14", "id":"J-xI602Tj50", "title":"Friday - Free Intro Evening", "free":true},
      {"date":"2018-09-15", "id":"g5Zj3SEy1Wo", "title":"Morning, Part 1 - Facebook Live, Free Morning Session", "free":true},
      {"id":"5hr5I3_9DL0", "title":"Part 2"},
      {"id":"of3WNr8XcgI", "title":"After Lunch Break, Part 1" },
      {"id":"KGvGWXMuSZU", "title":"Part 2"}
    ]
  },
  {
    "id":"2018-08-31",
    "title":"Pure Land Workshop with Master Hui-Ling and Master Henderson",
    "password":"namoamitoufo2018",
    "videos": [
      {"date":"2018-08-31", "id":"-0mbrKWUkQA", "title":"Friday - Free Introduction Evening", "free":true},
      {"date":"2018-09-01", "id":"6s_5TMC902I", "title":"Day 1, Saturday Morning"},
      {"id":"xaAiRZffaYg", "title":"Afternoon, Part 1 - Meditation", "free":true},
      {"id":"WKM3xkiuWhM", "title":"Part 2"},
      {"date":"2018-09-02", "id":"vDV8EG-Os4U", "title":"Day 2, Sunday, Morning"},
      {"id":"4tWdjpUUQdg", "title":"Afternoon"},
      {"date":"2018-09-03", "id":"gmxVdKGgJKs", "title":"Day 3, Monday, Morning"},
      {"id":"rDyKeJ78jJM", "title":"Afternoon"}
    ]
  },
  {
    "id":"TC-TSTD",
    "title":"Tao Chang Sacred Sound and Movement",
    "icon": true,
    "ongoing": true,
    "register": {"fee":"35", "currency":"USD"},
    "dates": ["Tuesdays 6 - 7pm"],
    "videos": [
      {"date":"2019-05-01", "id":"6WhDoXg466w", "title":"Wednesday - Free Presentation", "free":true},
    ]
  },
  {
    "id":"TCPresentation",
    "title":"Tao Chang Presentation",
    "icon": true,
    "ongoing": true,
    "register": {"fee":"0", "currency":"USD"},
    "dates": ["Wednesdays 6 - 7:15pm"],
    "videos": [
      {"date":"2019-05-01", "id":"6WhDoXg466w", "title":"Wednesday - Free Presentation", "free":true},
    ]
  },
  {
    "id":"TCPractice",
    "title":"Tao Chang Practice",
    "icon": true,
    "ongoing": true,
    "dates": ["Wednesdays 7:30 - 8:30pm"],
    "register": {"fee":"70", "currency":"USD"},
    "videos": [
      {"date":"2019-05-01", "id":"6WhDoXg466w", "title":"Wednesday - Free Presentation"},
    ]
  },
  {
    "id":"TCBlessings",
    "title":"Tao Chang Blessings for Health & Wellness",
    "icon": true,
    "ongoing": true,
    "dates": ["Saturdays 9 - 10am"],
    "register": {"fee":"70", "currency":"USD"},
    "videos": [
      {"date":"2019-05-01", "id":"6WhDoXg466w", "title":"Wednesday - Free Presentation"},
    ]
  }
]

var OngoingEventsCount = 4