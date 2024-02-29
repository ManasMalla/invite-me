import "./globals.css";

export const metadata = {
  title: "Aamantran | #RadhaSundariyam",
  description:
    "An e-invitation to the most celebrated moment of #RadhaSundariyam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
