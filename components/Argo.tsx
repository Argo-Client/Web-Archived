import { MdSchool } from "react-icons/md";
const ArgoLogo = ({ large = false, className = "" }: { large?: boolean; className?: string }) => (
	<div className={`bg-argo-blue rounded-full shadow-md inline-block ${className}`}>
		<MdSchool style={{ padding: "15%", filter: "drop-shadow(2px 2px 2px rgba(0,0,0,.5))" }} className={`${large ? "w-32 h-32" : "w-16 h-16"} text-white`} />
	</div>
);
export default ArgoLogo;
