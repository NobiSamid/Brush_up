import React from "react";
import { Box } from "@mui/system";
import Directory from "../../components/directory/directory.component";
export default function HomePage({ history }) {
  return (
    <Box sx={{ m: 2 }}>
      <Directory />
    </Box>
  );
}
