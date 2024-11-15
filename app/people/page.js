"use client"

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useRouter } from "next/navigation";

export default function People() {
  const router = useRouter()
  const list = [
    {
      name: "Sunchi",
      image: 'https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg',
      status: 'ແມ່ນ'
    },
    {
      name: "Sunchi",
      image: 'https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg',
      status: 'ແມ່ນ'
    },
    {
      name: "Sunchi",
      image: 'https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg',
      status: 'ແມ່ນ'
    },
    {
      name: "Sunchi",
      image: 'https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg',
      status: 'ແມ່ນ'
    },
    {
      name: "Sunchi",
      image: 'https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg',
      status: 'ແມ່ນ'
    },
    {
      name: "Sunchi",
      image: 'https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg',
      status: 'ແມ່ນ'
    },
  ]
  return (
    <div className="relative">
      <Table>
        <TableCaption>A list of your recent people.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ຮູບ</TableHead>
            <TableHead>ຊື່</TableHead>
            <TableHead className="text-right">ເອົາແຟນໄປບໍ່</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            list.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium">
                  <img width={60} src={item.image} />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right">{item.status}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      <Button onClick={() => router.push('/people/create')} className="rounded-full w-14 h-14 fixed bottom-12 right-4 bg-primary text-white">+</Button>
    </div>
  );
}
