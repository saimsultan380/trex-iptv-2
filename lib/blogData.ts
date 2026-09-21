export interface BlogPost {
  slug: string;
  href: string;
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  featured?: boolean;
}

/**
 * Trex IPTV Blog Posts registry.
 * Add new blog articles to this array. The blog page will automatically
 * render them in a responsive card grid.
 */
export const BLOG_POSTS: BlogPost[] = [
  // Blog articles will be added here later
];
