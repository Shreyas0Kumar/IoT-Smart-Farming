// 1. Import dependencies
const express = require("express");
const router = express.Router();
const request = require("request-promise");
const utils = require("../../utils/utils");
const fields = utils.fields;

router.post("/score", async (req, res)=>{
    const options = {
        method: "POST",
        url: process.env.AUTH_URL,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        form: {
          apikey: process.env.WML_API_KEY,
          grant_type: "urn:ibm:params:oauth:grant-type:apikey",
        },
    };
    let response = "";
    let access_token = "";
    try {
        response = await request(options);
        access_token = JSON.parse(response)["access_token"];
        //res.send(access_token);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
    const { N, P, K, temperature, humidity, ph, rainfall } = {"N":105.0, "P":14.0,"K": 50.0,"temperature": 26.2148837,"humidity": 87.68839820000002,"ph": 6.419052193,"rainfall": 59.65590798};
    console.log(N, P, K, temperature, humidity, ph, rainfall);

    const template = [
           105.0,
           14.0,
           50.0,
           26.2148837,
           87.68839820000002,
           6.419052193,
           59.65590798
     ];

    //res.send({"fileds":fields,"template":template});

    const scoring_options = {
        method: "POST",
        url: process.env.WML_SCORING_URL,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
          "ML-Instance-ID": process.env.WML_INSTANCE_ID,
        },
        body: JSON.stringify({"input_data": [{ "fields": fields, "values": [template] }]}),
    };
    let scoring_response = "";
    try {
        scoring_response = await request(scoring_options);
        const obj = JSON.parse(scoring_response);
        res.send(obj.predictions[0].values[0][0]);
    } catch (err) {
        //console.log(err);
        res.send(err);
    }

})
module.exports = router;

// 2. Setup router
/* router.post("/score", async (req, res) => {
  // 3. Get access token from WML
  const options = {
    method: "POST",
    url: process.env.AUTH_URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    form: {
      apikey: process.env.WML_API_KEY,
      grant_type: "urn:ibm:params:oauth:grant-type:apikey",
    },
  }; */

  /* let response = "";
  let access_token = "";
  try {
    response = await request(options);
    access_token = JSON.parse(response)["access_token"];
    // res.send(access_token);
  } catch (err) {
    console.log(err);
    res.send(err);
  }

  // 4. Make a scoring request
  const { year, month, costCentre, account } = req.body;
  console.log(year, month, costCentre, account);

  //   5. Populate template
  let template = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];

  //    Populate Year
  template[fields.findIndex((val) => val === `Year_${year}`)] = 1;
  //   Populate month
  template[fields.findIndex((val) => val === `Month_${month}`)] = 1;
  //   Populate account
  template[fields.findIndex((val) => val === `Account_ACC${account}`)] = 1;
  //   Populate Cost Centre
  template[fields.findIndex((val) => val === `Cost Centre_${costCentre}`)] = 1;
  //    Populate Account Type
  template[
    fields.findIndex((val) => val === `Account Type_${accountMap[account]}`)
  ] = 1;

  //   res.send({ fields: fields, template: template });
  //   Last but not least...score!
  const scoring_options = {
    method: "POST",
    url: process.env.WML_SCORING_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
      "ML-Instance-ID": process.env.WML_INSTANCE_ID,
    },
    body: JSON.stringify({ fields: fields, values: [template] }),
  };
  let scoring_response = "";
  try {
    scoring_response = await request(scoring_options);
    res.send(scoring_response);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}); */