"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataPublisher = void 0;
const axios_1 = __importDefault(require("axios"));
class DataPublisher {
    constructor(jwt, endpoint) {
        this.endpoint = endpoint;
        this.config = {
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
            },
        };
    }
    async post(data) {
        try {
            await axios_1.default.post(this.endpoint, data, this.config);
            console.log('data posted');
        }
        catch (e) { }
    }
}
exports.DataPublisher = DataPublisher;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YVB1Ymxpc2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhLXB1Ymxpc2hlci9kYXRhUHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUFpRTtBQUVqRSxNQUFhLGFBQWE7SUFJdEIsWUFBWSxHQUFXLEVBQUUsUUFBZ0I7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNOLE9BQU8sRUFBRTtnQkFDVCxhQUFhLEVBQUUsVUFBVSxHQUFHLEVBQUU7Z0JBQzlCLGNBQWMsRUFBRSxrQkFBa0I7YUFDckM7U0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBUztRQUN2QixJQUFJLENBQUM7WUFDRCxNQUFNLGVBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7Q0FDSjtBQXBCRCxzQ0FvQkM7QUFBQSxDQUFDIn0=