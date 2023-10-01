/**
 *                   -------------
 *                   INITIAL INSTALLATION
 *                  ===============
 * 1. visit: console.firebase.google.com
 * 2. cerate project (skip google analytics)
 * 3. Register app (creat config)
 * 4. install firebase: npm install firebase
 * 5. add config file to your project
 * 6. DANGER: Do not publish or make firebase config to public by pusging those to github
 *                ==============
 *                 INTEGRATION
 *                ==============
 * 7. Visit: Go to Docs > Build > Authentication > web > Get started
 * 8. export app from the firebase.config.js file: export default app
 * 9. Login.jsx: import getAuth from firebase/auth
 * 10. create const auth = getAuth(app)
 * 
 *               ==============
 *               PROVIDER SETUP
 *              ===============
 * 11. iport googleAuthProvider and create a new provider
 * 12. use signInWithPopUp and pass auth and provider
 * 13. activate sign-in method (google, facebook, github etc.)
 * 14. [vite] : change 127.0.0.1 to localhost
 * 
 * 
 * More auth provuder
 * 
 * 1. activa the auth provider (create app, provide redirect url, client id, client secret)
 * 2.
 * */ 