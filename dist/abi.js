"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PULL_ORACLE_ABI = void 0;
exports.PULL_ORACLE_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_admin",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "dev",
                "type": "address"
            },
            {
                "components": [
                    {
                        "internalType": "bytes",
                        "name": "bodyPartOne",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "publicKey",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "bodyPartTwo",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "signature",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct ChunkedX509Cert",
                "name": "_rootCert",
                "type": "tuple"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "AccessControlBadConfirmation",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "neededRole",
                "type": "bytes32"
            }
        ],
        "name": "AccessControlUnauthorizedAccount",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "TeeVerifier__CallerIsNotDev",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "TeeVerifier__InvalidEnclaveSignature",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "TeeVerifier__InvalidIntermediateCert",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "TeeVerifier__InvalidLeafCert",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "TeeVerifier__InvalidQeReportDataHash",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "TeeVerifier__InvalidQeSignature",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "TeeVerifier__InvalidSessionSignature",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "TeeVerifier__WrongDataHash",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "TeeVerifier__WrongMrEnclave",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "TeeVerifier__WrongMrSigner",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "ADMIN",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "DEV",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "oracleScriptHash",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "publicGithubUrlToScript",
                "type": "bytes"
            }
        ],
        "name": "addNewScript",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "admin",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes",
                "name": "message",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "publicKey",
                "type": "bytes"
            }
        ],
        "name": "ecdsaOnKeccak256r1",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "getGithubLinkByScriptHash",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleAdmin",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "getSessionsByScriptHash",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getVerifierContractAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRole",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "bytes",
                        "name": "bodyPartOne",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "publicKey",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "bodyPartTwo",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "signature",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct ChunkedX509Cert",
                "name": "leaf",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "internalType": "bytes",
                        "name": "bodyPartOne",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "publicKey",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "bodyPartTwo",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "signature",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct ChunkedX509Cert",
                "name": "intermediate",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "internalType": "bytes",
                        "name": "header",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "isvReport",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "isvReportSignature",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "attestationKey",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "qeReport",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "qeReportSignature",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "qeAuthenticationData",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct ChunkedSGXQuote",
                "name": "quote",
                "type": "tuple"
            },
            {
                "internalType": "address",
                "name": "sessionKey",
                "type": "address"
            }
        ],
        "name": "initSessionKey",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "callerConfirmation",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rootCert",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "bodyPartOne",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "publicKey",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "bodyPartTwo",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sessionKey",
                "type": "address"
            }
        ],
        "name": "sessions",
        "outputs": [
            {
                "internalType": "address",
                "name": "sessionKey",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "mrEnclave",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "mrSigner",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "oracleScriptHash",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32[]",
                "name": "dataKeys",
                "type": "bytes32[]"
            },
            {
                "internalType": "address",
                "name": "buyersDappAddress",
                "type": "address"
            }
        ],
        "name": "subscribe",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "feedKey",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "bytes32",
                        "name": "r",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "s",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "uint8",
                        "name": "v",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct TeeVerifier.Signature",
                "name": "signature",
                "type": "tuple"
            }
        ],
        "name": "verify",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "bytes",
                        "name": "bodyPartOne",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "publicKey",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "bodyPartTwo",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "signature",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct ChunkedX509Cert",
                "name": "cert",
                "type": "tuple"
            },
            {
                "internalType": "bytes",
                "name": "publicKey",
                "type": "bytes"
            }
        ],
        "name": "verifyCert",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FiaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLGVBQWUsR0FBRztJQUMzQjtRQUNFLFFBQVEsRUFBRTtZQUNSO2dCQUNFLGNBQWMsRUFBRSxTQUFTO2dCQUN6QixNQUFNLEVBQUUsUUFBUTtnQkFDaEIsTUFBTSxFQUFFLFNBQVM7YUFDbEI7WUFDRDtnQkFDRSxjQUFjLEVBQUUsU0FBUztnQkFDekIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsTUFBTSxFQUFFLFNBQVM7YUFDbEI7WUFDRDtnQkFDRSxZQUFZLEVBQUU7b0JBQ1o7d0JBQ0UsY0FBYyxFQUFFLE9BQU87d0JBQ3ZCLE1BQU0sRUFBRSxhQUFhO3dCQUNyQixNQUFNLEVBQUUsT0FBTztxQkFDaEI7b0JBQ0Q7d0JBQ0UsY0FBYyxFQUFFLE9BQU87d0JBQ3ZCLE1BQU0sRUFBRSxXQUFXO3dCQUNuQixNQUFNLEVBQUUsT0FBTztxQkFDaEI7b0JBQ0Q7d0JBQ0UsY0FBYyxFQUFFLE9BQU87d0JBQ3ZCLE1BQU0sRUFBRSxhQUFhO3dCQUNyQixNQUFNLEVBQUUsT0FBTztxQkFDaEI7b0JBQ0Q7d0JBQ0UsY0FBYyxFQUFFLE9BQU87d0JBQ3ZCLE1BQU0sRUFBRSxXQUFXO3dCQUNuQixNQUFNLEVBQUUsT0FBTztxQkFDaEI7aUJBQ0Y7Z0JBQ0QsY0FBYyxFQUFFLHdCQUF3QjtnQkFDeEMsTUFBTSxFQUFFLFdBQVc7Z0JBQ25CLE1BQU0sRUFBRSxPQUFPO2FBQ2hCO1NBQ0Y7UUFDRCxpQkFBaUIsRUFBRSxZQUFZO1FBQy9CLE1BQU0sRUFBRSxhQUFhO0tBQ3RCO0lBQ0Q7UUFDRSxRQUFRLEVBQUUsRUFBRTtRQUNaLE1BQU0sRUFBRSw4QkFBOEI7UUFDdEMsTUFBTSxFQUFFLE9BQU87S0FDaEI7SUFDRDtRQUNFLFFBQVEsRUFBRTtZQUNSO2dCQUNFLGNBQWMsRUFBRSxTQUFTO2dCQUN6QixNQUFNLEVBQUUsU0FB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