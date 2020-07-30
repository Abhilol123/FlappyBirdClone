let b;
let G = 0.5;
time2 = 0;
let p = [];

function setup()    {
    createCanvas(640, 640);
    b = new bird();
    p[0] = new pipe();
}

function draw() {
    background(51);
    b.update(G)
    b.show();

    for (let i = p.length - 1; i >= 0; i--)  {
        
        p[i].update()
        p[i].show()

        if (p[i].hits(b))   {
            noLoop()
        }

        if (p[i].x + p[i].w < 0) {
            p.splice(i, 1)
        }
    }

    time2 = time2 + 1;

    if (time2 % 80 === 0)  {
        p.push(new pipe());
    }
}

function keyPressed()   {
    time1 = b.jump();
}

function mousePressed() {
    time1 = b.jump();
}
