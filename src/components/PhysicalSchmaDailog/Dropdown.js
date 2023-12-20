import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, FormControl, InputLabel, ListItemText, MenuItem, Select, Typography, Radio } from '@mui/material';
// const Filters = styled('div')(({ theme }) => ({
//     borderRadius: '6px',
//     background: ' #FCFCFC',
//     display: "flex",
//     flexDirection: 'row',
//     columnGap: 8,
//     flexGrow: 1,
//     alignItems: "center",
//     justifyContent: 'center',
//     '&:hover': {
//         backgroundColor: '#ffffffb5',
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         // marginLeft: theme.spacing(1),
//         width: '100%',
//     },
// }));




export default function Dropdown(props) {
    const { label, columns, judColumnValue, handleChangeColumn, filters, judFilterValue, handleChangeFilter } = props;
    return (
        <Box sx={{
             flexGrow: 1, display: 'flex',
            flexDirection: 'column', rowGap: 1
        }}>
            <Typography sx={{
                color: '#333',
                fontFamily: 'Univers Next for HSBC',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: '24px'
            }}>{label}</Typography>
            <Box sx={{
               flexGrow: 0, display: 'flex',
                flexDirection: 'row', columnGap: 1
            }}>
                <FormControl style={{ width: '161px' }} variant="outlined">
                    <InputLabel shrink={false}
                        sx={{
                            fill: '#FFF',
                            stroke: '#767676',
                            strokeWidth: '1px',
                            color: '#333',
                            fontFamily: 'Univers Next for HSBC',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            flexShrink: '0',
                            lineHeight: '24px'
                        }} id="demo-simple-select-label">Choose Column</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="choosecolum"
                        value={judColumnValue}
                        renderValue={() => ''}
                        onChange={handleChangeColumn}
                        sx={{
                            backgroundColor: '#FCFCFC',
                        }}
                    >
                        {columns.map((e) => (
                            <MenuItem key={e.key} value={e.key}>
                                <Radio
                                    checked={judColumnValue === e.key}
                                    value={e.key}
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': e.label }}
                                />
                                <ListItemText primary={e.label} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl style={{ width: '161px', height: '32px' }} variant="outlined">
                    <InputLabel shrink={false}
                        sx={{
                            fill: '#FFF',
                            stroke: '#767676',
                            strokeWidth: '1px',
                            color: '#333',
                            fontFamily: 'Univers Next for HSBC',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            flexShrink: '0',
                            lineHeight: '24px'
                        }} id="demo-simple-select-label-filter">Choose Filter</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="choosecolum"
                        value={judFilterValue}
                        renderValue={() => ''}
                        onChange={handleChangeFilter}
                        sx={{
                            backgroundColor: '#FCFCFC',
                        }}
                    >
                        {filters.map((e) => (
                            <MenuItem key={e.key} value={e.key}>
                                <Radio
                                    checked={judFilterValue === e.key}
                                    value={e.key}
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': e.label }}
                                />
                                <ListItemText primary={e.label} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </Box>

    );
}