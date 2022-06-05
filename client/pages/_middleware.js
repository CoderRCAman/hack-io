import {NextResponse,NextRequest} from 'next/server' 
import _ from 'lodash'  ; 
export default function middleware(req) {
    const {cookies,page} = req ;    
    console.log(page)
    const clientApi = 'http://localhost:3000' ;  
    if(_.isEmpty(cookies) || !cookies.isLoggedIn){  
        if(page.name === '/login') {
            
            return NextResponse.next() ;
        }
       return  NextResponse.redirect(`${clientApi}/login`) ;  
    } 
   //rest will be dependent on which route to and if that is a valid one 
 
}