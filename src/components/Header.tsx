// components/Header.js
    import Link from 'next/link';

    export default function Header() {
      return (
        <header className="justify-center items-center flex" style={{ padding: '20px', background: '#eee', borderBottom: '1px solid #ccc' }}>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about" style={{ marginLeft: '10px' }}>About</Link>
            <Link href="/login" style={{ marginLeft: '10px' }}>Login</Link>
            <Link href="/blog" style={{ marginLeft: '10px' }}>Blog</Link>
            <Link href="/work" style={{ marginLeft: '10px' }}>Work</Link>
            <Link href="/resume" style={{ marginLeft: '10px' }}>Resume</Link>
          </nav>
        </header>
      );
    }