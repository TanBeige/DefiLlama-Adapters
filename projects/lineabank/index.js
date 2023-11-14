const { compoundExports2 } = require("../helper/compound");
const config = {
  linea: '0x009a0b7C38B542208936F1179151CD08E2943833',
  scroll: '0xEC53c830f4444a8A56455c6836b5D2aA794289Aa',
  manta: '0xB7A23Fc0b066051dE58B922dC1a08f33DF748bbf',
}

Object.keys(config).forEach(chain => {
  const comptroller = config[chain]
  module.exports[chain] = compoundExports2({
    comptroller, fetchBalances: true, abis: {
      getAllMarkets: "address[]:allMarkets",
      totalBorrows: "uint256:totalBorrow",
    },
  })
})