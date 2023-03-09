import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Box, Typography } from "@pankod/refine-mui";
import { Button } from "@pankod/refine-mui";

import logo from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Box>
        <Link to="/">
          {collapsed ? (
            <img src={logo} alt="Real-Estate logo" width="28px" />
          ) : (
            <Typography mt={1} fontSize={22} fontWeight={900} color="#375ae8">
              Real-Estate
            </Typography>
          )}
        </Link>
      </Box>
    </Button>
  );
};
