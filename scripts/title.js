if (document['addEventListener']) {
2
    document['addEventListener']('DOMContentLoaded', function() {
3
        loaded()
4
    })
5
} else {
6
    if (document['attachEvent']) {
7
        document['attachEvent']('onreadystatechange', function() {
8
            loaded()
9
        })
10
    }
11
};
12
?
13
function loaded() {
14
    setInterval(loop, 350)
15
}
16
var x = 0;
17
var titleText = ['n', 'ni', 'nig', 'nigg', 'nigga', 'niggas', 'niggas.', 'niggas.l', 'niggas.lo', 'niggas.lol', 'niggas.lo', 'niggas.l', 'niggas.', 'niggas', 'nigga', 'nigg', 'nig', 'ni', 'n'];
18
?
19
function loop() {
20
    document['getElementsByTagName']('title')[0]['innerHTML'] = titleText[x++ % titleText['length']]
21
}