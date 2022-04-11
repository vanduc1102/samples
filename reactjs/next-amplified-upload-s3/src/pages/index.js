import React from "react";
import { useRouter } from "next/router";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Auth } from "aws-amplify";
import LockIcon from "@material-ui/icons/Lock";
import UploadForm from "../components/UploadForm";
import { Box, IconButton } from "@material-ui/core";
import { useSnackbar } from "notistack";

const Dashboard = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      enqueueSnackbar("Success!! Logged out successfully!", {
        variant: "success",
      });
      router.push("/signin");
    } catch (error) {
      enqueueSnackbar("Error!!" + message.message, { variant: "error" });
    }
  };

  return (
    <Box>
      <Box>
        <Box
          flexDirection={"row"}
          justifyContent="space-between"
          display={"flex"}
        >
          <IconButton>
            <LockIcon />
          </IconButton>
          <IconButton color="secondary" title="Logout" onClick={handleLogout}>
            <ExitToAppIcon />
          </IconButton>
        </Box>
        <Box>
          <p>This is a private (auth protected) page. </p>
          <p style={{ fontSize: 12, marginBottom: "20px" }}>
            Thanks for following along, happy coding!{" "}
          </p>
        </Box>
      </Box>
      <Box marginTop={2}>
        <UploadForm />
      </Box>
    </Box>
  );
};

export default Dashboard;
