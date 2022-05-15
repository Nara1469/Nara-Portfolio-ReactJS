import * as React from 'react';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import GitHubIcon from '@mui/icons-material/GitHub';
// import LightModeIcon from '@mui/icons-material/LightMode';

// export default function Contact() {
//   return (
//     <div>
//       <h3 class="text-center text-color">Contact Me</h3>
//       <div class="row">
//         <ul>
//           <li><a href="tel:17202261469">Phone</a></li>
//           <li><a href="mailto:naraamtm@yahoo.com">Email</a></li>
//           <li><a href="https://github.com/Nara1469">GitHub</a></li>
//           <li><a href="https://linkedin.com/in/naradavaasuren">LinkedIn</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// }



function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function SvgIconsColor() {
  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 2,
        },
      }}
    >
      <IconButton><PhoneIphoneIcon sx={{ color: blue[500], fontSize: 30}} /></IconButton>
      <IconButton><MailOutlineIcon sx={{ color: blue[500], fontSize: 30}} /></IconButton>
      <IconButton><GitHubIcon sx={{ color: blue[500], fontSize: 30}} /></IconButton>
      <IconButton><LinkedInIcon sx={{ color: blue[500], fontSize: 30}} /></IconButton>
    </Box>
  );
}
