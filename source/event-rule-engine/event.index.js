// List of Events that will be shown on the List
const eventList=[
    {
      eventId: 1,
      title:"Mountain Hiking" ,
      summary: "",
      tag:["adventurous","fiction"]
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
      tag:["science","adventurous"]
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
 console.log("Popular Opinions \n", popularOpinion)       // Output: popular Opinions
  
  const findEventById=(eventList, eventId)=>{
    const result = eventList.filter(event => event["eventId"] ==eventId  )
    return result
  }
  const countOccurrences = arr => arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});


  const calculatePopularTagsOfAnOpinion=(eventList, popularOpinion)=>{
   
    
    for (const property in popularOpinion)
    {
    let storeTags=[] 
     let eventIdList= popularOpinion[property]["eventIdList"]
     eventIdList.forEach((eventId)=>{
      let result= findEventById(eventList, eventId)
      if(result.length>0)                                 // event is found in DB
      {
        storeTags.push(...result[0]['tag'])              // for a given opinion what tags are commonly found
       // console.log("store tags ",storeTags)
        let countTag=  countOccurrences(storeTags)      // returns an object with tag and their freq.
        popularOpinion[property]["tag"]= countTag
      }
     })
    }

    return  popularOpinion 
  }

  const popularTags= calculatePopularTagsOfAnOpinion(eventList,popularOpinion)
  console.log("Popular Tags \n",popularTags)