const fetch = require('node-fetch');
let  payload= {"input_data":[{"fields":["CUSTOMER_ID","OVERDUE_BALANCE","BASE_USAGE","CREDIT_HISTORY","ALTERNATE_USAGE","STANDING_CHARGE","BASE_CHARGE","ALTERNATE_CHARGE","LEVY","TAX","TOTAL_NET","FIRST_NAME","LAST_NAME","PHONE_1","EMAIL","AGE","IS_REGISTERED_FOR_ALERTS","OWNS_HOME","COMPLAINTS","HAS_THERMOSTAT","HAS_HOME_AUTOMATION","PV_ZONING","WIND_ZONING","SMART_METER_COMMENTS","IS_CAR_OWNER","HAS_EV","HAS_PV","HAS_WIND","EBILL","IN_WARRANTY","CITY","MARITAL_STATUS","EDUCATION","SEGMENT","EMPLOYMENT","BUILDING_TYPE","MISSED_PAYMENT","BILLING_MONTH","RATIO_THIS_MONTH_BASE_USAGE_VS_LAST_MONTH","RATIO_THIS_MONTH_BASE_USAGE_VS_AVG_LOOKBACK_WINDOW","RATIO_THIS_MONTH_ALTERNATE_USAGE_VS_LAST_MONTH","RATIO_THIS_MONTH_ALTERNATE_USAGE_VS_AVG_LOOKBACK_WINDOW","RATIO_THIS_MONTH_TOTAL_TO_PAY_VS_LAST_MONTH","RATIO_THIS_MONTH_TOTAL_TO_PAY_VS_AVG_LOOKBACK_WINDOW","NUM_MISSED_PAYMENTS_LOOKBACK_WINDOW","BILLING_MONTH_NUMBER","Partition"],"values":[[12,56,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]]}]}

const scoring_url = "https://us-south.ml.cloud.ibm.com/ml/v4/deployments/8cc01547-517e-4222-8010-d63012c16203/predictions?version=2021-02-09";


fetch(scoring_url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJraWQiOiIyMDIxMDEyMDE4MzUiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC01NTAwMDlISzA4IiwiaWQiOiJJQk1pZC01NTAwMDlISzA4IiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiM2U0MGE0YjQtMzhjNC00NDZlLTg2YzYtYzNjZDE2MjI4MTNhIiwiaWRlbnRpZmllciI6IjU1MDAwOUhLMDgiLCJnaXZlbl9uYW1lIjoiQXNpZiIsImZhbWlseV9uYW1lIjoiTWFobXVkIiwibmFtZSI6IkFzaWYgTWFobXVkIiwiZW1haWwiOiJhc2lmMDEwNTAxMDVAZ21haWwuY29tIiwic3ViIjoiYXNpZjAxMDUwMTA1QGdtYWlsLmNvbSIsImFjY291bnQiOnsidmFsaWQiOnRydWUsImJzcyI6IjQ0MjhlMjI4ZGIwYjRlODU4ZjFkOTM5N2FlNzU4Y2IxIiwiZnJvemVuIjp0cnVlfSwiaWF0IjoxNjEyOTgwNjc5LCJleHAiOjE2MTI5ODQyNzksImlzcyI6Imh0dHBzOi8vaWFtLmJsdWVtaXgubmV0L2lkZW50aXR5IiwiZ3JhbnRfdHlwZSI6InVybjppYm06cGFyYW1zOm9hdXRoOmdyYW50LXR5cGU6YXBpa2V5Iiwic2NvcGUiOiJpYm0gb3BlbmlkIiwiY2xpZW50X2lkIjoiZGVmYXVsdCIsImFjciI6MSwiYW1yIjpbInB3ZCJdfQ.f8R_hw4fmXHt96u0qefmaMZl7ogG0j-yV16bvxSD4JUWerL4eP4ikvKPRlX51xbGoSgvBNsEXRb3kyWDmW_9vynIU2TZWp8orNQTaR7ZzSH_Ub3YsZl8Ns6cSfyi0LQnK0q09FruBLWg6HqyH_G_HkwZgaNW_mUqySM7s9g5l_AX-xJNXDUmVSwoYfFQogMkW3WBtssl-JX5o65Qiei0OE_95EuyMBgo8qhLzcAwF5Os3Geugt305QDCq0B_hSvo6gBACyzmZGnMP7RQ50fnZ7SOxUiZJtmbJyj7pEkH73zyQ947m0Ui48wdaMK8k8_sPuAJycpB-tkrNDnyQsKunw`,
      },
}).then(res => res.json())
  .then(json => console.log(JSON.stringify(json)));