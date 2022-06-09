require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stove radar oval history inner argue tackle gate'; 
let testAccounts = [
"0x603d871e65b88ea9fb6fbef70d576d03d4c94c5abbf88ae550867beaceb6d4e1",
"0xa6d677612c9e22f621e153e93651cc8b5d58bd4631435b97d5d6efbe058101de",
"0x33bc58ca309860ca9986dbc02218527e05c1bfddacab0fe53ad849bbb8303e8d",
"0x2137348eaf6db0a427f5dd1e05b894c6a47055d7fccd2e3fdd2e139b1b39be09",
"0x8b1a3da3fe9d162a51ac371df48eb2dd0cbb394f1e27784edcd5be20d56fec0e",
"0x2de547e3619da2317245b4a11fca69e7c78234fad3895ee755a76a49e2a0039e",
"0xcbcf063415c13d2eb52fdadb67b79ec3fac4ba967382ed8db2afa985debf8661",
"0xf232f181d6c99aca0eeacafb51dacffaa5cee549554279d0c1f83864ba256ba7",
"0x3fa7267199b40819975d752a404c461fb5b686b29f9a1a313c4c860d5d76c84a",
"0x02f76f58110ed380578c709951c3dd4de14e3bb20c1ed27938f4b302f10560d0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

