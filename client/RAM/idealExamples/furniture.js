const furnitureExample = {
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
export {
    furnitureExample
}