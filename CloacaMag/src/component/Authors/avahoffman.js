import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Document,Page,pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function AvahoffmanBio(){
    return <div  >
     <Outlet />
      <p> R Daniel Brown is the poet laureate of every crop circle in Ohio.
         Recent or upcoming work can be found in Boston Review, Apogee, VIDA Review, Cosmonauts Avenue, and others.
        They're the author of the microchapbook, Dear John, Love Letters to John Connor… (Ghost City Press, 2018).
         You can usually find them on twitter, @notalake.
</p>


      </div>
        
       
}


function Avahoffman(){
    return <div >
      
      <p>
        <pre >
        <iframe src="https://drive.google.com/file/d/1Xw9Q9sW4TDOysDnwTNKEDVtvdRX0JqsU/preview" width="100%" height="1500px" allow="autoplay"></iframe>
        </pre>
        <br />
        <br />
        <br />
        <img src='https://web.archive.org/web/20091027170048/http://www.geocities.com/scareyhalloween/jack-o-lantern.gif' style={{width:'10vw',height:'10vw',marginLeft:'40vw'}}/>
      </p>
        </div>
}





export {Avahoffman,AvahoffmanBio}



