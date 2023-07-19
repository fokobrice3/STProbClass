//Mojiba Fix Library
const fixUtf8 = require('fix-utf8');
//NodeJs fetch sync
let fetch = require('sync-fetch')
//File Server Library
let fs = require("fs"); 
//PATH Library
let path = require('path'); 
//Gzip Library
const gunzip = require('gunzip-file') 
//Googlethis Library
const google = require('googlethis'); 
const unirest = require("unirest");
const cheerio = require("cheerio");
//general search library
const gse = require("general-search-engine")
//Jaccard Index - Cousine Similarity - SorensenDice coefficient - Jaro-Winkler - Levenshtein
let stringComparison = require('string-comparison')
let natural = require('natural');  
let classifier = new natural.BayesClassifier();
let tokenizer = new natural.WordTokenizer();
let wordnet = new natural.WordNet();
//stopword
let stopwords_1 = ['encyclopedic','dictionary','commonswikimediaorg','purlobolibraryorg','wikipedia','envo','start','i','me','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves','he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves','what','which','who','whom','this','that','these','those','am','is','are','was','were','be','been','being','have','has','had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by','for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down','in','out','on','off','over','under','again','further','then','once','here','there','when','where','why','how','all','any','both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t','can','will','just','don','should','now']
let stopwords_2 = ["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any","are","aren't","as","at","be","because","been","before","being","below","between","both","but","by","can't","cannot","could","couldn't","did","didn't","do","does","doesn't","doing","don't","down","during","each","few","for","from","further","had","hadn't","has","hasn't","have","haven't","having","he","he'd","he'll","he's","her","here","here's","hers","herself","him","himself","his","how","how's","i","i'd","i'll","i'm","i've","if","in","into","is","isn't","it","it's","its","itself","let's","me","more","most","mustn't","my","myself","no","nor","not","of","off","on","once","only","or","other","ought","our","ours","ourselves","out","over","own","same","shan't","she","she'd","she'll","she's","should","shouldn't","so","some","such","than","that","that's","the","their","theirs","them","themselves","then","there","there's","these","they","they'd","they'll","they're","they've","this","those","through","to","too","under","until","up","very","was","wasn't","we","we'd","we'll","we're","we've","were","weren't","what","what's","when","when's","where","where's","which","while","who","who's","whom","why","why's","with","won't","would","wouldn't","you","you'd","you'll","you're","you've","your","yours","yourself","yourselves"];
let stopwords_3 = ["'ll","'tis","'twas","'ve","10","39","a","a's","able","ableabout","about","above","abroad","abst","accordance","according","accordingly","across","act","actually","ad","added","adj","adopted","ae","af","affected","affecting","affects","after","afterwards","ag","again","against","ago","ah","ahead","ai","ain't","aint","al","all","allow","allows","almost","alone","along","alongside","already","also","although","always","am","amid","amidst","among","amongst","amoungst","amount","an","and","announce","another","any","anybody","anyhow","anymore","anyone","anything","anyway","anyways","anywhere","ao","apart","apparently","appear","appreciate","appropriate","approximately","aq","ar","are","area","areas","aren","aren't","arent","arise","around","arpa","as","aside","ask","asked","asking","asks","associated","at","au","auth","available","aw","away","awfully","az","b","ba","back","backed","backing","backs","backward","backwards","bb","bd","be","became","because","become","becomes","becoming","been","before","beforehand","began","begin","beginning","beginnings","begins","behind","being","beings","believe","below","beside","besides","best","better","between","beyond","bf","bg","bh","bi","big","bill","billion","biol","bj","bm","bn","bo","both","bottom","br","brief","briefly","bs","bt","but","buy","bv","bw","by","bz","c","c'mon","c's","ca","call","came","can","can't","cannot","cant","caption","case","cases","cause","causes","cc","cd","certain","certainly","cf","cg","ch","changes","ci","ck","cl","clear","clearly","click","cm","cmon","cn","co","co.","com","come","comes","computer","con","concerning","consequently","consider","considering","contain","containing","contains","copy","corresponding","could","could've","couldn","couldn't","couldnt","course","cr","cry","cs","cu","currently","cv","cx","cy","cz","d","dare","daren't","darent","date","de","dear","definitely","describe","described","despite","detail","did","didn","didn't","didnt","differ","different","differently","directly","dj","dk","dm","do","does","doesn","doesn't","doesnt","doing","don","don't","done","dont","doubtful","down","downed","downing","downs","downwards","due","during","dz","e","each","early","ec","ed","edu","ee","effect","eg","eh","eight","eighty","either","eleven","else","elsewhere","empty","end","ended","ending","ends","enough","entirely","er","es","especially","et","et-al","etc","even","evenly","ever","evermore","every","everybody","everyone","everything","everywhere","ex","exactly","example","except","f","face","faces","fact","facts","fairly","far","farther","felt","few","fewer","ff","fi","fifteen","fifth","fifty","fify","fill","find","finds","fire","first","five","fix","fj","fk","fm","fo","followed","following","follows","for","forever","former","formerly","forth","forty","forward","found","four","fr","free","from","front","full","fully","further","furthered","furthering","furthermore","furthers","fx","g","ga","gave","gb","gd","ge","general","generally","get","gets","getting","gf","gg","gh","gi","give","given","gives","giving","gl","gm","gmt","gn","go","goes","going","gone","good","goods","got","gotten","gov","gp","gq","gr","great","greater","greatest","greetings","group","grouped","grouping","groups","gs","gt","gu","gw","gy","h","had","hadn't","hadnt","half","happens","hardly","has","hasn","hasn't","hasnt","have","haven","haven't","havent","having","he","he'd","he'll","he's","hed","hell","hello","help","hence","her","here","here's","hereafter","hereby","herein","heres","hereupon","hers","herself","herse”","hes","hi","hid","high","higher","highest","him","himself","himse”","his","hither","hk","hm","hn","home","homepage","hopefully","how","how'd","how'll","how's","howbeit","however","hr","ht","htm","html","http","hu","hundred","i","i'd","i'll","i'm","i've","i.e.","id","ie","if","ignored","ii","il","ill","im","immediate","immediately","importance","important","in","inasmuch","inc","inc.","indeed","index","indicate","indicated","indicates","information","inner","inside","insofar","instead","int","interest","interested","interesting","interests","into","invention","inward","io","iq","ir","is","isn","isn't","isnt","it","it'd","it'll","it's","itd","itll","its","itself","itse”","ive","j","je","jm","jo","join","jp","just","k","ke","keep","keeps","kept","keys","kg","kh","ki","kind","km","kn","knew","know","known","knows","kp","kr","kw","ky","kz","l","la","large","largely","last","lately","later","latest","latter","latterly","lb","lc","least","length","less","lest","let","let's","lets","li","like","liked","likely","likewise","line","little","lk","ll","long","longer","longest","look","looking","looks","low","lower","lr","ls","lt","ltd","lu","lv","ly","m","ma","made","mainly","make","makes","making","man","many","may","maybe","mayn't","maynt","mc","md","me","mean","means","meantime","meanwhile","member","members","men","merely","mg","mh","microsoft","might","might've","mightn't","mightnt","mil","mill","million","mine","minus","miss","mk","ml","mm","mn","mo","more","moreover","most","mostly","move","mp","mq","mr","mrs","ms","msie","mt","mu","much","mug","must","must've","mustn't","mustnt","mv","mw","mx","my","myself","myse”","mz","n","na","name","namely","nay","nc","nd","ne","near","nearly","necessarily","necessary","need","needed","needing","needn't","neednt","needs","neither","net","netscape","never","neverf","neverless","nevertheless","new","newer","newest","next","nf","ng","ni","nine","ninety","nl","no","no-one","nobody","non","none","nonetheless","noone","nor","normally","nos","not","noted","nothing","notwithstanding","novel","now","nowhere","np","nr","nu","null","number","numbers","nz","o","obtain","obtained","obviously","of","off","often","oh","ok","okay","old","older","oldest","om","omitted","on","once","one","one's","ones","only","onto","open","opened","opening","opens","opposite","or","ord","order","ordered","ordering","orders","org","other","others","otherwise","ought","oughtn't","oughtnt","our","ours","ourselves","out","outside","over","overall","owing","own","p","pa","page","pages","part","parted","particular","particularly","parting","parts","past","pe","per","perhaps","pf","pg","ph","pk","pl","place","placed","places","please","plus","pm","pmid","pn","point","pointed","pointing","points","poorly","possible","possibly","potentially","pp","pr","predominantly","present","presented","presenting","presents","presumably","previously","primarily","probably","problem","problems","promptly","proud","provided","provides","pt","put","puts","pw","py","q","qa","que","quickly","quite","qv","r","ran","rather","rd","re","readily","really","reasonably","recent","recently","ref","refs","regarding","regardless","regards","related","relatively","research","reserved","respectively","resulted","resulting","results","right","ring","ro","room","rooms","round","ru","run","rw","s","sa","said","same","saw","say","saying","says","sb","sc","sd","se","sec","second","secondly","seconds","section","see","seeing","seem","seemed","seeming","seems","seen","sees","self","selves","sensible","sent","serious","seriously","seven","seventy","several","sg","sh","shall","shan't","shant","she","she'd","she'll","she's","shed","shell","shes","should","should've","shouldn","shouldn't","shouldnt","show","showed","showing","shown","showns","shows","si","side","sides","significant","significantly","similar","similarly","since","sincere","site","six","sixty","sj","sk","sl","slightly","sm","small","smaller","smallest","sn","so","some","somebody","someday","somehow","someone","somethan","something","sometime","sometimes","somewhat","somewhere","soon","sorry","specifically","specified","specify","specifying","sr","st","state","states","still","stop","strongly","su","sub","substantially","successfully","such","sufficiently","suggest","sup","sure","sv","sy","system","sz","t","t's","take","taken","taking","tc","td","tell","ten","tends","test","text","tf","tg","th","than","thank","thanks","thanx","that","that'll","that's","that've","thatll","thats","thatve","the","their","theirs","them","themselves","then","thence","there","there'd","there'll","there're","there's","there've","thereafter","thereby","thered","therefore","therein","therell","thereof","therere","theres","thereto","thereupon","thereve","these","they","they'd","they'll","they're","they've","theyd","theyll","theyre","theyve","thick","thin","thing","things","think","thinks","third","thirty","this","thorough","thoroughly","those","thou","though","thoughh","thought","thoughts","thousand","three","throug","through","throughout","thru","thus","til","till","tip","tis","tj","tk","tm","tn","to","today","together","too","took","top","toward","towards","tp","tr","tried","tries","trillion","truly","try","trying","ts","tt","turn","turned","turning","turns","tv","tw","twas","twelve","twenty","twice","two","tz","u","ua","ug","uk","um","un","under","underneath","undoing","unfortunately","unless","unlike","unlikely","until","unto","up","upon","ups","upwards","us","use","used","useful","usefully","usefulness","uses","using","usually","uucp","uy","uz","v","va","value","various","vc","ve","versus","very","vg","vi","via","viz","vn","vol","vols","vs","vu","w","want","wanted","wanting","wants","was","wasn","wasn't","wasnt","way","ways","we","we'd","we'll","we're","we've","web","webpage","website","wed","welcome","well","wells","went","were","weren","weren't","werent","weve","wf","what","what'd","what'll","what's","what've","whatever","whatll","whats","whatve","when","when'd","when'll","when's","whence","whenever","where","where'd","where'll","where's","whereafter","whereas","whereby","wherein","wheres","whereupon","wherever","whether","which","whichever","while","whilst","whim","whither","who","who'd","who'll","who's","whod","whoever","whole","wholl","whom","whomever","whos","whose","why","why'd","why'll","why's","widely","width","will","willing","wish","with","within","without","won","won't","wonder","wont","words","work","worked","working","works","world","would","would've","wouldn","wouldn't","wouldnt","ws","www","x","y","ye","year","years","yes","yet","you","you'd","you'll","you're","you've","youd","youll","young","younger","youngest","your","youre","yours","yourself","yourselves","youve","yt","yu","z","za","zero","zm","zr"];
let stopwords_4 = ['about', 'after', 'all', 'also', 'am', 'an', 'and', 'another', 'any', 'are', 'as', 'at', 'be', 'because', 'been', 'before', 'being', 'between', 'both', 'but', 'by', 'came', 'can', 'come', 'could', 'did', 'do', 'each', 'for', 'from', 'get', 'got', 'has', 'had', 'he', 'have', 'her', 'here', 'him', 'himself', 'his', 'how', 'if', 'in', 'into', 'is', 'it', 'like', 'make', 'many', 'me', 'might', 'more', 'most', 'much', 'must', 'my', 'never', 'now', 'of', 'on', 'only', 'or', 'other', 'our', 'out', 'over', 'said', 'same', 'should', 'since', 'some', 'still', 'such', 'take', 'than', 'that', 'the', 'their', 'them', 'then', 'there', 'these', 'they', 'this', 'those', 'through', 'to', 'too', 'under', 'up', 'very', 'was', 'way', 'we', 'well', 'were', 'what', 'where', 'which', 'while', 'who', 'with', 'would', 'you', 'your', 'a', 'i'];
let stopwords_5 = ["a","a's","able","about","above","according","accordingly","across","actually","after","afterwards","again","against","ain't","all","allow","allows","almost","alone","along","already","also","although","always","am","among","amongst","an","and","another","any","anybody","anyhow","anyone","anything","anyway","anyways","anywhere","apart","appear","appreciate","appropriate","are","aren't","around","as","aside","ask","asking","associated","at","available","away","awfully","b","be","became","because","become","becomes","becoming","been","before","beforehand","behind","being","believe","below","beside","besides","best","better","between","beyond","both","brief","but","by","c","c'mon","c's","came","can","can't","cannot","cant","cause","causes","certain","certainly","changes","clearly","co","com","come","comes","concerning","consequently","consider","considering","contain","containing","contains","corresponding","could","couldn't","course","currently","d","definitely","described","despite","did","didn't","different","do","does","doesn't","doing","don't","done","down","downwards","during","e","each","edu","eg","eight","either","else","elsewhere","enough","entirely","especially","et","etc","even","ever","every","everybody","everyone","everything","everywhere","ex","exactly","example","except","f","far","few","fifth","first","five","followed","following","follows","for","former","formerly","forth","four","from","further","furthermore","g","get","gets","getting","given","gives","go","goes","going","gone","got","gotten","greetings","h","had","hadn't","happens","hardly","has","hasn't","have","haven't","having","he","he's","hello","help","hence","her","here","here's","hereafter","hereby","herein","hereupon","hers","herself","hi","him","himself","his","hither","hopefully","how","howbeit","however","i","i'd","i'll","i'm","i've","ie","if","ignored","immediate","in","inasmuch","inc","indeed","indicate","indicated","indicates","inner","insofar","instead","into","inward","is","isn't","it","it'd","it'll","it's","its","itself","j","just","k","keep","keeps","kept","know","known","knows","l","last","lately","later","latter","latterly","least","less","lest","let","let's","like","liked","likely","little","look","looking","looks","ltd","m","mainly","many","may","maybe","me","mean","meanwhile","merely","might","more","moreover","most","mostly","much","must","my","myself","n","name","namely","nd","near","nearly","necessary","need","needs","neither","never","nevertheless","new","next","nine","no","nobody","non","none","noone","nor","normally","not","nothing","novel","now","nowhere","o","obviously","of","off","often","oh","ok","okay","old","on","once","one","ones","only","onto","or","other","others","otherwise","ought","our","ours","ourselves","out","outside","over","overall","own","p","particular","particularly","per","perhaps","placed","please","plus","possible","presumably","probably","provides","q","que","quite","qv","r","rather","rd","re","really","reasonably","regarding","regardless","regards","relatively","respectively","right","s","said","same","saw","say","saying","says","second","secondly","see","seeing","seem","seemed","seeming","seems","seen","self","selves","sensible","sent","serious","seriously","seven","several","shall","she","should","shouldn't","since","six","so","some","somebody","somehow","someone","something","sometime","sometimes","somewhat","somewhere","soon","sorry","specified","specify","specifying","still","sub","such","sup","sure","t","t's","take","taken","tell","tends","th","than","thank","thanks","thanx","that","that's","thats","the","their","theirs","them","themselves","then","thence","there","there's","thereafter","thereby","therefore","therein","theres","thereupon","these","they","they'd","they'll","they're","they've","think","third","this","thorough","thoroughly","those","though","three","through","throughout","thru","thus","to","together","too","took","toward","towards","tried","tries","truly","try","trying","twice","two","u","un","under","unfortunately","unless","unlikely","until","unto","up","upon","us","use","used","useful","uses","using","usually","uucp","v","value","various","very","via","viz","vs","w","want","wants","was","wasn't","way","we","we'd","we'll","we're","we've","welcome","well","went","were","weren't","what","what's","whatever","when","whence","whenever","where","where's","whereafter","whereas","whereby","wherein","whereupon","wherever","whether","which","while","whither","who","who's","whoever","whole","whom","whose","why","will","willing","wish","with","within","without","won't","wonder","would","wouldn't","x","y","yes","yet","you","you'd","you'll","you're","you've","your","yours","yourself","yourselves","z","zero","'s","did","do","in","give","count","amount","code","does","Within","do","dies","can","correct","equal","greater","lesser","less","than","great","to","number","date","place","birth place","birthday","dead place"," means","name","country","person","id"];
let Interrogate_words = ["?", "which", "what", "whose", "when", "who", "whom", "where", "how", "why", "whether", "whatsoever", "whither", "whence", "whatever", "wherever"];
let wds = [...stopwords_1, ...stopwords_2, ...stopwords_3, ...stopwords_4, ...stopwords_5, ...Interrogate_words]; 
let rwords = wds.filter(function(item, pos) {
  return wds.indexOf(item) == pos;
})
//EndPoints
var URL_wdok = new URL("https://query.wikidata.org/sparql");
var URL_wd = new URL("https://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org");
var url_wpd = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageprops&ppprop=wikibase_item&redirects=1&titles=";
var url_wpd_new = "https://en.wikipedia.org/w/api.php?action=query&generator=allpages&prop=pageprops|info&inprop=url&ppprop=wikibase_item&gaplimit=5&gapfrom=";

