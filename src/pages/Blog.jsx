import { useState } from "react";

import BlogHero from "../components/blogHero/BlogHero";
import BlogCategories from "../components/blogCategories/BlogCategories";
import BlogArticle from "../components/blogArticle/BlogArticle";
import BlogNewsletter from "../components/blogNewsLetter/BlogNewsletter";
import BlogCTA from "../components/blogCTA/BlogCTS";

const Blog = () => {
  /*
   * Keep the selected blog category in the parent
   * so both the category buttons and articles
   * use the same state.
   */
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      {/* Blog introduction */}
      <BlogHero />

      {/* Blog category navigation */}
      <BlogCategories
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Filtered blog articles */}
      <BlogArticle activeCategory={activeCategory} />
      <BlogNewsletter />
      <BlogCTA />
    </>
  );
};

export default Blog;
