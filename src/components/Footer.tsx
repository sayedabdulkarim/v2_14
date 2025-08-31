export default function Footer() {
  return (
    <footer className="bg-white shadow-md mt-auto">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-sm">&copy; 2024 Your Company</div>
          <div className="space-x-4">
            <a href="/privacy" className="text-blue-600 hover:text-blue-800">Privacy</a>
            <a href="/terms" className="text-blue-600 hover:text-blue-800">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}