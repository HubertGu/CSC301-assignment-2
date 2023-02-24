import * as React from 'react';
import { styled} from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import MuiButton from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


const drawerWidth = 365;

const Item1 = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgb(55, 142, 208, 0.6)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));
const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgb(208, 121, 55, 0.6)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export const Button = styled(MuiButton)(() => ({
  borderRadius: 50,
  textTransform: "none",
  backgroundColor: 'rgb(42, 93, 153, 0.8)',
  color: 'white',
  padding: 6,
  mb: 2,
}));

export default function NodeSideDrawer({open, setOpen}) {
  const [value, setValue] = React.useState(1.0);

  const handleDrawerClose = () => {
    setOpen(false);
    setValue(1.0);
  };

  return (
    <div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader sx={{ justifyContent: "space-between" }}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon/>
          </IconButton>
          <Button variant="contained" sx={{fontSize: 12}} onClick={handleDrawerClose}>Confirm Intervention</Button>
        </DrawerHeader>
        <Divider />
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Box sx={{ width: 275, mt: 1 }}>
            <Typography variant="subtitle1" component="div"  align="left">
              Add Intervention (Change speed):
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <TextField
              type="number"
              onChange={(newValue) => {
                setValue(parseFloat(newValue.target.value));
              }}
              autoFocus
              margin="dense"
              label="Speedup/Slowdown Factor"
              inputProps={{step: "any"}}
              defaultValue={value}
              value={value}
              sx={{ width: 250}}
              InputProps={{ sx: { height: 40 } }}
              variant="outlined"
            />
            <IconButton 
              edge="end"
              onClick={() => {
                setValue(1.0);
              }}
            >
              <CloseIcon/>
            </IconButton>
          </Box>
          <Box sx={{ width: 330, height: 185 }}>
            <Item1>
              <List dense={true}>
                <ListItem>
                  <ListItemText
                  primary="Frequency"
                  primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: 'medium',
                  lineHeight: '20px',
                  mb: '2px',
                  }}/>
                </ListItem>
                <ListItem>
                    <ListItemText
                      primary="Absolute Frequency.................608"
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                      primary="Case Frequency.......................608"
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                      primary="Max Repititions.........................1"
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                </ListItem>
              </List>
            </Item1>
          </Box>
          <Box sx={{ width: 330, height: 185 }}>
            <Item2>
              <List dense={true}>
              <ListItem>
                  <ListItemText
                  primary="Performance"
                  primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: 'medium',
                  lineHeight: '20px',
                  mb: '2px',
                  }}/>
                </ListItem>
                <ListItem>
                    <ListItemText
                      primary="Total Duration.................13 d"
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                      primary="Median Duration.............31 mins"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                      primary="Mean Duration................30.7 mins"
                    />
                </ListItem>
              </List>
            </Item2>
          </Box>
        </Stack>
       </Drawer>  
    </div>
  );
}
