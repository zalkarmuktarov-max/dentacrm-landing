import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DentaCRM — CRM система для стоматологий в Кыргызстане",
  description:
    "Онлайн-запись, учёт пациентов, зубная формула и AI-ассистент. Автоматизируйте вашу стоматологию. Первые 14 дней бесплатно.",
  keywords: "CRM для стоматологии, стоматология Бишкек, учёт пациентов, онлайн-запись",
  openGraph: {
    title: "DentaCRM — CRM система для стоматологий",
    description: "Все процессы от записи клиента до учёта финансов в одном экране",
    locale: "ru_KG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
