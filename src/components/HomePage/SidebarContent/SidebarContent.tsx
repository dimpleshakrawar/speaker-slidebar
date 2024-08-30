import { Box, Checkbox, Divider, IconButton, Typography } from "@mui/material"
// import "./SidebarContent.module.scss"
import IconInput from "../../common/IconInput"
import CloseIcon from '@mui/icons-material/Close';
// import SearchIcon from '@mui/icons-material/Search';
// import { Icons } from "../../../icons/Icons"
import searchImg from "../../../assets/search.png"
import editImg from "../../../assets/edit.png"
import avatar from "../../../assets/Avatar.png"
import styles from './SidebarContent.module.scss';
import "../../muiStyles.css"

const SidebarContent = () => {
    // const { search } = Icons;
    return (
        <Box sx={{width: 600}}>
            <div>
                {/* header */}
                <div >
                    <div className={styles.headerContainer}>
                        <Typography variant="subtitle1" gutterBottom sx={{fontWeight:"600"}}>Add Speaker</Typography>
                        <IconButton aria-label="delete">
                            <CloseIcon fontSize="small"/>
                        </IconButton>
                    </div>

                    <div className={styles.searchContainer}>
                        <img src={searchImg} alt="Search icon" className={styles.searchImage} />
                        <IconInput position="start"/>
                    </div>
                </div>

                {/* search bar */}
                <div className={styles.sidebarBody}>
                    

                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div className={styles.speakerInfoContainer} >
                            <div className={styles.speakerInfo}>
                                <div className={styles.avatarImg}>
                                    <img src={avatar} alt="Avatar" />
                                </div>
                                <div className={styles.speakerDetails}>
                                    <Typography variant="subtitle2" >Example name</Typography>
                                    <div style={{display:"flex", gap:"2px", alignItems:"center"}}>
                                        <Typography variant="body2" sx={{color:"var(--grey-textColor)"}}  >President of india</Typography>
                                        <Divider orientation="vertical"  variant="middle" flexItem  sx={{height:"1rem"}}/>
                                        <Typography variant="body2" sx={{color:"var(--grey-textColor)"}} >XYZ organisation</Typography>
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
                                    checked={true}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>

                </div>
            </div>
        </Box>
    )
}

export default SidebarContent