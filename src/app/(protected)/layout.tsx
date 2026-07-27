import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-F9FAFB!">
        {children}
      </main>
      <Footer />
    </>
  );
}
