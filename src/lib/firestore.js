import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const getBlogs = async () => {
  try {
    const blogsRef = collection(db, "Blogs");
    const blogsSnap = await getDocs(blogsRef);

    const blogs = blogsSnap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return blogs;
  } catch (error) {
    console.error("Error fetching Blogs:", error);
    return [];
  }
};



