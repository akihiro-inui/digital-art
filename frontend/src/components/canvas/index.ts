import p5 from 'p5'
import { ngon, line } from '~/shapes'

const sketch = (p: p5) => {
    p.preload = () => {
    }

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
        p.setAttributes('antialias', true)
        p.fill(237, 34, 93)
    }

    p.draw = () => {
        p.background(200)
        p.rotateX(p.frameCount * 0.01)
        p.rotateZ(p.frameCount * 0.01)

        p.stroke('purple')
        p.point(30, 20)
        p.point(85, 20)


        ngon(p, 0, 0, 80)
        line(p, 5)
    }

}

new p5(sketch)