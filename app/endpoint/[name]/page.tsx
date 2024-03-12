'use client';

import { Status } from "@/components/status";
import { Header } from "@/components/navbar";

import { useParams } from "next/navigation";


export default function PageFunction() {
	const urlParams = useParams();
	return (
		<>
			<Header/>
			<div>{urlParams.name}</div>
			<Status />
		</>
	)
}