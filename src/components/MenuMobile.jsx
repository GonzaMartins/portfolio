import * as React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import MenuIcon from "../imgs/menu.png";

const options = [
  { title: "Home", key: "#Home" },
  { title: "Sobre mi", key: "#AboutMe" },
  { title: "Skills", key: "#Skills" },
  { title: "Proyectos", key: "#Projects" },
  { title: "Contactame", key: "#ContactMe" },
];

export default function SplitButton() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    console.log(open);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <div variant="contained" ref={anchorRef} aria-label="split button">
        <div
          className="burgerButton burgerButtonMode"
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        />
      </div>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ width: "100%" }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" className="menuMobile">
                  {options.map((option, index) => (
                    <a href={option.key} className="menuMobileOptions">
                      <MenuItem
                        key={option}
                        onClick={handleToggle}
                        // selected={index === selectedIndex}
                      >
                        {option.title}
                      </MenuItem>
                    </a>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
