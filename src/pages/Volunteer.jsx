/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";

import {
  Heart,
  Users,
  Calendar,
  Award,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useToast } from "../hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "../lib/queryClient";

const volunteerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter your address"),
  skills: z.string().min(1, "Please select your area of interest"),
  message: z.string().optional(),
});

const benefits = [
  {
    icon: Heart,
    title: "পরিবর্তনের অংশ হোন",
    description:
      "আপনার ছোট একটি উদ্যোগও সমাজে বড় পরিবর্তন আনতে পারে। নিজের কমিউনিটি ও দেশের কল্যাণে বাস্তব ও ইতিবাচক পরিবর্তনের অংশ হয়ে উঠুন।",
  },
  {
    icon: Users,
    title: "একটি শক্তিশালী কমিউনিটিতে যুক্ত হন",
    description:
      "আপনার মতো একই আদর্শ ও মূল্যবোধে বিশ্বাসী মানুষের সঙ্গে পরিচিত হন। একসাথে কাজ করুন, শিখুন এবং একটি ঐক্যবদ্ধ কমিউনিটি গড়ে তুলুন।",
  },
  {
    icon: Calendar,
    title: "নমনীয় সময়সূচি",
    description:
      "আপনার পড়াশোনা, চাকরি বা ব্যক্তিগত জীবনের সঙ্গে সামঞ্জস্য রেখে স্বেচ্ছাসেবী কার্যক্রমে অংশ নেওয়ার সুযোগ উপভোগ করুন।",
  },
  {
    icon: Award,
    title: "মূল্যবান অভিজ্ঞতা অর্জন করুন",
    description:
      "নেতৃত্ব, সংগঠন এবং দলগত কাজের বাস্তব অভিজ্ঞতা অর্জন করুন, যা আপনার ব্যক্তিগত ও পেশাগত জীবনে দীর্ঘমেয়াদে উপকারে আসবে।",
  },
];

const roles = [
  "ঘরে ঘরে প্রচারণা (ডোর-টু-ডোর ক্যাম্পেইন)",
  "ফোন কলের মাধ্যমে জনসংযোগ",
  "ইভেন্ট ও কর্মসূচি ব্যবস্থাপনা",
  "সোশ্যাল মিডিয়া পরিচালনা",
  "প্রশাসনিক সহায়তা",
  "গ্রাফিক ডিজাইন",
  "কনটেন্ট লেখা",
  "অনুবাদ সেবা",
];

export default function Volunteer() {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(volunteerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      skills: "",
      message: "",
    },
  });

  const volunteerMutation = useMutation({
    mutationFn: (data) => apiRequest("POST", "/api/volunteers", data),
    onSuccess: () => {
      toast({
        title: "Application Submitted!",
        description: "Thank you for joining our team. We'll contact you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data) => {
    volunteerMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="relative py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(18, 42, 110, 0.95) 0%, rgba(18, 42, 110, 0.85) 45%, rgba(18, 42, 110, 0.25) 100%), url('/images/bgimage.png')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              data-testid="text-volunteer-title"
            >
              উন্নত আগামী বিনির্মাণে, হামিদুর রহমান হামিদের নেতৃত্বে ঐক্যবদ্ধ
              হোন!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg"
            >
              স্বেচ্ছাসেবক হোন
            </motion.p>
          </div>
        </section>

        <section className="py-20 bg-political-light">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-political-blue mb-4">
                আমাদের সঙ্গে স্বেচ্ছাসেবক হবেন কেন?
              </h2>
              <p className="text-political-dark/70 max-w-2xl mx-auto">
                হাজারো নিবেদিত স্বেচ্ছাসেবকের সঙ্গে যুক্ত হন, যারা নিজ নিজ
                কমিউনিটিতে বাস্তব পরিবর্তন এনে দিচ্ছেন।
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white border-0 shadow-sm text-center hover-elevate">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-full bg-political-red/10 flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="w-7 h-7 text-political-red" />
                      </div>
                      <h3 className="font-semibold text-political-dark mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-political-dark/60">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-political-blue mb-6">
                  ঢাকা–৭ এর মানুষের পাশে থাকতে আমাদের সাথে যুক্ত হন
                </h2>
                <p className="text-political-dark/70 mb-8">
                  স্বেচ্ছাসেবক হিসেবে নিবন্ধনের জন্য নিচের ফর্মটি পূরণ করুন।
                  আমরা সব ধরনের পটভূমি ও দক্ষতার মানুষকে স্বাগত জানাই। একসাথে
                  কাজ করে আমরা সমাজে বাস্তব পরিবর্তন আনতে পারি।
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold text-political-dark">
                    উপলব্ধ দায়িত্বসমূহ:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {roles.map((role) => (
                      <div
                        key={role}
                        className="flex items-center gap-2 text-political-dark/70"
                      >
                        <CheckCircle className="w-4 h-4 text-political-red flex-shrink-0" />
                        <span className="text-sm">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-political-light border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-political-blue mb-6">
                      স্বেচ্ছাসেবক নিবন্ধন
                    </h3>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>পূর্ণ নাম</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="আপনার পুরো নাম:"
                                    {...field}
                                    data-testid="input-volunteer-name"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>ইমেইল</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="people@example.com"
                                    {...field}
                                    data-testid="input-volunteer-email"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="ward"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>এলাকা / ওয়ার্ড নম্বর</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="ওয়ার্ড–৩ / ধানমন্ডি / লালবাগ"
                                    {...field}
                                    data-testid="input-volunteer-ward"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>ফোন নম্বর</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="+০১৭১ ২৩৪ ৫৬৭৮"
                                    {...field}
                                    data-testid="input-volunteer-phone"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="skills"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>আগ্রহের ক্ষেত্র</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger data-testid="select-volunteer-skills">
                                      <SelectValue placeholder="আপনি কীভাবে যুক্ত হতে চান?" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {roles.map((role) => (
                                      <SelectItem key={role} value={role}>
                                        {role}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="availability"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>সময় দিতে পারবেন</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="space-y-2"
                                >
                                  {[
                                    "নিয়মিত",
                                    "আংশিক সময়",
                                    "নির্বাচনের আগের সময়গুলোতে",
                                  ].map((item) => (
                                    <FormItem
                                      key={item}
                                      className="flex items-center space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <RadioGroupItem value={item} />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {item}
                                      </FormLabel>
                                    </FormItem>
                                  ))}
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>ঠিকানা</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="আপনার ঠিকানা লিখুন"
                                  {...field}
                                  data-testid="input-volunteer-address"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>অতিরিক্ত বার্তা (ঐচ্ছিক)</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="নিজের সম্পর্কে সংক্ষেপে লিখুন…"
                                  className="min-h-[100px] resize-none"
                                  {...field}
                                  data-testid="input-volunteer-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          className="w-full bg-political-red hover:bg-political-red/90 text-white"
                          data-testid="button-volunteer-submit"
                          disabled={volunteerMutation.isPending}
                        >
                          {volunteerMutation.isPending && (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          )}
                          {volunteerMutation.isPending
                            ? "Submitting..."
                            : "আবেদন জমা দিন"}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
