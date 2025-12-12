/* eslint-disable no-unused-vars */
import { sql } from "drizzle-orm";
import {
  pgTable,
  text,
  varchar,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users
export const users = pgTable("users", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Blog Posts
export const blogPosts = pgTable("blog_posts", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  author: text("author").notNull(),
  image: text("image").notNull(),
  date: text("date").notNull(),
  comments: integer("comments").default(0),
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
});

// Campaign Events
export const events = pgTable("events", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  location: text("location").notNull(),
  image: text("image").notNull(),
  category: text("category").notNull(),
});

export const insertEventSchema = createInsertSchema(events).omit({ id: true });

// Gallery Images
export const galleryImages = pgTable("gallery_images", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  image: text("image").notNull(),
  category: text("category").notNull(),
});

export const insertGalleryImageSchema = createInsertSchema(galleryImages).omit({
  id: true,
});

// Volunteers
export const volunteers = pgTable("volunteers", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  skills: text("skills").notNull(),
  message: text("message"),
});

export const insertVolunteerSchema = createInsertSchema(volunteers).omit({
  id: true,
});

// Contact Messages
export const contactMessages = pgTable("contact_messages", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
});

export const insertContactMessageSchema = createInsertSchema(
  contactMessages
).omit({ id: true });

// Team Members
export const teamMembers = [
  // Example structure
  // { id: "1", name: "John Doe", role: "Leader", image: "path/to/image.jpg", bio: "Bio here" }
];

// Statistics
export const statistics = [
  // Example structure
  // { label: "Volunteers", value: "150", suffix: "+" }
];

// Navigation Items
export const navItems = [
  // Example structure
  // { label: "Home", href: "/", children: [{ label: "Subpage", href: "/sub" }] }
];
