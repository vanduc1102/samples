import React from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Auth } from "aws-amplify";
import LockIcon from "@material-ui/icons/Lock";
import { useHistory } from "react-router-dom";
import UploadFileForm from "./UploadFileForm";
import { Box, IconButton } from "@material-ui/core";
import { useSnackbar } from "notistack";

const Dashboard: React.FC = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      enqueueSnackbar("Success!! Logged out successfully!", { variant: "success" });
      history.push("/signin");
    } catch (error) {
      enqueueSnackbar("Error!!" + (error as any).message, { variant: 'error' });
    }
  };

  return (
    <>
      <Box>
        <Box flexDirection={"row"} justifyContent="space-between" display={"flex"}>
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
        <UploadFileForm />
      </Box>
    </>
  );
};

export default Dashboard;
