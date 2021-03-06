const HDWalletProvider = require("truffle-hdwallet-provider");
// Obtenida de la plataforma infura al crear un nuevo proyecto
const infuraKey = "8dadfc634d7e43dfafe0bb0e3976c863";

const fs = require("fs");
// Frase de recuperación de la cuenta de Metamask que se quiera enlazar
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        development: {
            host: "127.0.0.1", // Localhost (default: none)
            port: 8545, // Standard Ethereum port (default: none)
            network_id: "*" // Any network (default: none)
        },
        // Configuración de la red Ropsten
        ropsten: {
            provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
            // host:"127.0.0.1",
            // port: 8545,
            network_id: 3,       // Ropsten's id
            gas: 5500000,        // Ropsten has a lower block limit than mainnet
            confirmations: 2,    // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 200,  // # of blocks before a deployment times out (minimum/default: 50)
            skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
          },
    },
    compilers: {
        solc: {
            version: "0.7.0"
        }
    }
};
