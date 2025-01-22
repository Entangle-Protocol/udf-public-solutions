"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorMessage = exports.hidePrivateKeyFromLogs = void 0;
const hidePrivateKeyFromLogs = (input) => input.replace(/\b(?:0x)?[0-9a-fA-F]{64}\b/g, '*********************');
exports.hidePrivateKeyFromLogs = hidePrivateKeyFromLogs;
const getErrorMessage = (error) => (0, exports.hidePrivateKeyFromLogs)(typeof error === 'string'
    ? error
    : error instanceof Error
        ? `ErrorMessage: ${error.message}; ErrorStack: ${error.stack}`
        : `Json Error: ${JSON.stringify(error)}`);
exports.getErrorMessage = getErrorMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxzQkFBc0IsR0FBRyxDQUFDLEtBQWEsRUFBVSxFQUFFLENBQzVELEtBQUssQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztBQUQ3RCxRQUFBLHNCQUFzQiwwQkFDdUM7QUFFbkUsTUFBTSxlQUFlLEdBQUcsQ0FBQyxLQUFjLEVBQVUsRUFBRSxDQUN0RCxJQUFBLDhCQUFzQixFQUNwQixPQUFPLEtBQUssS0FBSyxRQUFRO0lBQ3ZCLENBQUMsQ0FBQyxLQUFLO0lBQ1AsQ0FBQyxDQUFDLEtBQUssWUFBWSxLQUFLO1FBQ3hCLENBQUMsQ0FBQyxpQkFBaUIsS0FBSyxDQUFDLE9BQU8saUJBQWlCLEtBQUssQ0FBQyxLQUFLLEVBQUU7UUFDOUQsQ0FBQyxDQUFDLGVBQWUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUMzQyxDQUFDO0FBUE8sUUFBQSxlQUFlLG1CQU90QiJ9