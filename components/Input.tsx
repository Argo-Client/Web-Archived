import { IconType } from "react-icons";
import { InputHTMLAttributes } from "react";

interface LoginInput extends InputHTMLAttributes<HTMLInputElement> {
	Icon: IconType;
}

export default function LoginInput({ Icon, ...inputProps }: LoginInput) {
	return (
		<div className="input p-2 my-2 flex items-center text-lg">
			<Icon className="inline-block mr-3" />
			<input className="bg-transparent w-full focus:outline-none" {...inputProps} />
		</div>
	);
}
