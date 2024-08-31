import { Checkbox, Divider, Typography } from "@mui/material";
import editImg from "../../assets/edit.png"
import avatar from "../../assets/avatar.png"
import styles from './SidebarContent/SidebarContent.module.scss';

export type TDetails = {
        id: number;
        name: string;
        position: string;
        organisation: string;
}

type TSpeakerProps = {
    details: TDetails;
    handleChange: (id: number) => void;
    selectedData: TDetails[];
}


const SpeakerCard = ({details, handleChange, selectedData} :TSpeakerProps) => {
    return (
        <div className={styles.speakerInfoContainer} style={{border: selectedData?.some((info) => info?.id === details?.id ) ? "2px solid  var(--highlighted-color)" : "2px solid var(--disable-textColor)"}} key={details.id}>
            <div className={styles.speakerInfo}>
                <div className={styles.avatarImg}>
                    <img src={avatar} alt="Avatar" />
                </div>
                <div className={styles.speakerDetails}>
                    <Typography variant="subtitle2" >{details?.name}</Typography>
                    <div style={{display:"flex", gap:"2px", alignItems:"center"}}>
                        <Typography variant="body2" sx={{color:"var(--grey-textColor)"}}  >{details?.position}</Typography>
                        <Divider orientation="vertical"  variant="middle" flexItem  sx={{height:"1rem"}}/>
                        <Typography variant="body2" sx={{color:"var(--grey-textColor)"}} >{details?.organisation}</Typography>
                    </div>
                    <div style={{display:"flex", gap:"0.2rem", alignItems:"center", marginBottom:"0.5rem"}}>
                        <img src={editImg} alt="edit icon" width={15}/>
                        <Typography sx={{color: "var(--brand-color)"}} variant="subtitle2" >Edit speaker</Typography>
                    </div>
                </div>
            </div>

        <div>
            <Checkbox
                size="small"
                checked={selectedData?.some((data) => data.id === details?.id)}
                onChange={() => handleChange(details?.id)}
                inputProps={{ 'aria-label': 'controlled' }}
                sx={{zIndex: "-7", color:"var(--highlighted-color)"}}
                // color="success"
            />
        </div>
    </div>
    )
}

export default SpeakerCard;