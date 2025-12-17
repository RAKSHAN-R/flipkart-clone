Title: Flipkart Login and Products – Case Study

Overview:  
This project is a Flipkart clone created as a college mini‑project and case study. It shows a complete login flow and a protected, responsive products catalog that looks and behaves similar to Flipkart, but runs fully on the front end.

Features:

1. Login and authentication  
- Simple login page that accepts email or username along with a password.  
- On successful login, the user is considered “authenticated” for the current browser tab.  
- If the user is not authenticated and tries to open the products page, they are redirected back to the login page.

2. Session management with browser storage  
- Uses the browser’s session storage to remember that the user is logged in.  
- When the user logs out, the session information is cleared so the products page becomes protected again.

3. Protected products page  
- The products page checks session storage on load.  
- If no valid login session is found, it automatically sends the user back to the login page.  
- This gives the feel of a protected area without any backend.

4. Products catalog  
- Contains fourteen sample products distributed across five categories: Mobiles, Electronics, Toys, Fashion, and Books.  
- Each product has realistic data such as title, category, description, price in Indian rupees, rating, and an image.  
- Product cards include hover effects, category badges, and clear pricing, similar to Flipkart’s visual style.

5. Live search  
- Includes a search bar that filters products instantly as the user types.  
- The filter works on product name and description.  
- Search is designed to work well on both desktop and mobile layouts.

6. Responsive Flipkart‑style UI  
- Uses Bootstrap 5 for a fully responsive grid and components.  
- On desktop, products are shown in a four‑column grid; on small screens, they appear in a single column.  
- The colors, spacing, and card layout are inspired by Flipkart’s user experience.

Pages:

1. login page (login dot html)  
- Contains a clean, centered login form.  
- Basic validation ensures fields are not left empty.  
- Demo credentials:  
  - Email or username: “user at example dot com” or “admin”  
  - Password: “password123”  
- On successful login:  
  - The script stores a flag in session storage to indicate the user is logged in.  
  - The user is redirected to the products page.

2. products page (products dot html)  
- This page is login protected: it first checks session storage; if the user is not logged in, it redirects to the login page.  
- Displays fourteen products using a Bootstrap grid: four columns on desktop, one column on mobile.  
- Has a search bar at the top that filters product cards in real time.  
- Shows a welcome message that includes the currently logged‑in username or email.  
- Includes a logout button that clears session storage and sends the user back to the login page.

Tech Stack:

Frontend:  
- HTML5 for structure and content.  
- CSS3 plus Bootstrap 5 for styling, layout, and responsiveness.  
- Plain JavaScript (no frameworks) for login logic, session storage handling, page protection, and live search.

Storage and data:  
- Browser session storage is used to store the current authentication state.  
- Products are stored in a static JavaScript array that acts like a JSON list of products.  
- Product images and details are inspired by real products from Amazon or Flipkart, but everything is loaded from local data (no API calls).

Backend:  
- No backend or server side code is required.  
- The entire application runs in the browser, which makes it ideal for static hosting and quick college demonstrations.

How to Run:

1. Place all files in a single folder:  
   - login dot html  
   - products dot html  
   - style dot css  
   - script dot js  

2. Open the login page in any modern browser such as Chrome, Edge, or Firefox by double‑clicking “login dot html”.

3. Use the demo credentials:  
   - Email or username: “user at example dot com” or “admin”  
   - Password: “password123”

4. Typical flow for demo or viva:  
   - Open login page and log in with the demo credentials.  
   - After login, you are redirected to the products catalog.  
   - Type “Redmi” (or any other keyword present in your data) in the search bar to show live filtering.  
   - Click the logout button to clear session storage and return to the login page.
