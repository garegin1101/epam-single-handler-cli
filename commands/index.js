import exitCommand from './.exit/index.js';
import printCPUsInfo from "./cpus/index.js";
import printTotalMemory from "./memory/index.js";
import printHomeDirectory from "./home-dir/index.js";
import printHostName from "./hostname/index.js";
import printPlatform from "./platform/index.js";
import printCPUArchitecture from "./architecture/index.js";
import printUsername from "./username/index.js";

export default {
    '.exit'            : exitCommand,
    'os --cpus'        : printCPUsInfo,
    'os --homedir'     : printHomeDirectory,
    'os --username'    : printUsername,
    'os --architecture': printCPUArchitecture,
    'os --hostname'    : printHostName,
    'os --platform'    : printPlatform,
    'os --memory'      : printTotalMemory
};