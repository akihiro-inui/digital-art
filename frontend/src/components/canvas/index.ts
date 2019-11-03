import p5 from 'p5'
import { ngon, line, box } from '~/shapes'

import SoundRepository from '~/repositories/soundRepository'
const repository = new SoundRepository()

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

        ngon(p, 
            0, 
            0, 
            repository.getParam3()
        )

        ngon(p, 
            10, 
            10, 
            repository.getParam6()
        )

        ngon(p, 
            10, 
            10, 
            repository.getParam5()
        )

        p.stroke('yellow')
        line(p, 
            repository.getParam1(),
            repository.getParam2(),
            repository.getParam3(),
            repository.getParam4()
        )

        line(p, 
            repository.getParam4(),
            repository.getParam3(),
            repository.getParam2(),
            repository.getParam1()
        )

        p.stroke('red')
        box(p, 
            repository.getParam4(),
            repository.getParam3(),
            repository.getParam2(),
            repository.getParam1(),
            repository.getParam1()
        )
    }

}

new p5(sketch)