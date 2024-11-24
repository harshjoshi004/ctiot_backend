# Personalized Advertisement Generator Backend

This is a Node.js backend application that generates highly personalized advertisements for businesses using **Google Gemini Generative AI**. The application allows businesses to create customized, location-aware advertisements for their potential customers based on demographic information.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [How It Works](#how-it-works)
4. [Setup Instructions](#setup-instructions)
5. [API Endpoints](#api-endpoints)
6. [Error Handling](#error-handling)
7. [Dependencies](#dependencies)
8. [Contributing](#contributing)
9. [License](#license)

---

## Overview

This application uses the **Google Gemini Generative AI** to craft compelling advertisements tailored to individual users. By taking into account the user's **name**, **age**, **gender**, and **region**, the system generates a unique ad that aligns with their preferences and the offerings of the business.

Current supported businesses:
- **Campus Laundry**: A professional laundry service.
- **Baba-Juice Shop**: A shop offering fresh juices, snacks, and packaged edibles.

---

## Features

- **Dynamic Advertisement Generation**:
  - Generates personalized ads in real-time based on user demographics and proximity to the shop.
- **Shop-Specific Prompts**:
  - Ads are uniquely tailored for each business, highlighting their specific products and services.
- **AI-Powered Content**:
  - Integrates **Google Gemini Generative AI** to produce high-quality, engaging content.
- **JSON-Based API**:
  - Simple RESTful API for generating ads programmatically.

---

## How It Works

1. **User Data Input**:
   - The API accepts a JSON payload with the user's details (`name`, `gender`, `region`, `age`).
2. **Prompt Generation**:
   - A unique prompt is dynamically created for the specified business, embedding the user data.
3. **AI Model Execution**:
   - The **Google Gemini Generative AI** processes the prompt using the `gemini-1.5-flash` model to generate a custom ad.
4. **Ad Delivery**:
   - The personalized advertisement is returned in the API response.

---

## Setup Instructions

### Prerequisites

1. **Node.js**: Ensure you have Node.js installed (version 14 or higher recommended).
2. **Google Gemini API Key**: Obtain an API key from the [Google Generative AI platform](https://cloud.google.com/generative-ai).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/personalized-ad-backend.git
   cd personalized-ad-backend
