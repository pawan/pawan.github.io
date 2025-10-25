import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className="container mx-auto">
      <div className="w-full p-4 justify-center items-center flex">
        <p className='w-3xl'>Hi, I&apos;m Pawan K. Parmar — eCommerce Consultant & Adobe Commerce Expert.<br /><br />

I help businesses design, build, and optimize powerful eCommerce experiences that drive growth. With deep expertise in Adobe Commerce (Magento), Symfony, and PHP, I specialize in crafting scalable, high-performance solutions that blend technology with strategic insight.<br /><br />  

Over the years, I&apos;ve partnered with global brands and agencies to transform complex business requirements into seamless digital experiences — from custom module development to end-to-end platform architecture. My goal is simple: to deliver solutions that are robust, user-centric, and built for long-term success.<br /><br />

When I&apos;m not engineering eCommerce platforms, you&apos;ll find me exploring emerging technologies, mentoring developers, and refining strategies that keep online businesses ahead of the curve.

Let&apos;s collaborate to turn your eCommerce vision into reality.</p>

          <Image
            src="/profile.jpeg"
            alt="Work Image"
            width={320}
            height={320}
            className="mt-4 avatar rounded-full border-4 border-white shadow-md"
          />

      </div>
    </div>
  );
}