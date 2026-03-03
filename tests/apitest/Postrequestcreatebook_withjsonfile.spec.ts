



/*
http - Post 
Create Book


*/


import { test,expect } from "@playwright/test";
import fs from 'fs'



test('Create Book Post Request', async({request}) => {


    // Request Body 
   // import fs file to read json


   // path of json file 

   const  filepath = 'C:/Automation/Playwrightdemo/testdata/Posrequest_Createbooking.json'

       const filedata = fs.readFileSync(filepath,'utf-8')

  const   requestbody:any = JSON.parse(filedata)



const response=  await request.post("/booking",{data:requestbody})


    const jsonbody = await response.json()

console.log( jsonbody)


// assertion 

expect(response.ok()).toBeTruthy()

expect(response.status()).toBe(200)



// assertion on key ( they are properties)

expect(jsonbody).toHaveProperty('bookingid')
expect(jsonbody).toHaveProperty('booking')



// assertion on values 

  expect(jsonbody.booking).toMatchObject({

     firstname: requestbody.firstname,
    lastname: requestbody.lastname,
    totalprice: requestbody.totalprice,
    depositpaid: requestbody.depositpaid,
    bookingdates: { checkin: requestbody.bookingdates.checkin, checkout: requestbody.bookingdates.checkout },
    additionalneeds: requestbody.additionalneeds

}) 

 expect(jsonbody.booking.bookingdates).toMatchObject({

      checkin: requestbody.bookingdates.checkin, checkout: requestbody.bookingdates.checkout })
    

})








;