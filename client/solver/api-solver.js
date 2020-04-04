
  
  const list = () => {
    return fetch('/api/solver/', {
      method: 'GET',
    }).then(response => {
      return response.json()
    }).catch((err) =>{ console.log("here");console.log(err)})
  }

  export {
    
    list,
   
  }
  