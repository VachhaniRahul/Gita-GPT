import React from 'react';
import { Box, Typography } from "@mui/material";
// import linkedin from "../Assets/linkedin-icon-3.svg";
// import instagram from "../Assets/instagram-2016-5.svg";
// import github from "../Assets/github-icon-1.svg";
// import facebook from "../Assets/facebook-2020-2-1.svg";

const Footer = () => {
    return (
        <Box>
            <Box sx={{ paddingBottom: "30px" }}>
                <Typography color="#FFF" textAlign="center">
                    © 2024 Copyright: Develpoed Vachhani Rahul. All rights reserved.
                </Typography>

            </Box>

            <Box pb={3}>
                <div style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor : "#FFF"
                }}>


                </div>
            </Box>

        </Box>
    )
}

export default Footer