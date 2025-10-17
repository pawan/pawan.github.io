    // components/Footer.js
    export default function Footer() {
      return (
        <footer className="justify-center items-center flex" style={{ padding: '20px', background: '#eee', borderTop: '1px solid #ccc', marginTop: '20px' }}>
          <p>&copy; {new Date().getFullYear()} My Next.js Appp</p>
        </footer>
      );
    }