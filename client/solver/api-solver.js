
  const optimize = (furniture) => {
    console.log("Inside ")
    return fetch('/api/solver/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(furniture)
      })
      .then((response) => {
        return response.json()
      }).catch((err) => console.log(err))
  }
  const list = () => {
    return fetch('/api/solver/', {
      method: 'GET',
    }).then(response => {
      return response.json()
    }).catch((err) =>{ console.log("here");console.log(err)})
  }

  export {
    optimize,
    list,
   
  }
  