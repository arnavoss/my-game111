var baground1;
var craftingTable;
var pc,pcImg;
var craftingTableImg
var portal;
function preload(){
baground1=loadImage("baground.gif");
pcImg=loadImage("char.png")
craftingTableImg=loadImage("th.png")





}
function setup(){
createCanvas (displayWidth-30,displayHeight-30);
craftingTable=createSprite(100,displayHeight/2+100,20,20);
craftingTable.addImage("craftingTable1",craftingTableImg);
craftingTable.scale=.25;
pc=createSprite(displayWidth/2-50,displayHeight-100,10,40);
pc.addImage("char",pcImg);
pc.scale=0.6;
portal=createSprite(displayWidth/2-50,displayHeight-100,10,40);
}
function draw(){
background(baground1);
if (keyDown("W")){
pc.y=pc.y-5;
}
if (keyDown("s")){
pc.y=pc.y+5;
    }
    if (keyDown("A")){
            pc.x=pc.x-5;
        }
        if (keyDown("D")){
                pc.x=pc.x+5;
            
            
            }
drawSprites();

    }