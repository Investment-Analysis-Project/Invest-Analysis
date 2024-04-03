const createError = require('../utils/error');
const axios = require('axios');

let resultArray = [
    {
        "news_title": "Google adds more AI in shopping",
        "news_url": "https://www.theverge.com/2024/3/27/24113485/google-shopping-generative-ai-image-generation-rating-style",
        "news_sentiment": 
            {
                "label": "neutral",
                "score": 0.8970250487327576
            },
        "news_entities": [
            [
                {
                    "entity_group": "ORG",
                    "score": 0.9963921904563904,
                    "word": "Google",
                    "start": 20,
                    "end": 26
                },
                {
                    "entity_group": "MISC",
                    "score": 0.7779554724693298,
                    "word": "Style Recom",
                    "start": 190,
                    "end": 201
                },
                {
                    "entity_group": "MISC",
                    "score": 0.7093291282653809,
                    "word": "##dations",
                    "start": 204,
                    "end": 211
                },
                {
                    "entity_group": "LOC",
                    "score": 0.9990941286087036,
                    "word": "US",
                    "start": 269,
                    "end": 271
                },
                {
                    "entity_group": "MISC",
                    "score": 0.6508978605270386,
                    "word": "Tinder",
                    "start": 373,
                    "end": 379
                },
                {
                    "entity_group": "ORG",
                    "score": 0.5674890875816345,
                    "word": "Netflix",
                    "start": 383,
                    "end": 390
                }
            ],
            [],
            [
                {
                    "entity_group": "ORG",
                    "score": 0.9988827109336853,
                    "word": "Google",
                    "start": 0,
                    "end": 6
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9986793398857117,
                    "word": "Google",
                    "start": 81,
                    "end": 87
                }
            ],
            [
                {
                    "entity_group": "ORG",
                    "score": 0.9977110624313354,
                    "word": "Google",
                    "start": 0,
                    "end": 6
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9966052770614624,
                    "word": "AI",
                    "start": 25,
                    "end": 27
                },
                {
                    "entity_group": "MISC",
                    "score": 0.996961772441864,
                    "word": "Search Generative Experience",
                    "start": 121,
                    "end": 149
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9763096570968628,
                    "word": "AI",
                    "start": 301,
                    "end": 303
                },
                {
                    "entity_group": "ORG",
                    "score": 0.7850428819656372,
                    "word": "Google Shopping",
                    "start": 440,
                    "end": 455
                }
            ],
            [
                {
                    "entity_group": "ORG",
                    "score": 0.9977532029151917,
                    "word": "Google",
                    "start": 0,
                    "end": 6
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9878371357917786,
                    "word": "AI",
                    "start": 63,
                    "end": 65
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9986353516578674,
                    "word": "Amazon",
                    "start": 85,
                    "end": 91
                },
                {
                    "entity_group": "PER",
                    "score": 0.999203622341156,
                    "word": "Rufus",
                    "start": 114,
                    "end": 119
                },
                {
                    "entity_group": "PER",
                    "score": 0.9252369999885559,
                    "word": "Jeff Bezos",
                    "start": 208,
                    "end": 218
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9984827637672424,
                    "word": "Amazon",
                    "start": 220,
                    "end": 226
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9983691573143005,
                    "word": "AI",
                    "start": 282,
                    "end": 284
                }
            ],
            [
                {
                    "entity_group": "MISC",
                    "score": 0.9958816766738892,
                    "word": "AI",
                    "start": 9,
                    "end": 11
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9528178572654724,
                    "word": "Verge",
                    "start": 92,
                    "end": 97
                },
                {
                    "entity_group": "PER",
                    "score": 0.9995713233947754,
                    "word": "Mia Sato",
                    "start": 100,
                    "end": 108
                },
                {
                    "entity_group": "MISC",
                    "score": 0.993656575679779,
                    "word": "AI",
                    "start": 118,
                    "end": 120
                }
            ],
            [
                {
                    "entity_group": "ORG",
                    "score": 0.9953538179397583,
                    "word": "Google",
                    "start": 77,
                    "end": 83
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9874818325042725,
                    "word": "AI",
                    "start": 99,
                    "end": 101
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9953065514564514,
                    "word": "AI",
                    "start": 196,
                    "end": 198
                }
            ]
        ]
    },
    {
        "news_title": "8 Google Employees Invented Modern AI. Here’s the Inside Story",
        "news_url": "https://www.wired.com/story/eight-google-employees-invented-modern-ai-transformers-paper/",
        "news_sentiment": 
            {
                "label": "neutral",
                "score": 0.8939166069030762
            },
        "news_entities": [
            [
                {
                    "entity_group": "MISC",
                    "score": 0.7450002431869507,
                    "word": "“",
                    "start": 37,
                    "end": 38
                },
                {
                    "entity_group": "MISC",
                    "score": 0.5221794247627258,
                    "word": "At",
                    "start": 38,
                    "end": 40
                },
                {
                    "entity_group": "MISC",
                    "score": 0.8213502764701843,
                    "word": "Is All You",
                    "start": 48,
                    "end": 58
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9899464249610901,
                    "word": "Google",
                    "start": 130,
                    "end": 136
                },
                {
                    "entity_group": "PER",
                    "score": 0.9997273087501526,
                    "word": "No",
                    "start": 226,
                    "end": 228
                },
                {
                    "entity_group": "PER",
                    "score": 0.9776904582977295,
                    "word": "##am Shazee",
                    "start": 228,
                    "end": 237
                }
            ],
            [],
            [],
            [
                {
                    "entity_group": "ORG",
                    "score": 0.7922067046165466,
                    "word": "“",
                    "start": 41,
                    "end": 42
                },
                {
                    "entity_group": "ORG",
                    "score": 0.6723555326461792,
                    "word": "Attention ”",
                    "start": 42,
                    "end": 52
                },
                {
                    "entity_group": "MISC",
                    "score": 0.848835825920105,
                    "word": "AI",
                    "start": 164,
                    "end": 166
                },
                {
                    "entity_group": "MISC",
                    "score": 0.7788597345352173,
                    "word": "AI",
                    "start": 416,
                    "end": 418
                },
                {
                    "entity_group": "MISC",
                    "score": 0.8981939554214478,
                    "word": "Cha",
                    "start": 439,
                    "end": 442
                },
                {
                    "entity_group": "MISC",
                    "score": 0.644883930683136,
                    "word": "##tGP",
                    "start": 442,
                    "end": 445
                },
                {
                    "entity_group": "ORG",
                    "score": 0.8530769944190979,
                    "word": "Dall",
                    "start": 478,
                    "end": 482
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9063674211502075,
                    "word": "E",
                    "start": 483,
                    "end": 484
                },
                {
                    "entity_group": "ORG",
                    "score": 0.5716958045959473,
                    "word": "Midjou",
                    "start": 489,
                    "end": 495
                },
                {
                    "entity_group": "PER",
                    "score": 0.7462495565414429,
                    "word": "Sha",
                    "start": 501,
                    "end": 504
                },
                {
                    "entity_group": "PER",
                    "score": 0.824560821056366,
                    "word": "Llion Jones",
                    "start": 741,
                    "end": 752
                }
            ],
            [
                {
                    "entity_group": "ORG",
                    "score": 0.690606415271759,
                    "word": "LLION",
                    "start": 7,
                    "end": 12
                },
                {
                    "entity_group": "LOC",
                    "score": 0.836741030216217,
                    "word": "SAKANA",
                    "start": 45,
                    "end": 51
                }
            ],
            [
                {
                    "entity_group": "PER",
                    "score": 0.9995806813240051,
                    "word": "Geoffrey Hinton",
                    "start": 60,
                    "end": 75
                },
                {
                    "entity_group": "MISC",
                    "score": 0.960335373878479,
                    "word": "AI",
                    "start": 149,
                    "end": 151
                },
                {
                    "entity_group": "ORG",
                    "score": 0.969243586063385,
                    "word": "OpenAI",
                    "start": 222,
                    "end": 228
                }
            ],
            [
                {
                    "entity_group": "ORG",
                    "score": 0.9978112578392029,
                    "word": "Google",
                    "start": 34,
                    "end": 40
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9980745911598206,
                    "word": "Transformer Eight",
                    "start": 167,
                    "end": 184
                }
            ],
            [
                {
                    "entity_group": "PER",
                    "score": 0.4691428542137146,
                    "word": "J",
                    "start": 7,
                    "end": 8
                },
                {
                    "entity_group": "PER",
                    "score": 0.4758709967136383,
                    "word": "CO",
                    "start": 36,
                    "end": 38
                }
            ],
            [
                {
                    "entity_group": "PER",
                    "score": 0.9164558053016663,
                    "word": "Jakob Uszkor",
                    "start": 69,
                    "end": 81
                }
            ],
            [
                {
                    "entity_group": "PER",
                    "score": 0.9906632900238037,
                    "word": "Us",
                    "start": 0,
                    "end": 2
                },
                {
                    "entity_group": "PER",
                    "score": 0.7527729272842407,
                    "word": "Hans Uszkoreit",
                    "start": 24,
                    "end": 38
                },
                {
                    "entity_group": "PER",
                    "score": 0.999333918094635,
                    "word": "Hans",
                    "start": 121,
                    "end": 125
                },
                {
                    "entity_group": "LOC",
                    "score": 0.9990336894989014,
                    "word": "East Germany",
                    "start": 169,
                    "end": 181
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9996544122695923,
                    "word": "Soviet",
                    "start": 201,
                    "end": 207
                },
                {
                    "entity_group": "LOC",
                    "score": 0.9997128844261169,
                    "word": "Czechoslovakia",
                    "start": 220,
                    "end": 234
                },
                {
                    "entity_group": "LOC",
                    "score": 0.999225378036499,
                    "word": "West Germany",
                    "start": 269,
                    "end": 281
                },
                {
                    "entity_group": "LOC",
                    "score": 0.9996997117996216,
                    "word": "Berlin",
                    "start": 323,
                    "end": 329
                },
                {
                    "entity_group": "LOC",
                    "score": 0.9996788501739502,
                    "word": "US",
                    "start": 354,
                    "end": 356
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9906612634658813,
                    "word": "SRI",
                    "start": 410,
                    "end": 413
                },
                {
                    "entity_group": "LOC",
                    "score": 0.9975032806396484,
                    "word": "Menlo Park",
                    "start": 439,
                    "end": 449
                },
                {
                    "entity_group": "LOC",
                    "score": 0.9996920824050903,
                    "word": "California",
                    "start": 451,
                    "end": 461
                },
                {
                    "entity_group": "PER",
                    "score": 0.9993628859519958,
                    "word": "Jakob",
                    "start": 468,
                    "end": 473
                },
                {
                    "entity_group": "LOC",
                    "score": 0.9997351765632629,
                    "word": "Germany",
                    "start": 518,
                    "end": 525
                },
                {
                    "entity_group": "PER",
                    "score": 0.9993100166320801,
                    "word": "Jakob",
                    "start": 533,
                    "end": 538
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9990887641906738,
                    "word": "Google",
                    "start": 668,
                    "end": 674
                },
                {
                    "entity_group": "LOC",
                    "score": 0.7305301427841187,
                    "word": "Mountain",
                    "start": 682,
                    "end": 690
                },
                {
                    "entity_group": "ORG",
                    "score": 0.6284776926040649,
                    "word": "View",
                    "start": 691,
                    "end": 695
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9988948702812195,
                    "word": "Google",
                    "start": 854,
                    "end": 860
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9967619180679321,
                    "word": "Apple",
                    "start": 997,
                    "end": 1002
                },
                {
                    "entity_group": "PER",
                    "score": 0.9921688437461853,
                    "word": "Sir",
                    "start": 1022,
                    "end": 1025
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9987075328826904,
                    "word": "Google",
                    "start": 1122,
                    "end": 1128
                },
                {
                    "entity_group": "PER",
                    "score": 0.9867651462554932,
                    "word": "Sir",
                    "start": 1170,
                    "end": 1173
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9904893636703491,
                    "word": "Uszkoreit",
                    "start": 1254,
                    "end": 1263
                }
            ],
            [
                {
                    "entity_group": "PER",
                    "score": 0.6343561410903931,
                    "word": "Us",
                    "start": 24,
                    "end": 26
                },
                {
                    "entity_group": "ORG",
                    "score": 0.6526821851730347,
                    "word": "##zkor",
                    "start": 26,
                    "end": 30
                },
                {
                    "entity_group": "PER",
                    "score": 0.9959239959716797,
                    "word": "Sir",
                    "start": 40,
                    "end": 43
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9974748492240906,
                    "word": "Google",
                    "start": 69,
                    "end": 75
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9905012845993042,
                    "word": "AI",
                    "start": 301,
                    "end": 303
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9932534098625183,
                    "word": "AI",
                    "start": 528,
                    "end": 530
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9985068440437317,
                    "word": "Google",
                    "start": 566,
                    "end": 572
                }
            ]
        ]
    },
    {
        "news_title": "Google Is Getting Thousands of Deepfake Porn Complaints",
        "news_url": "https://www.wired.com/story/google-deepfake-porn-dmca-takedowns/",
        "news_sentiment": 
            {
                "label": "neutral",
                "score": 0.5170645713806152
            },
        "news_entities": [
            [
                {
                    "entity_group": "PER",
                    "score": 0.9829046726226807,
                    "word": "Julie Inman Grant",
                    "start": 109,
                    "end": 126
                },
                {
                    "entity_group": "LOC",
                    "score": 0.9996607303619385,
                    "word": "Australia",
                    "start": 128,
                    "end": 137
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9981600642204285,
                    "word": "AI",
                    "start": 282,
                    "end": 284
                },
                {
                    "entity_group": "PER",
                    "score": 0.9993165731430054,
                    "word": "Grant",
                    "start": 469,
                    "end": 474
                }
            ],
            [
                {
                    "entity_group": "MISC",
                    "score": 0.9906003475189209,
                    "word": "DMCA",
                    "start": 118,
                    "end": 122
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9757703542709351,
                    "word": "DMCA",
                    "start": 137,
                    "end": 141
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9982115030288696,
                    "word": "Google",
                    "start": 384,
                    "end": 390
                }
            ],
            [
                {
                    "entity_group": "MISC",
                    "score": 0.8081873655319214,
                    "word": "DMCA",
                    "start": 5,
                    "end": 9
                },
                {
                    "entity_group": "PER",
                    "score": 0.9997621774673462,
                    "word": "Carrie Goldberg",
                    "start": 143,
                    "end": 158
                },
                {
                    "entity_group": "PER",
                    "score": 0.9992401599884033,
                    "word": "Goldberg",
                    "start": 188,
                    "end": 196
                },
                {
                    "entity_group": "PER",
                    "score": 0.9994813799858093,
                    "word": "Goldberg",
                    "start": 457,
                    "end": 465
                }
            ],
            [
                {
                    "entity_group": "ORG",
                    "score": 0.9817731380462646,
                    "word": "WIRED",
                    "start": 0,
                    "end": 5
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9969275593757629,
                    "word": "Google",
                    "start": 74,
                    "end": 80
                },
                {
                    "entity_group": "MISC",
                    "score": 0.993588924407959,
                    "word": "DMCA",
                    "start": 94,
                    "end": 98
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9857114553451538,
                    "word": "DMCA",
                    "start": 270,
                    "end": 274
                },
                {
                    "entity_group": "PER",
                    "score": 0.992652416229248,
                    "word": "Taylor Swift",
                    "start": 635,
                    "end": 647
                }
            ],
            [
                {
                    "entity_group": "MISC",
                    "score": 0.9899795055389404,
                    "word": "DMCA",
                    "start": 21,
                    "end": 25
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9982981085777283,
                    "word": "Google",
                    "start": 82,
                    "end": 88
                },
                {
                    "entity_group": "ORG",
                    "score": 0.8638684153556824,
                    "word": "W",
                    "start": 179,
                    "end": 180
                },
                {
                    "entity_group": "ORG",
                    "score": 0.521960973739624,
                    "word": "##ED",
                    "start": 182,
                    "end": 184
                },
                {
                    "entity_group": "ORG",
                    "score": 0.99818354845047,
                    "word": "Google",
                    "start": 292,
                    "end": 298
                }
            ],
            [
                {
                    "entity_group": "PER",
                    "score": 0.9996137022972107,
                    "word": "Y",
                    "start": 52,
                    "end": 53
                },
                {
                    "entity_group": "PER",
                    "score": 0.9927142262458801,
                    "word": "##vet",
                    "start": 53,
                    "end": 56
                },
                {
                    "entity_group": "PER",
                    "score": 0.9636480212211609,
                    "word": "##te van Bekkum",
                    "start": 56,
                    "end": 69
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9983372688293457,
                    "word": "Orange Warriors",
                    "start": 82,
                    "end": 97
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9888203740119934,
                    "word": "DMCA",
                    "start": 206,
                    "end": 210
                },
                {
                    "entity_group": "PER",
                    "score": 0.9178803563117981,
                    "word": "Van Bekkum",
                    "start": 221,
                    "end": 231
                },
                {
                    "entity_group": "PER",
                    "score": 0.9703360795974731,
                    "word": "van Bekku",
                    "start": 499,
                    "end": 508
                }
            ],
            [
                {
                    "entity_group": "ORG",
                    "score": 0.9980682730674744,
                    "word": "Google",
                    "start": 0,
                    "end": 6
                },
                {
                    "entity_group": "PER",
                    "score": 0.9994543194770813,
                    "word": "Ned Adriance",
                    "start": 20,
                    "end": 32
                },
                {
                    "entity_group": "MISC",
                    "score": 0.966789960861206,
                    "word": "DMCA",
                    "start": 42,
                    "end": 46
                },
                {
                    "entity_group": "PER",
                    "score": 0.9870277643203735,
                    "word": "Adrian",
                    "start": 374,
                    "end": 380
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9984849095344543,
                    "word": "Google",
                    "start": 476,
                    "end": 482
                }
            ]
        ]
    },
    {
        "news_title": "You Should Update Apple iOS and Google Chrome ASAP",
        "news_url": "https://www.wired.com/story/apple-ios-google-chrome-critical-update-march/",
        "news_sentiment": 
            {
                "label": "neutral",
                "score": 0.5021896362304688
            },
        "news_entities": [
            [
                {
                    "entity_group": "ORG",
                    "score": 0.9975283741950989,
                    "word": "Apple",
                    "start": 94,
                    "end": 99
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9867295026779175,
                    "word": "iOS",
                    "start": 102,
                    "end": 105
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9959307312965393,
                    "word": "Google",
                    "start": 107,
                    "end": 113
                },
                {
                    "entity_group": "MISC",
                    "score": 0.8017750978469849,
                    "word": "Chrome",
                    "start": 116,
                    "end": 122
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9825853705406189,
                    "word": "Firefox",
                    "start": 161,
                    "end": 168
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9972262382507324,
                    "word": "Cisco",
                    "start": 239,
                    "end": 244
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9859098792076111,
                    "word": "VMware",
                    "start": 246,
                    "end": 252
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9960144758224487,
                    "word": "SAP",
                    "start": 258,
                    "end": 261
                }
            ],
            [],
            [
                {
                    "entity_group": "MISC",
                    "score": 0.8418630361557007,
                    "word": "Apple iOS",
                    "start": 0,
                    "end": 9
                }
            ],
            [
                {
                    "entity_group": "ORG",
                    "score": 0.998052716255188,
                    "word": "Apple",
                    "start": 0,
                    "end": 5
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9864040613174438,
                    "word": "iPhone",
                    "start": 108,
                    "end": 114
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9974911212921143,
                    "word": "iOS",
                    "start": 130,
                    "end": 133
                }
            ],
            [
                {
                    "entity_group": "MISC",
                    "score": 0.8426566123962402,
                    "word": "C",
                    "start": 11,
                    "end": 12
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9480664730072021,
                    "word": "iPhone Kernel",
                    "start": 48,
                    "end": 61
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9985312223434448,
                    "word": "Apple",
                    "start": 117,
                    "end": 122
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9642344117164612,
                    "word": "iPhone",
                    "start": 190,
                    "end": 196
                }
            ],
            [
                {
                    "entity_group": "MISC",
                    "score": 0.6728525757789612,
                    "word": "C",
                    "start": 11,
                    "end": 12
                },
                {
                    "entity_group": "MISC",
                    "score": 0.8017860054969788,
                    "word": "R",
                    "start": 47,
                    "end": 48
                },
                {
                    "entity_group": "MISC",
                    "score": 0.7726081609725952,
                    "word": "##K",
                    "start": 49,
                    "end": 50
                },
                {
                    "entity_group": "MISC",
                    "score": 0.932346761226654,
                    "word": "AirPods",
                    "start": 111,
                    "end": 118
                },
                {
                    "entity_group": "ORG",
                    "score": 0.6266835331916809,
                    "word": "Kern",
                    "start": 160,
                    "end": 164
                },
                {
                    "entity_group": "MISC",
                    "score": 0.5441564917564392,
                    "word": "##el",
                    "start": 164,
                    "end": 166
                }
            ],
            [
                {
                    "entity_group": "ORG",
                    "score": 0.9988116025924683,
                    "word": "Apple",
                    "start": 16,
                    "end": 21
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9650068879127502,
                    "word": "iOS",
                    "start": 57,
                    "end": 60
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9023208618164062,
                    "word": "iPhone",
                    "start": 103,
                    "end": 109
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9321973323822021,
                    "word": "iOS",
                    "start": 179,
                    "end": 182
                }
            ],
            [
                {
                    "entity_group": "MISC",
                    "score": 0.9727503657341003,
                    "word": "iOS",
                    "start": 19,
                    "end": 22
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9987108707427979,
                    "word": "Apple",
                    "start": 31,
                    "end": 36
                },
                {
                    "entity_group": "MISC",
                    "score": 0.710350751876831,
                    "word": "Safari",
                    "start": 98,
                    "end": 104
                },
                {
                    "entity_group": "MISC",
                    "score": 0.5057933926582336,
                    "word": "mac",
                    "start": 113,
                    "end": 116
                },
                {
                    "entity_group": "MISC",
                    "score": 0.2949924170970917,
                    "word": "Son",
                    "start": 119,
                    "end": 122
                },
                {
                    "entity_group": "ORG",
                    "score": 0.4706057608127594,
                    "word": "##oma",
                    "start": 122,
                    "end": 125
                },
                {
                    "entity_group": "MISC",
                    "score": 0.8559605479240417,
                    "word": "macOS Ventura",
                    "start": 137,
                    "end": 150
                }
            ],
            [
                {
                    "entity_group": "ORG",
                    "score": 0.7279682755470276,
                    "word": "Google",
                    "start": 0,
                    "end": 6
                },
                {
                    "entity_group": "MISC",
                    "score": 0.6461100578308105,
                    "word": "Chrome",
                    "start": 7,
                    "end": 13
                }
            ],
            [
                {
                    "entity_group": "ORG",
                    "score": 0.9989150762557983,
                    "word": "Google",
                    "start": 35,
                    "end": 41
                },
                {
                    "entity_group": "MISC",
                    "score": 0.8777242302894592,
                    "word": "Ch",
                    "start": 79,
                    "end": 81
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9989655017852783,
                    "word": "Google",
                    "start": 122,
                    "end": 128
                },
                {
                    "entity_group": "MISC",
                    "score": 0.6407898664474487,
                    "word": "C",
                    "start": 170,
                    "end": 171
                }
            ],
            [
                {
                    "entity_group": "MISC",
                    "score": 0.6281328201293945,
                    "word": "C",
                    "start": 31,
                    "end": 32
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9123623967170715,
                    "word": "Swiftshader",
                    "start": 75,
                    "end": 86
                },
                {
                    "entity_group": "ORG",
                    "score": 0.4855661690235138,
                    "word": "Canvas",
                    "start": 128,
                    "end": 134
                }
            ],
            [
                {
                    "entity_group": "ORG",
                    "score": 0.9982877373695374,
                    "word": "Google",
                    "start": 25,
                    "end": 31
                },
                {
                    "entity_group": "ORG",
                    "score": 0.7010882496833801,
                    "word": "AN",
                    "start": 117,
                    "end": 119
                },
                {
                    "entity_group": "ORG",
                    "score": 0.836036205291748,
                    "word": "WebAs",
                    "start": 314,
                    "end": 319
                }
            ],
            [
                {
                    "entity_group": "MISC",
                    "score": 0.9306275248527527,
                    "word": "Pwn2O",
                    "start": 42,
                    "end": 47
                },
                {
                    "entity_group": "MISC",
                    "score": 0.7711607217788696,
                    "word": "Chrome",
                    "start": 98,
                    "end": 104
                }
            ],
            [
                {
                    "entity_group": "ORG",
                    "score": 0.796549379825592,
                    "word": "Mozilla Firefox",
                    "start": 0,
                    "end": 15
                }
            ],
            [
                {
                    "entity_group": "ORG",
                    "score": 0.9822052717208862,
                    "word": "Mozilla",
                    "start": 0,
                    "end": 7
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9880674481391907,
                    "word": "Firefox",
                    "start": 10,
                    "end": 17
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9065523147583008,
                    "word": "P",
                    "start": 93,
                    "end": 94
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9478057622909546,
                    "word": "##2O",
                    "start": 96,
                    "end": 98
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9883144497871399,
                    "word": "JavaScript Exec",
                    "start": 195,
                    "end": 210
                },
                {
                    "entity_group": "ORG",
                    "score": 0.5089716911315918,
                    "word": "Event",
                    "start": 224,
                    "end": 229
                },
                {
                    "entity_group": "MISC",
                    "score": 0.6456100940704346,
                    "word": "Handlers",
                    "start": 230,
                    "end": 238
                }
            ],
            [
                {
                    "entity_group": "ORG",
                    "score": 0.9930852651596069,
                    "word": "Mozilla",
                    "start": 22,
                    "end": 29
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9929403066635132,
                    "word": "Firefox 124",
                    "start": 39,
                    "end": 50
                },
                {
                    "entity_group": "MISC",
                    "score": 0.6139460802078247,
                    "word": "C",
                    "start": 92,
                    "end": 93
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9982650876045227,
                    "word": "Windows",
                    "start": 139,
                    "end": 146
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9954015016555786,
                    "word": "Windows Error Reporter",
                    "start": 203,
                    "end": 225
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9890796542167664,
                    "word": "Mozilla",
                    "start": 285,
                    "end": 292
                }
            ],
            [
                {
                    "entity_group": "ORG",
                    "score": 0.7268553972244263,
                    "word": "Fire",
                    "start": 62,
                    "end": 66
                },
                {
                    "entity_group": "MISC",
                    "score": 0.5679615139961243,
                    "word": "##fo",
                    "start": 66,
                    "end": 68
                },
                {
                    "entity_group": "ORG",
                    "score": 0.899042546749115,
                    "word": "##x",
                    "start": 68,
                    "end": 69
                },
                {
                    "entity_group": "ORG",
                    "score": 0.837375819683075,
                    "word": "Mozilla",
                    "start": 229,
                    "end": 236
                }
            ],
            [
                {
                    "entity_group": "MISC",
                    "score": 0.9826899170875549,
                    "word": "Google Android",
                    "start": 0,
                    "end": 14
                }
            ],
            [
                {
                    "entity_group": "ORG",
                    "score": 0.9986637830734253,
                    "word": "Google",
                    "start": 0,
                    "end": 6
                },
                {
                    "entity_group": "MISC",
                    "score": 0.8549497723579407,
                    "word": "Android Security Bulletin",
                    "start": 30,
                    "end": 55
                }
            ],
            [
                {
                    "entity_group": "MISC",
                    "score": 0.8967414498329163,
                    "word": "System",
                    "start": 77,
                    "end": 83
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9986552000045776,
                    "word": "Google",
                    "start": 184,
                    "end": 190
                }
            ]
        ]
    },
    {
        "news_title": "Apple’s AI ambitions could include Google or OpenAI",
        "news_url": "https://www.theverge.com/2024/3/18/24104626/apple-license-google-gemini-generative-ai-openai-chatgpt",
        "news_sentiment": 
            {
                "label": "positive",
                "score": 0.5869224071502686
            },
        "news_entities": [
            [
                {
                    "entity_group": "ORG",
                    "score": 0.9986448884010315,
                    "word": "Apple",
                    "start": 0,
                    "end": 5
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9981415271759033,
                    "word": "Google",
                    "start": 50,
                    "end": 56
                },
                {
                    "entity_group": "ORG",
                    "score": 0.5552422404289246,
                    "word": "Gemini",
                    "start": 70,
                    "end": 76
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9827601909637451,
                    "word": "iPhone",
                    "start": 109,
                    "end": 115
                },
                {
                    "entity_group": "PER",
                    "score": 0.5714540481567383,
                    "word": "Bloomberg",
                    "start": 117,
                    "end": 126
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9736032485961914,
                    "word": "OpenAI",
                    "start": 166,
                    "end": 172
                },
                {
                    "entity_group": "MISC",
                    "score": 0.6326325535774231,
                    "word": "Cha",
                    "start": 175,
                    "end": 178
                },
                {
                    "entity_group": "MISC",
                    "score": 0.7429375052452087,
                    "word": "##GP",
                    "start": 179,
                    "end": 181
                }
            ],
            [
                {
                    "entity_group": "PER",
                    "score": 0.9997310638427734,
                    "word": "Tim Cook",
                    "start": 4,
                    "end": 12
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9990660548210144,
                    "word": "Apple",
                    "start": 40,
                    "end": 45
                },
                {
                    "entity_group": "PER",
                    "score": 0.6213939189910889,
                    "word": "”",
                    "start": 196,
                    "end": 197
                },
                {
                    "entity_group": "PER",
                    "score": 0.9221262335777283,
                    "word": "Bloomberg",
                    "start": 198,
                    "end": 207
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9679188132286072,
                    "word": "AI",
                    "start": 235,
                    "end": 237
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9986018538475037,
                    "word": "Apple",
                    "start": 258,
                    "end": 263
                },
                {
                    "entity_group": "MISC",
                    "score": 0.6744071841239929,
                    "word": "AI",
                    "start": 338,
                    "end": 340
                },
                {
                    "entity_group": "ORG",
                    "score": 0.99893718957901,
                    "word": "Apple",
                    "start": 349,
                    "end": 354
                },
                {
                    "entity_group": "MISC",
                    "score": 0.5069391131401062,
                    "word": "iOS",
                    "start": 405,
                    "end": 408
                },
                {
                    "entity_group": "MISC",
                    "score": 0.8764954805374146,
                    "word": "AI",
                    "start": 458,
                    "end": 460
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9989135265350342,
                    "word": "Google",
                    "start": 548,
                    "end": 554
                }
            ],
            [
                {
                    "entity_group": "ORG",
                    "score": 0.9937894940376282,
                    "word": "Google",
                    "start": 5,
                    "end": 11
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9987902045249939,
                    "word": "Apple",
                    "start": 36,
                    "end": 41
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9747250080108643,
                    "word": "AI",
                    "start": 115,
                    "end": 117
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9981279969215393,
                    "word": "Samsung",
                    "start": 160,
                    "end": 167
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9986981153488159,
                    "word": "Galaxy AI",
                    "start": 186,
                    "end": 195
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9954342246055603,
                    "word": "Galaxy S24",
                    "start": 220,
                    "end": 230
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9927968382835388,
                    "word": "Google",
                    "start": 265,
                    "end": 271
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9203064441680908,
                    "word": "AI",
                    "start": 274,
                    "end": 276
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9985028505325317,
                    "word": "Google",
                    "start": 289,
                    "end": 295
                },
                {
                    "entity_group": "MISC",
                    "score": 0.7742700576782227,
                    "word": "AI",
                    "start": 298,
                    "end": 300
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9762464761734009,
                    "word": "Pixel 8",
                    "start": 337,
                    "end": 344
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9970364570617676,
                    "word": "Google",
                    "start": 398,
                    "end": 404
                },
                {
                    "entity_group": "MISC",
                    "score": 0.8662981986999512,
                    "word": "AI",
                    "start": 407,
                    "end": 409
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9987185001373291,
                    "word": "Apple",
                    "start": 420,
                    "end": 425
                }
            ],
            [
                {
                    "entity_group": "MISC",
                    "score": 0.9913395047187805,
                    "word": "iPhone",
                    "start": 4,
                    "end": 10
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9982421398162842,
                    "word": "Google",
                    "start": 54,
                    "end": 60
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9223697185516357,
                    "word": "Google Search",
                    "start": 69,
                    "end": 82
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9980456829071045,
                    "word": "US Department of Justice",
                    "start": 253,
                    "end": 277
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9988762736320496,
                    "word": "Google",
                    "start": 287,
                    "end": 293
                }
            ],
            [
                {
                    "entity_group": "MISC",
                    "score": 0.985654890537262,
                    "word": "AI",
                    "start": 12,
                    "end": 14
                },
                {
                    "entity_group": "ORG",
                    "score": 0.997494101524353,
                    "word": "Apple",
                    "start": 28,
                    "end": 33
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9970800280570984,
                    "word": "Google",
                    "start": 38,
                    "end": 44
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9980847835540771,
                    "word": "Google",
                    "start": 71,
                    "end": 77
                },
                {
                    "entity_group": "MISC",
                    "score": 0.8410918116569519,
                    "word": "AI",
                    "start": 80,
                    "end": 82
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9983189702033997,
                    "word": "Apple",
                    "start": 119,
                    "end": 124
                },
                {
                    "entity_group": "PER",
                    "score": 0.8087580800056458,
                    "word": "Bloomberg",
                    "start": 158,
                    "end": 167
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9977951049804688,
                    "word": "Apple",
                    "start": 212,
                    "end": 217
                },
                {
                    "entity_group": "MISC",
                    "score": 0.8990775346755981,
                    "word": "AI",
                    "start": 242,
                    "end": 244
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9984595775604248,
                    "word": "Apple",
                    "start": 291,
                    "end": 296
                },
                {
                    "entity_group": "ORG",
                    "score": 0.7428313493728638,
                    "word": "Apple",
                    "start": 363,
                    "end": 368
                },
                {
                    "entity_group": "MISC",
                    "score": 0.860548734664917,
                    "word": "GPT",
                    "start": 369,
                    "end": 372
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9568181037902832,
                    "word": "Ajax",
                    "start": 444,
                    "end": 448
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9984637498855591,
                    "word": "Apple",
                    "start": 454,
                    "end": 459
                },
                {
                    "entity_group": "MISC",
                    "score": 0.8716747164726257,
                    "word": "AI",
                    "start": 462,
                    "end": 464
                }
            ],
            [
                {
                    "entity_group": "ORG",
                    "score": 0.9986559152603149,
                    "word": "Apple",
                    "start": 56,
                    "end": 61
                },
                {
                    "entity_group": "MISC",
                    "score": 0.9937601685523987,
                    "word": "AI",
                    "start": 82,
                    "end": 84
                },
                {
                    "entity_group": "ORG",
                    "score": 0.9981513619422913,
                    "word": "Google",
                    "start": 95,
                    "end": 101
                },
                {
                    "entity_group": "PER",
                    "score": 0.9974591135978699,
                    "word": "Bloomberg",
                    "start": 108,
                    "end": 117
                },
                {
                    "entity_group": "ORG",
                    "score": 0.996626079082489,
                    "word": "WWDC",
                    "start": 179,
                    "end": 183
                }
            ]
        ]
    }
];

