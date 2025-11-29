import Image from 'next/image';
export default function AboutMe() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col-reverse items-center gap-6 md:flex-row md:items-start md:gap-10">
        <div className="max-w-3xl text-center md:text-left">
          <p className="text-lg leading-relaxed text-gray-800">
            Hi, I&apos;m Pawan K. Parmar — eCommerce Consultant &amp; Adobe Commerce Expert.
            <br />
            <br />
            I help businesses design, build, and optimize powerful eCommerce experiences that drive growth. With deep expertise in Adobe Commerce (Magento), Symfony, and PHP, I specialize in crafting scalable, high-performance solutions that blend technology with strategic insight.
            <br />
            <br />
            Over the years, I&apos;ve partnered with global brands and agencies to transform complex business requirements into seamless digital experiences — from custom module development to end-to-end platform architecture. My goal is simple: to deliver solutions that are robust, user-centric, and built for long-term success.
            <br />
            <br />
            When I&apos;m not engineering eCommerce platforms, you&apos;ll find me exploring emerging technologies, mentoring developers, and refining strategies that keep online businesses ahead of the curve.
            <br />
            <br />
            Let&apos;s collaborate to turn your eCommerce vision into reality.
          </p>
        </div>

        <div className="flex-shrink-0">
          <Image
            src="/profile.jpeg"
            alt="Pawan Parmar"
            width={320}
            height={320}
            sizes="(max-width: 768px) 160px, 320px"
            className="rounded-full border-4 border-white shadow-md object-cover"
          />
        </div>
      </div>
      <div className="test grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-8">
        <div className="bg-blue-200 hover:bg-fuchsia-500 hover:text-white p-4 rounded-lg">Adobe Certified Expert- Adobe Commerce Front-End Developer</div>
        <div className="bg-green-200 hover:bg-fuchsia-500 hover:text-white p-4 rounded-lg">Adobe Certified Professional— Adobe Commerce Developer</div>
        <div className="bg-red-200 hover:bg-fuchsia-500 hover:text-white p-4 rounded-lg">LFC131:  Green Software for Practitioners</div>
        <div className="bg-orange-200 hover:bg-fuchsia-500 hover:text-white p-4 rounded-lg">MongoDB for SQL Experts</div>
        <div className="bg-purple-200 hover:bg-fuchsia-500 hover:text-white p-4 rounded-lg">Technology Architect Associate Certificate</div>
      </div>
    </div>
  );
}