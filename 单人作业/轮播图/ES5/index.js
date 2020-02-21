var items = document.getElementsByClassName('item');
var pionts = document.getElementsByClassName('piont');
var goNext = document.getElementById('butRight');
var Before = document.getElementById('butLeft');
var index = 0;
var time = 0;
var clearActive = function () {
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'item';
        pionts[i].className = 'piont';
    }
}

var goindex = function () {
    clearActive();
    items[index].className = 'item active';
    pionts[index].className = 'piont active';
}

var Next = function () {
    if (index >= 3) {
        index = 0;
    } else {
        index++;
    }
    goindex();
}
goNext.addEventListener ('click', function () {
    Next();
    time = 0;
})

Before.addEventListener ('click', function () {
    if (index <= 0) {
        index = 3;
    } else {
        index--;
    }
    console.log(index);
    goindex();
    time = 0 ;
})
   
for (var j = 0; j < pionts.length; j++) {
    pionts[j].addEventListener ('click', function () {
        index = this.getAttribute('data-index');
        goindex();
        time = 0;
    })
}

setInterval(function () {
    time++;
    if (time === 20) {
        Next();
        time = 0;
    }
}, 100)