const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lagos, Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Lagos/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,94772108460";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94772108460";




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
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_11_04_17_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiV0s3aFBOWjJpemxRK3ZmaUg4YlJ5TWlRelB5TDhrMTd3cFRtZ0lhZkhXWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlRoa0VHNFVKME1aaW5YVWVqSm9GWG9QSi9STG85dThURDA4L1lTb0RzV1E9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiRVB0d001K1QyZEdUNStuY1hKdFBNZ2crR1h3WTd2NWVPaWlBMnBrVCtrMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkpvZ0Mwdk5hWVZIdXljTFIxVTQ3VU5ic0VkRGxLS0h0dGZ0aXgxMUlDRE09XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwic0h5VjJSZno4UU9tMlN3cm9UUE5pNTduWTV2Y3JMUkcxalR0V0VjTVZrVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlN5dXhFUnNTQXJQYlozckRZdnlCRjFwS3hUSnh4azhZSk1KTW51eDlxeEk9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJrQTgrVm5JdXNTM01JRUJzMW1IeDQ4TWErVFpNM2xRLzVFdVkwaTRvaTIwPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiU2V3RTczZERBdUcyMkhjeGxlZzkwMDFSdHZRMXhoWW5PNWYycjhyY3NCWT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJuTFdBbXlOSFFndllrNVAwc1BzanM1VGdnemk3MHcyTm1LcEtQV3RyVkY3TFFuYWN2amVNdVdzL1hyNW5xVHV2a3lJWjZqQS9wNVFQMkhiWjdaT1lDQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjUwLFwiYWR2U2VjcmV0S2V5XCI6XCJJaDB1TW53aHh5RGlhdkF2Vm5nT2tjV0tEOTY0SmZQSDF5K3BjZ202aXM4PVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiZm9JUlhPZ05SSU9HM0hFbU5xb054d1wiLFwicGhvbmVJZFwiOlwiNDBmZDA5ZGItNGE0My00ZjdiLWJhNzQtNzJhN2E2NmMwNTQ2XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJHSkQ4Y2pVM1lHMk02Qzh2VVVmRGhBRzBFNWc9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImhhblI2aVpPeU40VnpXTk84dXAxY0pjVm8zbz1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDSmk0bzQ4REVKZnMvYkFHR0FVZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIkRwZ3VEemZoU3d2NUNpREY4UFB3K2Q2eklmNW45SG9OZjlYdmsrNzdHMEU9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJoSWxFQ0dNd05UUlFoQmYxNjkxSk84V1NSbGYycFBQbFJsaWF3amVCUG55Y3NFZWZncHJEY3FRNUJwek0rTVQ3UVltRllQNGdSSG4weDFabXAxMWZoQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcInVzL2llSzdpbE9talhUemxjeHFlR0ZWMXBRSHRLdU9sTGpKOU1ERmpiYitBMDR4SWRkb3BwQWpvTnd0WjN1RTVOU3JSV3Jwb0RUV1NxSDZ6c3owZENnPT1cIn0sXCJtZVwiOntcImlkXCI6XCIyMzQ4MTMwNjkzOTY4OjE0QHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjE5MTEyMTgxNjg2Njg5NDoxNEBsaWRcIixcIm5hbWVcIjpcIuqngeC8kuKYo++4jvCdk5LwnZOX8J2TkPCdk57wnZOi4pij77iO4LyS6qeCXCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjM0ODEzMDY5Mzk2ODoxNEBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJRNllMZzgzNFVzTCtRb2d4ZkR6OFBuZXN5SCtaL1I2RFgvVjc1UHUreHRCXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiaXBob25lXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzEzMzM3ODgyLFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUMvalwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNfX2guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHRHhLdk42MFNMMHRsRzJWOW9uOEVMS2dTUjRZa05FNFc1UGJZMU42WjV3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgzNzM0NDI4MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzEyMTYxNzk4ODM3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ19fai5qc29uIjogIntcImtleURhdGFcIjpcInZpc3dmSTM2UWMrNGxvYUtZMjEzVUJFRUNBcWljYVdLUTdCWlNsU2Y2VlE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODM3MzQ0MjgwLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbNCwxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxMzMzNzY3MTU4MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©CHAOSCIPHER²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "CHAOSCIPHER",
  packname: process.env.PACK_NAME || ".",
  botname : process.env.BOT_NAME  || "CHAOSCIPHER",
  ownername:process.env.OWNER_NAME|| "CHAOS",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
