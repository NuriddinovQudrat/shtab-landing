"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  fullname: z
    .string()
    .min(3, {
      message: "Kamida 3 ta belgi yozing!",
    })
    .max(50, {
      message: "50 tadan ko'p belgi yoza olmaysiz!",
    }),
  text: z
    .string()
    .min(3, {
      message: "Kamida 3 ta belgi yozing!",
    })
    .max(50, {
      message: "50 tadan ko'p belgi yoza olmaysiz!",
    }),
});

export const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      text: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="bg-primary p-4 py-10">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/3 w-full mb-10">
            <h1 className="flex items-center text-primary-foreground uppercase">
              <div className="bg-primary-foreground w-5 h-[1px] mr-2"></div>
              Contact Us
            </h1>
          </div>
          <div className="xl:w-1/3 lg:w-2/3 w-full text-white">
            <h1 className="sm:text-4xl text-3xl mb-5">Send us a message</h1>
            <p className="text-sm mb-10">For all enquiries, please fill the form below.</p>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ismingiz</FormLabel>
                  <FormControl>
                    <Input placeholder="Ismingiz" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Xabar qoldiring</FormLabel>
                  <FormControl>
                    <Textarea placeholder="..." {...field} className="max-h-4" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" variant={"default"} className="w-full">
              Yuborish
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
