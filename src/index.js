import { SwitchLanguage } from "./js/switch-language";
import { RocketManager } from "./js/rocket-manager";
import "./js/modernizr-custom";
import { run } from "./js/app";
import "./css/style.css";

// test if js is enabled in the browser
document.documentElement.classList.remove("no-js");

// Modernizr used to detect webp compatability.
Modernizr.on('webp', function (result) {
    if (result) {
        // supported
    } else {
        // not-supported
    }
});

const switchLanguage = new SwitchLanguage();
const rocketManager = new RocketManager();

run(switchLanguage, rocketManager);