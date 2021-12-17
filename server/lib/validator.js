var txDecoder = require('ethereum-tx-decoder');
// var BigNumber = require('big-number');
const config = require("../../config"),
       knex       = require("../../db/pg/knex");

const allowedMethods = config.get('methods:allow');


async function includes(method){
    return true;
    // await allowedMethods.includes(method)
}


module.exports.validate = async (data, reqId)=>{
    if(includes(data.method) && reqId) {
        if(data.method === 'eth_sendRawTransaction'){
            var decodedTx = txDecoder.decodeTx(data.params[0]);

            let exists = await knex('gateways')
            .select('address')
            .where({
                'id': reqId
            })

            if(exists.length > 0 && (decodedTx.to === exists[0].address || decodedTx.value.toString() === '0')){
                // console.log("TX NOT VALID")
                return true;
            }
            else{
                return false;
            }
        }
    }
    else{
        return false;
    }
}