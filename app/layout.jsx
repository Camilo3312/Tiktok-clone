'use client'

import '../styles/globals.css'
import '../scss/_index.scss'

import { Header } from '../components/Layout/Header'
import { Footer } from '../components/Layout/Footer'
import { AppProvider } from 'Context/AppProvider'
import { Comments } from 'components/Layout/Comments'

export default function RootLayout({ children }) {
	return (
		<html>
			<title>TikTok Clone</title>
			<meta content="width=device-width, initial-scale=1" name="viewport" />
			<link rel="icon" href="/favicon.ico" />
			<body>
				<AppProvider>
					<Header />
					<main>
						{children}
						<Comments/>
					</main>
					<Footer />
				</AppProvider>
			</body>
		</html>
	)
}
