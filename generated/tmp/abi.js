web3.setProvider(new web3.providers.HttpProvider('http://localhost:8101'));web3.eth.defaultAccount = web3.eth.accounts[0];KeystoreAbi = [{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getKeyData","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[],"name":"revokeKey","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getKeyTimestamp","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"data","type":"string"}],"name":"setKey","outputs":[],"type":"function"}];KeystoreContract = web3.eth.contract(KeystoreAbi);Keystore = KeystoreContract.at('0x1e1a5db1fba04bf2ad301d7b67a4e0f18ab9724f');contractDB = {"Keystore":{"args":[],"types":["file"],"gasPrice":50000000000,"gasLimit":3141592,"compiled":{"code":"606060405261043e806100136000396000f30060606040526000357c010000000000000000000000000000000000000000000000000000000090048063428b5ca81461005a57806369021a5f146100d9578063a29fc1e6146100e6578063af42d1061461010d57610058565b005b61006b60048035906020015061034a565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156100cb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100e460045061024b565b005b6100f76004803590602001506103fa565b6040518082815260200191505060405180910390f35b61015d6004803590602001906004018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050905061015f565b005b80600060005060003273ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600001600050908051906020019082805482825590600052602060002090601f016020900481019282156101e0579182015b828111156101df5782518260005055916020019190600101906101c1565b5b50905061020b91906101ed565b8082111561020757600081815060009055506001016101ed565b5090565b505042600060005060003273ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600101600050819055505b50565b6020604051908101604052806000815260200150600060005060003273ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600001600050908051906020019082805482825590600052602060002090601f016020900481019282156102df579182015b828111156102de5782518260005055916020019190600101906102c0565b5b50905061030a91906102ec565b8082111561030657600081815060009055506001016102ec565b5090565b50506000600060005060003273ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600101600050819055505b565b6020604051908101604052806000815260200150600060005060008373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600001600050805480601f016020809104026020016040519081016040528092919081815260200182805480156103e957820191906000526020600020905b8154815290600101906020018083116103cc57829003601f168201915b505050505090506103f5565b919050565b6000600060005060008373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600101600050549050610439565b91905056","info":{"abiDefinition":[{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getKeyData","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[],"name":"revokeKey","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getKeyTimestamp","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"data","type":"string"}],"name":"setKey","outputs":[],"type":"function"}]}}},"Market":{"args":[],"types":["file"],"gasPrice":50000000000,"gasLimit":3141592,"compiled":{"code":"60606040526040516103b23803806103b28339016040526060805160600190602001505b32600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550806001600050908051906020019082805482825590600052602060002090601f01602090048101928215609c579182015b82811115609b578251826000505591602001919060010190607f565b5b50905060c3919060a7565b8082111560bf576000818150600090555060010160a7565b5090565b50505b506102dc806100d66000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900480634dfc1abc1461004f5780636e9960c3146100a1578063a79af2ce146100d85761004d565b005b61009f6004803590602001906004018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509050610180565b005b6100ac600450610151565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100e360045061025e565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156101435780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061017d565b90565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff161415156101dc5761025b565b806001600050908051906020019082805482825590600052602060002090601f0160209004810192821561022d579182015b8281111561022c57825182600050559160200191906001019061020e565b5b509050610258919061023a565b80821115610254576000818150600090555060010161023a565b5090565b50505b50565b60206040519081016040528060008152602001506001600050805480601f016020809104026020016040519081016040528092919081815260200182805480156102cd57820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b505050505090506102d9565b9056","info":{"abiDefinition":[{"constant":false,"inputs":[{"name":"_meta","type":"string"}],"name":"setMeta","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getAdmin","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"getMeta","outputs":[{"name":"","type":"string"}],"type":"function"},{"inputs":[{"name":"_meta","type":"string"}],"type":"constructor"}]}},"onDeploy":[],"deploy":false},"Order":{"args":[],"types":["file"],"gasPrice":50000000000,"gasLimit":3141592,"compiled":{"code":"60606040526040516112563803806112568339016040526060805160600190602001805190602001805190602001805190602001805190602001505b32600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550846005600050908051906020019082805482825590600052602060002090601f016020900481019282156100b7579182015b828111156100b6578251826000505591602001919060010190610098565b5b5090506100e291906100c4565b808211156100de57600081815060009055506001016100c4565b5090565b505083600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555082600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055508160036000508190555080600460005081905550426008600050819055505b50505050506110e98061016d6000396000f30060606040523615610103576000357c01000000000000000000000000000000000000000000000000000000009004806316328e801461011e578063188ec3561461019d578063195984ac146101be5780633d0c46d0146101cb5780634bb278f3146101ec5780634e69d560146101f95780634f896d4f1461021a57806355d0ad181461022d5780635cfb4aa41461024e578063603daf9a146102755780636a226a49146102ac5780636e9960c3146102fe578063792568ec14610335578063a79af2ce14610348578063abf244e9146103c1578063ced72f87146103f8578063d208fd6014610419578063ea8a1af014610456578063f240f7c31461046357610103565b61011c5b3460076000828282505401925050819055505b565b005b61012f6004803590602001506107bd565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561018f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101a86004506109d4565b6040518082815260200191505060405180910390f35b6101c9600450610c66565b005b6101d6600450610759565b6040518082815260200191505060405180910390f35b6101f7600450610ced565b005b6102046004506109b0565b6040518082815260200191505060405180910390f35b61022b600480359060200150610f8e565b005b6102386004506109c2565b6040518082815260200191505060405180910390f35b61025f60048035906020015061085e565b6040518082815260200191505060405180910390f35b610280600450610911565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102fc6004803590602001906004018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509050610470565b005b61030960045061096f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103466004803590602001506109e6565b005b610353600450610893565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156103b35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103cc600450610940565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61040360045061099e565b6040518082815260200191505060405180910390f35b61042a60048035906020015061076b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610461600450610b13565b005b61046e600450610eb2565b005b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff161415801561051c5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614155b80156105765750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614155b1561058057610756565b60206040519081016040528032815260200182815260200142815260200150600a600050600a600050805480919060010190908154818355818115116106735760030281600302836000526020600020918201910161067291906105df565b8082111561066e5760006000820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018201600050805460008255601f016020900490600052602060002090810190610659919061063b565b80821115610655576000818150600090555060010161063b565b5090565b506002820160005060009055506001016105df565b5090565b5b505050815481101561000257906000526020600020906003020160005060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550602082015181600101600050908051906020019082805482825590600052602060002090601f01602090048101928215610718579182015b828111156107175782518260005055916020019190600101906106f9565b5b5090506107439190610725565b8082111561073f5760008181506000905550600101610725565b5090565b5050604082015181600201600050559050505b50565b6000600a600050549050610768565b90565b6000600a60005082815481101561000257906000526020600020906003020160005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506107b8565b919050565b6020604051908101604052806000815260200150600a600050828154811015610002579060005260206000209060030201600050600101600050805480601f0160208091040260200160405190810160405280929190818152602001828054801561084d57820191906000526020600020905b81548152906001019060200180831161083057829003601f168201915b50505050509050610859565b919050565b6000600a60005082815481101561000257906000526020600020906003020160005060020160005054905061088e565b919050565b60206040519081016040528060008152602001506005600050805480601f0160208091040260200160405190810160405280929190818152602001828054801561090257820191906000526020600020905b8154815290600101906020018083116108e557829003601f168201915b5050505050905061090e565b90565b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061093d565b90565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061096c565b90565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061099b565b90565b600060036000505490506109ad565b90565b600060066000505490506109bf565b90565b600060076000505490506109d1565b90565b600060086000505490506109e3565b90565b8060066000508190555060606040519081016040528032815260200182815260200142815260200150600b600050600b60005080548091906001019090815481835581811511610aa457600302816003028360005260206000209182019101610aa39190610a4f565b80821115610a9f5760006000820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160005060009055600282016000506000905550600101610a4f565b5090565b5b505050815481101561000257906000526020600020906003020160005060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555060208201518160010160005055604082015181600201600050559050505b50565b60006000600660005054141515610b2957610c63565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614158015610bd55750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614155b15610bdf57610c63565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660003073ffffffffffffffffffffffffffffffffffffffff1631604051809050600060405180830381858888f193505050509050801515610c5857610c63565b610c6260016109e6565b5b50565b6000600660005054141515610c7a57610ceb565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16141515610cd657610ceb565b42600960005081905550610cea60026109e6565b5b565b60006002600660005054141515610d0357610eaf565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614158015610daf5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614155b15610db957610eaf565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16148015610e2157506004600050546009600050544203105b15610e2b57610eaf565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660003073ffffffffffffffffffffffffffffffffffffffff1631604051809050600060405180830381858888f193505050509050801515610ea457610eaf565b610eae60036109e6565b5b50565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16141515610f0e57610f8c565b6002600660005054141515610f2257610f8c565b60046000505460096000505442031115610f3b57610f8c565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610f8157610f8c565b610f8b60046109e6565b5b565b60006004600660005054141515610fa4576110e5565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16141515611000576110e5565b600082111561105f57600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600083604051809050600060405180830381858888f19350505050505b813073ffffffffffffffffffffffffffffffffffffffff163103905060008111156110da57600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600082604051809050600060405180830381858888f19350505050505b6110e460056109e6565b5b505056","info":{"abiDefinition":[{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getMessageCyphertext","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"getTimestamp","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"markAsShipped","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getMessagesCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"finalize","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getStatus","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"buyerAmount","type":"uint256"}],"name":"resolve","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getReceived","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getMessageTimestamp","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getBuyer","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"text","type":"string"}],"name":"addMessage","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getAdmin","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_status","type":"uint256"}],"name":"addUpdate","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getMeta","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"getMerchant","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"getFee","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getMessageSender","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"cancel","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"dispute","outputs":[],"type":"function"},{"inputs":[{"name":"_meta","type":"string"},{"name":"_merchant","type":"address"},{"name":"_admin","type":"address"},{"name":"_fee","type":"uint256"},{"name":"_disputeSeconds","type":"uint256"}],"type":"constructor"}]}},"onDeploy":[],"deploy":false},"Store":{"args":[],"types":["file"],"gasPrice":50000000000,"gasLimit":3141592,"compiled":{"code":"60606040526040516103b23803806103b28339016040526060805160600190602001505b32600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550806001600050908051906020019082805482825590600052602060002090601f01602090048101928215609c579182015b82811115609b578251826000505591602001919060010190607f565b5b50905060c3919060a7565b8082111560bf576000818150600090555060010160a7565b5090565b50505b506102dc806100d66000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900480634dfc1abc1461004f578063a79af2ce146100a1578063abf244e91461011a5761004d565b005b61009f6004803590602001906004018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509050610180565b005b6100ac60045061025e565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561010c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610125600450610151565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061017d565b90565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff161415156101dc5761025b565b806001600050908051906020019082805482825590600052602060002090601f0160209004810192821561022d579182015b8281111561022c57825182600050559160200191906001019061020e565b5b509050610258919061023a565b80821115610254576000818150600090555060010161023a565b5090565b50505b50565b60206040519081016040528060008152602001506001600050805480601f016020809104026020016040519081016040528092919081815260200182805480156102cd57820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b505050505090506102d9565b9056","info":{"abiDefinition":[{"constant":false,"inputs":[{"name":"_meta","type":"string"}],"name":"setMeta","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getMeta","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"getMerchant","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[{"name":"_meta","type":"string"}],"type":"constructor"}]}},"onDeploy":[],"deploy":false},"Bumper":{"args":[],"types":["file"],"gasPrice":50000000000,"gasLimit":3141592,"onDeploy":[],"deploy":false}};