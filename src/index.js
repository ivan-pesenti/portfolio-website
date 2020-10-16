import { SwitchLanguage } from "./js/switch-language";
import { RocketManager } from "./js/rocket-manager";
import { run } from "./js/app";

const switchLanguage = new SwitchLanguage();
const rocketManager = new RocketManager();

run(switchLanguage, rocketManager);