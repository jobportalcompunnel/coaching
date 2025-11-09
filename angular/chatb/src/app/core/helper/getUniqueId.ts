/**
 * CookieManager Class
 * Provides utilities for setting and retrieving a unique user identifier cookie.
 */
export class CookieManager {

    /** The name of the unique ID cookie we will use. */
    static COOKIE_NAME = 'uniqueUserId';

    /** Expiration time in seconds (24 hours * 60 minutes * 60 seconds = 86400). */
    static MAX_AGE_SECONDS = 86400;

    /**
     * Helper function to get the value of a specific cookie by name.
     * @param name The name of the cookie to retrieve.
     * @returns The cookie value, or null if not found.
     */
    static getCookie(name: any) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }

    /**
     * Sets a cookie with the given name, value, and expiration time.
     * The 'path=/' ensures the cookie is valid for the entire domain.
     * @param name The name of the cookie.
     * @param value The value to store.
     * @param maxAgeSeconds The cookie's lifespan in seconds.
     */
    static setCookie(name: any, value: any, maxAgeSeconds: any) {
        let cookieString = name + "=" + value + "; path=/";
        if (maxAgeSeconds) {
            cookieString += "; max-age=" + maxAgeSeconds;
        }
        // Secure flag is good practice if using HTTPS, but omitted for wider compatibility.
        document.cookie = cookieString;
    }

    /**
     * Generates a unique ID (UUID/GUID).
     * @returns A universally unique identifier string.
     */
    static generateUniqueId() {
        // Use crypto.randomUUID() for modern, high-quality unique IDs
        return crypto.randomUUID();
      
    }

    /**
     * Main function to get the existing unique ID or create a new one,
     * ensuring it is set to expire in 24 hours.
     * @returns The unique identifier string.
     */
    static getOrCreateUniqueId() {
        let userId = CookieManager.getCookie(CookieManager.COOKIE_NAME);

        if (!userId) {
            // If the cookie doesn't exist, create a new one
            userId = CookieManager.generateUniqueId();

            // Set the cookie to expire in 24 hours (86400 seconds)
            CookieManager.setCookie(
                CookieManager.COOKIE_NAME,
                userId,
                CookieManager.MAX_AGE_SECONDS
            );
            console.log("New unique ID created and set:", userId);
        } else {
            // If the cookie exists, its max-age clock is already running.
            // Note: To truly extend the lifetime to *another* 24 hours on every visit,
            // you would call setCookie again here with the existing userId.
            console.log("Existing unique ID retrieved:", userId);
        }

        return userId;
    }
}

// Example of how to use this utility:
// const uniqueID = CookieManager.getOrCreateUniqueId();
// console.log("Current user ID:", uniqueID);
