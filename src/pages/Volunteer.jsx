/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
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
    title: "Make a Difference",
    description: "Be part of real change in your community and nation",
  },
  {
    icon: Users,
    title: "Join a Community",
    description: "Connect with like-minded individuals who share your values",
  },
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description: "Volunteer at times that work best for your lifestyle",
  },
  {
    icon: Award,
    title: "Gain Experience",
    description: "Develop leadership and organizational skills",
  },
];

const roles = [
  "Door-to-Door Canvassing",
  "Phone Banking",
  "Event Organization",
  "Social Media",
  "Administrative Support",
  "Graphic Design",
  "Content Writing",
  "Translation Services",
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
              backgroundImage: `linear-gradient(rgba(26, 60, 142, 0.9), rgba(26, 60, 142, 0.9)), url('https://images.unsplash.com/photo-1559523182-a284c3fb7cff?w=1920&q=80')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              data-testid="text-volunteer-title"
            >
              Become a Volunteer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg"
            >
              Home / Volunteer
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
                Why Volunteer With Us?
              </h2>
              <p className="text-political-dark/70 max-w-2xl mx-auto">
                Join thousands of dedicated volunteers who are making a
                difference in their communities.
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
                  Join Our Team
                </h2>
                <p className="text-political-dark/70 mb-8">
                  Fill out the form to register as a volunteer. We welcome
                  people from all backgrounds and skill levels. Together, we can
                  make a difference.
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold text-political-dark">
                    Available Roles:
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
                      Volunteer Registration
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
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="John Doe"
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
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="john@example.com"
                                    {...field}
                                    data-testid="input-volunteer-email"
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
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="+1 (555) 123-4567"
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
                                <FormLabel>Area of Interest</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger data-testid="select-volunteer-skills">
                                      <SelectValue placeholder="Select a role" />
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
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Address</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your address"
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
                              <FormLabel>
                                Additional Message (Optional)
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about yourself..."
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
                            : "Submit Application"}
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
