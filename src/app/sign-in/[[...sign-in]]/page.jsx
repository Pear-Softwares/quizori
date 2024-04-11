import {SignIn} from "@clerk/nextjs"

const SignInPage = () => {
    return (
<div className="flex items-center justify-cenetr flex-col gap-10">
    <h1 className="text-4xl font-bold mt-20">Sign In To Continue </h1>
<SignIn/>
</div>
    );
};
export default SignInPage;