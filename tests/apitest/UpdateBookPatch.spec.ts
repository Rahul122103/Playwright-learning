


/*

what we have to do 

1. Create the Book - Post request 
2. We have to take the id ( Booking id from this request)
3. according to documentation for update we have to use token also 




*/


import {test,expect  } from "@playwright/test";
import console from "console";

import fs from 'fs'





// Create a readfile function with paramater ( give file path )  and return it 
// ( we create function becuase we have to use fs in 2 request)


function fileread(filepath:string){

     return JSON.parse(fs.readFileSync(filepath,'utf-8'))
}



// Create post request 


test('Update  new Book1', async({request}) => {


    // first read file

        const requestdata:any = fileread('testdata/Posrequest_Createbooking.json')


    const createresponse  =  await request.post('/booking',{data:requestdata})

const   createresponsebody   = await  createresponse.json()


console.log(createresponsebody)


  const bookingid  =createresponsebody.bookingid




  // Create token

          const tokenrequestbody =fileread('testdata/Createtoken.json')

          const tokenresponse = await request.post('/auth',{data:tokenrequestbody})

         const  tokenresponsebody =   await tokenresponse.json()

         console.log(tokenresponsebody)

         const token =  tokenresponsebody.token

         console.log(token)




         // Now we have to use update request for this 
         // we have to pass url , updaterequestbody , token uses in Header  ( key is Cookie)
         // example  Cookie: token=abc123


         const  patchtrequestbody:any =  fileread('testdata/Patchrequest_Updatebooking.json')


   const  patchresponse  =  await request.patch(`booking/${bookingid}`, {

            headers:{
                Cookie: `token = ${token}`,
                
            },
            data:patchtrequestbody
            


         })

         expect(patchresponse.ok()).toBeTruthy()
         expect(patchresponse.status()).toBe(200)

      console.log(await  patchresponse.json())

        
    
});