import { Button } from "./ui/button";
import { useRouter } from 'next/router';

type Props = { text: string };

const SignInButton = ({ text }: Props) => {
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        router.push('/sign-in');
      }}
    >
      {text}
    </Button>
  );
};

export default SignInButton;