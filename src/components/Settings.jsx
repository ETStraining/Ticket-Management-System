import React from "react";
import { FiBell, FiMoon, FiRefreshCw, FiMail, FiLock } from "react-icons/fi";
import { Switch } from "@headlessui/react";

const Settings = () => {
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  return (
    <div className="p-4 md:w-[98%]">
      <h2 className="text-[22px] font-semibold mb-4 leading-7 overflow-hidden">Site Settings</h2>
      <div className="space-y-3">
        <div className="flex items-center justify-between bg-white p-3 rounded-md shadow">
          <div className="flex items-center">
            <FiBell className="text-gray-500 text-lg mr-3" />
            <div className="flex flex-col">
              <span className="text-[15px] font-semibold">Enable Notifications</span>
              <p className="text-gray-700 text-sm">Control whether users receive notifications for updates and alerts.</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between bg-white p-3 rounded-md shadow">
          <div className="flex items-center">
            <FiMoon className="text-gray-500 text-lg mr-3" />
            <div className="flex flex-col">
              <span className="text-[15px] font-semibold">Dark Mode</span>
              <p className="text-gray-700 text-sm">Switch between light and dark mode for the application's interface.</p>
            </div>
          </div>
          <Switch
            checked={darkModeEnabled}
            onChange={setDarkModeEnabled}
            className={`${
              darkModeEnabled ? 'bg-indigo-600' : 'bg-gray-200'
            } relative inline-flex items-center h-6 rounded-full w-11`}
          >
            <span
              className={`${
                darkModeEnabled ? 'translate-x-6' : 'translate-x-1'
              } inline-block w-4 h-4 transform bg-white rounded-full`}
            />
          </Switch>
        </div>
        <div className="flex items-center justify-between bg-white p-3 rounded-md shadow">
          <div className="flex items-center">
            <FiRefreshCw className="text-gray-500 text-lg mr-3" />
            <div className="flex flex-col">
              <span className="text-[15px] font-semibold">Enable Auto Updates</span>
              <p className="text-gray-700 text-sm">Automatically apply updates to the application without manual intervention.</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between bg-white p-3 rounded-md shadow">
          <div className="flex items-center">
            <FiMail className="text-gray-500 text-lg mr-3" />
            <div className="flex flex-col">
              <span className="text-[15px] font-semibold">Receive Email Reports</span>
              <p className="text-gray-700 text-sm">Subscribe to email reports summarizing activity and statistics.</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between bg-white p-3 rounded-md shadow">
          <div className="flex items-center">
            <FiLock className="text-gray-500 text-lg mr-3" />
            <div className="flex flex-col">
              <span className="text-[15px] font-semibold">Enable Two-Factor Authentication</span>
              <p className="text-gray-700 text-sm">Add an extra layer of security by requiring two-factor authentication for login.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
