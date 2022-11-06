import { useAuthUser } from 'next-firebase-auth';
import Link from 'next/link';

const InfoBar = () => {
  const AuthUser = useAuthUser();
  return (
    <div className="flex flex-row items-center p-2 shadow-md app-header">
      <div className="">
        <img
          loading="lazy"
          className="rounded"
          src="https://picsum.photos/id/100/100/50"
          alt="Squirrel zombie"
        />
      </div>
      <div className="grow flex justify-end items-center">
        <div className="mr-5">Call: 123456789</div>
        <div className="mr-5">Mail : {AuthUser.email}</div>

        <Link href="/auth">
          <a className="border-2 rounded-md bg-emerald-900 text-white p-2">
            Buy Courses
          </a>
        </Link>
        <div>
          <img className="rounded-full" src={AuthUser.photoURL} height="30" />
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
