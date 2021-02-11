require('dotenv').config()
console.log("Api ",process.env.API_KEY)
let fields= ["CUSTOMER_ID","OVERDUE_BALANCE"]

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// NOTE: you must manually enter your API_KEY below using information retrieved from your IBM Cloud
const API_KEY =process.env.API_KEY;

function getToken(errorCallback, loadCallback) {
	const req = new XMLHttpRequest();
	req.addEventListener("load", loadCallback);
	req.addEventListener("error", errorCallback);
	req.open("POST", "https://iam.ng.bluemix.net/identity/token");
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.setRequestHeader("Accept", "application/json");
	req.send("grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=" + API_KEY);
}

function apiPost(scoring_url, token, payload, loadCallback, errorCallback){
	const oReq = new XMLHttpRequest();
	oReq.addEventListener("load", loadCallback);
	oReq.addEventListener("error", errorCallback);
	oReq.open("POST", scoring_url);
	oReq.setRequestHeader("Accept", "application/json");
	oReq.setRequestHeader("Authorization", "Bearer " + token);
	oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	oReq.send(payload);
}

getToken((err) => console.log(err), function () {
	let tokenResponse;
	try {
		tokenResponse = JSON.parse(this.responseText);
 //   console.log("toekn response ",tokenResponse)
	} catch(ex) {
		// TODO: handle parsing exception
	}
	// NOTE: manually define and pass the array(s) of values to be scored in the next line
	// 	const payload = '{"input_data": [{"fields": [array_of_input_fields], "values": [array_of_values_to_be_scored, another_array_of_values_to_be_scored]}]}';
	
  const payload = '{"input_data": [{"fields": [array_of_input_fields], "values": [array_of_values_to_be_scored, another_array_of_values_to_be_scored]}]}';
	//const payload ='{"input_data":[{"fields":["CUSTOMER_ID","OVERDUE_BALANCE","BASE_USAGE","CREDIT_HISTORY","ALTERNATE_USAGE","STANDING_CHARGE","BASE_CHARGE","ALTERNATE_CHARGE","LEVY","TAX","TOTAL_NET","FIRST_NAME","LAST_NAME","PHONE_1","EMAIL","AGE","IS_REGISTERED_FOR_ALERTS","OWNS_HOME","COMPLAINTS","HAS_THERMOSTAT","HAS_HOME_AUTOMATION","PV_ZONING","WIND_ZONING","SMART_METER_COMMENTS","IS_CAR_OWNER","HAS_EV","HAS_PV","HAS_WIND","EBILL","IN_WARRANTY","CITY","MARITAL_STATUS","EDUCATION","SEGMENT","EMPLOYMENT","BUILDING_TYPE","MISSED_PAYMENT","BILLING_MONTH","RATIO_THIS_MONTH_BASE_USAGE_VS_LAST_MONTH","RATIO_THIS_MONTH_BASE_USAGE_VS_AVG_LOOKBACK_WINDOW","RATIO_THIS_MONTH_ALTERNATE_USAGE_VS_LAST_MONTH","RATIO_THIS_MONTH_ALTERNATE_USAGE_VS_AVG_LOOKBACK_WINDOW","RATIO_THIS_MONTH_TOTAL_TO_PAY_VS_LAST_MONTH","RATIO_THIS_MONTH_TOTAL_TO_PAY_VS_AVG_LOOKBACK_WINDOW","NUM_MISSED_PAYMENTS_LOOKBACK_WINDOW","BILLING_MONTH_NUMBER","Partition"],"values":[[12,56,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]]}]}'
  const scoring_url = "https://us-south.ml.cloud.ibm.com/ml/v4/deployments/8cc01547-517e-4222-8010-d63012c16203/predictions?version=2021-02-09";

});