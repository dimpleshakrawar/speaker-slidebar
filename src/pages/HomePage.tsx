import { useState } from "react";
import { Typography } from "@mui/material"
import StyledButton from "../components/common/StyledButton";
import SidebarModal from "../components/common/SidebarModal";
import SidebarContent from "../components/HomePage/SidebarContent/SidebarContent";

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleDrawer = () => {
    //   if (
    //     event.type === 'keydown' &&
    //     ((event as React.KeyboardEvent).key === 'Tab' ||
    //       (event as React.KeyboardEvent).key === 'Shift')
    //   ) {
    //     return;
    //   }

      setIsModalOpen(prev => !prev)
    };

    return (
        <div style={{padding: "5rem 6rem"}}>
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

            {/* sidemodal to open */}
            <SidebarModal open={isModalOpen} toggleDrawer={toggleDrawer} anchor={"right"} component={SidebarContent()}/>
        </div>
    )
}

export default HomePage;