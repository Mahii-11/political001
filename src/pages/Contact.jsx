/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
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
import { useToast } from "../hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { storeContact } from "@/services/api";

// Schema remains same (JS compatible)
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const contactInfo = [
  {
    icon: MapPin,
    title: "ঠিকানা",
    content: "১২৩ প্রচারণা এভিনিউ, ঢাকা ১০০০, বাংলাদেশ",
  },
  {
    icon: Phone,
    title: "ফোন",
    content: "+৮৮ ০১৭১ ২৩৪ ৫৬৭৮",
  },
  {
    icon: Mail,
    title: "ইমেইল",
    content: "contact@campaignbd.com",
  },
  {
    icon: Clock,
    title: "কার্যালয় সময়",
    content: "সোম - শনি: সকাল ৯টা - সন্ধ্যা ৬টা",
  },
];

export default function Contact() {
  const { toast } = useToast();

  // Removed TS generic
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: storeContact,
    onSuccess: (res) => {
      console.log("SUCCESS RES ===>", res);
      if (res.success) {
         toast({
        title: "বার্তা পাঠানো হয়েছে ✅",
        description: res.message || "আমরা শীঘ্রই আপনার সাথে যোগাযোগ করবো।",
      });
      form.reset();
      } else {
        toast({
        title: "সমস্যা হয়েছে",
        description: "দয়া করে আবার চেষ্টা করুন",
        variant: "destructive",
        })
      }
    },
    onError: (error) => {
     toast({
      title: "Server Error ❌",
      description: "এই মুহূর্তে বার্তা পাঠানো যাচ্ছে না",
      variant: "destructive",
    });
     console.error(error);
    },
  });

  const onSubmit = (data) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute top-24 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-rose-300/25 blur-3xl" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-medium text-emerald-700"
            >
              যোগাযোগ
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4"
              data-testid="text-biography-title"
            >
              যোগাযোগ করুন এবং আমাদের সাথে যুক্ত হোন
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mx-auto max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed"
            >
              যোগাযোগ করুন এবং আমাদের সাথে যুক্ত হয়ে সমাজে ইতিবাচক পরিবর্তনের
              অংশ হোন
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-10 mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-lg p-5 shadow-lg"
            >
              <div className="absolute inset-x-8 top-4 h-20 rounded-full bg-rose-300/30 blur-3xl" />

              <p className="relative text-sm md:text-base text-slate-700">
                আপনার মতামত ও অংশগ্রহণই একটি সচেতন ও শক্তিশালী সমাজ গঠনের
                ভিত্তি। আমাদের লক্ষ্য মানুষের কণ্ঠস্বরকে গুরুত্ব দেওয়া এবং
                ন্যায়, উন্নয়ন ও সমতার পথে একসাথে এগিয়ে যাওয়া। আপনার একটি
                বার্তাই পারে পরিবর্তনের সূচনা করতে।
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-political-light">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-red-700 mb-6">
                  যোগাযোগ করুন
                </h2>
                <p className="text-political-dark/70 mb-8">
                  আপনার কি আমাদের প্রচারণা সম্পর্কে প্রশ্ন আছে বা কি আপনি
                  অংশগ্রহণ করতে চান? আমরা আপনার কথাগুলো শুনতে আগ্রহী। নিচের
                  ফর্মটি পূরণ করুন, আমাদের দল দ্রুত আপনার সঙ্গে যোগাযোগ করবে।
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full bg-white border-0 shadow-sm hover-elevate">
                        <CardContent className="p-6 flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-political-blue/10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-political-blue" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-political-dark mb-1">
                              {item.title}
                            </h3>
                            <p className="text-sm text-political-dark/60">
                              {item.content}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      বার্তা পাঠান
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
                                <FormLabel>আপনার নাম</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="আপনার পূর্ণ নাম লিখুন"
                                    {...field}
                                    data-testid="input-contact-name"
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
                                    placeholder="আপনার ইমেইল টি লিখুন"
                                    {...field}
                                    data-testid="input-contact-email"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>বিষয়</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="আপনাকে কীভাবে সাহায্য করতে পারি?"
                                  {...field}
                                  data-testid="input-contact-subject"
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
                              <FormLabel>বার্তা</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="এখানে আপনার বার্তা লিখুন…"
                                  className="min-h-[150px] resize-none"
                                  {...field}
                                  data-testid="input-contact-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          type="submit"
                          className="w-full bg-political-red hover:bg-political-red/90 text-white"
                          data-testid="button-contact-submit"
                          disabled={contactMutation.isPending}
                        >
                          {contactMutation.isPending ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          ) : (
                            <Send className="w-4 h-4 mr-2" />
                          )}
                          {contactMutation.isPending
                            ? "Sending..."
                            : "বার্তা পাঠান"}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="h-[400px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1535824073767!2d-77.03687908464756!3d38.89767297957029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bce1485b19%3A0x9fc7bf09fd5d9daf!2sWhite%20House!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Campaign Headquarters Location"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
