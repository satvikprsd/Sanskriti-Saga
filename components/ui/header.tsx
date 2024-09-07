import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import Logo from '@/public/images/SANSKRITI.png'
import '@/app/css/style.css'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
        <Image className="Logo" src={Logo} width={300} height={300} alt="Logo" />
          {/* Site branding */}
          <div className="shrink-0 mr-4">

          </div>

          {/* Desktop navigation */}
          <Link
                  href="/signin"
                  className="signin"
                >
                  Sign in
                </Link>
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex justify-end flex-wrap items-center w-full">
              <li>
     
              </li>
              <li>
                <Link href="/signup" className="signup">
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
