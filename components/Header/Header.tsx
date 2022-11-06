import Link from 'next/link';
import Anchors from '../Anchors/Anchors';
import { Button } from '@nextui-org/react';
import { useAuthUser, withAuthUser, AuthAction } from 'next-firebase-auth';
import { Dropdown, Avatar, Text } from '@nextui-org/react';

const links = [
  {
    title: 'Articles',
    href: '/category/articles',
  },
  {
    title: 'News',
    href: '/category/news',
  },
  {
    title: 'Tricks & tips',
    href: '/category/articles',
  },
  {
    title: 'Apps',
    href: '/category/articles',
  },
  {
    title: 'Test preparation',
    href: '/category/articles',
  },
  {
    title: 'About us',
    href: '/category/articles',
  },
];

const AdminMenu = ({ AuthUser }) => {
  return (
    <Dropdown placement="bottom-left">
      <Dropdown.Trigger>
        <Avatar
          bordered
          size="sm"
          as="button"
          color="secondary"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </Dropdown.Trigger>
      <Dropdown.Menu  aria-label="Avatar Actions">
        <Dropdown.Item key="profile" css={{ height: '$18' }}>
          <Text b color="inherit" css={{ d: 'flex' }}>
            Signed in as
          </Text>
          <Text b color="inherit" css={{ d: 'flex' }}>
            {AuthUser?.email}
          </Text>
        </Dropdown.Item>
        <Dropdown.Item key="settings" withDivider>
          My Settings
        </Dropdown.Item>
        <Dropdown.Item key="logout" withDivider color='none'>
          <Button onClick={AuthUser.signOut}>Logout</Button>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
const Header = () => {
  const AuthUser = useAuthUser(); // the user is guaranteed to be authenticated
  console.info('Header >>>>', AuthUser);
  const { email, photoURL, signOut } = AuthUser;

  return (
    <>
      <div className="shadow-md p-2 bg-white sticky top-0 z-10">
        <nav className="flex items-center list-none font-mono">
          <div>
            <Anchors type="text-swapping" text="LOGO" href="/" />
          </div>
          <div className="flex grow">
            {links.map((link, i) => {
              return (
                <div className="flex items-center">
                  <Anchors
                    type="text-swapping"
                    text={link.title}
                    href={link.href}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-between">
            <Link href="/blog">
              <Button flat color="primary" auto size="sm">
                Contact
              </Button>
            </Link>
            <div className="ml-1">
              {email ? (
                <AdminMenu AuthUser={AuthUser} />
              ) : (
                <Link href="/admin">
                  <Button flat color="primary" auto size="sm">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};;

export default Header;
