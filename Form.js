class Form {
    constructor() {

    }
    display() {
        var title = createElement("H1");
        title.html("Car Racing Game");
        title.position(130,10);
        var input = createInput("Enter Name:");
        input.position(130,120);
        var button = createButton("Start");
        button.position(200,200);
        button.mousePressed(function() {
            input.hide();
            button.hide();
            var name = input.value();
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);
            var greeting = createElement("H3");
            greeting.html("Hello"+name);
            greeting.position(130,150);
        })
    }
}