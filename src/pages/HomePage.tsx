import { useState } from "react";
import { Typography, useMediaQuery } from "@mui/material"
import StyledButton from "../components/common/StyledButton";
import SidebarModal from "../components/common/SidebarModal";
import SidebarContent from "../components/HomePage/SidebarContent/SidebarContent";

const HomePage = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleDrawer = () => {
      setIsModalOpen(prev => !prev)
    };

    return (
        <div style={{padding: "5rem 6rem", width: isSmallScreen ? '60%' : 600}}>
            <Typography variant="h6" component="h6" sx={{mb:1}}>Add Speaker</Typography>
                <StyledButton 
                    backgroundColor="var(--brand-color)"
                    textColor="var(--light-textColor)"
                    hoverBackgroundColor="var(--brand-hoverColor)"
                    hoverTextColor="lightgray"
                    onClick={toggleDrawer}
                    >
                    Add Speaker
                </StyledButton>

            <SidebarModal
                open={isModalOpen}
                toggleDrawer={toggleDrawer}
                anchor={"right"}
                component={<SidebarContent toggleDrawer={toggleDrawer} />}
      />
        </div>
    )
}

export default HomePage;