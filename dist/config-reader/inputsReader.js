"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputsReader = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class InputsReader {
    constructor() { }
    static instance() {
        if (!this._instance) {
            this._instance = new InputsReader();
        }
        return this._instance;
    }
    parseConfig(configData) {
        if (!configData)
            throw new Error("Input file doesn't exist");
        const config = JSON.parse(configData);
        // TODO validate config scheme
        return config;
    }
    read(inputDir) {
        // reads encrypted configuration
        if (!inputDir)
            throw new Error('Env variable INPUT_DATA_FOLDER is not defined');
        inputDir += '/input-0001/';
        let rootCerts = [];
        let configDir;
        const ls = fs_1.default.readdirSync(inputDir);
        const configData = fs_1.default.readFileSync(path_1.default.join(inputDir, 'input.json'), { encoding: 'utf8', flag: 'r' });
        for (const dirName of ls) {
            try {
                configDir = path_1.default.join(inputDir, dirName);
                rootCerts = fs_1.default
                    .readdirSync(configDir)
                    .filter((fileName) => fileName.endsWith(`.crt`))
                    .map((certName) => fs_1.default.readFileSync(path_1.default.join(configDir, certName)));
                break;
            }
            catch (err) {
                console.warn(`Something went wrong during reading data from "${dirName}" directory. Error: ${err.message}`);
            }
        }
        return {
            ...this.parseConfig(configData),
            rootCerts,
        };
    }
}
exports.InputsReader = InputsReader;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRzUmVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbmZpZy1yZWFkZXIvaW5wdXRzUmVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRDQUFvQjtBQUNwQixnREFBd0I7QUFJeEIsTUFBYSxZQUFZO0lBRXJCLGdCQUF1QixDQUFDO0lBRWpCLE1BQU0sQ0FBQyxRQUFRO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVPLFdBQVcsQ0FBQyxVQUE4QjtRQUM5QyxJQUFJLENBQUMsVUFBVTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUM3RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RDLDhCQUE4QjtRQUU5QixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRU0sSUFBSSxDQUFDLFFBQTRCO1FBQ3BDLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsUUFBUTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQztRQUNoRixRQUFRLElBQUksY0FBYyxDQUFDO1FBRTNCLElBQUksU0FBUyxHQUFhLEVBQUUsQ0FBQztRQUM3QixJQUFJLFNBQWlCLENBQUM7UUFDdEIsTUFBTSxFQUFFLEdBQUcsWUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxNQUFNLFVBQVUsR0FBRyxZQUFFLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUV2RyxLQUFLLE1BQU0sT0FBTyxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQztnQkFDTCxTQUFTLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3pDLFNBQVMsR0FBRyxZQUFFO3FCQUNULFdBQVcsQ0FBQyxTQUFTLENBQUM7cUJBQ3RCLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDL0MsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxZQUFFLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFeEUsTUFBTTtZQUNOLENBQUM7WUFBQyxPQUFPLEdBQVksRUFBRSxDQUFDO2dCQUNwQixPQUFPLENBQUMsSUFBSSxDQUNSLGtEQUFrRCxPQUFPLHVCQUN4RCxHQUFhLENBQUMsT0FDZixFQUFFLENBQ0wsQ0FBQztZQUNOLENBQUM7UUFDTCxDQUFDO1FBRUQsT0FBTztZQUNILEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7WUFDL0IsU0FBUztTQUNaLENBQUE7SUFDTCxDQUFDO0NBQ0o7QUFwREQsb0NBb0RDO0FBQUEsQ0FBQyJ9