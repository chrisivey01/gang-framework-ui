import { Box, TextField } from "@material-ui/core";

const ImageRenderer = ({ isEdit, setMember, member }) => {
    return (
        <Box className="wrapper-image">
            {!isEdit ? (
                <TextField
                    style={{ marginBottom: 10 }}
                    variant="filled"
                    label="Image Link"
                    value={member.profile_photo}
                    onChange={(e) =>
                        setMember({
                            ...member,
                            profile_photo: e.target.value,
                        })
                    }
                />
            ) : null}
            <img src={member.profile_photo} />
        </Box>
    );
};

export default ImageRenderer