const sendDataToTrello = async(name) => {
    const response = await fetch('https://api.trello.com/1/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: `${name}`,
          idList: '6405e8abd8dc4ed8fcf94c30', 
          key: '21a9005e9af34f79d3947b8f1c8b76fa',
          token: 'ATTA65db5c1c126882b189d748ec3456cab73e1fba9a1d62d3cb4b5d7fd68909b6beDF845F94'
        })
      });
      const data = await response.json();
}

const button = document.getElementById("button");

button.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    sendDataToTrello(name);
    alert("Card created successfully");
})