require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remember mistake imitate prize food seek'; 
let testAccounts = [
"0x1a43280975fc7da3e48e321c10b973568449e4182888c48e00cddc004546dcb4",
"0xe2f711f8ce3830856e91aabb7252228d2d7494b3f07f4ecb5dd5ed3ab4c3f922",
"0xabe1efcca4b9af04e09cae6a28ed22d9821568283a406e618efb38d14be74115",
"0xe4bcd13f187021653d3ae2ebd285adf1ee6f8c337bd77b62e90866e089333d67",
"0xba48ad1eb73cb17ae77876caec64223cc3e94b127c2388ad63ea856954a83515",
"0x7fea8e9f28e826b222cc109b1f7068a09a2698f559834eaa5029d017985aa0d2",
"0xc0e7796778bd434f81f7b31f67dbbe8075092bdab573db72c1f3bfa57f01090b",
"0x429e184afaea7acb7663754aa310e1518dc4d83f4175a19ffa56185d808d3784",
"0x58ea936b0a7becb2a9947d9b1c413d31fec98ffdee7291640dc024c244339510",
"0xde852468b283aa55594be0e3218552926c6761423db0ef7dc9db602ed992bace"
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

