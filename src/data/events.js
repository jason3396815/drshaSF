const events = [
    {
        id:"2019-05-25",
        title:"Guan Yin Lineage Retreat (Petaluma, California)",
        dates: ["2019-05-25", "2019-05-29"],
        icon:"19-05-25.jpg"
    },
    {
        id:"2019-04-12",
        title:"The Power and Beauty of Writing Tao Oneness Calligraphy",
        dates: ["2019-04-12", "2019-04-14"],
        icon:"19-04-12.jpg"
    },
    {
        id:"2019-03-20",
        title:"Tao Science Tao Chang Healing, Rejuvenation & Enlightenment Retreat with Dr. and Master Zhi Gang Sha (Hawaii)",
        dates: ["2019-03-20", "2019-03-26"],
        icon:"19-03-20.jpg"
    },
    {
        id:"2019-03-16",
        title:"Tao Calligraphy Exhibition & Demonstration with Dr. and Master Zhi Gang Sha (Hawaii)",
        dates: ["2019-03-16", "2019-03-17"],
        icon:"19-03-16.jpg"
    },
    {
        id:"2019-03-10",
        title:"Test Webcast",
        dates: ["2019-03-10"],
        /*icon:"19-03-10.jpg",*/
        password:"t",
        videos: [
            {date:"2019-02-27", id:"4VZvMWwsn5Q", title:"Wed, February 27 - Test Webcast1", free:true},
            {date:"2019-02-27", id:"5L_K8_JzLHY", title:"Wed, February 27 - Test Webcast2"},
        ]
    },
   /*{
        id:"2019-03-03",
        title:"Tao Chang Yoga",
        dates: ["2019-03-03"],
        icon:"19-03-03.jpg"
    },*/
    {
        id:"2019-02-22",
        title:"Tao Chang and Tao Calligraphy: Discover Your Gifts and Unleash Your Potential",
        dates:["2019-02-22", "2019-02-24"],
        icon:"19-02-22.jpg",
        password:"TCTC19FEB23",
        videos: [
            {date:"2019-02-22", id:"ipTMmQaIQD8", title:"Friday, February 22 - Free Intro Evening", free:true},
            {date:"2019-02-23", id:"xLwnmWT2X_I", title:"Saturday, Morning"},
            {date:"2019-02-23", id:"t8gsUfGONA8", title:"Afternoon"},
            {date:"2019-02-24", id:"q82I_8pZcg4", title:"Sunday, Morning"},
            {date:"2019-02-24", id:"wpWIgMFldLE", title:"Afternoon"}
        ]
    },
    {
        id:"19-02-16",
        title:"Tu corazon esta hablando.... Estas escuchando?",
        dates: ["2019-02-16"],
        icon:"19-02-16.jpg",
        password:"201910tceh",
        videos: [
            {date:"2019-02-16", id:"McOWZKco82s", title:"Saturday, February 16 - Workshop"}
        ]
    },
    {
        id:"19-02-09",
        title:"Free Yourself Through Sacred Sound And Movement",
        dates: ["2019-02-09"],
        password:"201902fyssm",
        videos: [
            {date:"2019-02-09", id:"-VCU4eBrgyQ", title:"Saturday, February 09 - Sacred Sound And Movement Class"}
        ]
    },
    {
        id:"19-02-08",
        title:"The True Love Workshop",
        dates: ["2019-02-08", "2019-02-10"],
        password:"2019tl",
        videos: [
            {date:"2019-02-08", id:"16tv0TMgKm8", title:"Friday, February 08 - Free Intro Evening", free:true},
            {date:"2019-02-09", id:"gZNeA8dZpDM", title:"Saturday, Morning"},
            {date:"2019-02-09", id:"IGF4BN0dTTU", title:"Saturday, Afternoon"},
            {date:"2019-02-10", id:"FqumD8e_-uo", title:"Sunday, Morning"},
            {date:"2019-02-10", id:"Hd_8th3bL04", title:"Sunday, Afternoon"}
        ]
    },
    {
        id:"19-01-18",
        title:"Golden Keys to a Successful and Abundant New Year",
        dates: ["2019-01-18", "2019-01-20"],
        password:"2019gk",
        videos: [
            {date:"2019-01-18", id:"3gQaBiqBORo", title:"Friday, January 18 - Free Intro Evening", free:true},
            {date:"2019-01-19", id:"KyAAGN_c7WY", title:"Saturday, Morning"},
            {date:"2019-01-19", id:"cpJ1fzBV0a8", title:"Saturday, Afternoon"},
            {date:"2019-01-20", id:"5fByMtzecOg", title:"Sunday, Morning"},
            {date:"2019-01-20", id:"D9FXBKWpXkA", title:"Sunday, Afternoon"}
        ]
    },
    {
        id:"18-12-28",
        title:"Bringing in the New Year",
        dates:"2018-12-28 to 30",
        password:"2018ny",
        videos: [
            {date:"2018-12-28", id:"7THqfg5zcn8", title:"Friday, December 28 - Free Intro Evening", free:true},
            {date:"2018-12-29", id:"CqHiSPVL28Y", title:"Saturday, Morning"},
            {date:"2018-12-29", id:"aMVg9SgZETo", title:"Saturday, Afternoon"},
            {date:"2018-12-30", id:"og2XeX7OVFw", title:"Sunday, Morning"},
            {date:"2018-12-30", id:"fDJTpo9puzY", title:"Sunday, Afternoon"}
        ]
    },
    {
        id:"181214",
        title:"Heart to Heart, Soul to Soul: Key to Lasting Client Relationships",
        password:"2018hhss",
        videos: [
            {date:"2018-12-14", id:"9RvZAR6kg68", title:"Friday, December 14 - Free Intro Evening", free:true},
            {date:"2018-11-03", id:"y0Xv40493cw", title:"Saturday Afternoon"},
            {date:"2018-11-04", id:"_h9VTVwg-xE", title:"Sunday, Morning"},
            {id:"_JacJRux3Rg", title:"Afternoon"}
        ]
    },
    {
        id:"181102",
        title:"Tao Science: Bluprint for Prosperity and Abundance",
        password:"taosciabundance",
        videos: [
            {date:"2018-11-02", id:"IW9zXms03LI", title:"Friday, December 14 - Free Intro Evening", free:true},
            {date:"2018-11-03", id:"-AHgUqHvPYM", title:"Saturday, Morning"},
            {id:"96FPz9mVZAY", title:"Afternoon"},
            {date:"2018-11-04", id:"Ieo8I2J2gPA", title:"Sunday, Morning"},
            {id:"YSRqBhCX9oQ", title:"Afternoon"}
        ]
    },
    {
        id:"181026",
        title:"Open Spiritual Channels: Find Your Path and Live Your Purpose",
        password:"oscpathpurpose",
        videos: [
            {date:"2018-10-26", id:"XOI8fOQjy5I", title:"Friday, December 14 - Free Intro Evening", free:true},
            {date:"2018-10-27", id:"YNqupZnHu8s", title:"Saturday, Morning"},
            {id:"BdA-caV9oAo", title:"Afternoon"},
            {date:"2018-10-28", id:"i7yLxj53H4g", title:"Sunday, Morning"},
            {id:"nclL6QQHfvo", title:"Afternoon"}
        ]
    },
    {
        id:"180928",
        title:"Connectado Con El Corazon ...",
        password:"Connectado",
        videos: [
            {date:"2018-09-28", id:"7w9ktRzCdps", title:"Friday, December 14 - Free Intro Evening", free:true},
            {date:"2018-09-29", id:"Mx42XNVrMJs", title:"Saturday, Morning"},
            {id:"FnILQfKnDWs", title:"Afternoon"}
        ]
    },
    {
        id:"180920",
        title:"Tao Source Communicator",
        password:"tsc201809",
        videos: [
            {date:"2018-09-20", id:"bzq2p6Tsyss", title:"Thursday, Morning"},
            {id:"etZ8ehedQzQ", title:"Afternoon"},
            {date:"2018-09-21", id:"MTcBZYRxPIc", title:"Friday, Morning"},
            {id:"nXBhwL9Jo3E", title:"Afternoon"},
            {date:"2018-09-22", id:"OZfvSB8MpqI", title:"Saturday, Morning"},
            {id:"5-oL-nB_wyU", title:"Afternoon, Part 1"},
            {id:"6MwPZv4Egz0", title:"Afternoon, Part 2"},
            {date:"2018-09-23", id:"YXP3o_tTvPg", title:"Sunday, Morning"},
            {id:"-MROmt0TKEQ", title:"Afternoon, Part 1"},
            {id:"pc_kAHkdL2A", title:"Afternoon, Part 2"},
            {date:"2018-09-24", id:"2VGOi4KzgJI", title:"Monday, Morning"},
            {id:"-MNjUA4Y56E", title:"Afternoon"}
        ]
    },
    {
        id:"180914",
        title:"Gratitude - Transform Stress to Trust",
        password:"stresstotrust",
        videos: [
            {date:"2018-09-14", id:"J-xI602Tj50", title:"Friday, September 14 - Free Intro Evening", free:true},
            {date:"2018-09-15", id:"g5Zj3SEy1Wo", title:"Morning, Part 1 - Facebook Live, Free Morning Session", free:true},
            {id:"5hr5I3_9DL0", title:"Part 2"},
            {id:"of3WNr8XcgI", title:"After Lunch Break, Part 1" },
            {id:"KGvGWXMuSZU", title:"Part 2"}
        ]
    },
    {
        id:"180831",
        title:"Pure Land Workshop with Master Hui-Ling and Master Henderson",
        password:"namoamitoufo2018",
        videos: [
            {date:"2018-08-31", id:"-0mbrKWUkQA", title:"Friday, August 31, 2018 - Free Introduction Evening", free:true},
            {date:"2018-09-01", id:"6s_5TMC902I", title:"Day 1, Saturday Morning"},
            {id:"xaAiRZffaYg", title:"Afternoon, Part 1 - Meditation", free:true},
            {id:"WKM3xkiuWhM", title:"Part 2"},
            {date:"2018-09-02", id:"vDV8EG-Os4U", title:"Day 2, Sunday, Morning"},
            {id:"4tWdjpUUQdg", title:"Afternoon"},
            {date:"2018-09-03", id:"gmxVdKGgJKs", title:"Day 3, Monday, Morning"},
            {id:"rDyKeJ78jJM", title:"Afternoon"}
        ]
    },
    {
        id:"P-mtit",
        title:"Master Teachers in Training",
        password:"MTiT2018",
        videos: [
            {date:"2017-10", id:"2JX7ORX8ZM8", title:"Opening Heart and Soul to Bao Yuan Shou Yi: Master Sher and Master Venier"},
            {date:"2017-09-11", id:"PvUIR6JJ57s", title:"September 11, 2017 with Master Hui-Ling"}
        ]
    },
    {
        id:"P-mt",
        title:"Master Teachers Training",
        password:"MT2018",
        videos: [
            {date:"2017-07-13", id:"09Olssj-oT4", title:"July 13, 2017"},
            {date:"2018-02-12", id:"gciVu-noRyM", title:"February 12, 2018 MT Training with Master Cecilia"}
        ]
    }
]

export default events;