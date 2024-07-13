const Modal = () => {
    const popupWindow = window.open(
      "",
      "popup",
      "width=400,height=400,left=200,top=200"
    );

    if (popupWindow) {
      popupWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Popup Window</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
            button { padding: 10px 20px; font-size: 16px; cursor: pointer; }
          </style>
        </head>
        <body>
          <h2>Popup Window</h2>
          <p>This is a simple pop-up window.</p>
          <button onclick="window.close()">Close</button>
        </body>
        </html>
      `);
    }
  };

  export default Modal;