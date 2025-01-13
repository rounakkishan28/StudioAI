const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

   export const GenerateAIVideoData_AiModel = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "export const Prompt=`{\n  \"totalDuration\": 10,\n  \"frameList\": [\n    {\n      \"image\": \"/footage.png\",\n      \"text\": \"Exciting\",\n      \"textColor\": \"rgba(0,0,0,1)\",\n      \"fontSize\": 34,\n      \"duration\": 0.5,\n      \"fontFamily\": \"Bungee\",\n      \"animation\": \"slideLeft\",\n      \"bgColor\": \"#FFFFFF\",\n      \"sticker\": \"https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.gif\",\n      \"stickerSize\": 0\n    }],\n\"selectedFrame\": 0,\n  \"music\": \"audio1.mp3\"\n}, Depends on providerr JSON data, generate Text Promo with emoji video on topic :{userTopic}, duration of video is {userDuration} seconds and set image as \"image\": \"/footage.png\", keep 1 to 2 words  and 0.5 or 1 seconds of duration for each frame and give do not add same bgColor and textColor and fontFamily select between (Outfit, Bungee,Anton,Rowdies) Also Can add gradientColor to bgColor field when needed , Select the animation option from (zoomIn,zoomOut,slideIn,slideOut,slideUp,slideDown,wobble,bounce,fadeIn,fadeOut)  . Give me response in JSON format only `"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"totalDuration\": 5,\n  \"frameList\": [\n    {\n      \"image\": \"/footage.png\",\n      \"text\": \"Amazing Offer\",\n      \"textColor\": \"rgba(255,255,255,1)\",\n      \"fontSize\": 34,\n      \"duration\": 0.5,\n      \"fontFamily\": \"Bungee\",\n      \"animation\": \"zoomIn\",\n      \"bgColor\": \"#007bff\", \n      \"sticker\": \"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/party-popper_tada_1f389.png\",\n      \"stickerSize\": 0.2\n    },\n    {\n      \"image\": \"/footage.png\",\n      \"text\": \"Shop Now!\",\n      \"textColor\": \"rgba(0,0,0,1)\",\n      \"fontSize\": 34,\n      \"duration\": 0.5,\n      \"fontFamily\": \"Anton\",\n      \"animation\": \"slideDown\",\n      \"bgColor\": \"linear-gradient(to right, #f06d06, #f0c206)\",\n      \"sticker\": \"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/shopping-bags_1f6cd.png\",\n      \"stickerSize\": 0.2\n    }\n  ],\n  \"selectedFrame\": 0,\n  \"music\": \"audio1.mp3\"\n}\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
