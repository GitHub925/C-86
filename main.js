var KeyPressed
var canvas = new fabric.Canvas("Mycanvas");
var block_object = ""
block_width = 30;
block_height = 30;
playerX = 300;
playerY = 100;
var player_object = "";
function playermake(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(500);
        player_object.scaleToHeight(500);
        player_object.set({
        top: playerY,
        left: playerX

        });
        canvas.add(player_object)
    });
}


function newbodypart(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        block_object =  Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
        top: playerY,
        left: playerX
        });
        canvas.add(block_object)
    })  ;
}
