import Image from 'next/image';
import { MyLogo} from '@/components/Logo';
import MyButton from '@/components/MyButton';
import { Suspense } from 'react';
import {PostFeed} from '@/components/DiscountFeed';

export default function AboutMe() {
  return (
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
  );
}