const recent_news = async(req,res,next)=>{
    const five_news = [
        {
          source: { id: 'the-verge', name: 'The Verge' },
          author: 'Emilia David',
          title: 'Google adds more AI in shopping',
          description: 'Now available in the US, shoppers on Google’s app or on mobile can rate items and search for clothing based on an AI-generated image.',
          url: 'https://www.theverge.com/2024/3/27/24113485/google-shopping-generative-ai-image-generation-rating-style',
          urlToImage: 'https://cdn.vox-cdn.com/thumbor/ZtCF0RGneZml3juzavvw2_dAa5M=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016883/STK093_Google_06.jpg',
          publishedAt: '2024-03-27T16:00:00Z',
          content: 'Google adds more AI in shopping\r\n' +
            'Google adds more AI in shopping\r\n' +
            ' / Shoppers can now rate the items they find in search to find more of the stuff they actually like. \r\n' +
            'ByEmilia David, a reporter who… [+1795 chars]'
        },
        {
          source: { id: 'wired', name: 'Wired' },
          author: 'Steven Levy',
          title: '8 Google Employees Invented Modern AI. Here’s the Inside Story',
          description: 'They met by chance, got hooked on an idea, and wrote the “Transformers” paper—the most consequential tech breakthrough in recent history.',
          url: 'https://www.wired.com/story/eight-google-employees-invented-modern-ai-transformers-paper/',
          urlToImage: 'https://media.wired.com/photos/65f35e827465bc8a4736d29d/191:100/w_1280,c_limit/Transformers-Social.jpg',
          publishedAt: '2024-03-20T10:00:00Z',
          content: 'The last two weeks before the deadline were frantic. Though officially some of the team still had desks in Building 1945, they mostly worked in 1965 because it had a better espresso machine in the mi… [+2954 chars]'
        },
        {
          source: { id: 'wired', name: 'Wired' },
          author: 'Matt Burgess',
          title: 'Google Is Getting Thousands of Deepfake Porn Complaints',
          description: 'Content creators are using copyright laws to get nonconsensual deepfakes removed from the web. With the complaints covering nearly 30,000 URLs, experts say Google should do more to help.',
          url: 'https://www.wired.com/story/google-deepfake-porn-dmca-takedowns/',
          urlToImage: 'https://media.wired.com/photos/65eb60da40d8c63d24f03206/191:100/w_1280,c_limit/Deepfake-Porn-Google-Security-GettyImages-1408253641.jpg',
          publishedAt: '2024-03-11T07:00:00Z',
          content: 'Each method is weaponizedalmost always against womento degrade, harass, or cause shame, among other harms. Julie Inman Grant, Australias e-safety commissioner, says her office is starting to see more… [+3756 chars]'
        },
        {
          source: { id: 'wired', name: 'Wired' },
          author: "Kate O'Flaherty",
          title: 'You Should Update Apple iOS and Google Chrome ASAP',
          description: 'Plus: Microsoft patches over 60 vulnerabilities, Mozilla fixes two Firefox zero-day bugs, Google patches 40 issues in Android, and more.',
          url: 'https://www.wired.com/story/apple-ios-google-chrome-critical-update-march/',
          urlToImage: 'https://media.wired.com/photos/66072aed36e307ecf6fc3e75/191:100/w_1280,c_limit/032924-security-critical-updates-march.jpg',
          publishedAt: '2024-03-31T10:00:00Z',
          content: 'Its time to check your software updates. March has seen the release of important patches for Apples iOS, Googles Chrome, and its privacy-conscious competitor Firefox. Bugs have also been squashed by … [+3528 chars]'
        },
        {
          source: { id: 'the-verge', name: 'The Verge' },
          author: 'Jon Porter',
          title: 'Apple’s AI ambitions could include Google or OpenAI',
          description: 'Apple has reportedly held discussions with Google to bring its Gemini generative AI technology to the iPhone and has also considered using OpenAI’s ChatGPT.',
          url: 'https://www.theverge.com/2024/3/18/24104626/apple-license-google-gemini-generative-ai-openai-chatgpt',
          urlToImage: 'https://cdn.vox-cdn.com/thumbor/AznF8_8PWIM-17iDULo4aihqkv8=/0x0:20400x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24931975/236794_iPhone_15_pro_pro_Max_VPavic_0019.jpg',
          publishedAt: '2024-03-18T09:30:34Z',
          content: 'Apples AI ambitions could include Google or OpenAI\r\n' +
            'Apples AI ambitions could include Google or OpenAI\r\n' +
            ' / The iPhone-maker is in active talks to bring Gemini to the iPhone, and has also considered u… [+2452 chars]'
        }
      ]

    try{
        // const {keyword}=req.params;
        // const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&excludeDomains=engadget.com&searchIn=title&sortBy=relevancy&language=en&sortBy=relevancy&apiKey=dd4dcc554dd94d61820961820e342242`);
        // const five_news = response.data.articles.slice(0,5);
        // const newsArray = [];
        // five_news.forEach(news => {
        //     const {url,title} = news;
        //     newsArray.push({url,title});
        // });

        //const x = await processNewsArray(newsArray);

        // if(x.length)
        //     res.json(x);
        res.json(resultArray);
    }catch(err){
        console.log(err);
    }
};

const processNewsArray = async(newsArray)=>
{
    resultArray = [];

    for (let i = 0; i <newsArray.length; i++)
    {
        const news = newsArray[i];
        const response = await fetch('http://127.0.0.1:5000/scrap',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({url: news.url})
        });
        const news_scraped = await response.json();
        await query(news_scraped,news);
    }
    
    return resultArray;
};

const query = async(news_scraped,news)=>
{
    try{
        let news_sentiment=[];
        let news_entities=[];

        for(let i=0;i<news_scraped.length;i++)
        {
            const response1 = await fetch(
            "https://api-inference.huggingface.co/models/ProsusAI/finbert",
            {
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify({"inputs":news_scraped[i]})
            });

            const response2 = await fetch(
            "https://api-inference.huggingface.co/models/dslim/bert-base-NER",
            {
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify({"inputs":news_scraped[i]}),
            });

            const result1 = await response1.json();
            const result2 = await response2.json();
            
            news_sentiment.push(result1[0][0]);
            news_entities.push(result2);
        }
        const news_title=news.title;
        const news_url=news.url;
        resultArray.push({news_title,news_url,news_sentiment,news_entities});
    }catch(err){
        console.log(err)
    }
}
          
module.exports = {recent_news};