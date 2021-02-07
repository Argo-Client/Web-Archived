import { MdSchool } from "react-icons/md";
const ArgoLogo = ({ size = 16 }: { size?: number }) => (
	<div className="bg-argo-blue rounded-full shadow-md inline-block">
		<MdSchool style={{ padding: "15%" }} className={`w-${size} h-${size} text-white`} />
	</div>
);
export default ArgoLogo;
