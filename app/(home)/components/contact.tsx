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
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();

  const formSchema = z.object({
    companyName: z.string(),
    fullname: z.string().nonempty(t("required")),
    email: z
      .string()
      .email({ message: t("valid-email") })
      .nonempty(t("required")),
    phone: z
      .string()
      .regex(/^[0-9]{9,13}$/, { message: t("valid-phone") })
      .nonempty(t("required")),
    message: z.string().nonempty(t("required")),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      fullname: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // https://api.telegram.org/bot{bot}/getUpdates
    const token = "7559766084:AAHq-qObPmdmXxZ6l45xn37AW5HqYrhmbQU";
    const chatID = "-4581798282";

    const message = `<b>🆕 Yangi xabar</b>%0A%0A<b>🏠 Kompaniya: </b><i>${values.companyName ? values.companyName : "-"}</i>%0A<b>👤 F.I.Sh: </b><i>${values.fullname}</i>%0A<b>🗂 Email: </b><i>${values.email}</i>%0A<b>📞 Telefon: </b><i>${values.phone}</i>%0A<b>📬 Xabar: </b><i>${values.message}</i>`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${message}&parse_mode=html`;

    const apibot = new XMLHttpRequest();
    apibot.open("GET", url, true);
    apibot.send();
    toast(t("sent-succesfully"));

    form.reset();
  }

  return (
    <div className="p-4 py-10" id="contact">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/3 w-full mb-10">
            <h1 className="flex items-center text-secondary-foreground uppercase">
              <div className="bg-secondary-foreground w-5 h-[1px] mr-2"></div>
              {t("contact")}
            </h1>
          </div>
          <div className="xl:w-1/3 lg:w-2/3 w-full">
            <h1 className="sm:text-4xl text-3xl mb-5">{t("send-message-us")}</h1>
            <p className="text-sm mb-10">{t("send-message-us-text")}</p>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex md:flex-row flex-col gap-10">
            <div className="md:w-1/2 w-full space-y-10">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder={t("company-name")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder={`${t("fullname")} *`} {...field} />
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
                    <FormControl>
                      <Input placeholder={`${t("email")} *`} {...field} type="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:w-1/2 w-full space-y-10">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder={`${t("phone")} *`} type="tel" {...field} />
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
                    <FormLabel className="text-muted-foreground">{`${t("text")} *`}</FormLabel>
                    <FormControl>
                      <Textarea {...field} className="max-h-[70px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="">
                {t("send")}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
