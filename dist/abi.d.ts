export declare const PULL_ORACLE_ABI: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_admin";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "dev";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "bytes";
            readonly name: "bodyPartOne";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "publicKey";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "bodyPartTwo";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly internalType: "struct ChunkedX509Cert";
        readonly name: "_rootCert";
        readonly type: "tuple";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "AccessControlBadConfirmation";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "bytes32";
        readonly name: "neededRole";
        readonly type: "bytes32";
    }];
    readonly name: "AccessControlUnauthorizedAccount";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "TeeVerifier__CallerIsNotDev";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TeeVerifier__InvalidEnclaveSignature";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TeeVerifier__InvalidIntermediateCert";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TeeVerifier__InvalidLeafCert";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TeeVerifier__InvalidQeReportDataHash";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TeeVerifier__InvalidQeSignature";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TeeVerifier__InvalidSessionSignature";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TeeVerifier__WrongDataHash";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TeeVerifier__WrongMrEnclave";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TeeVerifier__WrongMrSigner";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "previousAdminRole";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "newAdminRole";
        readonly type: "bytes32";
    }];
    readonly name: "RoleAdminChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "RoleGranted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "RoleRevoked";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "ADMIN";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "DEFAULT_ADMIN_ROLE";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "DEV";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "oracleScriptHash";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes";
        readonly name: "publicGithubUrlToScript";
        readonly type: "bytes";
    }];
    readonly name: "addNewScript";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "admin";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "message";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes";
        readonly name: "publicKey";
        readonly type: "bytes";
    }];
    readonly name: "ecdsaOnKeccak256r1";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly name: "getGithubLinkByScriptHash";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }];
    readonly name: "getRoleAdmin";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly name: "getSessionsByScriptHash";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getVerifierContractAddress";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "grantRole";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "hasRole";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bytes";
            readonly name: "bodyPartOne";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "publicKey";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "bodyPartTwo";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly internalType: "struct ChunkedX509Cert";
        readonly name: "leaf";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "bytes";
            readonly name: "bodyPartOne";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "publicKey";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "bodyPartTwo";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly internalType: "struct ChunkedX509Cert";
        readonly name: "intermediate";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "bytes";
            readonly name: "header";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "isvReport";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "isvReportSignature";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "attestationKey";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "qeReport";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "qeReportSignature";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "qeAuthenticationData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct ChunkedSGXQuote";
        readonly name: "quote";
        readonly type: "tuple";
    }, {
        readonly internalType: "address";
        readonly name: "sessionKey";
        readonly type: "address";
    }];
    readonly name: "initSessionKey";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "callerConfirmation";
        readonly type: "address";
    }];
    readonly name: "renounceRole";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "revokeRole";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "rootCert";
    readonly outputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "bodyPartOne";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes";
        readonly name: "publicKey";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes";
        readonly name: "bodyPartTwo";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sessionKey";
        readonly type: "address";
    }];
    readonly name: "sessions";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "sessionKey";
        readonly type: "address";
    }, {
        readonly internalType: "bytes32";
        readonly name: "mrEnclave";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "mrSigner";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "oracleScriptHash";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32[]";
        readonly name: "dataKeys";
        readonly type: "bytes32[]";
    }, {
        readonly internalType: "address";
        readonly name: "buyersDappAddress";
        readonly type: "address";
    }];
    readonly name: "subscribe";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "interfaceId";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "feedKey";
        readonly type: "bytes32";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "timestamp";
        readonly type: "uint256";
    }, {
        readonly components: readonly [{
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }];
        readonly internalType: "struct TeeVerifier.Signature";
        readonly name: "signature";
        readonly type: "tuple";
    }];
    readonly name: "verify";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bytes";
            readonly name: "bodyPartOne";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "publicKey";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "bodyPartTwo";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly internalType: "struct ChunkedX509Cert";
        readonly name: "cert";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "publicKey";
        readonly type: "bytes";
    }];
    readonly name: "verifyCert";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}];
