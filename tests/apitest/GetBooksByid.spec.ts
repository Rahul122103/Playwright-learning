import {test,expect  } from "@playwright/test";





test('Get Books By Id', async({request}) => {


  const  bookid = 2;


   const response  = await request.get(`/booking/${bookid}`)


  // console.log(response)

   const responsebody:any  =  await response.json()

   console.log(responsebody)


   expect(response.ok()).toBeTruthy()
   expect(response.status()).toBe(200)
    
});



test.only('Get Books By Query Parameter', async({request}) => {


  
  const  firtsname = 'Sally'
  const  lastname = 'Brown'


   const response  = await request.get('/booking/',{params:{
    firtsname,
    lastname

   }})


  // console.log(response)

   const responsebody:any  =  await response.json()

   console.log(responsebody)


   expect(response.ok()).toBeTruthy()
   expect(response.status()).toBe(200)


 console.log(responsebody[0].bookingid)



   for(let rsdata of responsebody){

    expect(rsdata).toHaveProperty('bookingid')

    expect(rsdata.bookingid).toBeGreaterThan(0)

    expect(typeof rsdata.bookingid).toBe("number")
   }
    
});