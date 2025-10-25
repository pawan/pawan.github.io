// components/Header.js
    import Link from 'next/link';

    export default function Header() {
      return (
        <header className="h-[10vh] justify-center items-center flex" style={{ background: '#eee', borderBottom: '1px solid #ccc' }}>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/contact" style={{ marginLeft: '10px' }}>Contact!</Link>
            {/* <Link href="/blog" style={{ marginLeft: '10px' }}>Blog</Link>
            <Link href="/work" style={{ marginLeft: '10px' }}>Work</Link>
            <Link href="/resume" style={{ marginLeft: '10px' }}>Resume</Link> */}
          </nav>
        </header>
      );
    }