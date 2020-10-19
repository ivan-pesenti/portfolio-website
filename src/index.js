import { SwitchLanguage } from "./js/switch-language";
import { RocketManager } from "./js/rocket-manager";
import { run } from "./js/app";
import "./css/test.css";

const switchLanguage = new SwitchLanguage();
const rocketManager = new RocketManager();

run(switchLanguage, rocketManager);