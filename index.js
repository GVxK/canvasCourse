const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")
const particlesArray = []
canvas.width = window.innerWidth
canvas.height = window.innerHeight
// console.log(ctx)


window.addEventListener("resize", function(){
    canvas.width = window.innerWidth
    canvas.heigth = window.canvasHeight
    
})

const mouse = {
    x:undefined,
    y:undefined
}

canvas.addEventListener("click", function(event){
    mouse.x = event.x
    mouse.y = event.y
    
})

canvas.addEventListener("mousemove", function(event){
    mouse.x = event.x
    mouse.y = event.y
    
})

class Particle {
    constructor(){
        // this.x = mouse.x
        // this.y = mouse.y
        this.x = Math.random() *canvas.width
        this.y = Math.random() *canvas.height
        this.size = Math.random() *5 + 1
        this.speedX = Math.random() *3 - 1.5
        this.speedY = Math.random() *3 - 1.5
    }
    update(){
        this.x += this.speedX
        this.y += this.speedY
    }
    draw() {
        ctx.fillStyle = "blue"
        ctx.beginPath()
        ctx.arc(this.x, this.y, 50, 0, Math.PI *2)
        ctx.fill()
    }
    
}

function init(){
    for (i=0;i<100;i++){
        particlesArray.push(new Particle())
    }
}
init()

function handleParticles(){
    for(let i = 0; i<particlesArray.length; i++){
        particlesArray[i].update()
        particlesArray[i].draw()
    }
}

function drawCircle(){
    ctx.fillStyle = "blue"
    ctx.beginPath()
    ctx.arc(mouse.x, mouse.y, 20, 0, 25)
    ctx.fill()
}


function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    handleParticles()
    requestAnimationFrame(animate)

}
animate()