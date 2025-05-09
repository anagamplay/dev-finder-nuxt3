interface UserProps {
    uid: string;
    displayName?: string | null;
    email?: string | null;
    emailVerified?: boolean;
    photoURL?: string | null;
}

export default class User {
    uid: string;
    displayName: string | null;
    email: string | null;
    emailVerified: boolean;
    photoURL: string | null;

    constructor({ uid, displayName, email, emailVerified, photoURL }: UserProps) {
        this.uid = uid;
        this.displayName = displayName || null;
        this.email = email || null;
        this.emailVerified = emailVerified || false;
        this.photoURL = photoURL || null;
    }
}