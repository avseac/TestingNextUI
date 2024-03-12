import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle, NavbarMenuItem } from "@nextui-org/navbar"
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { SearchIcon } from "./icons/search";



export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const websiteName = 'Website';
	const MainMenu = [
		'Item #1',
		'Item #2',
		'Item #3',
	]
	return (
		<Navbar onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<p className="font-bold text-inherit">{ websiteName }</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				{/* <NavbarItem isActive>
					<Link href="#" aria-current="page">
						Customers
					</Link>
				</NavbarItem> */}
				{
					MainMenu.map((el, idx) => (
						<NavbarItem key={idx}>
							<Link color="foreground" href="#">
								{el}
							</Link>
						</NavbarItem>

					))
				}
			</NavbarContent>

			<NavbarContent as="div" className="items-center" justify="end">
        <Input
					// isClearable
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
      /></NavbarContent>

			{/* <NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Link href="#">Login</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color="primary" href="#" variant="flat">
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent> */}

			<NavbarMenu>
				{[...MainMenu, 'Close'].map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={ index === MainMenu.length ? "danger" : "foreground" }
							className="w-full"
							href="#"
							size="lg"
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
