import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics, isSupported } from 'firebase/analytics'

export default defineNuxtPlugin(async (nuxtApp) => {
    const config = useRuntimeConfig()
    const apiKey = String(config.public.FIREBASE_API_KEY)

    const firebaseConfig = {
        apiKey: apiKey,
        authDomain: "dev-finder-nuxt3.firebaseapp.com",
        projectId: "dev-finder-nuxt3",
        storageBucket: "dev-finder-nuxt3.appspot.com",
        messagingSenderId: "276126024357",
        appId: "1:276126024357:web:a40dc9b8faddc17089834c",
        measurementId: "G-SM1H8PSCWD"
    }

    const app = initializeApp(firebaseConfig)

    const auth = getAuth(app)
    let analytics = null
    if (import.meta.client && await isSupported()) {
        analytics = getAnalytics(app)
    }

    nuxtApp.provide('auth', auth)
    nuxtApp.provide('analytics', analytics)
})
