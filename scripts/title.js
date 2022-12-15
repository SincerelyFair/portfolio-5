var i=0;
setInterval(function(){
    var titles=[
"sincerelyfair.cf",
"sincerelyfair.c",
"sincerelyfair.",
"sincerelyfair",
"sincerelyfai",
"sincerelyfa",
"sincerelyf",
"sincerely",
"sincerel",
"sincere",
"sincer",
"since",
"sinc",
"sin",
"si",
"s",
"si",
"sin",
"sin",
"sinc",
"since",
"sincer",
"sincere",
"sincerel",
"sincerely",
"sincerelyf",
"sincerelyfa",
"sincerelyfai",
"sincerelyfair",
"sincerelyfair.",
"sincerelyfair.c",
"sincerelyfair.cf",
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);
