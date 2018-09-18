$(document).ready(function (){
    $('body').append('<button id="btn">Click Me for a Nice Message!!</button>');
    let btn = $('#btn');

    btn.click(function() {
        alert('You just clicked a button!!')
    });
});

let newButton = $('#newBtn');
let textBox = $('#textBox');
newButton.click(function() {
    let text = textBox.val();
    alert(text);
    textBox.val('');
});

let newDiv = $('#newDiv');
newDiv.css({
    width: '200px',
    height: '200px'
});

newDiv.mouseover(function() {
    let div = newDiv;
    div.css('backgroundColor', getRandomColor());

    div.mouseout(function() {
        div.css('backgroundColor', 'white');
    })
});

let para = $('<p>');
let paraText = "this is an easier program than the last one!!";

$('body').append(para);
$(para).append(paraText);

para.click(function() {
    let paragraph = para;
    paragraph.css("backgroundColor", getRandomColor());
    paragraph.css({
        height: '200px',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
    });
});

let newNew = $('<button>');
$(newNew).text('Create a <span>!!');
console.log(newNew);

let emptyDiv = $('<div>');
$('body').append(emptyDiv);
$(emptyDiv).append(newNew);
emptyDiv.css({
    height: '200px',
    width: '200px'
});

newNew.click(function() {
    let name = $('<span>');
    name.text("Milkiles");
    $(emptyDiv).append('<br>');
    $(emptyDiv).append(name);
    $(emptyDiv).append('<br>');
});

let friends = [
    'John',
    'Sarah',
    'Fred',
    'Pete',
    'Bobby',
    'Aaron',
    'Trey',
    'Micah',
    'Robert',
    'Eric'
];

let friendButton = $('#lastButton');
let list = $('#list');
let i = 0;
let friend;

    friendButton.click(function(e) {

        e.preventDefault();
        friend = $(`<li>${friends[i]}</li>`);
        $(list).append(friend);
        i++;
        if(i > 9) {
            friendButton.prop('disabled', true);
        };
    });



function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    };
    return color;
};