export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8 mt-20">
      <div className="container mx-auto px-6 text-center">
        <p className="font-medium">&copy; {new Date().getFullYear()} Kribe Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
}