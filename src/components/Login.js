import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  TextField, 
  Button, 
  Box, 
  Typography, 
  Paper,
  Divider,
  Stack,
  IconButton
} from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("th"); // 'th' หรือ 'en'
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // ตรวจสอบการล็อกอิน
    if (username === "admin" && password === "password") {
      navigate("/dashboard");
    } else {
      alert(language === 'th' ? 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' : 'Invalid username or password');
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'th' ? 'en' : 'th');
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      <Paper elevation={3} sx={{ 
        p: 4, 
        width: 350,
        borderRadius: 2
      }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h5" component="h2">
            {language === 'th' ? 'ระบบจัดการ Termux' : 'Termux Management System'}
          </Typography>
          <IconButton onClick={toggleLanguage} color="primary">
            <LanguageIcon />
            <Typography variant="caption" sx={{ ml: 1 }}>
              {language === 'th' ? 'EN' : 'TH'}
            </Typography>
          </IconButton>
        </Stack>
        
        <Divider sx={{ my: 2 }} />
        
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label={language === 'th' ? 'ชื่อผู้ใช้' : 'Username'}
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label={language === 'th' ? 'รหัสผ่าน' : 'Password'}
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, py: 1.5 }}
          >
            {language === 'th' ? 'เข้าสู่ระบบ' : 'Login'}
          </Button>
        </Box>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="body2" color="text.secondary" align="center">
          localhost:3000
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
