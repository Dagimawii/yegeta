
const username = localStorage.getItem("username");
document.getElementById("diplayuser").textContent = `😉 `+username;



  function displayTime() {
  const now = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[now.getDay()];
  const timeString = now.toLocaleTimeString();

  const timeElement = document.getElementById("currentTime");
  timeElement.textContent = `${day} ${timeString} `;
}


setInterval(displayTime, 1000);


displayTime();


const quotes = [
      `ኢየሱስ ጌታ እንደ ሆነ በአፍህ ብትመሰክር እግዚአብሔርም ከሙታን እንዳስነሣው በልብህ ብታምን ትድናለህና፤ ሰው በልቡ አምኖ ይጸድቃልና በአፉም መስክሮ ይድናልና። የጌታን ስም የሚጠራ ሁሉ ይድናልና።
ወደ ሮሜ ሰዎች 10:9,10,13`,
`እንደ ምሕረቱ መጠን ለአዲስ ልደት በሚሆነው መታጠብና በመንፈስ ቅዱስ በመታደስ አዳነን እንጂ፥ እኛ ስላደረግነው በጽድቅ ስለ ነበረው ሥራ አይደለም፤
ወደ ቲቶ 3:5`,
`እነሆ በደጅ ቆሜ አንኳኳለሁ፤ ማንም ድምፄን ቢሰማ ደጁንም ቢከፍትልኝ፥ ወደ እርሱ እገባለሁ ከእርሱም ጋር እራት እበላለሁ እርሱም ከእኔ ጋር ይበላል።
የዮሐንስ ራእይ 3:20`,
`ይሁዳንም። እነዚህን ከተሞች እንሥራ፥ ቅጥርም ግንብም መዝጊያም መወርወሪያም እናድርግባቸው፤ አምላካችንን እግዚአብሔርን ስለ ፈለግነው ምድሪቱ ገና በፊታችን ናት፤ እኛ ፈልገነዋል፥ እርሱም በዙሪያችን ዕረፍት ሰጥቶናል አለ። እነርሱም ሠሩ አከናወኑም።
መጽሐፈ ዜና መዋዕል ካልዕ። 14:7`,
`የእስራኤል ቅዱስ፥ ጌታ እግዚአብሔር እንዲህ ይላልና። በመመለስና በማረፍ ትድናላችሁ፤ በጸጥታና በመታመን ኃይል ይሆንላችኋል፤ እናንተም እንቢ አላችሁ፥
ትንቢተ ኢሳይያስ 30:15`,
`በእግዚአብሔር የታመነ እምነቱም እግዚአብሔር የሆነ ሰው ቡሩክ ነው። በውኃ አጠገብ እንደ ተተከለ፥ በወንዝም ዳር ሥሩን እንደሚዘረጋ ሙቀትም ሲመጣ እንደማይፈራ ቅጠሉም እንደሚለመልም፥ በድርቅ ዓመትም እንደማይሠጋ ፍሬውንም እንደማያቋርጥ ዛፍ ይሆናል።
ትንቢተ ኤርምያስ 17:7, 8`,
`ለእናንተ የማስባትን አሳብ እኔ አውቃለሁ፤ ፍጻሜና ተስፋ እሰጣችሁ ዘንድ የሰላም አሳብ ነው እንጂ የክፉ ነገር አይደለም። እናንተም ትጠሩኛለችሁ፥ ሄዳችሁም ወደ እኔ ትጸልያላችሁ፥ እኔም እሰማችኋለሁ። እናንተ ትሹኛላችሁ፥ በፍጹም ልባችሁም ከሻችሁኝ ታገኙኛላችሁ።
ትንቢተ ኤርምያስ 29:11-13`,
`እናንተ ደካሞች ሸክማችሁ የከበደ ሁሉ፥ ወደ እኔ ኑ፥ እኔም አሳርፋችኋለሁ። ቀንበሬን በላያችሁ ተሸከሙ ከእኔም ተማሩ፥ እኔ የዋህ በልቤም ትሑት ነኝና፥ ለነፍሳችሁም ዕረፍት ታገኛላችሁ፤ ቀንበሬ ልዝብ ሸክሜም ቀሊል ነውና።
የማቴዎስ ወንጌል 11:28-30`,
`ለእናንተ የማስባትን አሳብ እኔ አውቃለሁ፤ ፍጻሜና ተስፋ እሰጣችሁ ዘንድ የሰላም አሳብ ነው እንጂ የክፉ ነገር አይደለም።
ትንቢተ ኤርምያስ 29:11`,
`በቀስታ ከአገር ሁሉ ወደ ለመለመችው ክፍል ይገባል፤ አባቶቹና የአባቶቹ አባቶች ያላደረጉትንም ያደርጋል፤ ብዝበዛውንና ምርኮውንም ሀብቱንም በመካከላቸው ይበትናል፤ በምሽጎችም ላይ እስከ ጊዜው ድረስ አሳቡን ይፈጥራል።
ትንቢተ ዳንኤል 11:24`,
`እርሱ ሰላማችን ነውና፤ ሁለቱን ያዋሐደ በአዋጅ የተነገሩትንም የትእዛዛትን ሕግ ሽሮ በመካከል ያለውን የጥል ግድግዳን በሥጋው ያፈረሰ፤ ይህም ከሁለታቸው አንድን አዲስን ሰው በራሱ ይፈጥር ዘንድ ሰላምንም ያደርግ ዘንድ፥
ወደ ኤፌሶን ሰዎች 2:15`
    ];

    const quoteElement = document.getElementById("quote");
    const moreButton = document.getElementById("btn");

    moreButton.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteElement.textContent = quotes[randomIndex];
    });

    function check(){
      document.getElementById("programpopup").style.display="block";
    }
    function okay(){
      document.getElementById("programpopup").style.display="none";
    }




