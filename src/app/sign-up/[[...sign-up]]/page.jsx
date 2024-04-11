import {SignUp} from "@clerk/nextjs"

const SignUpPage = () => {
    return (
<div className="flex items-center justify-cenetr flex-col gap-10">
    <h1 className="text-4xl font-bold mt-20">Sign 
    Up To Continue </h1>
<SignUp/>
</div>
    );
};
export default SignUpPage;