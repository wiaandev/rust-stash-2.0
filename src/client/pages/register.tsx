import { useForm, SubmitHandler } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormValues } from "../types/RegisterFormTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUserSchema } from "../schema/schemas";

export default function Register() {
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  const form = useForm<FormValues>({
    defaultValues: {
        username: "",
        dob: new Date(),
        email: "",
        password: "",
        createdOn: new Date(),
    },
    resolver: yupResolver(registerUserSchema)
  });

  const {register, control, handleSubmit, formState} = form;
  const {errors} = formState;

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...register("username")} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
