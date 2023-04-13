import React from "react";
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Card,
} from "@material-tailwind/react";

export default function ShowCassavaDialog() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen((cur) => !cur);
	// const handleOpen = (value: boolean) => setOpen(value);

	return (
		<React.Fragment>
		<Card
			className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'
			onClick={handleOpen}
		>
			<img className='rounded-2xl' src="./cassava.jpg"/>
		</Card>
		<Dialog size="xs" open={open} handler={handleOpen} className="min-w-fit max-w-xs">
			<DialogHeader>
				<span>Solution Summary</span>
			</DialogHeader>
			<DialogBody divider>
				<p className="font-bold">Result</p>
				<p>161th (silver medal)</p>
				<p>Public Score 0.9048 (ACC)</p>
				<p>Private Score 0.8993 (ACC)</p>
				<br />
				<p className="font-bold">Summary</p>
				<p>1. EfficientnetB4 with Noisy Student で学習したものをアンサンブル</p>
				<p>2. 異なる画像サイズで学習</p>
				<p>3. 2020年と2019年の両方のデータセットを使用</p>
				<br />
				<p className="font-bold">Training</p>
				<p>Optimizer RAdam</p>
				<p>Loss function FocalLoss</p>
				<br />
				<p className="font-bold">Base Model CV</p>
				<p>Stratified k-Fold 5 folds.</p>
			</DialogBody>
			<DialogFooter>
				<Button
					color="green"
					onClick={() => handleOpen()}
				>
					<span>Close</span>
				</Button>
			</DialogFooter>
		</Dialog>
		</React.Fragment>
	);
}