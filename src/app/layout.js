import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Italo Matos - Portfolio",
  description: "Portfolio para mostrar meus projetos e habilidades",
};

export default function RootLayout(props) {
  return (
    <html lang="pt-br">
      <body>
          <AppRouterCacheProvider>
            {props.children}
          </AppRouterCacheProvider>
      </body>
    </html>
  );
}
