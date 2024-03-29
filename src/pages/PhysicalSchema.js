import { Grid, Typography } from "@mui/material";
import PhysicalSchemaImg from "../assets/PhysicalSchemaImg.png";
import "./PhysicalSchema.css"
import SearchBar from "../components/SearchBar";
import CustomTabs from "../components/CustomTabs";
import SubHeader from "../components/SubHeader";
import PhysicalSchemaCard from "../components/PhysicalSchemaCard";
import FilterTab from "../components/FilterTab";
import styled from '@emotion/styled';
import React, { useState } from "react";
import Header from "../components/Header";

const SchemaCardWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    columnGap: 16,
    rowGap: 32,
}));

const physicalSchemaData = [
    {
        id: 1,
        schemaName: "application-ratings1",
        type: "WholeSale",
        variables:
            [
                { id: 1, name: "var1", type: 'VM', date: 'MMDDYYYY' },
                { id: 2, name: "var2", type: 'VM', date: 'MMDDYYYY' },
                { id: 3, name: "var3", type: 'VM', date: 'MMDDYYYY' },
                { id: 4, name: "var4", type: 'VM', date: 'MMDDYYYY' },
                { id: 5, name: "var5", type: 'VM', date: 'MMDDYYYY' },
                { id: 6, name: "var6", type: 'VM', date: 'MMDDYYYY' },
                { id: 7, name: "var7", type: 'VM', date: 'MMDDYYYY' },
                { id: 8, name: "var8", type: 'VM', date: 'MMDDYYYY' },
                { id: 9, name: "var9", type: 'VM', date: 'MMDDYYYY' },
                { id: 10, name: "var10", type: 'VM', date: 'MMDDYYYY' },
            ]
    },
    {
        id: 2,
        schemaName: "application-ratings2_ddddddddddddddddddddddddddddddd_ddddddddddd",
        type: "WholeSale",
        variables:
            [
                { id: 1, name: "var1", type: 'VM', date: 'MMDDYYYY' },
                { id: 2, name: "var2", type: 'VM', date: 'MMDDYYYY' },
                { id: 3, name: "var3", type: 'VM', date: 'MMDDYYYY' },
                { id: 4, name: "var4", type: 'VM', date: 'MMDDYYYY' },
                { id: 5, name: "var5", type: 'VM', date: 'MMDDYYYY' },
                { id: 6, name: "var6", type: 'VM', date: 'MMDDYYYY' },
                { id: 7, name: "var7", type: 'VM', date: 'MMDDYYYY' },
                { id: 8, name: "var8", type: 'VM', date: 'MMDDYYYY' },
                { id: 9, name: "var9", type: 'VM', date: 'MMDDYYYY' },
                { id: 10, name: "var10", type: 'VM', date: 'MMDDYYYY' },
            ]
    },
    {
        id: 3,
        schemaName: "application-ratings3",
        type: "WholeSale",
        variables:
            [
                { id: 1, name: "var1", type: 'VM', date: 'MMDDYYYY' },
                { id: 2, name: "var2", type: 'VM', date: 'MMDDYYYY' },
                { id: 3, name: "var3", type: 'VM', date: 'MMDDYYYY' },
                { id: 4, name: "var4", type: 'VM', date: 'MMDDYYYY' },
                { id: 5, name: "var5", type: 'VM', date: 'MMDDYYYY' },
                { id: 6, name: "var6", type: 'VM', date: 'MMDDYYYY' },
                { id: 7, name: "var7", type: 'VM', date: 'MMDDYYYY' },
                { id: 8, name: "var8", type: 'VM', date: 'MMDDYYYY' },
                { id: 9, name: "var9", type: 'VM', date: 'MMDDYYYY' },
                { id: 10, name: "var10", type: 'VM', date: 'MMDDYYYY' },
            ]
    }

];


export default function PhysicalSchema() {
    const tabsData = ["Dashboard", "Add new UseCase"];

    const [searchValue, setSearchValue] = useState('');

    const filterCards = physicalSchemaData.filter(card => {
        // return card.schemaName.toLowerCase().includes(searchValue.toLowerCase()) !== false;
        const condition1 = card.variables.filter(e => e.name.toLowerCase().includes(searchValue.toLowerCase()) !== false);
        console.log(condition1);
        const condition2 = card.schemaName.toLowerCase().includes(searchValue.toLowerCase()) !== false;
        console.log(condition2);
        return condition1.length > 0 || condition2;
    })

    return (
        <React.Fragment>
            <Header></Header>
            <Grid container rowGap={2} sx={{
                padding: '0 80px', marginTop: '32px', marginLeft: '0px', width: '100%', marginBottom: '16px'
            }}>
                <Grid item xs={12} lg={12} md={12} sx={{
                    backgroundColor: '#F3F3F3',
                    borderRadius: '4px',
                    paddingLeft: '10px'
                }}>
                    <CustomTabs data={tabsData}></CustomTabs>
                </Grid>
                <Grid item xs={12} lg={12} md={12} sx={{
                    backgroundColor: '#F3F3F3',
                    borderRadius: '4px',
                }}>
                    <Grid container spacing={0}
                        direction="row"
                        alignItems="center"
                        justifyContent="center">
                        <Grid item xs={12} lg={6} md={6} sx={{
                            padding: 8
                        }}>
                            <Typography variant="h2" color="secondary" sx={{
                                width: '100%',
                                fontWeight: 300,
                                fontSize: '1.75rem',
                            }}>
                                Welcome to Phyiscal Schema
                            </Typography>

                            <Typography variant="h6" className="cssFont2">
                                lorem ipsum dolor sit amet consectuer.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} lg={6} md={6}>
                            <img src={PhysicalSchemaImg} alt="dashboard"></img>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={12} md={12} sx={{
                    borderRadius: '4px',
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={6} md={6}>
                            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}></SearchBar>
                        </Grid>
                        <Grid item xs={12} lg={6} md={6}>
                            <FilterTab></FilterTab>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={12} md={12}>
                    <Grid container columnGap={2} rowGap={4}>
                        {filterCards.map(
                            e =>
                                <Grid item key={e.id} xs>
                                    <PhysicalSchemaCard data={e}></PhysicalSchemaCard>
                                </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>

    );
}