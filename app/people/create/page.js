"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const formSchema = z.object({
    name: z.string().min(2).max(50),
    activity: z.string().min(2).max(50),
    car_owner: z.string().min(1).max(50),
})

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import SelectableList from "@/components/ui/selectableList"


export default function Create() {
    const form = useForm({
        resolver: zodResolver(formSchema),
    })
    const onSubmit = (data) => {
        console.log(data)
    }

    const Activities = [
        {
            value: 'all',
            label: 'All new messages',
            selected: false
        },
        {
            value: 'mentions',
            label: 'Direct messages and mentions',
            selected: false
        },
        {
            value: 'other',
            label: 'Nothing',
            selected: false
        },
    ]

    const HowToGo = [
        {
            value: 'self',
            label: 'ໄປເອງໃຫຍ່ແລ້ວ',
        },
        {
            value: 'take_me',
            label: 'ໄປນຳຕີ້',
        },
    ]

    const CarOwnerList = [
        {
            value: '1',
            label: 'jack',
        },
        {
            value: '2',
            label: 'jay',
        },
    ]
    return (
        <div>
            <div className="text-center my-8">
                <h1 className="text-2xl font-bold">Register</h1>
                <p>Vangvieng tour register form</p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>name</FormLabel>
                                <FormControl>
                                    <Input placeholder="name" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="activity"
                        render={({ field }) => (
                            <FormItem className="space-y-2">
                                <FormLabel>Activities that you want to do</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1"
                                    >
                                        {
                                            Activities.map((item, idx) => (
                                                <FormItem key={idx} className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value={item.value} />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        {item.label}
                                                    </FormLabel>
                                                </FormItem>
                                            ))
                                        }
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <SelectableList 
                        title="Activities that you want to do"
                        items={Activities}
                    />

                    <FormField
                        control={form.control}
                        name="how_to_go"
                        render={({ field }) => (
                            <FormItem className="space-y-2">
                                <FormLabel>How are you going?</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1"
                                    >
                                        {
                                            HowToGo.map((item, idx) => (
                                                <FormItem key={idx} className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value={item.value} />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        {item.label}
                                                    </FormLabel>
                                                </FormItem>
                                            ))
                                        }
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="car_owner"
                        render={({ field }) => (
                            <FormItem className="space-y-2">
                                <FormLabel>ຂື້ນລົດໃຜດີ?</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1"
                                    >
                                        {
                                            CarOwnerList.map((item, idx) => (
                                                <FormItem key={idx} className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value={item.value} />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        {item.label}
                                                    </FormLabel>
                                                </FormItem>
                                            ))
                                        }
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <div className="flex justify-end">
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}