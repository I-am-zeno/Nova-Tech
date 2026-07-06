export interface ProductDetail {
  description: string;
  features: string[];
  specifications: { label: string; value: string }[];
}

export const productDetails: Record<string, ProductDetail> = {
  // ── Android Phones ──
  "novaphone-pro": {
    description:
      "The Galaxy S25 Ultra represents the pinnacle of mobile engineering. Featuring a stunning 6.7-inch LTPO OLED display with a 120Hz adaptive refresh rate, the Pro delivers buttery-smooth visuals while intelligently conserving battery. Powered by the latest flagship processor and 12GB of RAM, every task — from gaming to multitasking — feels instantaneous.",
    features: [
      "6.7-inch LTPO OLED display with 120Hz refresh rate",
      "Flagship octa-core processor with 12GB RAM",
      "Triple-lens pro-grade camera system with night mode",
      "All-day battery with 65W ultra-fast charging",
      "IP68 water and dust resistance",
      "Under-display ultrasonic fingerprint sensor",
    ],
    specifications: [
      { label: "Display", value: "6.7\" LTPO OLED, 120Hz, HDR10+" },
      { label: "Processor", value: "Octa-core 3.2GHz" },
      { label: "RAM", value: "12GB LPDDR5" },
      { label: "Storage", value: "256GB / 512GB" },
      { label: "Battery", value: "5000mAh, 65W wired + 25W wireless" },
      { label: "Camera", value: "50MP + 48MP + 12MP triple rear" },
      { label: "Front Camera", value: "32MP" },
      { label: "OS", value: "Android 15" },
      { label: "Connectivity", value: "5G, Wi-Fi 7, Bluetooth 5.4" },
      { label: "Weight", value: "206g" },
    ],
  },
  "novaphone-fold": {
    description:
      "The Galaxy Z Fold 7 redefines what a smartphone can be. Unfold a compact device into a full 7.6-inch tablet-like experience. The ultra-thin glass display and precision hinge mechanism make every fold feel solid and satisfying.",
    features: [
      "7.6-inch foldable LTPO OLED main display",
      "6.2-inch AMOLED cover display",
      "Custom hinge rated for 400,000 folds",
      "Flagship processor with 12GB RAM",
      "Triple camera system with telephoto lens",
      "Split-screen multitasking with optimized apps",
    ],
    specifications: [
      { label: "Main Display", value: "7.6\" Foldable LTPO OLED, 120Hz" },
      { label: "Cover Display", value: "6.2\" AMOLED, 120Hz" },
      { label: "Processor", value: "Octa-core 3.36GHz" },
      { label: "RAM", value: "12GB LPDDR5" },
      { label: "Storage", value: "256GB / 512GB / 1TB" },
      { label: "Battery", value: "4400mAh, 45W wired + 15W wireless" },
      { label: "Camera", value: "50MP + 12MP + 10MP triple rear" },
      { label: "Front Camera", value: "10MP + 4MP under-display" },
      { label: "OS", value: "Android 15" },
      { label: "Connectivity", value: "5G, Wi-Fi 7, Bluetooth 5.3" },
      { label: "Weight", value: "253g" },
    ],
  },
  "novaphone-x": {
    description:
      "The Pixel 10 Pro pushes boundaries with a premium ceramic unibody design and an immersive edge-to-edge display. Every detail has been meticulously crafted to deliver a flagship experience that stands out in both form and function.",
    features: [
      "6.9-inch LTPO OLED curved display with 144Hz",
      "Premium ceramic unibody construction",
      "200MP primary camera with advanced AI processing",
      "16GB RAM for ultimate multitasking",
      "Under-display selfie camera technology",
      "Ultra-wideband (UWB) for precise location",
    ],
    specifications: [
      { label: "Display", value: "6.9\" LTPO OLED, 144Hz, HDR10+" },
      { label: "Processor", value: "Octa-core 3.36GHz" },
      { label: "RAM", value: "16GB LPDDR5" },
      { label: "Storage", value: "256GB / 512GB / 1TB" },
      { label: "Battery", value: "5500mAh, 80W wired + 50W wireless" },
      { label: "Camera", value: "200MP + 48MP + 12MP + 8MP quad rear" },
      { label: "Front Camera", value: "32MP (under-display)" },
      { label: "OS", value: "Android 15" },
      { label: "Connectivity", value: "5G, Wi-Fi 7, Bluetooth 5.4, UWB" },
      { label: "Weight", value: "218g" },
    ],
  },
  "novaphone-air": {
    description:
      "At just 162 grams, the OnePlus 13 proves that power doesn't have to be heavy. A sleek, ultra-light design houses a capable processor, vibrant AMOLED display, and a battery that easily lasts a full day.",
    features: [
      "6.5-inch AMOLED display with 90Hz refresh rate",
      "Ultra-lightweight design at just 162g",
      "48MP dual camera with AI scene detection",
      "4500mAh battery with 33W fast charging",
      "In-display fingerprint sensor",
      "Dual stereo speakers with Dolby Atmos",
    ],
    specifications: [
      { label: "Display", value: "6.5\" AMOLED, 90Hz, HDR10" },
      { label: "Processor", value: "Octa-core 2.8GHz" },
      { label: "RAM", value: "8GB LPDDR5" },
      { label: "Storage", value: "128GB / 256GB" },
      { label: "Battery", value: "4500mAh, 33W wired" },
      { label: "Camera", value: "48MP + 8MP dual rear" },
      { label: "Front Camera", value: "16MP" },
      { label: "OS", value: "Android 15" },
      { label: "Connectivity", value: "5G, Wi-Fi 6, Bluetooth 5.3" },
      { label: "Weight", value: "162g" },
    ],
  },

  // ── iPhones ──
  "iphone-pro-max": {
    description:
      "The iPhone Pro Max is the most advanced iPhone ever. A17 Pro chip delivers desktop-class performance, while the pro camera system with LiDAR scanner pushes computational photography to new heights. The titanium design is both stunning and durable.",
    features: [
      "6.9-inch Super Retina XDR OLED with ProMotion 120Hz",
      "A17 Pro chip with 6-core GPU",
      "Pro camera system: 48MP + 12MP + 12MP + LiDAR",
      "Titanium frame with textured matte glass back",
      "All-day battery with up to 29 hours video playback",
      "Action button for customizable shortcuts",
    ],
    specifications: [
      { label: "Display", value: "6.9\" Super Retina XDR OLED, 120Hz" },
      { label: "Chip", value: "A17 Pro, 6-core CPU + 6-core GPU" },
      { label: "RAM", value: "8GB" },
      { label: "Storage", value: "256GB / 512GB / 1TB" },
      { label: "Battery", value: "Up to 29h video playback" },
      { label: "Camera", value: "48MP + 12MP + 12MP triple + LiDAR" },
      { label: "Front Camera", value: "12MP TrueDepth" },
      { label: "OS", value: "iOS 19" },
      { label: "Connectivity", value: "5G, Wi-Fi 7, Bluetooth 5.3, UWB" },
      { label: "Weight", value: "225g" },
    ],
  },
  "iphone-pro": {
    description:
      "Built for creativity and productivity, the iPhone Pro combines the powerful A17 Pro chip with a sophisticated pro camera system. The lightweight titanium design makes it comfortable to hold while delivering uncompromising performance.",
    features: [
      "6.3-inch Super Retina XDR OLED with ProMotion",
      "A17 Pro chip with hardware-accelerated ray tracing",
      "48MP pro camera system with telephoto",
      "Titanium design — strong yet lightweight",
      "USB-C with USB 3 speeds up to 10Gbps",
      "Emergency SOS via satellite",
    ],
    specifications: [
      { label: "Display", value: "6.3\" Super Retina XDR OLED, 120Hz" },
      { label: "Chip", value: "A17 Pro, 6-core CPU + 6-core GPU" },
      { label: "RAM", value: "8GB" },
      { label: "Storage", value: "128GB / 256GB / 512GB" },
      { label: "Battery", value: "Up to 26h video playback" },
      { label: "Camera", value: "48MP + 12MP + 12MP triple rear" },
      { label: "Front Camera", value: "12MP TrueDepth" },
      { label: "OS", value: "iOS 19" },
      { label: "Connectivity", value: "5G, Wi-Fi 7, Bluetooth 5.3, UWB" },
      { label: "Weight", value: "187g" },
    ],
  },
  "iphone-air": {
    description:
      "The iPhone Air is brilliantly light — at just 170 grams it's one of the most portable iPhones ever. Packed with the A18 chip and a stunning OLED display, it delivers a premium experience without the weight.",
    features: [
      "6.1-inch Super Retina XDR OLED display",
      "A18 chip with 5-core GPU",
      "Advanced dual-camera system with night mode",
      "Ultra-light design at just 170g",
      "Ceramic Shield front cover",
      "IP68 water resistance",
    ],
    specifications: [
      { label: "Display", value: "6.1\" Super Retina XDR OLED, 60Hz" },
      { label: "Chip", value: "A18, 6-core CPU + 5-core GPU" },
      { label: "RAM", value: "8GB" },
      { label: "Storage", value: "128GB / 256GB" },
      { label: "Battery", value: "Up to 22h video playback" },
      { label: "Camera", value: "48MP + 12MP dual rear" },
      { label: "Front Camera", value: "12MP TrueDepth" },
      { label: "OS", value: "iOS 19" },
      { label: "Connectivity", value: "5G, Wi-Fi 6E, Bluetooth 5.3" },
      { label: "Weight", value: "170g" },
    ],
  },
  "iphone-se": {
    description:
      "The iPhone SE delivers essential iPhone power at an accessible price. Powered by the A18 chip, it offers incredible performance in a classic, compact design that fits perfectly in one hand.",
    features: [
      "4.7-inch Retina HD display with True Tone",
      "A18 chip with desktop-class performance",
      "12MP single-camera system with portrait mode",
      "Touch ID for secure authentication",
      "Compact design with home button",
      "IP67 water and dust resistance",
    ],
    specifications: [
      { label: "Display", value: "4.7\" Retina HD, True Tone" },
      { label: "Chip", value: "A18, 6-core CPU + 4-core GPU" },
      { label: "RAM", value: "6GB" },
      { label: "Storage", value: "64GB / 128GB / 256GB" },
      { label: "Battery", value: "Up to 18h video playback" },
      { label: "Camera", value: "12MP rear with portrait mode" },
      { label: "Front Camera", value: "7MP FaceTime HD" },
      { label: "OS", value: "iOS 19" },
      { label: "Connectivity", value: "5G, Wi-Fi 6, Bluetooth 5.3" },
      { label: "Weight", value: "148g" },
    ],
  },

  // ── Pro Series Watches ──
  "novawatch-ultra": {
    description:
      "The Galaxy Watch Ultra is built for the extremes. With a precision dual-frequency GPS, a 49mm titanium case, and a battery that lasts up to 72 hours in normal use, it's the ultimate companion for explorers, athletes, and professionals.",
    features: [
      "49mm titanium case with sapphire crystal",
      "Dual-frequency GPS for precision tracking",
      "Up to 72 hours battery life (36h normal use)",
      "Water resistant to 100m with dive computer",
      "85dB emergency siren for safety",
      "Precision dual-band GNSS positioning",
    ],
    specifications: [
      { label: "Case Size", value: "49mm titanium" },
      { label: "Display", value: "502×502 OLED, 2000 nits" },
      { label: "Processor", value: "Dual-core S10 SiP" },
      { label: "Battery", value: "Up to 72 hours (36h normal)" },
      { label: "Water Resistance", value: "100m (dive computer)" },
      { label: "Sensors", value: "HR, SpO2, depth, temperature" },
      { label: "Connectivity", value: "GPS + Cellular, Wi-Fi, Bluetooth 5.3" },
      { label: "Weight", value: "61g" },
    ],
  },
  "novawatch-pro": {
    description:
      "Professional-grade durability meets advanced health monitoring. The Pixel Watch 3 features a rugged titanium body, precision sensors, and comprehensive fitness tracking for those who demand the very best.",
    features: [
      "50mm titanium case with flat sapphire glass",
      "Multi-band GPS with GLONASS and Galileo",
      "ECG and blood oxygen monitoring",
      "Sleep tracking with sleep stages",
      "Always-on Retina display with 2000 nits",
      "Battery life up to 60 hours in low-power mode",
    ],
    specifications: [
      { label: "Case Size", value: "50mm titanium" },
      { label: "Display", value: "484×484 OLED, 2000 nits" },
      { label: "Processor", value: "Dual-core S10 SiP" },
      { label: "Battery", value: "Up to 60 hours (30h normal)" },
      { label: "Water Resistance", value: "50m" },
      { label: "Sensors", value: "HR, SpO2, ECG, temperature" },
      { label: "Connectivity", value: "GPS + Cellular, Wi-Fi, Bluetooth 5.3" },
      { label: "Weight", value: "57g" },
    ],
  },
  "novawatch-sport": {
    description:
      "Engineered for athletes who push their limits. The Galaxy Watch 7 offers precise workout tracking, advanced running metrics, and a lightweight aluminum design that won't weigh you down.",
    features: [
      "44mm aerospace-grade aluminum case",
      "Precision GPS with route tracking",
      "Advanced running form metrics",
      "Optical heart rate sensor with AI coaching",
      "Swim-proof with 50m water resistance",
      "Up to 28 hours battery life with GPS",
    ],
    specifications: [
      { label: "Case Size", value: "44mm aluminum" },
      { label: "Display", value: "448×368 OLED, 1000 nits" },
      { label: "Processor", value: "Dual-core S9 SiP" },
      { label: "Battery", value: "Up to 28h with GPS (18h normal)" },
      { label: "Water Resistance", value: "50m" },
      { label: "Sensors", value: "HR, SpO2, accelerometer, gyroscope" },
      { label: "Connectivity", value: "GPS, Wi-Fi, Bluetooth 5.3" },
      { label: "Weight", value: "36g" },
    ],
  },
  "novawatch-titan": {
    description:
      "The Garmin Fenix 8 is built for rugged endurance. Whether you're hiking remote trails or working in tough conditions, the titanium construction and outdoor-specific features keep you going.",
    features: [
      "47mm titanium case with reinforced glass",
      "Multi-GNSS support for challenging environments",
      "Barometric altimeter with compass",
      "Thermal, shock, and altitude resistance",
      "100m water resistance",
      "Battery life up to 14 days in basic mode",
    ],
    specifications: [
      { label: "Case Size", value: "47mm titanium" },
      { label: "Display", value: "466×466 OLED, 1500 nits" },
      { label: "Processor", value: "Dual-core S9 SiP" },
      { label: "Battery", value: "Up to 14 days basic (7 days normal)" },
      { label: "Water Resistance", value: "100m" },
      { label: "Sensors", value: "HR, SpO2, altimeter, compass, gyro" },
      { label: "Connectivity", value: "GPS + Cellular, Wi-Fi, Bluetooth 5.3" },
      { label: "Weight", value: "54g" },
    ],
  },

  // ── Essential Series Watches ──
  "novawatch-heritage": {
    description:
      "The Galaxy Watch Classic combines timeless design with modern technology. Featuring a luxurious gold finish and premium leather straps, it's a statement piece that seamlessly blends tradition with innovation.",
    features: [
      "40mm gold-toned stainless steel case",
      "Sapphire crystal display with anti-reflective coating",
      "ECG and blood oxygen monitoring",
      "Premium Italian leather strap included",
      "Always-on Retina display",
      "Wireless charging with magnetic dock",
    ],
    specifications: [
      { label: "Case Size", value: "40mm stainless steel (gold)" },
      { label: "Display", value: "396×484 OLED, 1000 nits" },
      { label: "Processor", value: "Dual-core S9 SiP" },
      { label: "Battery", value: "Up to 18 hours normal use" },
      { label: "Water Resistance", value: "50m" },
      { label: "Sensors", value: "HR, SpO2, ECG, accelerometer" },
      { label: "Connectivity", value: "GPS, Wi-Fi, Bluetooth 5.3, NFC" },
      { label: "Weight", value: "42g" },
    ],
  },
  "novawatch-classic": {
    description:
      "Timeless elegance redefined. The Fossil Gen 7 features a polished stainless steel case and a rich AMOLED display. It's designed for those who appreciate craftsmanship and refuse to compromise on style.",
    features: [
      "42mm stainless steel case with polished finish",
      "Always-on AMOLED display",
      "Heart rate and SpO2 monitoring",
      "Interchangeable strap system",
      "Sleep tracking with REM analysis",
      "50m water resistance",
    ],
    specifications: [
      { label: "Case Size", value: "42mm stainless steel" },
      { label: "Display", value: "396×484 OLED, 1000 nits" },
      { label: "Processor", value: "Dual-core S9 SiP" },
      { label: "Battery", value: "Up to 18 hours normal use" },
      { label: "Water Resistance", value: "50m" },
      { label: "Sensors", value: "HR, SpO2, accelerometer, gyroscope" },
      { label: "Connectivity", value: "GPS, Wi-Fi, Bluetooth 5.3, NFC" },
      { label: "Weight", value: "40g" },
    ],
  },
  "novawatch-elegance": {
    description:
      "Style meets substance. The Huawei Watch GT 5 features a stunning rose gold finish with a slim profile that complements any outfit. Advanced health tracking is wrapped in an unmistakably elegant design.",
    features: [
      "38mm rose gold stainless steel case",
      "Slim profile at just 10.7mm thick",
      "Advanced health and wellness tracking",
      "Fashion-forward Milanese loop band",
      "Always-on display with customizable faces",
      "Fast wireless charging",
    ],
    specifications: [
      { label: "Case Size", value: "38mm stainless steel (rose gold)" },
      { label: "Display", value: "352×430 OLED, 800 nits" },
      { label: "Processor", value: "Dual-core S9 SiP" },
      { label: "Battery", value: "Up to 18 hours normal use" },
      { label: "Water Resistance", value: "30m" },
      { label: "Sensors", value: "HR, SpO2, accelerometer" },
      { label: "Connectivity", value: "GPS, Wi-Fi, Bluetooth 5.3, NFC" },
      { label: "Weight", value: "32g" },
    ],
  },
  "novawatch-air": {
    description:
      "Your everyday companion. The Galaxy Watch FE is lightweight, comfortable, and packed with essential health and fitness features. It's the perfect smartwatch for anyone who wants to stay connected and active.",
    features: [
      "45mm lightweight aluminum case",
      "Bright OLED display with always-on option",
      "24/7 heart rate and activity tracking",
      "Built-in GPS for outdoor workouts",
      "Sleep monitoring with readiness score",
      "Up to 36 hours battery life",
    ],
    specifications: [
      { label: "Case Size", value: "45mm aluminum" },
      { label: "Display", value: "396×484 OLED, 1000 nits" },
      { label: "Processor", value: "Dual-core S9 SiP" },
      { label: "Battery", value: "Up to 36 hours (18h with always-on)" },
      { label: "Water Resistance", value: "50m" },
      { label: "Sensors", value: "HR, SpO2, accelerometer, gyroscope" },
      { label: "Connectivity", value: "GPS, Wi-Fi, Bluetooth 5.3, NFC" },
      { label: "Weight", value: "30g" },
    ],
  },
};
