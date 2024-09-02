# Paradise Mud Modal 🌟

A customizable React component for creating modals with various themes, sizes, and positions. Perfect for enhancing user interactions in your React applications with flexible styling options and built-in functionality.

## Features 🚀

- **Customizable Themes**: Choose between dark and light themes.
- **Flexible Sizes**: Set the modal size to small, medium, or large.
- **Position Control**: Align the modal to the center or other predefined positions.
- **Overlay Control**: Toggle the modal overlay visibility.
- **Action Buttons**: Add interactive buttons in the modal footer.

## Installation 🛠️

To install `paradise-mud-modal`, use npm or yarn:

```bash
npm install paradise-mud-modal
# or
yarn add paradise-mud-modal
```


## USAGE 🖥️

Import the Modal component into your React application and configure it as needed:

```bash
import React, { useState } from 'react';
import Modal from 'paradise-mud-modal';
import 'paradise-mud-modal/src/paradise-mud-modal.css'; // Modal bileşeni için temel CSS stil dosyası
import 'paradise-mud-modal/src/paradise-mud-modal-dark.css'; // Karanlık tema için CSS stil dosyası
import 'paradise-mud-modal/src/paradise-mud-modal-light.css'; // Aydınlık tema için CSS stil dosyası

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const actions = [
    { label: 'OK', onClick: () => alert('OK Clicked'), type: 'primary' },
    { label: 'Cancel', onClick: handleClose, type: 'secondary' },
  ];

  return (
    <div>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal
        title="Modal Title"
        isOpen={isOpen}
        onClose={handleClose}
        actions={actions}
        theme="dark" // or "light"
        size="medium" // or "small", "large"
        position="centered" // or "top-left", "top-right", "bottom-left", "bottom-right"
      >
        <p>This is the modal content.</p>
      </Modal>
    </div>
  );
};

export default App;
```

## Props 🛠️

- **`title`** (string): Modal başlığı.
- **`children`** (JSX): Modal içeriği.
- **`actions`** (array of objects): Modal alt kısmında gösterilecek butonlar. Her buton bir nesne olarak `{ label: string, onClick: function, className: string, type: string }` şeklinde olmalıdır.
- **`isOpen`** (boolean): Modal'ın açık olup olmadığını belirten boolean değer.
- **`onClose`** (function): Modal'ı kapatmak için çağrılacak fonksiyon.
- **`overlay`** (boolean, optional): Modal arka planının aktif olup olmadığını belirten boolean değer (varsayılan: true).
- **`modalClassName`** (string, optional): Modal için ek CSS sınıfı.
- **`headerClassName`** (string, optional): Modal başlığı için ek CSS sınıfı.
- **`titleClassName`** (string, optional): Modal başlık metni için ek CSS sınıfı.
- **`closeClassName`** (string, optional): Modal kapatma butonu için ek CSS sınıfı.
- **`bodyClassName`** (string, optional): Modal içeriği için ek CSS sınıfı.
- **`footerclassName`** (string, optional): Modal alt kısmı (footer) için ek CSS sınıfı.
- **`theme`** (string, optional): Modal temasını belirten string değer (varsayılan: "dark").
- **`size`** (string, optional): Modal boyutunu belirten string değer (varsayılan: "medium").
- **`position`** (string, optional): Modal pozisyonunu belirten string değer (varsayılan: "centered").

## CSS Customization 🎨

To customize the appearance of the modal, you can override the default styles in your project. Here are some CSS classes you can target:

- `.paradise-mud-modal`: The main container for the modal.
- `.paradise-mud-modal-overlay`: The overlay background.
- `.paradise-mud-modal-header`: The header section of the modal.
- `.paradise-mud-modal-title`: The title of the modal.
- `.paradise-mud-modal-close`: The close button.
- `.paradise-mud-modal-body`: The content area of the modal.
- `.paradise-mud-modal-footer`: The footer section of the modal.
- `.paradise-mud-modal-button`: The button within the modal footer.

## License 📜

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the license file for details.

## Contributing 🤝

Contributions are welcome! Please follow the contributing guidelines and submit a pull request.


## Support My Projects 💖

If you'd like to support my projects and help me continue creating valuable tools and content, you can make a donation through Buy Me a Coffee. Your support helps me dedicate more time to development and improvements.

### How to Donate

1. **Buy Me a Coffee**: Support by buying a coffee:
   - [Buy Me a Coffee](https://www.buymeacoffee.com/paradisemud)

### Why Support?

- **Continued Development**: Your support helps me dedicate more time to enhancing and developing new projects.
- **Motivation**: Contributions provide motivation and keep me focused on delivering high-quality tools and content.
- **Resource Investment**: Support enables me to invest in better resources and personal growth.

I greatly appreciate any support you can provide. Thank you for your generosity and encouragement! 🌟



## Contact 📧

For any questions or feedback, please reach out to [necatimertmetin@gmail.com](mailto:necatimertmetin@gmail.com).
