import React from "react";
import { Drawer, List, ListItem, ListItemText, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem component={Link} to="/contract-review">
          <ListItemText primary="Contract Review" />
        </ListItem>
        <Divider />
        <ListItem component={Link} to="/document-generation">
          <ListItemText primary="Document Generation" />
        </ListItem>
        <Divider />
        <ListItem component={Link} to="/corruption-reporting">
          <ListItemText primary="Corruption Reporting" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
