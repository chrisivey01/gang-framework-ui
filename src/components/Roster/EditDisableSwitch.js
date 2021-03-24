import { Grid, Switch } from "@material-ui/core";

const EditDisableSwitch = ({ isEdit, handleEditChange }) => {
    return (
        <Grid container alignItems="center" className="edit">
            <Grid item>Edit</Grid>
            <Grid item>
                <Switch checked={isEdit} onChange={handleEditChange} />
            </Grid>
            <Grid item>Disable</Grid>
        </Grid>
    );
};

export default EditDisableSwitch;
