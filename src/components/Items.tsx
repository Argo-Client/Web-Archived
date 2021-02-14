export function LesUur({ uur, info, lokaal, tijd }) {
	return (
		<div className="item my-4 relative">
			<span className="dark:text-gray-400 text-gray-600 absolute left-2 top-2">{uur}e</span>
			<div className="inline-block ml-6">
				<span className="text-xl">{info} </span> <br />
				<span className="text-gray-500 dark:text-gray-400">
					{lokaal} • {tijd}
				</span>
			</div>
		</div>
	);
}
