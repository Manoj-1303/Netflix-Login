function Footer() {
  return (
    <footer className="w-full bg-black bg-opacity-75 text-[#737373] py-10 px-6 border-t border-gray-800 md:border-none relative z-10 mt-auto">
      <div className="max-w-[1000px] mx-auto">
        <p className="mb-8 text-base">
          Questions? Call <a href="tel:000-111-222-3333" className="hover:underline">000-111-222-3333</a>
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-8">
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Help Centre</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Cookie Preferences</a>
        </div>
        
        <div className="relative inline-block mb-6">
          <select className="bg-black text-[#737373] border border-[#737373] rounded px-5 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-white">
            <option>English</option>
            <option>Tamil</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#737373]">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;