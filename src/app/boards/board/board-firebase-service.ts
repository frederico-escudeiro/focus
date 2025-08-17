import { inject, Injectable } from "@angular/core";
import { collection, Firestore } from "@angular/fire/firestore";

@Injectable({
    providedIn: 'root'
})
export class BoardFirebaseService {
    // This service will handle Firebase interactions with board settings and tasks
    private firestore = inject(Firestore);
    private collectionData = collection(this.firestore, 'board');

}