import Logo from "@/app/_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css"

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-primary-900 text-gray-50">
        <header>
          <Logo />
          <Navigation />
        </header>
        <mian>{children}</mian>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
