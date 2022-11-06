import { Dropdown, Avatar, Text } from '@nextui-org/react';
import { Switch } from '@nextui-org/react';

import { SunIcon } from './SunIcon';
import { MoonIcon } from './MoonIcon';

const TopNavAdmin = () => {
  return (
    <nav>
      <div className="px-4 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-bold flex items-center lg:ml-2.5">
            <span className="self-center whitespace-nowrap">
              Online Learning
            </span>
          </a>

          <div className="flex items-center">
            <Switch
              checked={true}
              size="xl"
              iconOn={<SunIcon filled />}
              iconOff={<MoonIcon filled size="30"/>}
            />

            <Dropdown placement="bottom-left">
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  size="lg"
                  as="button"
                  color="secondary"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
              <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
                <Dropdown.Item key="profile" css={{ height: '$18' }}>
                  <Text b color="inherit" css={{ d: 'flex' }}>
                    Signed in as
                  </Text>
                  <Text b color="inherit" css={{ d: 'flex' }}>
                    zoey@example.com
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item key="settings" withDivider>
                  My Settings
                </Dropdown.Item>
                <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                <Dropdown.Item key="analytics" withDivider>
                  Analytics
                </Dropdown.Item>
                <Dropdown.Item key="system">System</Dropdown.Item>
                <Dropdown.Item key="configurations">
                  Configurations
                </Dropdown.Item>
                <Dropdown.Item key="help_and_feedback" withDivider>
                  Help & Feedback
                </Dropdown.Item>
                <Dropdown.Item key="logout" color="error" withDivider>
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default TopNavAdmin;
