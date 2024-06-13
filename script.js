body {
     display: flex;
     justify-content: center;
     align-items: center;
     height: 100vh;
     margin: 0;
     font-family: Arial, sans-serif;
     background-color: #f0f0f0;
}
 .calculator {
     background-color: #fff;
     padding: 20px;
     border-radius: 10px;
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
 #display {
     width: 100%;
     height: 40px;
     font-size: 1.5em;
     text-align: right;
     margin-bottom: 10px;
     padding-right: 10px;
     box-sizing: border-box;
}
 .buttons {
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     gap: 10px;
}
 button {
     width: 100%;
     height: 50px;
     font-size: 1.2em;
     cursor: pointer;
     border: none;
     border-radius: 5px;
     background-color: #e0e0e0;
}
 button:hover {
     background-color: #d0d0d0;
}
 button:active {
     background-color: #c0c0c0;
}
