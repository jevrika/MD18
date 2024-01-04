## 🧐 Introduction
App created using Next.js .The app utilizes Mongoose and MongoDB for the backend, while the frontend is served as React JSX. Data is fetched through API pages connecting to MongoDB. Follow the steps below to set up and run the app. In app you can open each blog, read the content, and leave comments. Clicking on a tag redirects you to a separate page where you can explore all blogs with the same tag. Additionally, there is an admin panel where you can edit and delete blogs, as well as delete comments. 

## 🏁 Setup

1. Clone the repository.
2. Create a new local .env.local file.
3. Populate the .env.local file with the MongoDB access URLs for data and user storage.
4. Create Next.js secrets for encrypting NextAuth.js JWT and hashing email verification tokens.
5. Install dependencies using npm i.
6. Start the server locally with npm run dev.

## Pages and Routes

- /: Displays the four latest blogs with images, titles, truncated text, tags, and timestamps.
- /blogs: Similar to the root page but lists all available blogs.
- /blogs/[id]: Displays a specific blog with its image, title, full text, tag, and a comment form.
- /blogs/tags/[tagName]: Displays a list of blogs that match the provided tag.

Admin-only routes:

- /admin: Displays all available blogs with truncated texts. Admins can delete or edit blogs.
- /admin/create: Form for admin users to add a new blog, providing the blog image link, title, text, and selecting a tag.
- /admin/edit/[blogId]: Form for admin users to edit and update an existing blog.

## API Endpoints

### /api/auth

- Handles NextAuth.js authentication by validating credentials against MongoDB using the JWT secret (NEXTAUTH_SECRET). Also manages callbacks to URLs.

### /api/blogs

- GET: Returns all blogs as an array, sorted.
- POST: Adds a new blog to the MongoDB database.

### /api/blogs/[id]

- GET: Retrieves a specific blog with all its information.
- DELETE: Deletes the blog by ID from the database and removes associated comments.
- PUT: Finds a blog by ID and updates it using the request body.

### /api/blogs/tags/[tagName]

- GET: Returns all blogs matching the provided tag.

### /api/comments/

- POST: Adds the request body containing comment author and text to the MongoDB database.

### /api/comments/[id]

- GET: Retrieves all comments sorted by createdAt in descending order, with a matching blog ID.
- DELETE: Deletes comments by the provided comment ID.

## ⛏️ Built Using

- Next.js [Next.js Documentation](https://nextjs.org/docs).
- NextAuth.js [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction).
- MongoDB [MongoDB Documentation](https://www.mongodb.com/docs/);
- MongoDB Atlas [MongoDB Atlas Documentation](https://www.mongodb.com/atlas);
- Mongoose [Mongoose Documentation](https://mongoosejs.com/docs/);
- Date-fns [date-fns Documentation](https://date-fns.org/);
- Bcrypt [bcrypt Documentation](https://www.npmjs.com/package/bcrypt);
