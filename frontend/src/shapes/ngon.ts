import p5 from 'p5'
let sides = 3
let angle, px, py

export function ngon(p: p5, x: any, y: any, d: any) {
    p.beginShape()
    for (let i = 0; i < sides; i++) {
        angle = p.TWO_PI / sides * i
        px = x + p.sin(angle) * d / 2
        py = y - p.cos(angle) * d / 2
        p.vertex(px, py, 0)
    }
    for (let i = 0; i < sides; i++) {
        angle = p.TWO_PI / sides * i
        px = x + p.sin(angle) * d / 2
        py = x - p.cos(angle) * d / 2
        p.vertex(px, py, 0)
    }
    p.endShape()
}