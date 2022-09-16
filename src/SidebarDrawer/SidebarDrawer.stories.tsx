import { Meta, Story } from "@storybook/react";
import React from "react";

import { ImageIcon } from "../icons";
import * as fixtures from "../Sidebar/fixtures";
import { SidebarDrawer } from "./SidebarDrawer";

export const Default: Story = () => (
  <SidebarDrawer
    logoHref=""
    menuItems={fixtures.menu}
    onMenuItemClick={() => undefined}
  />
);

export const WithCustomLogo: Story = () => (
  <SidebarDrawer
    logoHref=""
    menuItems={fixtures.menu}
    onMenuItemClick={() => undefined}
    logo={<ImageIcon />}
  />
);

export default {
  title: "Sidebar - mobile",
} as Meta;
