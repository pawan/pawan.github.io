import Link from 'next/link';
const textStyle = "hover:bg-fuchsia-500 hover:text-white p-4 rounded-lg";
export default function LearnPage() {
    return (
        <div className="flex items-center justify-center flex-col">
            <h1 style={{fontSize: "2rem"}}>Welcome to the Learn page!</h1>
           <div className="test grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-8">
                <Link href="/learn/git" className={`bg-purple-200 ${textStyle}`}>Magento 2</Link>
                <Link href="/learn/git" className={`bg-blue-200 ${textStyle}`}>Git</Link>
                <Link href="/learn/git" className={`bg-green-200 ${textStyle}`}>SSH</Link>
                <Link href="/learn/git" className={`bg-red-200 ${textStyle}`}>MySql</Link>
                <Link href="/learn/git" className={`bg-orange-200 ${textStyle}`}>Brew/MAC</Link>
            </div>
        </div>
    );
}