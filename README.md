# 💕 Valentine's Day Proposal Website

A cute, romantic, and interactive single-page website to ask that special someone to be your Valentine! Built with pure HTML, CSS, and JavaScript - no frameworks needed.

## 🌟 Live Demo

[View Live Demo](https://your-netlify-link.netlify.app)

## ✨ Features

### 🎨 Visual Design
- **Animated gradient background** with soft pink and red romantic colors
- **Floating hearts animation** continuously across the screen
- **Cute kitten GIF** with bounce animation
- **Smooth transitions** and fade-in effects throughout
- **Fully responsive** design for mobile, tablet, and desktop

### 🎵 Background Music
- Romantic background music that plays softly
- **Mute/Unmute toggle** button in the top-right corner
- Auto-plays on first user interaction

### 🎯 Interactive Buttons

#### YES Button 💖
When clicked, triggers a celebration:
- Hides the question and buttons
- Shows **confetti explosion** animation
- Displays celebration message: "YAYYYYY 💕 You just made me the happiest person alive!"
- Plays a **cute celebration video**
- Increases floating hearts intensity

#### NO Button 💔
The fun part! When hovering or clicking:
- **Randomly moves** to different positions on screen
- **Gradually shrinks** in size with each attempt
- Displays **funny messages** like:
  - "Are you sure? 🥺"
  - "Think again 😼"
  - "You can't escape love 😎"
  - "Nice try 😂"
  - "Please? 🥹"
- After 5 attempts, changes text to: "Still no? Really? 😭"
- YES button grows slightly larger each time NO is clicked

### 🎊 Celebration Effects
- **Custom confetti animation** using HTML5 Canvas
- Colorful confetti particles with rotation and physics
- Continuous confetti generation for 5 seconds
- Burst of floating hearts across the screen

## 🛠️ Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Styling, animations, and responsive design
- **JavaScript (Vanilla)** - Interactive behaviors and canvas animations
- **Google Fonts** - Pacifico and Poppins fonts

## 📁 Project Structure

```
VALEN/
│
├── index.html                      # Main HTML file (all-in-one)
├── happy.mp4                       # Celebration video
├── Dil Tu Jaan Tu - Gurnazar.mp3  # Background music
└── README.md                       # Project documentation
```

## 🚀 Getting Started

### Option 1: Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Suhasneddy/VALEN.git
   cd VALEN
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   open index.html  # macOS
   xdg-open index.html  # Linux
   start index.html  # Windows
   ```

### Option 2: Deploy to Netlify

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up or log in
3. Drag and drop all files (index.html, happy.mp4, and the .mp3 file)
4. Get your live link instantly!

### Option 3: Deploy to GitHub Pages

1. Push code to GitHub
2. Go to repository Settings → Pages
3. Select branch (main) and root folder
4. Save and get your GitHub Pages link

## 🎨 Customization

### Change Colors
Edit the CSS gradient in the `<style>` section:
```css
background: linear-gradient(-45deg, #ff9a9e, #fad0c4, #ffecd2, #fcb69f);
```

### Change Kitten GIF
Replace the image source:
```html
<img src="YOUR_GIF_URL" alt="Cute Kitten" class="kitten-gif">
```

### Change Funny Messages
Edit the JavaScript array:
```javascript
const funnyMessages = [
    "Your custom message 1",
    "Your custom message 2",
    // Add more...
];
```

### Change Music
Replace the audio source:
```html
<source src="your-music-file.mp3" type="audio/mpeg">
```

### Change Video
Replace the video source:
```html
<source src="your-video.mp4" type="video/mp4">
```

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Key Features Breakdown

### 1. Animated Gradient Background
Uses CSS keyframes to create a shifting gradient effect that loops infinitely.

### 2. Floating Hearts
JavaScript dynamically creates heart emojis that float upward with random positions, sizes, and durations.

### 3. NO Button Evasion
Calculates random positions within viewport bounds and applies transform scaling to shrink the button progressively.

### 4. Confetti Animation
Custom particle system using HTML5 Canvas with:
- Random colors from romantic palette
- Physics-based movement (gravity, horizontal drift)
- Rotation animation
- Particle lifecycle management

### 5. Responsive Design
Media queries ensure the layout adapts to:
- Desktop (>768px)
- Tablet (768px - 480px)
- Mobile (<480px)

## 💡 How It Works

1. **Page Load**: Gradient animation starts, hearts begin floating
2. **User Interaction**: Music starts playing on first click
3. **NO Button Hover/Click**: Button moves away, shrinks, shows funny message
4. **YES Button Click**: 
   - Hides main content
   - Triggers confetti explosion
   - Shows celebration message and video
   - Increases heart animation frequency

## 🤝 Contributing

Feel free to fork this project and customize it for your own romantic proposal! Pull requests are welcome.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 💖 Credits

Created with love for that special someone ❤️

## 🎉 Tips for Use

1. **Test before sending**: Make sure all files (HTML, video, music) are uploaded
2. **Check on mobile**: Test the responsive design on your phone
3. **Share the link**: Send the deployed link, not the files
4. **Timing**: Send it at the perfect romantic moment! 🌹

---

Made with ❤️ by [Suhas](https://github.com/Suhasneddy)

**Happy Valentine's Day! 💕**
