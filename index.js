const {getData, storeData, fetch} = require('./helper')
getData("prescription", async (asyncStorageData)=>{
    
//    console.log(asyncStorageData)
//    let val= await storeData('ker', asyncStorageData)
//    console.log( "store data " , val.length)
  
    let responseFromServer= await fetch("url")
    let newDataToBeStored = [... responseFromServer]
    asyncStorageData.forEach((prescription,index)=>{
        if(! prescription._id)  // prescription in async storage that don't have ._id field. It means this prescription has no copy in server
        {
            console.log("Hello I am here")
            newDataToBeStored.push(prescription)
        }
    })
    console.log( "new Data To Be Stored " , newDataToBeStored.length)
})
