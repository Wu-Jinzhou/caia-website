import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <a href="/" className="text-cornell-red">
          <Image
            src="/serif-logo.svg"
            // src="/sans-logo.svg"
            alt="Cornell AI Alignment"
            width={240}
            height={60}
            priority
          />
        </a>

        <nav className="space-x-8">
          <a href="/" className="hover:text-[#FF6B1A]">
            Home
          </a>
          <a href="/team" className="hover:text-[#FF6B1A]">
            Team
          </a>
          <a href="/get-involved" className="hover:text-[#FF6B1A]">
            Get Involved
          </a>
          <a href="/resources" className="hover:text-[#FF6B1A]">
            Resources
          </a>
        </nav>
      </div>
    </header>
  );
}
