import * as React from 'react';
// import Box from '@mui/material/Box';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

type TSidebarProps = {
    toggleDrawer:  (event: React.KeyboardEvent | React.MouseEvent) => void;
    open: boolean;
    anchor: Anchor;
    component: React.ReactNode;
}

type Anchor = DrawerProps['anchor']

export default function SidebarModal({open, toggleDrawer, anchor, component}:TSidebarProps) {

  return (
    <div>
        <React.Fragment>
          <Drawer
            anchor={anchor}
            open={open}
            onClose={toggleDrawer}
          >
            {component}
          </Drawer>
        </React.Fragment>
    {/* ))} */}
    </div>
  );
}