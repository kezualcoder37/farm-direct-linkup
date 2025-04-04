
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSignUp: () => void;
}

export function LoginModal({ isOpen, onClose, onOpenSignUp }: LoginModalProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    toast.success("Login successful!", {
      description: "Welcome back to AgroBridge!",
    });
    onClose();
  }

  const handleSignUpClick = () => {
    onClose();
    onOpenSignUp();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-agro-primary">Login to AgroBridge</DialogTitle>
          <DialogDescription>
            Enter your credentials to access your account
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="you@example.com" 
                      type="email" 
                      className="input-field" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="••••••••" 
                      type="password" 
                      className="input-field" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <button 
                type="button"
                onClick={() => {}} 
                className="text-sm text-agro-primary hover:text-agro-dark hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <DialogFooter className="flex-col sm:flex-row sm:justify-between gap-3 mt-6">
              <div className="text-sm text-gray-600">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={handleSignUpClick}
                  className="text-agro-primary font-medium hover:text-agro-dark hover:underline"
                >
                  Sign up
                </button>
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Login
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default LoginModal;
