import { IconType } from "react-icons";
import { InputHTMLAttributes } from "react";

interface LoginInput extends InputHTMLAttributes<HTMLInputElement> {
	Icon: IconType;
}

export default function LoginInput({ Icon, ...inputProps }: LoginInput) {
	return (
		<div className="input p-4 my-6 flex items-center text-xl">
			<Icon className="inline-block mr-3" />
			<input className="bg-transparent w-full focus:outline-none" {...inputProps} required />
		</div>
	);
}