//Get Organic from Google
const getOrganicData = (search) => {
    return unirest
      .get("https://www.google.com/search?q="+search+"&gl=us&hl=en")
      .headers({
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
      })
      .then((response) => {
        let $ = cheerio.load(response.body);
  
        let titles = [];
        let links = [];
        let snippets = [];
        let displayedLinks = [];
  
        $(".yuRUbf > a > h3").each((i, el) => {
          titles[i] = $(el).text();
        });
        $(".yuRUbf > a").each((i, el) => {
          links[i] = $(el).attr("href");
        });
        $(".g .VwiC3b ").each((i, el) => {
          snippets[i] = $(el).text();
        });
        $(".g .yuRUbf .NJjxre .tjvcx").each((i, el) => {
          displayedLinks[i] = $(el).text();
        });
  
        const organicResults = [];
  
        for (let i = 0; i < titles.length; i++) {
          organicResults[i] = {
            title: titles[i],
            links: links[i],
            snippet: snippets[i],
            displayedLink: displayedLinks[i],
          };
        }
        return organicResults;
        //console.log(organicResults)
      });
  };
//sleep program
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
//get line in file
function getJSONLines(s){ 
  let data = fs.readFileSync(s, "utf8");   
  data = data.split("\n"); 
  let res = []
  for(let i=0; i<data.length-1; i++){
    if(data[i].length>0)
      res[i] = JSON.parse(data[i]);
  } 
  let cols = Object.keys(JSON.parse(data[0])).length;
  let rows = data.length;
  return {data: res, index: cols, lines: rows};
}
//get csv in Array
function getCSVArray(s){ 
  var data = fs.readFileSync(s, "utf8");   
  //console.log(data)
  data = data.split("\n"); // SPLIT ROWS
  for (let ik in data){  
    let t= ""+data[ik];
    if(t.trim()!=''){
      data[ik] = data[ik].split(",");
    }  
    for(let jk=0;jk<data[ik].length;jk++){
      //if(j!=data[i].length){    
        if(data[ik][jk].trim().startsWith('"')){ 
          if(!data[ik][jk].trim().endsWith('"')){
            if(data[ik][jk+1]!=undefined){
              //data[ik][jk] = data[ik][jk].trim().replace('"','') +" "+ data[ik][jk+1].trim().replace('"',''); 
              data[ik][jk] = data[ik][jk].trim() +","+ data[ik][jk+1].trim(); 
              data[ik].splice(jk+1, 1); 
            }            
          } 
        } 
      //}
    }
  }   
  var cols = data[0].length;//number of column
  var rows = data.length;//number of rows
  return {data: data, cols: cols, rows: rows};
}
function getCSVArray2(s){ 
  var data = fs.readFileSync(s, "utf8");   
  //console.log(data)
  data = data.split("\r\n"); // SPLIT ROWS
  for (let ik in data){  
    let t= ""+data[ik];
    if(t.trim()!=''){
      data[ik] = data[ik].split(",");
    }  
    for(let jk=0;jk<data[ik].length;jk++){
      //if(j!=data[i].length){    
        if(data[ik][jk].trim().startsWith('"')){ 
          if(!data[ik][jk].trim().endsWith('"')){
            if(data[ik][jk+1]!=undefined){
              //data[ik][jk] = data[ik][jk].trim().replace('"','') +" "+ data[ik][jk+1].trim().replace('"',''); 
              data[ik][jk] = data[ik][jk].trim() +","+ data[ik][jk+1].trim(); 
              data[ik].splice(jk+1, 1); 
            }            
          } 
        } 
      //}
    }
  }   
  var cols = data[0].length;//number of column
  var rows = data.length;//number of rows
  return {data: data, cols: cols, rows: rows};
}
//get Json File
function getJSON_file(s){
  try{
    var data = fs.readFileSync(s);
    return JSON.parse(data)
  }catch(err) {
    console.error("Error:", err); 
    return null;
  }    
}
//pre-process string
function preProcess(s){
  const regex = /[!"#$%&()*+/;<=>?@[\]^_`{|}~]/g;//, : . -
  let clean_string = "", final=""; 
  s = fixUtf8(s);
  let arr  = s.split(" ").filter(x => x !== "")
  for (let item of arr) {//remove all long spaces in string
      clean_string += item + " "
  }     
  clean_string =  clean_string.replace(/<\/?[^>]+(>|$)/gi, "");//remove HTML TAG  
  clean_string = clean_string.replace(regex, '')
          .replace('\\', '')
          .replaceAll('\u21a0', '')
          .replaceAll('\u2606', '')        
          .replaceAll('\u2713', '')
          .replaceAll('\u00e8', '')
          .replaceAll('\u00bd', '')
          .replaceAll('\u00f4', '')
          .replaceAll('\u00de', '')
          .replaceAll('\u00c3', '')
          .replaceAll('\u00c8', '')
          .trim()
          .toLowerCase();
  arr  = clean_string.split(" ").filter(x => x !== "")
  for (let item of arr) {//remove all long spaces in string
    final += item + " "
  }
  return final; 
} 
//get csv files names in tables
function getCSVNames(testFolder){  
  var tablesID = [];    
  fs.readdirSync(testFolder).forEach(file => {
      filename = path.parse(file).name; 
      tablesID.push(filename);
  });
  return tablesID;
} 
//Check if cell is candidate to annotation
function mustAnnotate(a, b){ 
  //console.log(a)
  //console.log(b)
  for(ik=0;ik<a.length;ik++){
    let arr = a[ik]
    if(arr.toString()==b.toString()){
      //console.log("Annoter");
      return true; 
    } 
  }
  return false;
}
//check if it's annotated
function isInside(data, target){  
  for(ik=0;ik<data.length;ik++){
    let str = data[ik].toString()
    if(str.startsWith(target)){
      //console.log(target+' <-- inside --> '+str);
      return true;
    } 
  }
  //console.log("NOT INSIDE");
  return false;
}
//saveJson Result
function saveJsonFile(finTab,output){  
  const jsonContent = JSON.stringify(finTab);
  fs.writeFileSync(output, jsonContent, 'utf8', function (err) {
      if (err) return console.log(err);
      //console.log("The file "+output+" was saved!");
  });
}
//Get element with highest occurence
function eltwithHighOcc(array){
  if(array.length == 0) return null;
  var eltMap = {};
  var maxEl = array[0], maxCount = 1;
  for(var i = 0; i < array.length; i++){
      var el = array[i];
      if(eltMap[el] == null) eltMap[el] = 1;
      else eltMap[el]++;  
      if(eltMap[el] > maxCount){
          maxEl = el;
          maxCount = eltMap[el];
      }
  }
  return maxEl;
}
//Secure Json Parse
function safeParseJSON(response) {
  var body = response.text(); 
  try {
      return JSON.parse(body);
  } catch (err) {
      console.error("Error:", err);
      console.error("Response body:", body);
      return [];
  }
}
function safeParseJSON2(response) {
  var body = response.text(); 
  try {
      return JSON.parse(body);
  } catch (err) {
      console.error("Error:", err);
      console.error("Response body:", body);
      return {
          head: {
          vars: [
            'entity',
            'entityLabel',
            'entityDescription',
            'type',
            'typeLabel'
          ]
        },
        results: { bindings: [] }
      };
  }
}
//Check redundant elements
function duplicated_1(datas, test) {
  for (let data of datas)
      if (data[0] == test[0] && data[1] == test[1] && data[2] == test[2]) return true
  return false
}
function duplicated_2(datas, test) {
  for (let data of datas)
      if (data[0] == test[0] && data[1] == test[1]) return true
  return false
} 
//remove duplicate after merging anotation result
function removeDuplicatesResults(pathSourceFile, pathresultFile, type="cea"){ 
  let sources = getCSVArray(pathSourceFile).data  
  console.log(""+sources.length+" lines in ("+pathSourceFile+")")
  datas = [];  
  if(type=='cta'){
    for(let elt of sources){
      if(!duplicated_2(datas, elt)) datas.push(elt); 
      else console.log("duplicated :"+elt)
    }
    for(data of datas){
      var csv_line = '' + data[0] + ',' + data[1] + ',' + data[2] + '\r\n';
      fs.appendFileSync("" +pathresultFile, csv_line, function (err) {
        if (err) throw err;
      });
    } 
  }else{    
    for(let elt of sources){
      if(!duplicated_1(datas, elt)) datas.push(elt);
      else console.log("duplicated :"+elt)
    }
    for(data of datas){
      var csv_line = '' + data[0] + ',' + data[1] + ',' + data[2] + ',' + data[3] + '\r\n';
      fs.appendFileSync("" +pathresultFile, csv_line, function (err) {
        if (err) throw err;
      });
    }
  } 
  let results = getCSVArray(pathresultFile).data  
  console.log(""+results.length+" lines in ("+pathresultFile+")") 
}
//SaveCPA
function SaveCPA(CPAFileName,fileID,col,annotation){
  var csv_line = ''+fileID+',0,'+col+','+annotation+'\r\n';     
  fs.appendFileSync(""+CPAFileName, csv_line, function (err) {
    if (err) throw err; 
  }); 
}  
//google search for disambiguation of CEA key terms
async function googlesearch(token){
  const optionsgthis = {
    page: 0, 
    safe: false,
    additional_params: {hl:'en'}
  }  
  var response = await google.search(token, optionsgthis);
  return response; 
} 
//Google This
async function googleThis(cell,row) { 
	let gsearchTokens = cell+" - wikipedia", gcandidate_cea=[], cos = stringComparison.cosine;
	console.log("#search : "+cell);   
	let gResults = await my_cf.googlesearch(gsearchTokens);  
	//my_cf.sleep(1000)
	//console.log(gResults);
	/*for(l=0;l<gResults.results.length;l++){
	   if(gResults.results[l].url.startsWith("https://en.m.wikipedia.org/wiki/")){
			if(cos.similarity(cell+" - wikipedia", gResults.results[l].title)>0.7){
				let gQID = my_cf.gQID(gResults.results[l].url);
				cea_annotation = "http://dbpedia.org/resource/"+gQID;                     
				if(annote_cta){
					params = my_cf.params_gcta(cea_annotation);
					URL_wd.search = new URLSearchParams(params).toString(); 
					metadata = await fetch(URL_wd, {headers: {"Accept":"application/sparql-results+json", 'Api-User-Agent': 'Semtab2022/1.0', 'Content-Type':'application/json'}})
					SparQLdata = my_cf.safeParseJSON(metadata); 
					candidate_cta = my_cf.get_gcandidate_cta(SparQLdata, candidate_cta);    
				}   
				return cea_annotation  
			}				
	   }       
  }
	return 'undefined';*/
}
//General search
async function general_search(j,k,file_arr) {
	let gsearchTokens = cell, gsearch_options = {'opt0': '','opt1': '',	'opt2': ''}
	//let gsearch_options = {'opt0':file_arr.data[k][1], 'opt1':my_cf.preProcess(file_arr.data[k][2]),'opt2':my_cf.preProcess(file_arr.data[k][3])}
	console.log("gsearch[" + j + "|" + k + "] : " + cell)
	let gsearch_result = await my_cf.wikipediaSearch(gsearchTokens, cell, gsearch_options);
	//console.log(gsearch_result);
	if (gsearch_result != "") {
		let gQID = my_cf.gQID(gsearch_result);
		cea_annotation = "http://dbpedia.org/resource/" + gQID;
		if (annote_cta) {
			params = my_cf.params_gcta(cea_annotation);
			URL_wd.search = new URLSearchParams(params).toString();
			metadata = await fetch(URL_wd, {headers: {"Accept": "application/sparql-results+json",'Api-User-Agent': 'Semtab2022/1.3','Content-Type': 'application/json'	}})
			SparQLdata = my_cf.safeParseJSON(metadata);
			candidate_cta = my_cf.get_gcandidate_cta(SparQLdata, candidate_cta);
		}
    }
    return cea_annotation
}
//wikipedia search
async function wikipediaSearch(token){ 
	try{
      //console.log("gsearch : "+token)
      let petition = await new gse.search()
        .setType("wikipedia")
        .setQuery(token)
        .setOptions({language:'en'})
        .run()
      //console.log(petition)
      return petition;
    } catch(err){
        //console.log(err)
        return ""
    }
}
async function wikipediaSearch2(token, clean_cell, gsearch_options){
  //console.log("token generalsearch:"+token)
  let cos = stringComparison.cosine;
	try{
      let petition = await new gse.search()
        .setType("wikipedia")
        .setQuery(token)
        .setOptions({language:'en'})
        .run()
      //console.log(gsearch_options)
      //console.log(petition)
      console.log("gsearch : "+token)
      let cos_imax =0;
      let tok1 = gsearch_options.opt2.lastIndexOf(",");
      let res_tok1 = gsearch_options.opt2.substr(tok1+1).replaceAll('"','');  
      let d = new Date(gsearch_options.opt0);
      let res_tok2 = d.toLocaleString("en-US",{dateStyle:"long"});
      let res_tok3 = gsearch_options.opt2.replaceAll('"',''); 
      if(gsearch_options.opt2.includes(",")){
        let tok3 = gsearch_options.opt2.lastIndexOf(",");
        res_tok3 = gsearch_options.opt2.substr(tok3+1);  
      }
      //console.log(clean_cell+", "+res_tok1)     
      for(let l=0; l<petition.length;l++){
        //search Method A
		
        //search Method B  
        if(cos.similarity(petition[l].title, clean_cell)==1) return petition[l].link;
        if(cos.similarity(petition[l].title, clean_cell) > cos.similarity(petition[cos_imax].title, clean_cell)) cos_imax=l

        //search Method C // crossSearch for Place
        //console.log(petition[l])
        //console.log(cos.similarity(petition[l].title, clean_cell+", "+res_tok1))
        //if(cos.similarity(petition[l].title, clean_cell+", "+res_tok1) > cos.similarity(petition[cos_imax].title, clean_cell+", "+res_tok1) && petition[l].descriptions.includes(res_tok1)) cos_imax=l
   
        if(l>6) break;
      } 
      if(cos.similarity(petition[cos_imax].title, clean_cell+", "+res_tok1)>=0.8) return petition[cos_imax].link; //Method B & C
      return "";
    } catch(err){
        console.log(err)
        return ""
    }
}
//google CEA QID
function gQID(url){
  if(url.startsWith("https://dbpedia.org/page/")) 
    return url.substr(25); 
  if(url.startsWith("https://en.m.wikipedia.org/wiki/"))
    return url.substr(32);
  if(url.startsWith("https://en.wikipedia.org/wiki/"))
    return url.substr(30);
  if(url.startsWith("http://www.wikidata.org/entity/"))
      return url.substr(31);
  return "";            
} 
function gTID(url){
  if(url.startsWith("http://dbpedia.org/ontology/")) 
    return url.substr(28); 
  if(url.startsWith("https://dbpedia.org/ontology/")) 
    return url.substr(29); 
  return "";            
}  
//Save CEA annotation
function saveCEA(CEAFileName,fileID,col,row,annotation){
  var csv_line = ''+fileID+','+col+','+row+','+annotation+'\r\n';     
  fs.appendFileSync(""+CEAFileName, csv_line, function (err) {
    if (err) throw err; 
  }); 
}
//Save Property-Qualifiers annotation
function savePROP_QUAL(PropQualFileName,prep_line,property,qualifiers){
  var csv_line = ''+prep_line+','+property+','+qualifiers+'\r\n';     
  fs.appendFileSync(""+PropQualFileName, csv_line, function (err) {
    if (err) throw err; 
  }); 
}  
//Save CTA annotation
function saveCTA(CTAFileName,fileID,col,annotation){
  var csv_line = ''+fileID+','+col+','+annotation+'\r\n';     
  fs.appendFileSync(""+CTAFileName, csv_line, function (err) {
    if (err) throw err; 
  }); 
}  
//extract_words
function extract_words(str,wordsList) {
  res = []
  words = str.split(' ')
  for(let i=0;i<words.length;i++) {
     word_clean = words[i].split(".").join("")
     if(wordsList.includes(word_clean.toLowerCase())) {
         res.push(word_clean)
     }
  }
  return(res.join(' '))
}
//Remove_stopwords
function remove_words(str,wordsList) {
  res = []
  words = str.split(' ')
  for(i=0;i<words.length;i++) {
     word_clean = words[i].split(".").join("")
     if(!wordsList.includes(word_clean.toLowerCase())) {
         res.push(word_clean)
     }
  }
  return(res.join(' '))
}
//Save not solved case on CEA to check after
function saveCEAUnresolve(fileID,col,row,reason){
  var csv_line = ''+fileID+','+row+','+col+','+reason+'\r\n';     
  fs.appendFileSync("ceaToResolve.csv", csv_line, function (err) {
    if (err) throw err; 
  }); 
}
//Save not solved case on CTA to check after
function saveCTAUnresolve(fileID,col,reason){
  var csv_line = ''+fileID+','+col+','+reason+'\r\n';     
  fs.appendFileSync("ctaToResolve.csv", csv_line, function (err) {
    if (err) throw err; 
  }); 
}
async function searchType(question,kg){
  let rslt=[], sen="", wkres=[]
  sen = remove_words(question, stopwords_1)
  sen = remove_words(sen, Interrogate_words)  
  //console.log(sen) 
  wkres = await wikipediaSearch(sen)
  //console.log(wkres.length) 
  if(wkres.length>0){    
    if(kg=='dbpedia'){
      let ID = gQID(wkres[0].link)
      let params = params_gcta("http://dbpedia.org/resource/"+ID);
      URL_wd.search = new URLSearchParams(params).toString(); 
      let metadata = await fetch(URL_wd, {headers: {"Accept":"application/sparql-results+json", 'Api-User-Agent': 'SMARTASK/3.0', 'Content-Type':'application/json'}})
      let SparQLdata = safeParseJSON(metadata)
      //console.log(SparQLdata)
      if(SparQLdata!=undefined || SparQLdata!=[]){ 
        SparQLdata.results.bindings.forEach(bs => { 
          let t = gTID(bs.type.value)
          rslt.push("dbo:"+t);
        });
        //console.log("types :"+rslt)
      }  
    }else if(kg=='wikidata'){
      rslt = await wQID(wkres[0].link) 
      //console.log(rslt)
    }else{
      console.log("Erreur with KG=:"+kg)
    }
  } 
  return rslt
}
function params_gcta(annotation){
  return {
    query:`PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX dbr: <http://dbpedia.org/resource>
    PREFIX dbo: <http://dbpedia.org/ontology>
    
    SELECT DISTINCT ?type WHERE{
    <`+annotation+`>  rdf:type ?type
    FILTER strstarts(str(?type), str(dbo:))}`                            
  }
}
//Get cta candidates from google cea annotation
function get_gcandidate_cta(data, gcandidate_cta){
  cta_candidate = gcandidate_cta;
  if(data!=undefined){ 
    data.results.bindings.forEach(bs => { 
      cta_candidate.push(bs.type.value);    
    });
  }
  return cta_candidate;
}
function params_gctawd(gQID){
  return {
    query:`#defaultView:Table
    PREFIX bd: <http://www.bigdata.com/rdf#> 
    PREFIX mwapi: <https://www.mediawiki.org/ontology#API/>
    PREFIX wdt: <http://www.wikidata.org/prop/direct/> 
    PREFIX wikibase: <http://wikiba.se/ontology#> 
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>                     
    
    SELECT DISTINCT ?type ?typeLabel WHERE {
      wd:`+gQID+` (wdt:P279|wdt:P31) ?type. 
      SERVICE wikibase:label { 
        bd:serviceParam wikibase:language "en".
      } 
    } ORDER BY ASC(?type) LIMIT 10`                            
  }
}
//CTA add doc Naives Bayes Classification
async function NBayes_CTA_TRAIN(train,_dir){
  console.log("Entrainement CTA ");
  //console.log(train);
  let nbc = await new natural.BayesClassifier();
  for(let i=1;i<train.rows-1;i++){
    //console.log(train.data[i][0])
    let target = getCSVArray(_dir+"tables/"+train.data[i][0]+".csv"); 
    let col = train.data[i][1]
    //console.log(target) 
    //console.log("col:"+col)
    //console.log(_dir+"tables/"+train.data[i][0]+".csv")    
    for(let j=1;j<target.rows-1;j++){
      if(String(target.data[j][col]).length>0){
        //console.log((String(target.data[j][col])+" --> "+String(train.data[i][2]))) 
        await nbc.addDocument(String(target.data[j][col]), String(train.data[i][2]));
      }      
    }
  }  
  //let raw = JSON.stringify(nbc);
  //saveJsonFile(raw,"Classifiers_cta_class.json")
  return nbc;
} 
//CTA resolve Naives Bayes Classification
function NBayes_CTA_RSLT(targets,output,cls,_dir){
  console.log("resultat CTA ")
  //console.log(targets)
  for(let i=1;i<targets.rows-1;i++){
    let cta_candidates = []
    let target = getCSVArray(_dir+"tables/"+targets.data[i][0]+".csv"); 
    let annotation =""
    let col = targets.data[i][1]
    for(let j=1;j<target.rows-1;j++){
      if(String(target.data[j][col]).length>0){ 
        let candidate = cls.classify(String(target.data[j][col]))
        cta_candidates.push(candidate)
      }      
    }
    annotation = eltwithHighOcc(cta_candidates)
    saveCTA(output,targets.data[i][0],col,annotation);
  }
  console.log("FIN CTA ")
}
//Build token from string
function getTokens(arr,term){ 
  let tokens ='';
  arr.forEach(t =>{
    if(t.length>3 && t!=term) tokens += ' "'+t+'"';
  });   
  return tokens;
}
//Build tokens for searchURL
function getURLTokens(arr){ 
  let tokens = arr;
  tokens = tokens.join("%20")
  return tokens;
}
function getType(x){
  let country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahrain", "Bangladesh", "Barbados", "Beiyang Government", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "Colombia", "Comoros", "Costa Rica", "County of Loano", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Djibouti", "Dominica", "Dominican Republic", "Dutch Republic", "East Timor", "Ebla", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Federated States of Micronesia", "Fiji", "Finland", "France", "Gabon", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kingdom of Denmark", "Kingdom of the Netherlands", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Lordship of Albarracin", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mosquito Coast", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "People's Republic of China", "Peru", "Philippines", "Poland", "Portugal", "Principality of Smolensk", "Qatar", "Republic of Ireland", "Republic of the Congo", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "State of Palestine", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "SÃ£o TomÃ© and PrÃ­ncipe", "São Tomé and Príncipe", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "The Bahamas", "The Gambia", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"]
  x = x.trim();
  if(isNaN(x)==false){
      return 'Numeric';
  }else if(isDate(x)){
      return "Date";
  }else if(x.startsWith("Template:Attached KML/")){
      return "Wikimedia KML file";
  }else if(x.startsWith("Template:")){
      return "Template Object";
  }else if(x.toLowerCase().endsWith("png") || x.toLowerCase().endsWith("jpeg") || x.toLowerCase().endsWith("jpg") || x.toLowerCase().endsWith("gif") || x.toLowerCase().endsWith("webp") || x.toLowerCase().endsWith("svg")){
      return "Image"; 
  }else if(country_list.includes(x)){
    return "Country";
  }else; 
}
async function extract_sotab(_cta_test_targets_dir = "./ressource/Round1-SOTAB-CTA-Datasets/sotab_cta_test_targets_round1.csv",  _cta_gt_targets_dir = "./ressource/Round1-SOTAB-CTA-Datasets/gt.csv",  _cpa_test_targets_dir = "./ressource/Round1-SOTAB-CPA-Datasets/sotab_cpa_test_targets_round1.csv",  _cpa_gt_targets_dir = "./ressource/Round1-SOTAB-CPA-Datasets/gt.csv",  opt_cta_test=true,  opt_cta_gt=true,  opt_cpa_test=true,  opt_cpa_gt=true){
    console.log("Extraction of Sotab Data");
    let target = 0;
    //Extract CTA gz for test
    if(opt_cta_test){    
        console.log("CTA Sotab Test")
        let _cta_test_targets = getCSVArray(_cta_test_targets_dir);
        for(let i=0; i<_cta_test_targets.rows-1 ; i++){
            let curr_name = _cta_test_targets.data[i][0];
            let next_name = _cta_test_targets.data[i+1][0];
            if(curr_name != next_name) target+=1;
            const source = _cta_test_targets.data[i][0];
            const dest = source.slice(0,-3); 
            /*gunzip('./ressource/Round1-SOTAB-CTA-SCH-Tables/'+source, './ressource/sotab_r1/'+dest, () => {
                console.log('gunzip done!')
            });*/
        }
    }
    console.log(target);
    target = 0;
    //Extract CTA gz for train
    if(opt_cta_gt){   
        console.log("CTA Sotab Train") 
        let _cta_gt_targets = getCSVArray(_cta_gt_targets_dir);
        //console.log(_cta_gt_targets)
        for(let i=0; i<_cta_gt_targets.rows-1 ; i++){
            const source = _cta_gt_targets.data[i][0];
            const dest = source.slice(0,-3);      
            let curr_name = _cta_gt_targets.data[i][0];
            let next_name = _cta_gt_targets.data[i+1][0];
            if(curr_name != next_name) target+=1;
            /*gunzip('./ressource/Round2-SOTAB-CTA-Tables/'+source, './ressource/Sota_CTA_SCH_R2_gt_tables/'+dest, () => {
                console.log('gunzip done!')
            });*/
        }
    }   
    console.log(target);
    target = 0;
    //Extract CPA gz for test
    if(opt_cpa_test){    
        console.log("CPA Sotab Test")
        let _cpa_test_targets = getCSVArray(_cpa_test_targets_dir);
        for(let i=0; i<_cpa_test_targets.rows-1 ; i++){  
            const source = _cpa_test_targets.data[i][0];
            const dest = source.slice(0,-3);
            let curr_name = _cpa_test_targets.data[i][0];
            let next_name = _cpa_test_targets.data[i+1][0];
            if(curr_name != next_name) target+=1;
            //console.log("%o %o",curr_name,next_name)
            /*gunzip('./ressource/Round2-SOTAB-CPA-Tables/'+source, './ressource/Sota_CPA_R2_test_tables/'+dest, () => {
                console.log('gunzip done!')
            });*/
        }
    } 
    console.log(target);
    target = 0;
    //Extract CPA gz for train
    if(opt_cpa_gt){    
        console.log("CPA Sotab Train")
        let _cpa_gt_targets = getCSVArray(_cpa_gt_targets_dir);
        for(let i=0; i<_cpa_gt_targets.rows-1 ; i++){
            const source = _cpa_gt_targets.data[i][0];
            const dest = source.slice(0,-3);
            let curr_name = _cpa_gt_targets.data[i][0];
            let next_name = _cpa_gt_targets.data[i+1][0];
            if(curr_name != next_name) target+=1;
            /*await gunzip('./ressource/Round2-SOTAB-CPA-Tables/'+source, './ressource/Sota_CPA_R2_gt_tables/'+dest, () => {
                console.log('gunzip done!')
            });*/
        }
    }
    console.log(target);
    target = 0;
}
async function cpaNMB(_gtTableLink="./ressource/WikidataTables2023R1/DataSets/Valid/tables/",tableLink="./ressource/WikidataTables2023R1/DataSets/Test/tables/", _gtCPA="./ressource/WikidataTables2023R1/DataSets/Valid/gt/cpa_gt.csv", _targetCPA="./ressource/WikidataTables2023R1/DataSets/Test/targets/cpa_targets.csv", cpa_results="WikidataTables2023R1_cpa.csv"){
    console.log("cpaNMB")
    let cpa_gt = getCSVArray2(_gtCPA);
    let cpa_targets = getCSVArray2(_targetCPA);

    var classifier = new natural.BayesClassifier();
    let table_name ="";
    let prop ="";
    let col0_colx="";	    
    console.log("In progress...")
    for(let i=0; i< cpa_gt.rows-1; i++){
        table_name = cpa_gt.data[i][0];        
        prop = cpa_gt.data[i][3]; 
        let _gtTables = _gtTableLink+""+table_name+".csv";        
        let gt_table = getCSVArray2(_gtTables);        
        for(let j=1; j< gt_table.rows - 2; j++){
            col0_colx = gt_table.data[j][0] + " - " + gt_table.data[j][cpa_gt.data[i][2]];
            if(gt_table.data[j][cpa_gt.data[i][2]].length > 0){
                classifier.addDocument(col0_colx, prop);
            } 
        }
    }
    classifier.train();
    for(let i=0; i< cpa_targets.rows-2; i++){       
        let cpa_candidates = [];      
        table_name = cpa_targets.data[i][0];    
        let _testTables = tableLink+""+table_name+".csv";      
        let test_table = getCSVArray2(_testTables); 
        for(let j=1; j<test_table.rows - 2; j++){
            col0_colx = test_table.data[j][0] + " - " + test_table.data[j][cpa_targets.data[i][2]];
            let resp = "";
            if(test_table.data[j][cpa_targets.data[i][2]].length>0){
                resp = classifier.classify(col0_colx);
                cpa_candidates.push(resp);
            } 
        }
        console.log("Target :%o",table_name+","+cpa_targets.data[i][1]+","+cpa_targets.data[i][2]);
        let best_cpa = eltwithHighOcc(cpa_candidates);
        if(best_cpa==null) best_cpa = "NIL";
        SaveCPA(cpa_results, table_name, cpa_targets.data[i][2], best_cpa);        
        //SaveCPA("reslts_candidates.csv", table_name, cpa_targets.data[i][2], cpa_candidates.toString());
    }
    console.log("Execution completed")
}

async function cpa_SCH_Sotab_NBayes(){
    console.log("CPA_SCH_Sotab_NBayes")
    let _gtCPA = "./ressource/Round2-SOTAB-CPA-DBP-Datasets/sotab_cpa_train_round2_dbpedia.csv";
    let _targetCPA = "./ressource/Round2-SOTAB-CPA-DBP-Datasets/sotab_cpa_test_targets_round2_dbpedia.csv";
    
    let cpa_gt = getCSVArray(_gtCPA);
    let cpa_targets = getCSVArray(_targetCPA);

    var classifier = new natural.BayesClassifier();
    let table_name ="";
    let prop ="";
    let col0_colx="";
    //console.log(cpa_gt)
      
    for(let i=1; i< cpa_gt.rows-1; i++){ 
        table_name = cpa_gt.data[i][0].slice(0,-3);        
        prop = cpa_gt.data[i][3]; 
        let number_of_eltTakes = 0;
        let _gtTables = "./ressource/Round2-SOTAB-CPA-Tables/"+table_name;
        let gt_table = getJSONLines(_gtTables);             
        for(let j=0; j< gt_table.lines - 1; j++){
            if(gt_table.data[j][cpa_gt.data[i][2]]==null || gt_table.data[j][0]==null)
                continue;
            let col0 = preProcess(""+gt_table.data[j][0]);
            let colx = preProcess(""+gt_table.data[j][cpa_gt.data[i][2]])
            col0 = remove_words(col0, rwords);
            colx = remove_words(colx, rwords);
            col0_colx =  col0 + " | " +colx;
            //console.log("(%o) Table:%o \n\t Col[0]:%o Col["+cpa_gt.data[i][2]+"]:%o CPA:%o",j,table_name,col0,colx,prop)   
            classifier.addDocument(col0_colx, prop);
            number_of_eltTakes = number_of_eltTakes + 1;
            if(number_of_eltTakes > 3) break;
        }
    }
    classifier.train();
    for(let i=1; i< cpa_targets.rows-1; i++){
        let cpa_candidates = [];      
        table_name = cpa_targets.data[i][0].slice(0,-3);
        let _testTables = "./ressource/Round2-SOTAB-CPA-Tables/"+table_name;  
        let test_table = getJSONLines(_testTables);  
        //console.log(table_name)
        for(let j=0; j<test_table.lines - 1; j++){
            if(test_table.data[j][cpa_targets.data[i][2]]==null || test_table.data[j][0]==null)
                continue;
            let col0 = preProcess(""+test_table.data[j][0]);
            let colx = preProcess(""+test_table.data[j][cpa_targets.data[i][2]])
            col0 = remove_words(col0, rwords);
            colx = remove_words(colx, rwords);
            col0_colx =  col0 + " | " +colx;
            //console.log(col0_colx)
            let resp = "";
            if(test_table.data[j][cpa_targets.data[i][2]].length>0){
                resp = classifier.classify(col0_colx);
                cpa_candidates.push(resp)
            } 
        }
        console.log("Target :%o",table_name+","+cpa_targets.data[i][1]+","+cpa_targets.data[i][2]);
        let best_cpa = eltwithHighOcc(cpa_candidates);
        if(best_cpa==null) best_cpa = "NIL";
        SaveCPA("sotab_cpa_dbp_sysB.csv", table_name, cpa_targets.data[i][2], best_cpa);
        //SaveCPA("sotab_cpa_candidates_dbp_r2.csv", table_name, cpa_targets.data[i][2], cpa_candidates.toString());
    }
}
async function cta_SCH_Sotab_NBayes(){
    console.log("cta_SCH_Sotab_NBayes");
    //let _gtCTA = "./ressource/Round2-SOTAB-CTA-DBP-Datasets/sotab_cta_validation_round2_dbpedia.csv";
    let _gtCTA = "./ressource/Round2-SOTAB-CTA-SCH-Datasets/sotab_cta_train_round2.csv";
    let _targetCTA = "./ressource/Round2-SOTAB-CTA-SCH-Datasets/sotab_cta_test_targets_round2.csv";

    let cta_gt = getCSVArray(_gtCTA);
    let cta_targets = getCSVArray(_targetCTA);
    //console.log(cta_targets) 
    var classifier = new natural.BayesClassifier();
    let table_name ="";
    let prop =""; 
    //console.log(cta_gt)

    //Add Col0 - Colx features
    for(let i=1; i< cta_gt.rows-1; i++){ 
        table_name = cta_gt.data[i][0].slice(0,-3); 
        //console.log(table_name)       
        prop = cta_gt.data[i][2]; 
        let number_of_eltTakes = 0;
        let _gtTables = "./ressource/Round2-SOTAB-CTA-Tables/"+table_name;
        let gt_table = getJSONLines(_gtTables);   
        //console.log(gt_table);     
        for(let j=0; j< gt_table.lines - 1; j++){
            if(gt_table.data[j][cta_gt.data[i][1]]==null) continue;
            let colx = preProcess(""+gt_table.data[j][cta_gt.data[i][1]])
            number_of_eltTakes = number_of_eltTakes + 1;
            //console.log("(%o) Table :%o \t col["+cta_gt.data[i][1]+"]:%o \tCTA:%o",j,table_name,colx, prop)   
            classifier.addDocument(colx, prop);
            if(number_of_eltTakes > 20) break;
            //break
        }
        //break
    }
    classifier.train();
    for(let i=1; i< cta_targets.rows-1; i++){
        let cta_candidates = [];      
        table_name = cta_targets.data[i][0].slice(0,-3);
        let _testTables = "./ressource/Round2-SOTAB-CTA-Tables/"+table_name;  
        let test_table = getJSONLines(_testTables); 
        //console.log(test_table)
        //console.log(table_name)
        for(let j=0; j<test_table.lines - 1; j++){
            let colx = preProcess(""+test_table.data[j][cta_targets.data[i][1]]);
            let resp = classifier.classify(colx);
            cta_candidates.push(resp)
        }
        console.log("Target :%o",table_name+","+cta_targets.data[i][1]);
        let best_cta = eltwithHighOcc(cta_candidates);
        if(best_cta==null) best_cpa = "NIL";
        saveCTA("sotab_cta_sch_sysB.csv", table_name, cta_targets.data[i][1], best_cta);
        //saveCTA("sotab_cta_candidates_dbp_r2.csv", table_name, cta_targets.data[i][1], cta_candidates.toString());
        //break
    }
}
async function properties_qualifiers(){
    let train_csv = "./ressource/full-semtab2023-CQA/train.csv";  
    let task_csv = "./ressource/full-semtab2023-CQA/task.csv";

    let prop_qual_GT = getCSVArray(train_csv);    
    let prop_qual_task = getCSVArray(task_csv);
    var classifier_prop = new natural.BayesClassifier();
    var classifier_qual = new natural.BayesClassifier();
    let table_name ="", prop="", property ="", qualifier ="";
    let subject_col = 0, object_col = 0, qualifier_col = 0; 
	
    //Classify ::: Property ID,Property Label,Property Qualifier ID,Property Qualifier Label
    rwords.push("-","satellite","series"); 
    for(let i=1; i< prop_qual_GT.rows-1; i++){ 
        table_name = prop_qual_GT.data[i][0];   
        property = prop_qual_GT.data[i][4]+","+prop_qual_GT.data[i][5];       
        qualifier = prop_qual_GT.data[i][6]+","+prop_qual_GT.data[i][7];  
        prop = property+","+qualifier     
        //console.log("%o : "+prop, table_name)       
        let number_of_eltTakes = 0;
        let _gtTables = "./ressource/full-semtab2023-CQA/train/"+table_name;
        let gt_table = getCSVArray(_gtTables);           
        for(let j=1; j< gt_table.rows - 1; j++){
            let subject = preProcess(""+gt_table.data[j][prop_qual_GT.data[i][1]]);
            subject = remove_words(subject,rwords)
            let object = preProcess(""+gt_table.data[j][prop_qual_GT.data[i][2]]);
            //object = remove_words(object,rwords)
            let qualif = preProcess(""+gt_table.data[j][prop_qual_GT.data[i][3]]);
            //qualif = remove_words(qualifier,rwords)
            number_of_eltTakes = number_of_eltTakes + 1;            
            //console.log(subject +"---"+object+"---"+qualifier)
            //console.log(table_name+" prop:%o  \t qual:%o",property,qualifier);
            classifier_prop.addDocument(subject+" / "+object, property);
            classifier_qual.addDocument(property+" / "+qualif, qualifier);
            if(number_of_eltTakes > 30) break;
        }
        //break
    }    
    classifier_prop.train();
    classifier_qual.train();
    for(let i=1; i< prop_qual_task.rows-1; i++){
        table_name = prop_qual_task.data[i][0];
        subject_col = prop_qual_task.data[i][1];
        object_col = prop_qual_task.data[i][2];
        qualifier_col = prop_qual_task.data[i][3];          
        let prop_candidates = [], qual_candidates = [];   
        let _testTables = "./ressource/full-semtab2023-CQA/task/"+table_name;  
        let test_table = getCSVArray(_testTables); 
        //console.log(test_table)
        //console.log(table_name)
        for(let j=1; j<test_table.rows - 1; j++){            
            let subject = preProcess(""+test_table.data[j][subject_col]);
            subject = remove_words(subject,rwords)
            let object = preProcess(""+test_table.data[j][object_col]);
            //object = remove_words(object,rwords)          
            let resp_prop = classifier_prop.classify(subject+" / "+object);
            prop_candidates.push(resp_prop);
        }
        let best_prop = eltwithHighOcc(prop_candidates);
        for(let j=1; j<test_table.rows - 1; j++){            
            let qualif = preProcess(""+test_table.data[j][qualifier_col]);
            //qualif = remove_words(qualifier,rwords)            
            let resp_qual = classifier_qual.classify(best_prop+" / "+qualif);
            qual_candidates.push(resp_qual);
        }
        let best_qual = eltwithHighOcc(qual_candidates);       
        prep_line = table_name+","+prop_qual_task.data[i][1]+","+prop_qual_task.data[i][2]+","+prop_qual_task.data[i][3];
        savePROP_QUAL("TSOTSA_CQA_sysA.csv",prep_line, best_prop, best_qual);
    }
}
//Build Map for KGC
async function add_inside_map(cea_annotation,output){
    //Load Map from output
    let wd_cea_map = getJSON_file(output);   
    const json = JSON.stringify(wd_cea_map);
    const json_map = JSON.parse(json);
    let carte = new Map(Object.entries(json_map)); 
    let getEntity = "https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&languages=en&props=labels|descriptions|aliases|claims&ids=";  
    let key = cea_annotation;    
    let value = {
            "value": "",
            "know_as": [],
            "instance_of": [],
            "subclass_of":[],
            "desc":""
    };    
    if(carte.has(key)){                 
        console.log("\t ::::::::> already in KG")
        return true; 
    }else{
        let label ="", aliases =[], description = "", instance_of =[], subclass_of =[], f_urlTokens = getEntity+""+key;
        let metadata = await fetch(f_urlTokens, {headers: {"Accept":"application/json+sparql-results", 'Api-User-Agent': 'Semtab2023/1.2', 'Content-Type':'application/json'}})
        let fResults = safeParseJSON(metadata);
        if(fResults.success==1){             
            let to_save = false;
            for(let key1 in fResults.entities){
                base_res_obj = fResults.entities[key1];
                if(!base_res_obj.hasOwnProperty("labels")){
                    break;
                }
                to_save = base_res_obj.labels.hasOwnProperty("en")
                if(!to_save){
                    break;
                }                  
                label = base_res_obj.labels.en.value;
                if(base_res_obj.descriptions.hasOwnProperty("en"))
                    description = base_res_obj.descriptions.en.value; 
                
                if(Object.keys(base_res_obj.aliases).length >0)
                    for(let l=0;l<base_res_obj.aliases.en.length;l++)
                        aliases.push(base_res_obj.aliases.en[l].value);            
                
                if(Object.keys(base_res_obj.claims).length >0){
                    if(base_res_obj.claims.hasOwnProperty("P31"))
                        for(let l=0;l<base_res_obj.claims.P31.length;l++)
                            instance_of.push(base_res_obj.claims.P31[l].mainsnak.datavalue.value.id);                
                
                    if(base_res_obj.claims.hasOwnProperty("P279"))
                        for(let l=0;l<base_res_obj.claims.P279.length;l++)
                            subclass_of.push(base_res_obj.claims.P279[l].mainsnak.datavalue.value.id);
                }
            }
            if(to_save){
                value = {
                    "value": label,
                    "know_as": aliases,
                    "instance_of": instance_of,
                    "subclass_of": subclass_of,
                    "desc": description
                };
                carte.set(key,value);
                var ascMapKeys = new Map([...carte.entries()].sort((a, b) => a[0].replace("Q",'') - b[0].replace("Q",'')));
                let carte_json = JSON.stringify(Object.fromEntries(ascMapKeys));
                fs.writeFileSync(output, carte_json, 'utf8', function (err) {
                    if (err) return console.log(err);
                });                 
                console.log("\t :::::::: > Added %o inside Map",cea_annotation)
                return value;
            }             
        }else{
            console.log("\t :::::::: X Failed to Add %s inside Map", cea_annotation)
            return {};
        }
    }
}
module.exports = { 
  sleep,
  getOrganicData,
  saveCEA,
  saveCTA,
  googlesearch,
  gTID,
  gQID,
  wikipediaSearch2,
  wikipediaSearch,
  general_search,
  preProcess,
  eltwithHighOcc,
  getCSVArray,
  getCSVArray2,
  SaveCPA,
  getCSVNames,
  getJSONLines,
  removeDuplicatesResults,
  mustAnnotate,
  isInside,
  getJSON_file,
  safeParseJSON2,
  safeParseJSON,
  saveJsonFile,
  stopwords_1,
  stopwords_2,
  stopwords_3,
  stopwords_4,
  stopwords_5,
  Interrogate_words,
  rwords,
  remove_words,
  extract_words,
  savePROP_QUAL,
  saveCEAUnresolve,
  saveCTAUnresolve,
  searchType,
  params_gcta,
  get_gcandidate_cta,
  params_gctawd,
  NBayes_CTA_TRAIN,
  NBayes_CTA_RSLT,
  getTokens,
  getURLTokens,
  getType,  
  URL_wd,
  URL_wdok,
  extract_sotab,
  cpaNMB,
  properties_qualifiers,
  cta_SCH_Sotab_NBayes,
  cpa_SCH_Sotab_NBayes,
  add_inside_map,
};