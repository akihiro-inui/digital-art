import sampleData from '../../../audio/sample.json'
import Sound from '../entities/sound'

class SoundRepository {

    private sound: Sound
    
    constructor() {
        this.sound = <Sound> {
            param1: sampleData.param1,
            param2: sampleData.param2,
            param3: sampleData.param3,
            param4: sampleData.param4,
            param5: sampleData.param5,
            param6: sampleData.param6,
            param7: sampleData.param7,
            param8: sampleData.param8,
        }
    }

    getParam1(): number {
        return this.sound.param1
    }

    getParam2(): number {
        return this.sound.param2
    }

    getParam3(): number {
        return this.sound.param3
    }

    getParam4(): number {
        return this.sound.param4
    }

    getParam5(): number {
        return this.sound.param5
    }

    getParam6(): number {
        return this.sound.param6
    }

    getParam7(): number {
        return this.sound.param7
    }

    getParam8(): number {
        return this.sound.param8
    }    
}

export default SoundRepository