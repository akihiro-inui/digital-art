import p5 from 'p5'
export function line(p: p5, n: any) {
    p.beginShape(p.LINES)
    p.vertex(10, 20, 0)
    p.vertex(30, 30, 0)
    p.vertex(50, 40, 0)

    p.endShape()
}
