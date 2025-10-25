    // components/Footer.js
    export default function Footer() {
      return (
        <footer className="h-[10vh] justify-center items-center flex" style={{ background: '#eee', borderTop: '1px solid #ccc' }}>
          <p>&copy; {new Date().getFullYear()} Pawan</p>
        </footer>
      );
    }