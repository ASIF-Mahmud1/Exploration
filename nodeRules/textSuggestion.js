var RuleEngine = require("node-rules");

var rules = [{
    "condition": function(R) {
        R.when(this.curseWord === "Bleep-bloop")
    },
    "consequence": function(R) {
        this.result = false;
        this.reason = " User has used curse words";
        R.stop();//stop if matched. no need to process next rule.
    }
}, {
    "condition": function(R) {
        R.when(this.acceptanceRate <= 40);
    },
    "consequence": function(R) {
        this.result = false;
        this.reason = "Acceptance rate is too low";
        R.stop();
    }
}];

/* Creating Rule Engine instance and registering rule */
var R = new RuleEngine();

R.register(rules)

const fact= {
    "userId" : "123",
    "text": "I don't want to bother you but can you help me with this",
    "sentiment": 0,
    acceptanceRate:50,
    curseWord: "Bleep-bloop"
  }

  R.execute(fact, function(data) {
    if (data.result) {
        console.log("Show Suggestion");
    } else {
        console.log("Do not show suggestion: :" + data.reason);
    }
});