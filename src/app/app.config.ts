import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyDA7QptuxwBUiv6FhBSrc8ti4yd_EGAm7U",
  authDomain: "focus-firebase-project.firebaseapp.com",
  projectId: "focus-firebase-project",
  storageBucket: "focus-firebase-project.firebasestorage.app",
  messagingSenderId: "788770407011",
  appId: "1:788770407011:web:203815e40a0b50aec7ee56",
  measurementId: "G-8T72SZ7FDL"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};
