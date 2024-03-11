import { Progress } from '@nextui-org/react'

export default function Page() {
	return (
		<div className="absolute top-0 left-0 w-full h-full -translate-x-1/2 -translate-y-1/2">
			<div className="flex flex-col gap-6 w-full max-w-md">
				<Progress color="default" aria-label="Loading..." value={Math.random() * 100} />
				<Progress color="primary" aria-label="Loading..." value={Math.random() * 100} />
				<Progress color="secondary" aria-label="Loading..." value={Math.random() * 100} />
				<Progress color="success" aria-label="Loading..." value={Math.random() * 100} />
				<Progress color="warning" aria-label="Loading..." value={Math.random() * 100} />
				<Progress color="danger" aria-label="Loading..." value={Math.random() * 100} />
			</div>
		</div>
	)
}