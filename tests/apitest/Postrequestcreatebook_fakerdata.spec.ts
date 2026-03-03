



/*
http - Post 
Create Book


*/


import { faker } from "@faker-js/faker";
import { test, expect } from "@playwright/test";
import fs from 'fs'

import { DateTime } from 'luxon'







          


test('Create Book Post Request', async ({ request }) => {


   // Generate random data faker library 

         const firstname = faker.person.firstName()
          const lastname = faker.person.lastName()

           const totalprice = faker.number.int()

           const depositpaid = faker.datatype.boolean()


            const checkin = DateTime.now().toFormat('yyyy-mm-dd')

             const checkout = DateTime.now().plus({days:5}).toFormat('yyyy-mm-dd')
     const additionalneeds = 'Breakfast'





          





     const requestbody  =  {
    firstname: firstname,
   lastname : lastname,
    totalprice: totalprice,
  depositpaid: depositpaid,
    bookingdates: {
        checkin: checkin,
        checkout : checkout,
    },
     additionalneeds :additionalneeds
}

   


    const response = await request.post("/booking", { data: requestbody })


    const jsonbody = await response.json()

    console.log(jsonbody)


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

        checkin: requestbody.bookingdates.checkin, checkout: requestbody.bookingdates.checkout
    })


})








    ;