// List of Events that will be shown on the List
const eventList=[
    {
      eventId: 1,
      title:"Mountain Hiking" ,
      summary: "",
      tag:["adventurous"]
    },
    {
      eventId: 2,
      title:"Art Exibition" ,
      summary: "",
      tag:["art"]
    },
    {
      eventId: 3,
      title:"Research paper on AI" ,
      summary: "",
      tag:["science"]
    },
    {
      eventId: 4,
      title:"Women's Voices For Change - Redefining Life After forty" ,
      summary: "",
      tag:["empowerment"]
    }
  
  ]
  
  // After an event is chosen, the event id will be pushed to user profile
  const userProfile= {
    userId: 1,
    eventsAddedToCalendar: [  
      { 
        eventId: 1,
        opinion:[ 'brave' ],
        liked: true
      },
      {
        eventId:3,
        opinion:["brave", "ambitious"],
        liked: true
      }
    ]
  }
  
  // It retruns an object, that tells which is the popular opinion of an user
  const calculatePopularOpinions=  (userProfile)=>{ 
    const eventsAttended= userProfile['eventsAddedToCalendar']
    
    let qualityWithFreq={}
    eventsAttended.forEach((event, index) => {
      event.opinion.forEach((qualities)=>{
        if( qualityWithFreq[qualities] )
        {
          qualityWithFreq[qualities]['count']=qualityWithFreq[qualities]['count'] +1
          qualityWithFreq[qualities]["eventIdList"].push(event["eventId"])
        }
        else 
        {
          const eventId= event["eventId"]
          qualityWithFreq[qualities]={
            count:1,
            eventIdList:[ eventId ]
          }
        }
  
      })
    });
  
    return  qualityWithFreq
  }
  
  const popularOpinion=  calculatePopularOpinions(userProfile)
  console.log(popularOpinion)
  
  // const calculatePopularTagsOfAnOpinion=(eventList, popularOpinion)=>{
  //   let list
  //   for (const property in popularOpinion) {
     
  //   }
    
  //   return 
  // }
  
  