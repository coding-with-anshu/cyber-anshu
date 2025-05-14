function showMore() {
    const extraTricks = [
      "💡 Use Kelly’s speed to rush in short zones.",
      "💡 Equip SMGs in close combat maps.",
      "💡 Practice aim in training ground daily."
    ];
  
    const list = document.getElementById("trick-list");
  
    extraTricks.forEach(trick => {
      const li = document.createElement("li");
      li.textContent = trick;
      list.appendChild(li);
    });
  
    // Disable button after loading once
    document.querySelector("button").disabled = true;
  }
  