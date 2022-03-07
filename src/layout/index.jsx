//Global Imports
import React from "react";
import { Grid } from "@material-ui/core";

//Local Imports
import Header from "./Header";
import SideBar from "./Sidebar";
import Googlemap from "../components/Google-Map";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <SideBar />
        </Grid>
        <Grid item xs={12} md={8}>
          <Googlemap />
        </Grid>
      </Grid>
    </>
  );
};

export default MainLayout;
