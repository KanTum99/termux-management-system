echo 'import React from "react";
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemText, AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const features = [
    "zsh เวอร์ชันเสริม + ฟังก์ชัน/นามแฝงที่เป็นประโยชน์",
    "ตั้งค่า NvChad สำหรับแก้ไขไฟล์ YAML/JSON",
    "สนับสนุน Infrastructure as Code"
  ];

  const cloudTools = [
    "kubectl + helm",
    "terraform + ansible",
    "awscli + gcloud"
  ];

  const networkTools = [
    "nmap + tcpdump",
    "wireguard + httpie"
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Termux Management
          </Typography>
          <IconButton color="inherit" onClick={handleLogout}>
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  คุณสมบัติหลัก
                </Typography>
                <List>
                  {features.map((feature, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  เครื่องมือ Cloud Native
                </Typography>
                <List>
                  {cloudTools.map((tool, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={tool} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  เครื่องมือเครือข่าย
                </Typography>
                <List>
                  {networkTools.map((tool, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={tool} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;' > src/components/Dashboard.js
