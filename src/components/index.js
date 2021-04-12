import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Particles from "react-particles-js";
import { Box } from "@material-ui/core";

const Home = () => {

    return (
        <>
            <Box component="div">
                <Navbar />
                <Header />
                <Particles 
                    params={{
                        particles: {
                            number: {
                                value: 45,
                                density: {
                                    enable: true,
                                    value_area: 8000,
                                },
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 1,
                                    color: "tomato",
                                },
                            },
                            size: {
                                value: 3,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 5,
                                    size_min: 0.1,
                                    sync: true,
                                },
                            },
                            opacity: {
                                value: 0.5,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: true,
                                },
                            },
                        },
                    }}
                    style={{ opacity: "0.5", position: "absolute" }}
                />
            </Box>
        </>
    );
};

export default Home;
