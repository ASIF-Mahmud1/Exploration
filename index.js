var solver = require("./node_modules/javascript-lp-solver/src/solver"),
  results,
  model = {
    "optimize": "capacity",
    "opType": "max",
    "constraints": {
        "plane": {"max": 44},
        "person": {"max": 512},
        "cost": {"max": 300000}
    },
    "variables": {
        "brit": {
            "capacity": 20000,
            "plane": 1,
            "person": 8,
            "cost": 5000
        },
        "yank": {
            "capacity": 30000,
            "plane": 1,
            "person": 16,
            "cost": 9000
        },
        
    },
};
 /////////
 furniture = {
    "optimize": "profit",
    "opType": "max",
    "constraints": {
        "wood": {"max": 300},
        "labor": {"max": 110},
        "storage": {"max": 400}
    },
    "variables": {
        "table": {"wood": 30, "labor": 5, "profit": 1200, "table": 1, "storage": 30},
        "dresser": {"wood": 20, "labor": 10, "profit": 1600, "dresser": 1, "storage": 50}
    },
    "ints": {"table": 1, "dresser": 1}
}

 //////////
results = solver.Solve(furniture);  // furniture, model
console.log(results);