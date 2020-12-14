const {getData, storeData, fetch} = require('./helper')
getData("prescription", async (asyncStorageData)=>{
  
    let responseFromServer= await fetch("url")
    let newDataToBeStored = [... responseFromServer]
    asyncStorageData.forEach((prescription,index)=>{
        if(! prescription._id)  // prescription in async storage that don't have ._id field. It means this prescription has no copy in server
        {
           
            newDataToBeStored.push(prescription)
        }
    })
     let responseByStorage = await storeData('prescription', newDataToBeStored)
     // call edit batch function here
    console.log( "new Data To Be Stored " , JSON.stringify(newDataToBeStored))
})
