import { useEffect, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material"
// import "./SidebarContent.module.scss"
import IconInput from "../../common/IconInput"
import CloseIcon from '@mui/icons-material/Close';
// import SearchIcon from '@mui/icons-material/Search';
// import { Icons } from "../../../icons/Icons"
import searchImg from "../../../assets/search.png"

import SpeakerDetails from "../../../SpeakerDetails.json"
import StyledButton from "../../common/StyledButton";
import Loader from "../../common/Loader/Loader";
import SpeakerCard from "../SpeakerCard";
import { TDetails } from "../SpeakerCard";
import styles from './SidebarContent.module.scss';
import "../../muiStyles.css"

// type TProps = {
//     toggleDrawer:() => void;
// }

const SidebarContent = () => {
    const [data, setData] = useState(SpeakerDetails);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false)
    const [selectedData, setSelectedData] = useState<TDetails[]>([])

    const handleChange = ( id: number) => {
        const findData = data?.find(item => item.id === id);
      
        if (findData) {
          setSelectedData(prev => {
            const isSelected = prev.some(item => item.id === id);
            
            if (isSelected) {
              return prev.filter(item => item.id !== id);
            } else {
              return [...prev, findData];
            }
          });
        }
      };
      

    useEffect(() => {
        setLoading(true); // Set loading to true immediately when the effect is triggered
      
        const debounce = setTimeout(() => {
          const searchTable = (name: string) => {
            try {
              if (name) {
                const filteredData = data?.filter((item) =>
                  item?.name.toLowerCase().includes(name.toLowerCase())
                );
                setData(filteredData);
              } else {
                // Reset to the original data if no query
                setData(SpeakerDetails);
              }
            } finally {
              setLoading(false); // Ensure loading is set to false even if there's an error
            }
          };
      
          searchTable(query);
        }, 1000);
      
        return () => {
          clearTimeout(debounce);
          setLoading(false); // Ensure loading is set to false when the effect is cleaned up
        };
      }, [query]);
      
    return (
        <Box sx={{width: 600}}>
            <div>
                {/* header */}
                <div className={styles.topHeader}>
                    <div className={styles.headerContainer}>
                        <Typography variant="subtitle1" gutterBottom sx={{fontWeight:"600"}}>Add Speaker</Typography>
                        <IconButton aria-label="delete"
                        //  onClick={toggleDrawer}
                        >
                            <CloseIcon fontSize="small"
                            />
                        </IconButton>
                    </div>

                    <div className={styles.searchContainer}>
                        <img src={searchImg} alt="Search icon" className={styles.searchImage} />
                        <IconInput position="start" onChange={(e) => setQuery(e.target.value)}/>
                    </div>
                </div>

                {/* body */}
                <div className={styles.sidebarBody}>
                    <div>
                        {loading ? <Loader/> : 
                        data?.map((details) => (
                           <SpeakerCard details={details} handleChange={handleChange} selectedData={selectedData}/>
                        ))
                    }
                    </div>
                </div>

                {/* footer */}
                <div className={styles.footer}>
                    <div style={{display:"flex", flexDirection:"row", gap:"0.5rem"}}>
                        <StyledButton backgroundColor={selectedData.length ? "var(--brand-color)" : "var(--button-disableColor)"} hoverBackgroundColor="var(--brand-color)" textColor={selectedData?.length ? "var(--light-textColor)" : "var(--brand-color)"} hoverTextColor="var(--grey-textColor)" size="medium" activeBackgroundColor= "var(--brand-color)" activeTextColor="var(--light-textColor)">Add</StyledButton>
                        <StyledButton backgroundColor="var(--button-brandLightColor)" hoverBackgroundColor="" hoverTextColor="var(--brand-color)" textColor="var(--brand-color)" size="medium">Cancel</StyledButton>
                   </div>
                        <StyledButton backgroundColor="" hoverBackgroundColor="" hoverTextColor="" textColor="var(--brand-color)">Create a Speaker</StyledButton>
                   </div>
                <div>

                </div>
            </div>
        </Box>
    )
}

export default SidebarContent