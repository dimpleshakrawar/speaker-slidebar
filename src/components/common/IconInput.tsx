import { InputAdornment, InputAdornmentOwnProps, OutlinedInput, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type TPosition = InputAdornmentOwnProps["position"]

type TIconInputProps = {
    Icon?: OverridableComponent<SvgIconTypeMap<object, "svg">> & { muiName: string; };
    position: TPosition;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const IconInput = ({Icon , position, onChange}: TIconInputProps) => {
    return (
        <div style={{width:" 100%"}}>
             <OutlinedInput
                sx={{width:"100%"}}
                id="input-with-icon-textfield"
                // slotProps={{
                //     input: {
                //         startAdornment: (
                //         <InputAdornment position={position}>
                //             {Icon && <Icon />}
                //             {/* <AccountCircle /> */}
                //         </InputAdornment>
                //         ),
                //     },
                // }}
                endAdornment={<InputAdornment position={position}> {Icon && <Icon />}</InputAdornment>}
                // variant="standard"
                onChange={onChange}
            />
        </div>
    )
}

export default IconInput;