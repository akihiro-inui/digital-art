import p5 from 'p5'

export function box(p: p5, x1: number, x2: number, x3: number, x4: number, x5: number) {
    p.beginShape()
    p.box(x1, x2, x3, x4, x5);
    p.endShape()
}
