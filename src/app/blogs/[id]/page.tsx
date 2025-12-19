"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getBlogById } from "@/src/lib/blog-data";
import { Button } from "@/src/components/ui/button";
import {
  ChevronLeft,
  Calendar,
  User,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Badge } from "@/src/components/ui/badge";

export default function SingleBlogPage() {
  const params = useParams();
  const router = useRouter();
  const blogId = params.id as string;
  const blog = getBlogById(blogId);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-black mb-4">Blog Not Found</h1>
        <p className="text-muted-foreground mb-8 text-center max-w-md">
          Sorry, the article you are looking for doesn't exist or has been
          moved.
        </p>
        <Button onClick={() => router.push("/blogs")}>Back to Blogs</Button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="relative w-full h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pb-12">
          <div className="max-w-4xl">
            <Link
              href="/blogs"
              className="inline-flex items-center text-sm font-bold text-primary mb-6 hover:translate-x-[-4px] transition-transform"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to Articles
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-primary text-primary-foreground font-black px-3 py-1 uppercase tracking-wider text-[10px]">
                {blog.category}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-6 leading-[1.1]">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <User className="w-4 h-4" />
                </div>
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{blog.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-start-2 lg:col-span-8">
            <div
              className="prose prose-xl prose-stone dark:prose-invert max-w-none 
                            prose-headings:text-foreground prose-headings:font-black prose-headings:tracking-tight 
                            prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6
                            prose-p:text-muted-foreground prose-p:leading-loose prose-p:text-lg md:prose-p:text-xl
                            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-3xl prose-blockquote:not-italic prose-blockquote:text-foreground prose-blockquote:font-medium
                            prose-img:rounded-[2.5rem] prose-img:shadow-2xl
                            prose-strong:text-foreground prose-strong:font-black
                            prose-a:text-primary prose-a:no-underline hover:prose-a:underline transition-all"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <div className="mt-16 pt-8 border-t border-border/40 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  {blog.category}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm font-black text-muted-foreground uppercase tracking-widest mr-2">
                  Spread the word
                </span>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full border-2"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full border-2"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full border-2"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Author Card & CTA */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-secondary/20 p-8 rounded-[2rem] border border-border/40">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 shadow-inner">
                <User className="w-8 h-8" />
              </div>
              <h4 className="font-black text-xl mb-1">{blog.author}</h4>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">
                {blog.authorRole}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Passionate sports enthusiast dedicated to sharing knowledge and
                helping athletes reach their full potential.
              </p>
            </div>

            <div className="bg-linear-to-br from-primary to-accent p-8 rounded-[2rem] text-white shadow-xl shadow-primary/20">
              <h4 className="text-2xl font-black mb-4 leading-tight">
                Ready to play?
              </h4>
              <p className="text-white/80 text-sm mb-6 font-medium">
                Apply the tips you've learned on the field. Book your nearest
                turf now!
              </p>
              <Button className="w-full bg-white text-primary hover:bg-white/90 font-black rounded-xl">
                Browse Venues
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
