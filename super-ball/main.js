// extends static super


const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
const w = canvas.width = 800
const h = canvas.height = 400
class Ball {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r
            // ~~取整 第一次~变为负号 
        this.color = `rgb(
            ${~~Ball.rFn([55,255])},
            ${~~Ball.rFn([55,255])},
            ${~~Ball.rFn([55,255])}
            )`
    }

    static rFn(arr) {
        let max = Math.max(...arr)
        let min = Math.min(...arr)
        return Math.random() * (max - min) + min

    }

    render(ctx) {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(0, 0, this.r, 0, 2 * Math.PI)
        ctx.fill()
        ctx.restore()
        return this;
    }



}
const ball = new Ball(100, 100, 30).render(ctx)