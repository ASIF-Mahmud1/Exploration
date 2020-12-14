

const { storageData}  = require('./storageData');
const { serverData}  = require('./serverData');

const getData = async (key, callback) => {
    let AsyncStorageGetData = new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(JSON.stringify(storageData))
        }, 1000)
      });
    
    try {
      
        const value = await Promise.resolve(AsyncStorageGetData)
        if (value != null) {
            callback(JSON.parse(value))
        }
        else {
            callback(null)
        }
    } catch (e) {
        console.log('Unable to get Data', e)
    }
}

const storeData = async (key, value) => {
let AsyncStorageSetData = new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), 4000)
    });   
    try {
      return  await Promise.resolve(AsyncStorageSetData)
    } catch (e) {
        console.log('Unable to store Data', e)
    }
}

const fetch= async (url )=>{
    let AsyncStorageSetData = new Promise((resolve, reject) => {
        setTimeout(() => resolve(serverData), 1000)
        });   
        try {
          return  await Promise.resolve(AsyncStorageSetData)
        } catch (e) {
            console.log('Unable to fetch Data', e)
        }
}

exports.storeData= storeData
exports.getData= getData
exports.fetch= fetch

