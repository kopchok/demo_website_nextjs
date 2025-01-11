import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import Image from "next/image";

const TopBar = () => (
  <div className="flex justify-between bg-green-600 px-2 py-2 text-white font-bold">
    <div className="flex gap-10 ps-16">
      <p>1st Floor New World.</p>
      <p>+998556778345</p>
      <p>demo@example.com</p>
    </div>
    <div className="flex gap-3 pe-16">
      <p>News & Media</p>
      <p>FAQ'S</p>
    </div>
  </div>
);

const NavigationBar = () => (
  <div className="flex items-center py-5 ps-16">
    {/* Logo */}
    <Image src="/logo.png" alt="logo" width={180} height={38} className="flex-shrink-0" />
    <div className="flex-grow"></div>

    {/* Navigation Menu */}
    <NavigationMenu className="font-bold text-lg">
      <NavigationMenuList>
        {[
          { label: "Home" },
          { label: "Company" },
          { label: "Service" },
          { label: "Gallery" },
          { label: "Blog" },
        ].map((item) => (
          <NavigationMenuItem key={item.label}>
            <NavigationMenuTrigger className="font-bold text-lg hover:text-green-600 bg-transparent text-black">
              {item.label}
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavigationMenuLink className="px-4 hover:text-green-600 text-black">
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <Image
      priority
      src="/search_icon.svg"
      height={32}
      width={32}
      alt="Search"
    />
    <Button className="m-5 py-6 bg-green-600 text-lg text-white font-bold">Request Now</Button>
  </div>
);

export default function Home() {
  return (
    <div>
      <TopBar />
      <header className="sticky top-0 bg-white z-50">
        <NavigationBar />
      </header>
      <main>
        <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
          {/* Background Image */}
          <Image
            src="/slider-bg-image.jpg"
            width={990}
            height={660}
            alt="slide"
            sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             33vw"
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />

          {/* Person Image (Brought to Front) */}
          <Image
            src="/person.png"
            alt="person"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: 'auto',
              height: '100%',
              position: 'absolute',
              bottom: '0px',
              left: '90%',
              transform: 'translateX(-50%)',
              zIndex: 2,
            }}
          />

          <h1 className="text-7xl text-white font-bold" style={{
            position: 'absolute',
            bottom: '60%',
            left: '5%',
            width: '700px'
          }}>Best It Solution Company</h1>
        </div>
      </main>
    </div>
  );
}
