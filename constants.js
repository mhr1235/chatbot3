// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"]
]

// Possible responses, in corresponding order

const replies = [
  ["Naimbag nga aldaw", "Kablaaw", "Naragsak nga Isasanbay", "Kumusta","Hello"],
  [
    "Nasayaatak",
    "WE WON'T MOVE!", "While still across the ocean i heard of USA. So thrilled I left through Manila Bay.",
    "I think my end is very near from this beautiful world"
  ],
  [
    "Once the police and sheriffs got into the building, they broke into the tenants' rooms. Then they started breaking things up, stealing, taking what the manongs had, broke the toilets that way there were no toilet facilities, so the tenants could never return.",
    "The police came down Kearny Street, with horses and police cars—it was like the Roman legions",
    "I remember that there were lots of Filipinos living in the South of Market. Then a lot of Filipinos moved to the South of Market, and we wanted to go where there were people we knew, so we just followed along.",
    "Coming home to a fresh crop of rice"
  ],
  ["i made it to manilatown. the people here can name every fish back home.", "It was a transformation of closet like rooms into ramparts", "When I came here in 45, there were 27 Filipino restaurants all the way up Kearny Street to Columbus. Now there are one or two, that’s all. And all the hotels in the area were full of Filipinos. No more."],
  ["Katipunan ng mga Demokratikong Pilipino", "dear manong felix i see the rain forest of my people before white man's history", "I dangle from a rusty nail wind and rain"],
  ["Manilatown, Manongs, and the Student Radicals"],
  ["I was a hungry stray dog too busy to keep myself alive.", "Filipinos lived at the various hotels scattered around Kearny Street from the Shasta, to the St. Paul, to the Clayton, to the Justice, to the Ampara Hotel. They kept their rooms, as small as they were, they stayed. Some of them lived in the hotel for about 50 years. They worked in the farm areas but kept rooms in the city. . . . He's 80 years old, and was one of the first to come to the I-Hotel to live. Then he went off to Walnut Grove to pick walnuts and then to Concord to pick pears and then off to Salinas. . . . Now he lives at the Justice Hotel in a small room. He spends some afternoons sitting in the sun around Portsmouth Square. Many manongs can be seen playing checkers in the park. Manong Amoite worked all his life on the farms. His social security pension is $60.00 a month."],
  ["Involvement in this struggle is by no means a one-sided affair", "During the war in 1942 or 1943 my sister and I went to the movies at the Warfield Theater on Market Street. As we were walking down towards the Ferry Building to take the Geary Street car, right there a few feet down from Geary and Market, there was a big commotion there. The crowd had a woman down against the curb— it was a white woman and they were stomping on her head. A rope went over the handle of the big statue called the Mechanic’s Statue—it looks like a guy on a winepress. They lynched a Filipino there. I looked up and saw it was one of my father's friends. I remembered seeing him down near Kearny Street. The reason why they lynched him was that they caught him with a white woman."],
  ["Kearny Street block was an unhealthy place for a young girl.", "So we have decided to fuse ourselves with masses of third world consciousness, which are the majority of the world's peoples, to create, through struggle, a new humanity, a new humanism, a New World Consciousness, and within that context collectively control our own destinies."],
  ["“Oh, yeah- he’s working in Salinas he's picking lettuce”", "He left Ilocos Norte in the Philippines in 1918 to come to the United States, and he resided at the hotel off and on for about fifty years. He received a small pension from his years of working as a merchant seaman, and he expected to live out the rest of his days in familiar surroundings.", "In 1937, I joined the Culinary Union, which includes cooks, bartenders, dishwashers, busboys, waiters and waitresses. I stayed in that union for almost 33 years until I retired."],
  ["In the IH we have a family of elderly Filipino men who have in the United States found each other and established a home together. Now they are being told to move on. And they have nowhere to go together.", "This is the last of the old ten-block Manilatown. If the hotel goes, it will wipe out a community anchor."],
  ["crosses the tenderloin street dressed in old, clean goodwill sunday best", "much more than a hotel it is a center, the only one in the area, which provides a recreation room for the senior citizens and a place for them to come in off the street.", "the Kearny Street neighborhood was a way station, a home base for a mobile workforce, a largely male population, most of them from the barrios and farms of the Ilocos and Visayan regions of the Philippines. The men worked in seasonal jobs on the farms of California's Central Valley, Washington State, and Oregon and in Alaskan salmon canneries. During the off-season, usually the winter months, they migrated to the cities to find jobs as culinary helpers, domestic servants, and hotel workers. In California, Filipinos followed the agricultural work cycle: In March, they began general farm work; fruit and vegetable harvesting followed from May to September; and by October, they began drifting into cities, reaching the highest population in January."],
  ["Awan ti forever", "Listening to manong lomanta will drive you crazy Everything he says is upside down", "there is nowhere we can go and remain together as a community"],
  ["inside your small room the rice is cooked", "it's not only a place to dine, but a place to meet friends, and a place to loiter and relax a while after days or weeks of strenuous and often unpleasant menial, domestic labor. Here is a place where the pressure of racial differences is relaxed. Here is a place where one hears and speaks one's own dialect without hostile or curious glances. Here is a place to meet those who, like yourself, are struggling to go to school and learn to be American"],
  ["Peace with a Lease"],
  ["I came to know afterwards that in many ways it was a crime to be a Filipino in California","i forgot my labors for a while at the taxi dance", "ten cents a dance for three minutes maybe the pinoy loses all money", "International Hotel-in the mongo heart & isda mind of the Philippines-where old & young Pilipinos live, hang, and roam around all day like carabaos: eating, sleeping & working"],
  [" Ibaybayagmo man ti agsarita","intindihin","We just want our fair share no more, no less."],
  ["The Kalayaan International is today's answer to the need of the overseas Filipino to be aware of the multi-faceted problems of his people, both here and back home."],
  ["Strong like bamboo in the wind blowing from the financial district","Shoulder to shoulder with Chinatown, in the warm glow of city lights","The Manongs, pioneers of the Filipino community, constitute a vast number of poor and retired men who are spread throughout the United States. Their entire adult lives have been hampered by severe social and economic hardships which are now becoming more exposed and uncovered. The Manongs issues and problems are becoming the concern of the Filipino Community. The struggle is to alter the unchanged course that has deprived them of their humanity and democratic rights. To understand their present circumstances is to unravel their past history and to view their lives in a clear perspective."]
]

// Random for any other user input

const alternative = [
  
]

// Whatever else you want :)

const coronavirus = [ "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]


