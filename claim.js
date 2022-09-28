const { Api, JsonRpc } = require("eosjs");
const { JsSignatureProvider } = require("eosjs/dist/eosjs-jssig"); // development only
const fetch = require("node-fetch"); //node only
const { TextDecoder, TextEncoder } = require("util"); //node only
require("dotenv").config();

// const privateKeys = [privateKey1];

const privateKeys = [process.env.cs1claim];
const signatureProvider = new JsSignatureProvider(privateKeys);
const rpc = new JsonRpc("https://wax.greymass.com/", { fetch });
const api = new Api({
  rpc,
  signatureProvider,
  textDecoder: new TextDecoder(),
  textEncoder: new TextEncoder(),
}); //required to submit transactions

(async () => {
  const tx = await rpc.history_get_transaction(
    "026d0da3a9b8456dc841e6c245fe7b6823c65367cdf4bd3e8c98ea1ad0eb2181",
    205856336
  );
  console.log(tx);
})();
