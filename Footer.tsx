export default function Footer() {
  return (
    <footer id="contact" className="bg-primary py-16 text-center text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-lg">
          <a href="#" className="hover:underline">📞 +855 XXX XXX XXX</a>
          <a href="#" className="hover:underline">✉️ dreamhouse@email.com</a>
          <a href="#" className="hover:underline">📍 Phnom Penh, Cambodia</a>
        </div>
        <p className="mt-8 text-sm">© 2026 DreamHouse. All rights reserved.</p>
      </div>
    </footer>
  );
}