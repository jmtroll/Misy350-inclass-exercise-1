console.log("hello");

//arrays
let bucket_list = ["learn to fly", 67,"go to Japan"];
console.log(bucket_list[2]);
console.log(bucket_list[1]);
//use index here to log "go to japan"

//for loop

//want to show what the common movies are between these two lists (helpful for hundreds of values in each list)
let movie_list1 = [
  "12 Angry Men",
  "Trolls",
  "FiredUp",
  "Shrek",
  "Sing"
]

let movie_list2 = [
  "EasyA",
  "HappyFeet",
  "Shrek",
  "movie1",
  "Trolls"
]

for (let i=0; i<movie_list1.length; i++){
//need to use a different index b/c can't be the same as outerloop's
  for(let j=0; j<movie_list2.length; j++){
    if (movie_list1[i]== movie_list2[j]){
      console.log(movie_list1[i]);
    }
  }
}

//while loop
let balance = 1000
let years = 0

while (balance <1000000) {
  balance += balance*0.03;
  years+=1;
}
console.log(years);

//iterators (encouraged to use arrow function)
movie_list1.forEach(movie => console.log("- " + movie));
let new_list = movie_list1.filter(movie => movie.slice(0,1) == "S");
new_list.forEach(movie => console.log("- " + movie));
