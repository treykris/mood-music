const Moods = [{
    "mood": "anger",
    "synonyms":[ "acrimony","animosity","annoyed","antagonized","displeased","enmity","exasperation","fury","hatred","impatient","indignation","ire","irritated","outraged","passionate","rage","resentment","temper","violent","chagrin","choler","conniption","dander","disapprobation","distemper","galled","huff","infuriated","irascibile","irritabile","miffed","peevish","petulant","sore","stew","storm","tantrum","tiff","umbrage","vexation","blow up","cat fit","hissy fit","ill humor","ill temper","mad","slow burn","aggravated","aroused","embitter","enraged","exacerbate","exasperated","excited","inflamed","offended","provoked","rankled","riled","affronted","agitated","boiled","bristle","burned","crazed","goad","madden","nettle","piqued","rant","raved","ruffled","seethed","stewed","tempted","umbrage","vexed","blowing up","boiling over","burned up","egged on","losing my temper","raising hell","steamed up","stirred up", "mad at the world", "passion", "fierce", "bitter", "cynical", "pissed off", "pissed", "hot", "heated", "furious", "anger", "angry"],
    "idNumbers": [0.38, 0.52],
    "minEnergy": 0.60
},
{
    "mood": "anticipation", 
    "synonyms": [ "apprehension","hopeful","joy","prospect","contemplating","expectancy","foresight","foretaste","impatience","outlook","preconception","premonition","preoccupied","prescience","presentiment","promising","trusting","awaiting","high hopes","looking forward","apprehension","awareness","foreboding","forecast","foresight","foretaste","forethought","inkling","intuition","preconception","premonition","prescience","presentiment","prevision","realization","foreseeing","prior knowledge","anticipating", "canniness","cautious","clairvoyant","discernment","discreet","discretion","far-sighted","foreknowledge","insightful","long-sighted","precaution","precognition","premeditation","prenotion","prospect","providence","provision","prudent","sagacity", "hungry", "better than yesterday", "inspired", "horny", "risky", "secretive"],
    "idNumbers": [0.61, 0.76]
},
{
    "mood":"disgust",
    "synonyms": [ "antipathy","dislike","distaste","hatred","loathing","revulsion","abhorrence","abomination","detestation","hatefulness","nausea","objection","repugnance","revolt","satiation","satiety","sick","surfeit","nauseous","bothered","disenchanted","displeased","disturbed","insulted","irked","nauseate","offended","outraged","revolted","shocked","sickened","turn off","upset","abominate","pall","piqued","repulsed","scandalize","surfeit","repulsed","cloy on","fill with loathing","gross out","make one sick","offend morals of","put off","reluct","stomach's turning","bored", "ew", "toxic", "unpleasant","intolerable","disagreeable", "off-putting", "revolting", "hateful", "foul","offensive", "unpalatable","unsavory", "obnoxious", "sickening", "repuslive", "nauseous"],
    "idNumbers": [0.28, 0.42]
},
{
    "mood":"fear",
    "synonyms": ["angst","anxiety","concern","despair","dismay","doubt","dread","horror","jitters","panic","scared","suspicious","terror","uneasy","uneasiness","worry","abhorrence","agitation","aversion","awe","consternation","cowardice","creeps","discomposure","disquietude","distress","faintheartedness","foreboding","frightful","funk","misgiving","nightmare","phobia","presentiment","qualm","reverence","revulsion","timidity","trembling","tremor","trepidation","bête noire","chickenheartedness","cold feet","cold sweat","recreancy","anticipate","avoidance","dread","expect","foresee","shunned","suspect","worrying","apprehending","blanching","cowering","crouching","falter","flinch","freting","quailing","quavering","shrinking","shuddering","shyt","trembling","wilting","afraid","anxious","apprehensive","be disquieted","frightened","in awe","break out in a sweat","dare not","feeling concern","having butterflies","having qualms","losing courage", "shitting myself"],
    "idNumbers": [0.15, 0.29],
    "minEnergy": 0.60
},
{
    "mood":"joy",
    "synonyms": [ "amused", "blissful", "charmed", "cheery", "comfortable", "delighted", "elated", "glee","humorous", "prideful", "satisfied", "wonder", "alleviated", "animated", "delectated", "ecstatic", "exulted", "felicity", "festivity", "frolic", "fruition", "gaiety", "gem", "glad", "good", "great", "gratification", "happy", "hilarity", "indulgence", "jewel", "joy","jubilance", "liveliness", "luxury", "merriment", "mirth", "prized", "raptured","ravished","refreshed","rejoiced","revelry","solace","sport","treasured","treat","good humor","pride and joy","regalement", "passion", "relaxed", "gucci", "pleasant", "fine", "chillin", "chilling", "amazing", "joyful", "appreciated", "appreciative", "well", "doing well", "high", "motivated", "live", "lit", "content", "nice", "wavy", "rich", "wealthy", "fantastic", "silly", "goofy", "pleased"],
    "idNumbers": [0.87, 1.0]
},
{
    "mood":"sadness",
    "synonyms": ["anguish","grief","heartache","heartbroken","hopeless","melancholy","misery", "mourning","poignant","sorrow","blah","bleak","bummed","bummed out","cheerlessness","dejected","despondency","disconsolateness","dispirited","distressed","doleful","dolor","down","dysphoria","forlornness","funk","gloomy","let down","listlessness","moody","mopes","mournful","sorrow","tribulation","woe","funky", "broken hearted","dismals","downcast","grieving", "heavy hearted","the blues","down in the dumps", "moody", "melancholy", "sad", "agony", "shame", "sadness", "lonely", "loneliness", "not great", "sucky", "terrible", "enduring", "unhappy", "shitty", "horrible", "discontent", "losing my grip", "grieving", "bad", "sorrowful", "heart broken", "broken"],
    "idNumbers": [0.01, 0.23],
    "maxEnergy": 0.50
},
{
    "mood":"surprise",
    "synonyms": ["astonishment", "in awe", "consternation", "consternation", "curious", "disappointed", "jolt", "miracle", "revelation", "wondered", "abruptness", "attacked", "bombshell", "disillusion", "epiphany", "eureka", "fortune", "godsend", "incredulity", "marveled", "prodigy", "stupefaction", "suddenness", "thunderbolted", "whammied", "wonderment", "astoundment", "curveball", "eye-opener", "unexpected", "unforeseen", "amazed", "astounded", "awed", "bewildered", "confounded", "confused", "dazzled", "disconcerted", "dismayed", "dumbfounded", "flabbergasted", "overwhelmed", "perplexed", "rattled", "shocked", "startled", "stunned", "unsettled", "consternated", "dazed", "discomfited", "electrified", "floored", "jared", "jolted", "petrified", "rocked", "staggered","stupefied", "blown away", "bowl over","spring something on", "struck dumb", "struck with awe", "taken aback", "take one's breath away", "thrown a curve", "not bad", "fortunate", "godsend", "holy"],
    "idNumbers": [0.51, 0.63]
},
{
    "mood": "trust",
    "synonyms": ["confident","expecting","faith","hopeful","assurance","certaint","certitude","conviction","credence","credit","dependent","positive","reliant","sureness","entrustment","gospel truth","account","care","protecting","charge","duty","guard","guardianship","keeping","liabile","moment","obligation","safekeeping","trusteeship","ward","count on","depend on","look to","accredited","assume","imagining","presume","suppose","surmise","take","banking on","counting","convinced","bet bottom dollar on","bet on","build on","calculate on","confide in","gamble on","have faith in","lay money on","lean on","place confidence in","place trust in","reckon on","rely upon","swear by","take at face value","think likely","commit","entrusting","advance","aid","assign","command","commission","confer","confide","consign","delegate","grant","lend","let","loan","patronize","store","transfer","give over","let out","make trustee","put into hands of","sign over","turn over", "sexy", "pretty", "beautiful", "careful"],
    "idNumbers": [0.74, 0.88]
},
{
    "mood":"indifferent",
    "synonyms": [ "disinterested", "diffident", "impervious", "haughty", "impartial", "callous", "unsympathetic", "uninvolved", "unconcerned", "nonchalant", "neutral", "distant", "heartless", "aloof", "inattentive", "uncaring", "detached", "apathetic", "unresponsive", "blasé", "cold", "cool", "dispassionate", "equitable", "heedless", "highbrow", "listless", "nonpartisan", "objective", "phlegmatic", "regardless", "scornful", "silent", "supercilious", "superior", "unbiased", "uncommunicative", "unemotional", "unmoved", "unprejudiced", "passionless", "stoical", "unaroused", "unimpressed", "unsocial", "indifferent", "standoffish", "above", "apart", "casual", "chilly", "forbidding", "hard-boiled", "lone wolf", "loner", "reserved", "secluded", "solitary", "thick-skinned", "unapproachable", "unconcerned", "unfriendly", "uninterested", "unsociable", "uppity", "withdrawn", "incurious", "offish", "cold fish", "hard-hearted", "laid back", "on ice", "putting on airs", "stuck up", "thoughtless", "wrong", "tired", "sleepy", "gray", "grey", "frustrated", "decent", "okay", "ok", "stressed", "just fine", "meh", "struggling", "split", "hungover", "stoned", "apathetic", "uninspired", "unmotivated", "apathetical", "aloof", "worthless", "jive", "eh", "suicidal", "alright", "contemplative", "robotic", "empty", "lost", "exhausted", "sore", "depressed", "chill", "fine", "whatever", "don't know", "unsure", "I don't know"], 
    "idNumbers": [0.09, 0.79]
}]

module.exports = Moods;