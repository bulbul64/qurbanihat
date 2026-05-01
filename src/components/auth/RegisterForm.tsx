"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const RegisterForm = () => {
  const router = useRouter();


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

 
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    
    const { error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
    });

   

    if (error) {
      toast.error(error.message || "Registration failed");
      return;
    }

    toast.success("Registration successful!");
    router.push("/auth/login");
  };

 
  const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data)
};

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative w-full max-w-sm overflow-hidden rounded-xl border bg-background px-8 py-8 shadow-lg">

        {/* Logo */}
        <div className="flex flex-col items-center">
          <Logo className="h-10 w-auto" />
          <p className="mt-4 text-xl font-medium">Create your account</p>

          {/* Google Button */}
          <Button
            onClick={signIn}
           
            variant="outline"
            className="mt-6 w-full gap-3"
          >
            <GoogleLogo />
            <span>Sign in with Google</span>
          </Button>

          <div className="my-6 flex w-full items-center gap-2">
            <Separator />
            <span className="text-xs text-muted-foreground">OR</span>
            <Separator />
          </div>

          {/* FORM */}
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">

            {/* Name */}
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Name</FieldLabel>
                  <Input placeholder="Your name" {...field} />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />

            {/* Email */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Email</FieldLabel>
                  <Input type="email" placeholder="Email" {...field} />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />

            {/* Password */}
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Password</FieldLabel>
                  <Input type="password" placeholder="Password" {...field} />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />

            {/* Submit */}
            <Button type="submit" className="w-full" >
              Create Account
            </Button>
          </form>

          {/* Login link */}
          <p className="mt-5 text-center text-sm">
            Already have an account?
            <Link href="/auth/login" className="ml-1 underline text-muted-foreground">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

/* Google Icon */
const GoogleLogo = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
    <path fill="#4285F4" d="M15.6 8.2c0-.5 0-1-.1-1.6H8v3.1h4.3c-.2 1-.8 1.9-1.6 2.4v2h2.6c1.5-1.4 2.3-3.4 2.3-5.9z"/>
    <path fill="#34A853" d="M8 16c2.2 0 4-.7 5.3-2l-2.6-2c-.7.5-1.6.8-2.7.8-2 0-3.7-1.4-4.3-3.3H1.1v2.1C2.5 14.3 5.1 16 8 16z"/>
    <path fill="#FBBC04" d="M3.7 9.5c-.3-1-.3-2.1 0-3.1V4.3H1.1C0 6.6 0 9.3 1.1 11.6l2.6-2.1z"/>
    <path fill="#EA4335" d="M8 3.2c1.2 0 2.3.4 3.2 1.2l2.3-2.2C12 1 10.1.3 8 .3 5.1.3 2.5 2 1.1 4.3l2.6 2.1C4.3 4.6 6 3.2 8 3.2z"/>
  </svg>
);