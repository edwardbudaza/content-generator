

import { Header } from "./_components/header";
import { SideNav } from "./_components/side-nav";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-slate-100 h-screen">
      <div className="hidden md:block md:w-64 fixed">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout;