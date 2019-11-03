import p5 from 'p5'

export function line(p: p5, x1: number, x2: number, x3: number, x4: number) {
    p.beginShape()
    p.line(x1, x2, x3, x4);
    p.endShape()
}
