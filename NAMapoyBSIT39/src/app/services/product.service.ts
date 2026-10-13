import { Injectable } from '@angular/core';
import { Product } from '../initialization/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Razer Blackwidow V4 Mechanical Gaming Keyboard (Green Switch)',
      price: 9595,
      imageUrl: 'https://ecommerce.datablitz.com.ph/cdn/shop/files/8887910072356.jpg?v=1689751014&width=1200',
      description: 'Run your battlestation at optimal capacity with the perfect control hub for your PC setup. Packed with macro and media keys, gain access to advanced commands and shortcuts, as you turn up the immersion with a highly evolved mechanical keyboard that goes all out with Razer Chroma™ RGB.'
    },
    {
      id: 2,
      name: 'Steelseries Rival 600 Gaming Mouse (PN62446)',
      price: 3095,
      imageUrl: 'https://ecommerce.datablitz.com.ph/cdn/shop/products/27983260_1160376874104981_3613326058912380992_o.png?v=1676780125&width=600',
      description: 'Introducing the world’s most advanced sensor system, the TrueMove3+. The new dual sensor system combines true 1 to 1 tracking with breakthrough state-of-the art lift off distance detection. For the first time ever, you are in complete control - even on lift off.'
    },
    {
      id: 3,
      name: 'Onikuma X26 Professional Gaming Headset (Black)',
      price: 750,
      imageUrl: 'https://ecommerce.datablitz.com.ph/cdn/shop/files/800x800_681700492A-1.jpg?v=1686211384&width=800',
      description: 'ONIKUMA X26 E-sports Gaming Headset with RGB Lighting Noise Reduction Wired Headphone - Pink Colorful RGB lighting, looks so cool Adaptive suspension head beam, suitable for different head shape 360° omnidirectional mic, effectively reduce ambient noise, pick up voice accurately.'
    },
    {
      id: 4,
      name: 'Redragon GM211 Nebula Cardioid Pointing Mode Gaming Microphone',
      price: 1350,
      imageUrl: 'https://ecommerce.datablitz.com.ph/cdn/shop/files/6950376723574.jpg?v=1744602173&width=1200',
      description: 'Featuring dynamic six-color gradient lighting synced to your rhythm and a versatile cardioid pickup pattern, this microphone captures studio-grade audio with its built-in sound card and 96kHz sampling rate. Seamlessly control your broadcast on the fly using intuitive touch volume adjustment and instant one-touch muting.'
    },
    {
      id: 5,
      name: 'Dragonwar GC-027 Gaming & Office Chair (Black)',
      price: 5495,
      imageUrl: 'https://ecommerce.datablitz.com.ph/cdn/shop/files/GC027V2-1.jpg?v=1767840844&width=900',
      description: 'Elevate your gaming and work experience with the Dragonwar GC-027 Gaming & Office Chair. Designed for both performance and aesthetics, this chair combines ergonomic support with a sleek, modern design.'
    },
    {
      id: 6,
      name: 'GameSir G7 Pro 8K PC Wireless eSports Gaming Controller for PC (Nioh 3)',
      price: 3995,
      imageUrl: 'https://ecommerce.datablitz.com.ph/cdn/shop/files/0850074931669_b943ae12-cfe1-4245-a642-9c0f24a2b597.jpg?v=1779086849&width=1200',
      description: 'Designed for pro-level performance, the Gen-2 TMR sticks still use magnetic technology to eliminate physical contact, delivering long-lasting anti-stick drift reliability. At the same time, they offer smoother, more linear control and ultra-low power consumption, providing precise and responsive gameplay for competitive gamers.'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}