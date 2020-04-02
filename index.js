const rgbModule = require('./rgb-conversion-functions');
const hexModule = require('./hex-conversion-functions');
const hslModule = require('./hsl-conversion-functions');

let args = process.argv.slice(2);

let rgbAndHslArgs = (args.slice(1).map(el => parseInt(el)));
let hexArgs = args.slice(1);

const colorCodeConverter = () => {

    switch (args[0].toLowerCase()) {

        case 'rgb':
                return `${rgbModule.rgbToHex(...rgbAndHslArgs)}\n${rgbModule.rgbToHsl(...rgbAndHslArgs)})`;
            break;

        case 'hex':
            return `${hexModule.hexToRgb(hexArgs[0])})\n${hexModule.hexToHsl(hexArgs[0])})`;
            break;

        case 'hexall':
            const hexArgsArray = [];

            for (let i = 0; i < hexArgs.length; i++) {
                console.log((`${hexArgs[i]}\n${hexModule.hexToRgb(hexArgs[i])})\n${hexModule.hexToHsl(hexArgs[i])}\n\n`))
            };
            break;

        case 'hsl':
            return `${hslModule.hslToRgb(...rgbAndHslArgs)}\n${hslModule.hslToHex(...rgbAndHslArgs)}`;
            break;

        default:
            return `First argument must be 'rgb', 'hex' or 'hsl'`

    }
}

console.log(colorCodeConverter());