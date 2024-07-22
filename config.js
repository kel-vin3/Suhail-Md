const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="michaelezeh212@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Lagos/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/kel-vin3";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/J8qefSNWH2K2QwkAIn3M0m";
global.website=process.env.GURL || "https://chat.whatsapp.com/J8qefSNWH2K2QwkAIn3M0m" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://images3.alphacoders.com/853/85329.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2348130693968" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348130693968";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2348130693968";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2348130693968";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348130693968,2348130693968";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_54_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDYxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDU3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0LFxuICAgICAgICA0NixcbiAgICAgICAgMTIwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2OCxcbiAgICAgICAgOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDk2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0NixcbiAgICAgICAgMTU0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzksXG4gICAgICAgIDQyLFxuICAgICAgICAyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MixcbiAgICAgICAgODcsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzksXG4gICAgICAgIDc2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU3LFxuICAgICAgICA4MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMixcbiAgICAgICAgMTU0LFxuICAgICAgICA2NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE2LFxuICAgICAgICA5OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg2LFxuICAgICAgICA4MixcbiAgICAgICAgMjMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgNixcbiAgICAgICAgMTk0LFxuICAgICAgICA0LFxuICAgICAgICA5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibXlOQU1XcUVRNE9VWk5zQzJLNlRGZzM0S29DdzE0cTArdTZIZmp3YlJvaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicEdBd2NMcThSTEtmU3llLWlXVjZvQVwiLFxuICBcInBob25lSWRcIjogXCIxNjZlMzk4MC1jODQ2LTQzMzItYjM1YS0yZTYzODBkYjA4ZTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgMjI4LFxuICAgICAgNCxcbiAgICAgIDIzMyxcbiAgICAgIDIxMixcbiAgICAgIDExOSxcbiAgICAgIDE1MyxcbiAgICAgIDk5LFxuICAgICAgMzcsXG4gICAgICAxMDAsXG4gICAgICA2OSxcbiAgICAgIDcsXG4gICAgICAyNDUsXG4gICAgICAxNTcsXG4gICAgICAyMzgsXG4gICAgICAyMzYsXG4gICAgICAxMjcsXG4gICAgICAyNTAsXG4gICAgICAyMTksXG4gICAgICAyMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDEzMSxcbiAgICAgIDMyLFxuICAgICAgMixcbiAgICAgIDc1LFxuICAgICAgMTU3LFxuICAgICAgMTY0LFxuICAgICAgNzEsXG4gICAgICAyMixcbiAgICAgIDI0NCxcbiAgICAgIDI0NCxcbiAgICAgIDIyMSxcbiAgICAgIDc1LFxuICAgICAgMTMzLFxuICAgICAgNTIsXG4gICAgICAxMDQsXG4gICAgICAyMDAsXG4gICAgICAxNTksXG4gICAgICAxMDUsXG4gICAgICAyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ083bjZNVUNFTzd4K3JRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQStYWGh3ZkNVSGVuSkJaUDVxNXlybWYvNlJpZjBPZmhYanV4ejhJRmQzZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4WGk1Q0lDVU1aVGJTK0pTaHRzZUdDNTdJakxMdzhpelNkdTNoTlpjVXBRUHlRd0hmZHBadldsQTRwUnQvSnREeTQyTm9CLzBTVGp3SlUyMmE4UkdnUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLTStHR1RBYWNtN3R6UTErTWNQSW5jRVVOTDcxbHRjdlk1SU44cFZ5UG1lSEdmTUxBM3Z1Ynk3ZlRheEtxdXlUVnRtK0tuUE9kRDhzdGZCVFQyeThnQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzA2OTM5Njg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjUyODA2NTkwMTMyMjQ1OjJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTMwNjkzOTY4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjc4MDY2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUDlDXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQOUMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzd2dsbEZlZUNxYzY0Z0hlMitqUGNLdHNQZW15KzY3Z2dBRnY2bVM5ZjB3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY4MzI5MTYzMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzE3MDA3NTY3NTM2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDlELmpzb24iOiAie1wia2V5RGF0YVwiOlwiR2xoWXJHLy8rM3lnci9hNlZma0plSlBQcFVxSWc3L3JrcWVGekFIOFpXaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2ODMyOTE2MzAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTYxODI4ODE3M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ chaos²²¹-ᴍᴅ 』```",*『sᴜʙsᴄʀɪʙᴇ • THE KEVIN FACTOR』*\n youtube.com/@_thekevinfactor"),
 
  author : process.env.PACK_AUTHER|| "ChaosCipher",
  packname: process.env.PACK_NAME || "C",
  botname : process.env.BOT_NAME  || "chaos-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x chaos",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "CHAOS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
