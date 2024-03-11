'use client';

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { FormEvent } from "react";


export default function Showcase() {
	const inputName = 'inputbox';

	function parseForm(evt : FormEvent) {
		evt.preventDefault();
		const formData = new FormData(evt.currentTarget as HTMLFormElement);
		const value = formData.get(inputName);

		console.log({ value });
	}

	return (
		<form method="POST" action="./prova" onSubmit={parseForm}>
			<input type="text" name={inputName}/>
			{/* <input type="submit" value="invio"/> */}
			<Button type="submit">
				click me
			</Button>
		</form>
	);
}