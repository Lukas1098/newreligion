export const metadata = {
    title: "New Religion Studio",
    description: "New Religion Studio",
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