"use strict";
const  nools = require("nools")

const TextMessage= function(userInfo){
    this.userId= userInfo.userId,
    this.text= userInfo.text,
    this.sentiment= userInfo.sentiment,
    this.acceptanceRate= userInfo.acceptanceRate,
    this.curseWord= userInfo.curseWord
}


var flow = nools.flow("Hello World", function (flow) {

    //find any text message that uses curse word
    this.rule("User used cursed words", [TextMessage, "m", "m.curseWord =~ /^Bleep-bloop(\\s*world)?$/"], function (facts) {
      console.log(facts.m.curseWord);
    })

    //find any text message that has more than 30% acceptance rate
    this.rule("Above 30% ", [TextMessage, "m", "m.acceptanceRate >= 30"], function (facts) {
      console.log(facts.m.acceptanceRate);
    })
  
})

const user= {
    "userId" : "123",
    "text": "I don't want to bother you but can you help me with this",
    "sentiment": 0,
    acceptanceRate:50,
    curseWord: "dfgdfBleep-bloop"
  }

  var session = flow.getSession()

  //assert your different messages
  session.assert(new TextMessage(user))
  
  session.match()