import { Box, Grid } from "@material-ui/core";
import { Fragment } from "react";
import character from "../../helpers/character.json";
export default () => {
    return (
        <Fragment>
            <Grid>
                <Box>Welcome {character.char_name}!</Box>
            </Grid>
        </Fragment>
    );
};
