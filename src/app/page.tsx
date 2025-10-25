import AboutMe from '../components/AboutMe';
 //import React from 'react';
 
export default async function Page() {
  //const data = await fetch('http://magento247.local/discounts-api.json')
  //const posts = await data.json()
  
  return (
    <div className="flex items-center justify-center">
      <AboutMe />
      
    </div>
          
  );
}