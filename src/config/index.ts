// tslint:disable:object-literal-sort-keys

export default {
  networks: {
    mainnet: {
      bip32: {
        private: 46090600,
        public: 46089520,
      },
      name: 'mainnet',
      nethash: '7fadccaae136bfa7655aa1e1f2de440804abbf64af9f380ccfbef916e18b485c',
      token: 'Qredit',
      symbol: 'XQR',
      version: 0x4b,
      explorer: 'https://explorer.qredit.io/#',
      wif: 0x1a,
      p2pPort: 5102,
      apiPort: 5103,
      p2pVersion: '2.0.0',
      isV2: true,
      activePeer: {
        ip: 'https://qredit.cloud',
        port: null,
      },
      peers: [
        { "ip": "95.217.235.75", "port": 5103 },
        { "ip": "116.203.70.214", "port": 5103 },
        { "ip": "78.47.141.58", "port": 5103 },
        { "ip": "135.181.106.105", "port": 5103 },
        { "ip": "95.217.186.135", "port": 5103 }
      ],
    },
  },
  blockchain: {
    interval: 8,
    delegates: 51,
    date: new Date(Date.UTC(2021, 1, 21, 21, 21, 21, 0)),
  },
};
