const allStars = document.querySelectorAll(".star");
console.log(allStars);
allStars.forEach((star, i) => {
  star.onclick = function () {
    let current_star_level = i + 1;
    console.log(current_star_level);
    allStars.forEach((star, j) => {
      console.log(j + 1);
      if (current_star_level >= j + 1) {
        star.innerHTML = "&#9733";
        star.style.color = "gold";
      } else {
        star.innerHTML = "&#9734";
        star.style.color = "black";
      }
    });
  };
});
