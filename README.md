# NewsBlog Web App

A modern, feature-rich web application where users can read, create, and interact with news articles. NewsBlog allows users to stay updated with the latest trends, contribute their own articles, and engage with the community through comments and social interactions. The app provides secure authentication, category-based filtering, and an easy-to-use interface for both regular users and admins.

### Key Features:
- **User Authentication:** Secure login and registration system with Clerk for easy access, including social login options (e.g., Google).
- **Create News Posts:** Registered users can create and publish their own news articles withh a title, content, and category.
- **Search Functionality:** Quick search to find articles by title.
- **News Filters:** Filter posts by Trending, Popular, Newest, or Older content.
- **Category-based Filtering:** Articles can be filtered by specific categories such as Web Design, Databases, SEO, Marketing, and Development.
- **Commenting and Interaction:** Users can comment on posts, share feedback, and engage in discussions.
- **Save Favorite Posts:** Users can save and revisit articles they find interesting.
- **Admin Features:** Admins can mark posts as featured, moderate comments, and maintain a safe environment.

### Technologies Used:
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - Clerk for authentication
- **Frontend:**
  - React
  - React Router
  - Tailwind CSS for responsive design
  - Axios for HTTP requests
  - React Query (`useQuery`, `useInfiniteQuery`) for data fetching and caching
  - ImageKit for image optimization and URL generation