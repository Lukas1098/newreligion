export const metadata = {
    title: "Santoz Fellas",
    description: "Santoz Fellas Studio",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}