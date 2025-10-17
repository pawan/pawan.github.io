import { MyLogo} from '../components/Logo';
import MyButton from '../components/MyButton';
import { Suspense } from 'react';
import {PostFeed} from '../components/DiscountFeed';
 //import React from 'react';
 
export default async function Page() {
  //const data = await fetch('http://magento247.local/discounts-api.json')
  //const posts = await data.json()
  
  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <MyButton
          text="Click Me more!"
          className={"mb-4"}
        />
        <MyButton
          text="Submit"
          className={"mb-4"}
        />
        <MyLogo />
        <Suspense fallback={<div>Loading feed...</div>}>
          <PostFeed />
        </Suspense>
      </div>
    </div>
          
  );
}