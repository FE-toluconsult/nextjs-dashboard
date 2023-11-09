import { MetadataRoute } from 'next'
export default function manifest(): MetadataRoute.Manifest {
  return {
      "name": "My Next.js Application",
      "short_name": "Next.js App",
      "description": "An application built with Next.js",
      "start_url": "/",
      "icons": [
        {
          "src": "/icons/android-36x36.png",
          "type": "image/png",
          "sizes": "36x36"
        },
        {
          "src": "/icons/android-48x48.png",
          "type": "image/png",
          "sizes": "48x48"
        },
        {
          "src": "/icons/android-72x72.png",
          "type": "image/png",
          "sizes": "72x72"
        },
        {
          "src": "/icons/android-96x96.png",
          "type": "image/png",
          "sizes": "96x96"
        },
        {
          "src": "/icons/android-144x144.png",
          "type": "image/png",
          "sizes": "144x144"
        },
        {
          "src": "/icons/android-192x192.png",
          "type": "image/png",
          "sizes": "192x192"
        },
        {
          "src": "/icons/android-chrome-512x512.png",
          "type": "image/png",
          "sizes": "512x512"
        },
        {
          "src": "/icons/android-chrome-maskable.png",
          "type": "image/png",
          "sizes": "192x192",
          "purpose": "maskable"
        }
      ],
      "background_color": "#FFFFFF",
      "display": "standalone",
      "scope": "/",
      "theme_color": "#000000"
    }

}
  