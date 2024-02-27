import { LogoProperty } from "./types";
import { URLParameter } from "./features/url";


const urlParams = new URLParameter();

const defaultProperty: LogoProperty = {
    text: urlParams.get("text", "cyuz"),
    size: urlParams.getJSON("size", { x: 1024, y: 1024 }),
    font: urlParams.getJSON("font", { familyIdx: 304, variantIdx: 0, size: 216 }),
    textColor: urlParams.getJSON(
        "textColor", { color1: "#CDD6F4", color2: "#CDD6F4", angle: 45, width: 35 }
    ),
    textOffset: urlParams.getJSON("textOffset", { x: 0, y: 0 }),
    bgColor: urlParams.getJSON(
        "bgColor", { color1: "#000000", color2: "#000000", angle: 45, width: 50 }
    ),
    bgOpacity: urlParams.getInt("bgOpacity", 100),
}


export default defaultProperty;
