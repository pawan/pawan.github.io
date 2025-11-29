import Link from 'next/link';
export default function LearnPage() {
    return (
        <div className="flex items-center justify-center flex-col">
            <h1>Learn Page</h1>
            <p>Welcome to the Learn page!</p>
            <Link href="/learn/git">
            Git
          </Link>
           <div className="test grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-8">
                <Link href="/learn/git" className="bg-blue-200 hover:bg-fuchsia-500 hover:text-white p-4 rounded-lg">Git</Link>
                <Link href="/learn/git" className="bg-green-200 hover:bg-fuchsia-500 hover:text-white p-4 rounded-lg">SSH</Link>
                <Link href="/learn/git" className="bg-red-200 hover:bg-fuchsia-500 hover:text-white p-4 rounded-lg">MySql</Link>
                <Link href="/learn/git" className="bg-orange-200 hover:bg-fuchsia-500 hover:text-white p-4 rounded-lg">Brew/MAC</Link>
            </div>
        </div>
    );
}