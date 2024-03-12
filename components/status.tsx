import { Select, SelectItem } from "@nextui-org/select";
import { useState } from "react";

export function Status() {
	const statusMessages = [
		'Status #0',
		'Status #1',
		'Status #2',
		'Status #3',
	];
	return (
		<Select
			size="md"
			className="max-w-xs"
			label="Select status"
			placeholder="Select a valid status"
			// defaultSelectedKeys={[statusMessages.at(-1)]}
			scrollShadowProps={{ isEnabled: false }}
			required
		>
			{
				statusMessages.map((sm, idx) => (
					<SelectItem key={idx}>{sm}</SelectItem>
				))
			}
		</Select>
	)
}