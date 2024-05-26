const app = new PIXI.Application({
    width: 1450, 
    height: 700,                       
    antialias: true, 
    transparent: false, 
    resolution: 1
});
document.body.appendChild(app.view);

const player1 = PIXI.Sprite.from('assets/guy.png');
player1.x = 550;
player1.y = 250;
player1.scale.x = 0.15;
player1.scale.y = 0.15;
app.stage.addChild(player1);


const player2 = PIXI.Sprite.from('assets/girl.png');
player2.x = 750;
player2.y = 250;
player2.scale.x = 0.15;
player2.scale.y = 0.15;
app.stage.addChild(player2);
