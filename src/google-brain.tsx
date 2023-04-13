import React from "react";
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Card,
} from "@material-tailwind/react";

export default function ShowBrainDialog() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen((cur) => !cur);
	// const handleOpen = (value: boolean) => setOpen(value);

	return (
		<React.Fragment>
		<Card
			className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'
			onClick={handleOpen}
		>
			<img className='rounded-2xl' src="./google_brain.jpg" />
		</Card>
		<Dialog size="xs" open={open} handler={handleOpen} className="min-w-fit max-w-xs">
			<DialogHeader>
				<span>Solution Summary</span>
			</DialogHeader>
			<DialogBody divider>
				<p className="font-bold">Result</p>
				<p>25th (silver medal)</p>
				<p>Public Score 0.1186 (MAE)</p>
				<p>Private Score 0.1217 (MAE)</p>
				<br />
				<p className="font-bold">Summary</p>
				<p>1. Bidirectional LSTM + SEModule</p>
				<p>2. 予測値だけでなく入力値も復元するように予測する</p>
				<p>3. 複数のモデルをスタッキング</p>
				<br />
				<p className="font-bold">Training</p>
				<p>Optimizer Adam</p>
				<p>Loss function MAELoss</p>
				<br />
				<p className="font-bold">Base Model CV</p>
				<p>Group K-Fold 5 folds.</p>
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