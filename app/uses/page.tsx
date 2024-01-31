import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
  description:
    "Here's what tech I'm currently using for coding, videos, and music.",
};

export default function UsesPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Atualmente estou usando
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="computer-office">Computer / Office</h3>
        <ul>
          <li>13&quot; Macbook Air (M2, 16GB, 1TB)</li>
          <li>32&quot; Monitor Agon Curvo 144Hz</li>
          <li>Mouse Logitech MX Master 3 </li>
          <li>Teclado Logitech K380</li>
          <li>Luminária de mesa Baseus</li>
        </ul>
        <h3 id="coding">Coding</h3>
        <ul>
          <li>
            Editor: VSCode (
            <a href="https://gist.github.com/leerob/e7883ab35d900b8cbb684ac77e7c4703">
              Settings / Extensions
            </a>
            )
          </li>
          <li>Theme: Min Dark</li>
          <li>Terminal: zsh</li>
          <li>IDE: PHPStorm</li>
        </ul>
        <h3 id="software">Software</h3>
        <ul>
          <li>1Password</li>
          <li>Spotify</li>
          <li>Raycast</li>
          <li>Notion</li>
          <li>Notion Calendar</li>
          <li>Retangle</li>
          {/* <li>CleanShot X</li> */}
          {/* <li>RetroClip</li> */}
          {/* <li>Grammarly</li> */}
          {/* <li>Texts</li> */}
          <li>Raycast</li>
          {/* <li>Screenflow</li> */}
        </ul>
        {/* <h3 id="music">Music</h3>
        <ul>
          <li>Yamaha P-105 Piano</li>
          <li>Roland TD-20 V-Drums</li>
          <li>Roland AC-60</li>
          <li>Shure SM58</li>
          <li>Martin Acoustic Guitar (X-Series)</li>
        </ul> */}
        <h3 id="other-tech">Other Tech</h3>
        <ul>
          <li>Apple Watch</li>
          <li>Apple iPhone</li>
          <li>Kindle</li>
        </ul>
      </div>
    </section>
  );
}
