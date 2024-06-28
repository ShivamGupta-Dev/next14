"use client"
import { CardWrapper } from "./card-wrapper";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
import { ResetSchema } from "@/schemas";
import {
 Form,
 FormControl,
 FormField,
 FormItem,
 FormLabel,
 FormMessage,
} from "@/components/ui/form"
import { Button } from "../button";
import { useSearchParams } from "next/navigation";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { reset } from "@/actions/reset";
export const ResetForm = () => {
    const [error, setError]=useState<string | undefined >("")
    const [success, setSuccess]=useState<string | undefined >("")
    const [isPending, startTransition ] = useTransition();
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(ResetSchema),
        defaultValues:{
            email:"",
        },
    });
 const onSubmit = ( values:z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    startTransition(()=>{
        reset(values)
            .then((data) => {
            setError(data?.error);
            setSuccess(data?.success);
        })
    })
    
 }
    return(
        <CardWrapper
        headerLabel="Forgot your password?"
        backButtonLabel="Back to Login"
        backButtonHref="/auth/login"
        >
            <Form {...form}>
                <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                >
                    <div className="space-y-4">
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                    {...field}
                                    disabled={isPending}
                                    placeholder="shivam.gupta@example.com"
                                    type="email" 
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                        
                    </div>
                    <FormError message={error}/>
                    <FormSuccess message={success}/>
                    <Button
                    disabled={isPending}
                    type="submit"
                    className="w-full"
                    >
                        Send reset email
                    </Button>
                </form>

            </Form>
        </CardWrapper>
    );
}
