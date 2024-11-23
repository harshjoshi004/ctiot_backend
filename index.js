const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai"); // Import the Gemini library
require('dotenv').config();

const app = express();
const PORT = 8000;

app.use(express.json());

app.post('/laundry', async (req, res) => {
    try {
        const { name, gender, region, age } = req.body;

        // Ensure required parameters are provided
        if (!name || !gender || !region || !age) {
            return res.status(400).json({ error: "All fields (name, gender, region, age) are required." });
        }

        const prompt = "There is a software that sends people ads of your shop" +
        "they come near your shop. To make them come to your shop you need to make" +
        "a personalised ad for them. As this service is near distance, you can " +
        "assume that the person is near your shop. Ans use that to invite them in" +
        "You are Campus Laundry. You offer premium laundry services including" +
        "washing, ironing, dry cleaning, and folding. Whether it’s casual wear," +
        "office wear, delicate fabrics, or heavy items like curtains and blankets," +
        "you handle it all with care. You use eco-friendly detergents and provide" +
        "quick turnaround times. Customers can also opt for express services for" +
        "urgent needs. Keep in mind, it’s not a self-service laundromat but a" +
        "professional laundry service. Now you have a user" +
        `Write a compelling 150-word ad for ${name}, a ${age}-year-old ${gender}` +
        `person from ${region}. Mention how the shop can help with their specific` +
        "laundry needs based on their region, age group, and lifestyle." +
        "Include their name, region, and personal details to make the ad feel" +
        "customized just for them. Always start the ad by mentioning" +
        "that they are very near to your shop and it wouldn't hurt to try.";

        // Initialize the Gemini API client
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Generate the advertisement content
        const result = await model.generateContent(prompt);

        const advertisement = result.response.text(); // Get the generated text

        res.json({ 
            message: advertisement
        });
    } catch (error) {
        console.error('Error generating advertisement:', error);

        // Return error details for debugging purposes
        res.status(500).json({ 
            error: 'Failed to generate advertisement', 
            details: error.message 
        });
    }
});

app.post('/babajuice', async (req, res) => {
    try {
        const { name, gender, region, age } = req.body;

        // Ensure required parameters are provided
        if (!name || !gender || !region || !age) {
            return res.status(400).json({ error: "All fields (name, gender, region, age) are required." });
        }

        const prompt = "There is a software that sends people ads of your shop" +
        "they come near your shop. To make them come to your shop you need to make" +
        "a personalised ad for them. As this service is near distance, you can " +
        "assume that the person is near your shop. Ans use that to invite them in" +
        "You are Baba-Juice Shop. You sell Packaged Edibles and Fresh Juices/Fruits" +
        "everything like fruits, juices, patties, burgers, shakes" +
        "snacks, chips, drinks, gujrati snacks, rajasthani bhujia.." +
        "everything you can think of. But its not a restaurant "+
        "Its just a shop, keep that in mind. Now you have a user" +
        `Write a compelling 150-word ad for ${name}, a ${age}-year-old ${gender}`+
        `person from ${region}. Mention how the shop can get them stuff that` +
        "the shop can offer them like things specific to their region, their age " +
        "group, their gender. Try to make the ad as personalised as it can get." +
        "mention their names, regions and personal information to make them feel " +
        "like the ad is made just for them. Always start the ad by mentioning "+
        "that they are very near to your shop and it wouldn't hurt to try";

        // Initialize the Gemini API client
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Generate the advertisement content
        const result = await model.generateContent(prompt);

        const advertisement = result.response.text(); // Get the generated text

        res.json({ 
            message: advertisement
        });
    } catch (error) {
        console.error('Error generating advertisement:', error);

        // Return error details for debugging purposes
        res.status(500).json({ 
            error: 'Failed to generate advertisement', 
            details: error.message 
        });
    }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
